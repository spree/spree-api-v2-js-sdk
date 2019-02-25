import Axios, { AxiosInstance } from 'axios'
import { authParams, refreshParams } from '../helpers/auth'
import { AuthTokenAttr, RefreshTokenAttr } from '../interfaces/Authentication'
import { Routes } from '../routes'

export default class Authentication {
  public host: string
  public axios: AxiosInstance

  constructor() {
    this.host = process.env.SPREE_HOST || 'http://localhost:3000/'

    this.axios = Axios.create({
      baseURL: this.host,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  public async getToken(params: AuthTokenAttr) {
    const body = await authParams(params)

    try {
      const res = await this.axios.post(Routes.oauthTokenPath(), body)
      return await res.data
    } catch (err) {
      throw { error: Error(err).message }
    }
  }

  public async refreshToken(params: RefreshTokenAttr) {
    const body = await refreshParams(params)

    try {
      const res = await this.axios.post(Routes.oauthTokenPath(), body)
      return await res.data
    } catch (err) {
      throw { error: Error(err).message }
    }
  }
}

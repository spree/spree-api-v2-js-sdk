import Axios, { AxiosInstance } from 'axios'
import { authParams } from '../helpers/auth'
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

  public async getToken(params) {
    const body = await authParams(params)

    try {
      const res = await this.axios.post(Routes.oauthTokenPath(), body)
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }
}

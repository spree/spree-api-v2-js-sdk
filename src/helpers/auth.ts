export const authParams = ({ username, password }) => ({
  username,
  password,
  grant_type: 'password'
})

export const refreshParams = ({ refresh_token }) => ({
  refresh_token,
  grant_type: 'refresh_token'
})

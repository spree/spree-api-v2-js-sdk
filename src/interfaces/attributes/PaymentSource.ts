export interface IPaymentSource {
  [key: string]: {
    gateway_payment_profile_id?: string
    number?: string
    last_digits?: number
    month: number | string
    year: number | string
    verification_value?: string
    cc_type?: string
    name: string
  }
}

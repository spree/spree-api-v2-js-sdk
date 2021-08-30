import Http from '../Http';
import type { IAccountResult, IAccountConfirmationResult, AccountAddressesResult, AccountAddressResult, AccountAddressParams, ForgotPasswordParams, ResetPasswordParams } from '../interfaces/Account';
import type { ICreditCardResult, ICreditCardsResult } from '../interfaces/CreditCard';
import type { NoContentResult } from '../interfaces/NoContent';
import type { IOrderResult, IOrdersResult } from '../interfaces/Order';
import type { IQuery } from '../interfaces/Query';
import type { IToken } from '../interfaces/Token';
export default class Account extends Http {
    accountInfo(token: IToken, params?: IQuery): Promise<IAccountResult>;
    creditCardsList(token: IToken, params?: IQuery): Promise<ICreditCardsResult>;
    defaultCreditCard(token: IToken, params?: IQuery): Promise<ICreditCardResult>;
    completedOrdersList(token: IToken, params?: IQuery): Promise<IOrdersResult>;
    completedOrder(token: IToken, orderNumber: string, params?: IQuery): Promise<IOrderResult>;
    create(params: IQuery): Promise<IAccountResult>;
    confirm(confirmationToken: string): Promise<IAccountConfirmationResult>;
    forgotPassword(params: ForgotPasswordParams): Promise<NoContentResult>;
    resetPassword(resetPasswordToken: string, params: ResetPasswordParams): Promise<NoContentResult>;
    update(token: IToken, params: IQuery): Promise<IAccountResult>;
    addressesList(token: IToken): Promise<AccountAddressesResult>;
    showAddress(token: IToken, addressId: string, params?: IQuery): Promise<AccountAddressResult>;
    createAddress(token: IToken, params: AccountAddressParams): Promise<AccountAddressResult>;
    removeAddress(token: IToken, id: string, params?: IQuery): Promise<NoContentResult>;
    updateAddress(token: IToken, addressId: string, params: AccountAddressParams): Promise<AccountAddressResult>;
}

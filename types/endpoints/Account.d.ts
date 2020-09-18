import Http from '../Http';
import { IAccountResult, IAccountConfirmationResult, AccountAddressesResult, AccountAddressResult, AccountAddressParams } from '../interfaces/Account';
import { ICreditCardResult, ICreditCardsResult } from '../interfaces/CreditCard';
import { IOrderResult, IOrdersResult } from '../interfaces/Order';
import { IQuery } from '../interfaces/Query';
import { IToken } from '../interfaces/Token';
export default class Account extends Http {
    accountInfo(token: IToken, params?: IQuery): Promise<IAccountResult>;
    creditCardsList(token: IToken, params?: IQuery): Promise<ICreditCardsResult>;
    defaultCreditCard(token: IToken, params?: IQuery): Promise<ICreditCardResult>;
    completedOrdersList(token: IToken, params?: IQuery): Promise<IOrdersResult>;
    completedOrder(token: IToken, orderNumber: string, params?: IQuery): Promise<IOrderResult>;
    create(params: IQuery): Promise<IAccountResult>;
    confirm(confirmationToken: string): Promise<IAccountConfirmationResult>;
    update(token: IToken, params: IQuery): Promise<IAccountResult>;
    addressesList(token: IToken): Promise<AccountAddressesResult>;
    createAddress(token: IToken, params: AccountAddressParams): Promise<AccountAddressResult>;
    updateAddress(token: IToken, addressId: string, params: AccountAddressParams): Promise<AccountAddressResult>;
}

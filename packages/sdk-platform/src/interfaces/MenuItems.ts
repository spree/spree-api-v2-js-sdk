import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface MenuItemAttr {
  name: string
  subtitle: any
  destination: any
  new_window: boolean
  item_type: string
  linked_resource_type: string
  code: any
  lft: number
  rgt: number
  depth: number
  created_at: string
  updated_at: string
  link: any
  is_container: boolean
  is_root: boolean
  is_child: boolean
  is_leaf: boolean
}

export interface MenuItemData extends JsonApiDocument {
  type: string
  id: string
  attributes: MenuItemAttr
  relationships: IRelationships
}

export interface MenuItemParams {
  menu_item: {
    name: string
    code: string
    subtitle: string
    destination: string
    menu_id: number
    new_window: boolean
    item_type: string
    linked_resource_type: string
    linked_resource_id: number
  }
}

export interface MenuItemRepositionParams {
  menu_item: {
    new_parent_id: number
    new_position_idx: number
  }
}

export interface IMenuItem extends JsonApiSingleResponse {
  data: MenuItemData
}

export interface IMenuItems extends JsonApiListResponse {
  data: MenuItemData[]
}

export interface IMenuItemResult extends ResultResponse<IMenuItem> {}

export interface IMenuItemsResult extends ResultResponse<IMenuItems> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  MenuItemParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  MenuItemParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>

export type RepositionOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  MenuItemRepositionParams & { id: string }
>
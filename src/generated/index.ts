import { gql } from '@apollo/client';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** BigInt custom scalar type */
  BigInt: any;
  /** Date custom scalar type */
  DateTime: any;
  /** Decimal custom scalar type */
  Decimal: any;
  /** Json custom scalar type */
  Json: any;
};

export type AggregateBaseSettings = {
  __typename?: 'AggregateBaseSettings';
  _avg?: Maybe<BaseSettingsAvgAggregateOutputType>;
  _count?: Maybe<BaseSettingsCountAggregateOutputType>;
  _max?: Maybe<BaseSettingsMaxAggregateOutputType>;
  _min?: Maybe<BaseSettingsMinAggregateOutputType>;
  _sum?: Maybe<BaseSettingsSumAggregateOutputType>;
};

export type AggregateContacts = {
  __typename?: 'AggregateContacts';
  _avg?: Maybe<ContactsAvgAggregateOutputType>;
  _count?: Maybe<ContactsCountAggregateOutputType>;
  _max?: Maybe<ContactsMaxAggregateOutputType>;
  _min?: Maybe<ContactsMinAggregateOutputType>;
  _sum?: Maybe<ContactsSumAggregateOutputType>;
};

export type AggregateInventory = {
  __typename?: 'AggregateInventory';
  _avg?: Maybe<InventoryAvgAggregateOutputType>;
  _count?: Maybe<InventoryCountAggregateOutputType>;
  _max?: Maybe<InventoryMaxAggregateOutputType>;
  _min?: Maybe<InventoryMinAggregateOutputType>;
  _sum?: Maybe<InventorySumAggregateOutputType>;
};

export type AggregateProduct = {
  __typename?: 'AggregateProduct';
  _avg?: Maybe<ProductAvgAggregateOutputType>;
  _count?: Maybe<ProductCountAggregateOutputType>;
  _max?: Maybe<ProductMaxAggregateOutputType>;
  _min?: Maybe<ProductMinAggregateOutputType>;
  _sum?: Maybe<ProductSumAggregateOutputType>;
};

export type AggregatePromocodes = {
  __typename?: 'AggregatePromocodes';
  _avg?: Maybe<PromocodesAvgAggregateOutputType>;
  _count?: Maybe<PromocodesCountAggregateOutputType>;
  _max?: Maybe<PromocodesMaxAggregateOutputType>;
  _min?: Maybe<PromocodesMinAggregateOutputType>;
  _sum?: Maybe<PromocodesSumAggregateOutputType>;
};

export type AggregatePurchase = {
  __typename?: 'AggregatePurchase';
  _avg?: Maybe<PurchaseAvgAggregateOutputType>;
  _count?: Maybe<PurchaseCountAggregateOutputType>;
  _max?: Maybe<PurchaseMaxAggregateOutputType>;
  _min?: Maybe<PurchaseMinAggregateOutputType>;
  _sum?: Maybe<PurchaseSumAggregateOutputType>;
};

export type AggregateServer = {
  __typename?: 'AggregateServer';
  _avg?: Maybe<ServerAvgAggregateOutputType>;
  _count?: Maybe<ServerCountAggregateOutputType>;
  _max?: Maybe<ServerMaxAggregateOutputType>;
  _min?: Maybe<ServerMinAggregateOutputType>;
  _sum?: Maybe<ServerSumAggregateOutputType>;
};

export type AggregateServerType = {
  __typename?: 'AggregateServerType';
  _avg?: Maybe<ServerTypeAvgAggregateOutputType>;
  _count?: Maybe<ServerTypeCountAggregateOutputType>;
  _max?: Maybe<ServerTypeMaxAggregateOutputType>;
  _min?: Maybe<ServerTypeMinAggregateOutputType>;
  _sum?: Maybe<ServerTypeSumAggregateOutputType>;
};

export type AggregateToken = {
  __typename?: 'AggregateToken';
  _avg?: Maybe<TokenAvgAggregateOutputType>;
  _count?: Maybe<TokenCountAggregateOutputType>;
  _max?: Maybe<TokenMaxAggregateOutputType>;
  _min?: Maybe<TokenMinAggregateOutputType>;
  _sum?: Maybe<TokenSumAggregateOutputType>;
};

export type AggregateTransaction = {
  __typename?: 'AggregateTransaction';
  _avg?: Maybe<TransactionAvgAggregateOutputType>;
  _count?: Maybe<TransactionCountAggregateOutputType>;
  _max?: Maybe<TransactionMaxAggregateOutputType>;
  _min?: Maybe<TransactionMinAggregateOutputType>;
  _sum?: Maybe<TransactionSumAggregateOutputType>;
};

export type AggregateTransfers = {
  __typename?: 'AggregateTransfers';
  _avg?: Maybe<TransfersAvgAggregateOutputType>;
  _count?: Maybe<TransfersCountAggregateOutputType>;
  _max?: Maybe<TransfersMaxAggregateOutputType>;
  _min?: Maybe<TransfersMinAggregateOutputType>;
  _sum?: Maybe<TransfersSumAggregateOutputType>;
};

export type AggregateUrlSettings = {
  __typename?: 'AggregateUrlSettings';
  _avg?: Maybe<UrlSettingsAvgAggregateOutputType>;
  _count?: Maybe<UrlSettingsCountAggregateOutputType>;
  _max?: Maybe<UrlSettingsMaxAggregateOutputType>;
  _min?: Maybe<UrlSettingsMinAggregateOutputType>;
  _sum?: Maybe<UrlSettingsSumAggregateOutputType>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregateOutputType>;
  _count?: Maybe<UserCountAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
  _sum?: Maybe<UserSumAggregateOutputType>;
};

export type AggregateVisitors = {
  __typename?: 'AggregateVisitors';
  _avg?: Maybe<VisitorsAvgAggregateOutputType>;
  _count?: Maybe<VisitorsCountAggregateOutputType>;
  _max?: Maybe<VisitorsMaxAggregateOutputType>;
  _min?: Maybe<VisitorsMinAggregateOutputType>;
  _sum?: Maybe<VisitorsSumAggregateOutputType>;
};

export type BaseSettings = {
  __typename?: 'BaseSettings';
  IPWhiteList: Scalars['String'];
  apiKey: Scalars['String'];
  header: Scalars['String'];
  id: Scalars['Int'];
  mainPage: Scalars['String'];
  panelURLs?: Maybe<Scalars['Json']>;
  saleMode: Scalars['Boolean'];
  startBalance: Scalars['Int'];
};

export type BaseSettingsAvgAggregateOutputType = {
  __typename?: 'BaseSettingsAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
  startBalance?: Maybe<Scalars['Float']>;
};

export type BaseSettingsAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  startBalance?: Maybe<SortOrder>;
};

export type BaseSettingsCountAggregateOutputType = {
  __typename?: 'BaseSettingsCountAggregateOutputType';
  IPWhiteList: Scalars['Int'];
  _all: Scalars['Int'];
  apiKey: Scalars['Int'];
  header: Scalars['Int'];
  id: Scalars['Int'];
  mainPage: Scalars['Int'];
  panelURLs: Scalars['Int'];
  saleMode: Scalars['Int'];
  startBalance: Scalars['Int'];
};

export type BaseSettingsCountOrderByAggregateInput = {
  IPWhiteList?: Maybe<SortOrder>;
  apiKey?: Maybe<SortOrder>;
  header?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  mainPage?: Maybe<SortOrder>;
  panelURLs?: Maybe<SortOrder>;
  saleMode?: Maybe<SortOrder>;
  startBalance?: Maybe<SortOrder>;
};

export type BaseSettingsCreateInput = {
  IPWhiteList: Scalars['String'];
  apiKey: Scalars['String'];
  header: Scalars['String'];
  mainPage: Scalars['String'];
  panelURLs?: Maybe<Scalars['Json']>;
  saleMode?: Maybe<Scalars['Boolean']>;
  startBalance: Scalars['Int'];
};

export type BaseSettingsCreateManyInput = {
  IPWhiteList: Scalars['String'];
  apiKey: Scalars['String'];
  header: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  mainPage: Scalars['String'];
  panelURLs?: Maybe<Scalars['Json']>;
  saleMode?: Maybe<Scalars['Boolean']>;
  startBalance: Scalars['Int'];
};

export type BaseSettingsMaxAggregateOutputType = {
  __typename?: 'BaseSettingsMaxAggregateOutputType';
  IPWhiteList?: Maybe<Scalars['String']>;
  apiKey?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  mainPage?: Maybe<Scalars['String']>;
  saleMode?: Maybe<Scalars['Boolean']>;
  startBalance?: Maybe<Scalars['Int']>;
};

export type BaseSettingsMaxOrderByAggregateInput = {
  IPWhiteList?: Maybe<SortOrder>;
  apiKey?: Maybe<SortOrder>;
  header?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  mainPage?: Maybe<SortOrder>;
  saleMode?: Maybe<SortOrder>;
  startBalance?: Maybe<SortOrder>;
};

export type BaseSettingsMinAggregateOutputType = {
  __typename?: 'BaseSettingsMinAggregateOutputType';
  IPWhiteList?: Maybe<Scalars['String']>;
  apiKey?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  mainPage?: Maybe<Scalars['String']>;
  saleMode?: Maybe<Scalars['Boolean']>;
  startBalance?: Maybe<Scalars['Int']>;
};

export type BaseSettingsMinOrderByAggregateInput = {
  IPWhiteList?: Maybe<SortOrder>;
  apiKey?: Maybe<SortOrder>;
  header?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  mainPage?: Maybe<SortOrder>;
  saleMode?: Maybe<SortOrder>;
  startBalance?: Maybe<SortOrder>;
};

export type BaseSettingsOrderByWithAggregationInput = {
  IPWhiteList?: Maybe<SortOrder>;
  _avg?: Maybe<BaseSettingsAvgOrderByAggregateInput>;
  _count?: Maybe<BaseSettingsCountOrderByAggregateInput>;
  _max?: Maybe<BaseSettingsMaxOrderByAggregateInput>;
  _min?: Maybe<BaseSettingsMinOrderByAggregateInput>;
  _sum?: Maybe<BaseSettingsSumOrderByAggregateInput>;
  apiKey?: Maybe<SortOrder>;
  header?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  mainPage?: Maybe<SortOrder>;
  panelURLs?: Maybe<SortOrder>;
  saleMode?: Maybe<SortOrder>;
  startBalance?: Maybe<SortOrder>;
};

export type BaseSettingsOrderByWithRelationInput = {
  IPWhiteList?: Maybe<SortOrder>;
  apiKey?: Maybe<SortOrder>;
  header?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  mainPage?: Maybe<SortOrder>;
  panelURLs?: Maybe<SortOrder>;
  saleMode?: Maybe<SortOrder>;
  startBalance?: Maybe<SortOrder>;
};

export enum BaseSettingsScalarFieldEnum {
  IpWhiteList = 'IPWhiteList',
  ApiKey = 'apiKey',
  Header = 'header',
  Id = 'id',
  MainPage = 'mainPage',
  PanelUrLs = 'panelURLs',
  SaleMode = 'saleMode',
  StartBalance = 'startBalance'
}

export type BaseSettingsScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<BaseSettingsScalarWhereWithAggregatesInput>>>;
  IPWhiteList?: Maybe<StringWithAggregatesFilter>;
  NOT?: Maybe<Array<Maybe<BaseSettingsScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<BaseSettingsScalarWhereWithAggregatesInput>>>;
  apiKey?: Maybe<StringWithAggregatesFilter>;
  header?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  mainPage?: Maybe<StringWithAggregatesFilter>;
  panelURLs?: Maybe<JsonNullableWithAggregatesFilter>;
  saleMode?: Maybe<BoolWithAggregatesFilter>;
  startBalance?: Maybe<IntWithAggregatesFilter>;
};

export type BaseSettingsSumAggregateOutputType = {
  __typename?: 'BaseSettingsSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  startBalance?: Maybe<Scalars['Int']>;
};

export type BaseSettingsSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  startBalance?: Maybe<SortOrder>;
};

export type BaseSettingsUncheckedCreateInput = {
  IPWhiteList: Scalars['String'];
  apiKey: Scalars['String'];
  header: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  mainPage: Scalars['String'];
  panelURLs?: Maybe<Scalars['Json']>;
  saleMode?: Maybe<Scalars['Boolean']>;
  startBalance: Scalars['Int'];
};

export type BaseSettingsUncheckedUpdateInput = {
  IPWhiteList?: Maybe<StringFieldUpdateOperationsInput>;
  apiKey?: Maybe<StringFieldUpdateOperationsInput>;
  header?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  mainPage?: Maybe<StringFieldUpdateOperationsInput>;
  panelURLs?: Maybe<Scalars['Json']>;
  saleMode?: Maybe<BoolFieldUpdateOperationsInput>;
  startBalance?: Maybe<IntFieldUpdateOperationsInput>;
};

export type BaseSettingsUncheckedUpdateManyInput = {
  IPWhiteList?: Maybe<StringFieldUpdateOperationsInput>;
  apiKey?: Maybe<StringFieldUpdateOperationsInput>;
  header?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  mainPage?: Maybe<StringFieldUpdateOperationsInput>;
  panelURLs?: Maybe<Scalars['Json']>;
  saleMode?: Maybe<BoolFieldUpdateOperationsInput>;
  startBalance?: Maybe<IntFieldUpdateOperationsInput>;
};

export type BaseSettingsUpdateInput = {
  IPWhiteList?: Maybe<StringFieldUpdateOperationsInput>;
  apiKey?: Maybe<StringFieldUpdateOperationsInput>;
  header?: Maybe<StringFieldUpdateOperationsInput>;
  mainPage?: Maybe<StringFieldUpdateOperationsInput>;
  panelURLs?: Maybe<Scalars['Json']>;
  saleMode?: Maybe<BoolFieldUpdateOperationsInput>;
  startBalance?: Maybe<IntFieldUpdateOperationsInput>;
};

export type BaseSettingsUpdateManyMutationInput = {
  IPWhiteList?: Maybe<StringFieldUpdateOperationsInput>;
  apiKey?: Maybe<StringFieldUpdateOperationsInput>;
  header?: Maybe<StringFieldUpdateOperationsInput>;
  mainPage?: Maybe<StringFieldUpdateOperationsInput>;
  panelURLs?: Maybe<Scalars['Json']>;
  saleMode?: Maybe<BoolFieldUpdateOperationsInput>;
  startBalance?: Maybe<IntFieldUpdateOperationsInput>;
};

export type BaseSettingsWhereInput = {
  AND?: Maybe<Array<Maybe<BaseSettingsWhereInput>>>;
  IPWhiteList?: Maybe<StringFilter>;
  NOT?: Maybe<Array<Maybe<BaseSettingsWhereInput>>>;
  OR?: Maybe<Array<Maybe<BaseSettingsWhereInput>>>;
  apiKey?: Maybe<StringFilter>;
  header?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  mainPage?: Maybe<StringFilter>;
  panelURLs?: Maybe<JsonNullableFilter>;
  saleMode?: Maybe<BoolFilter>;
  startBalance?: Maybe<IntFilter>;
};

export type BaseSettingsWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
};

export type BoolNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedBoolNullableFilter>;
  _min?: Maybe<NestedBoolNullableFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableWithAggregatesFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type Contacts = {
  __typename?: 'Contacts';
  icon: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  url: Scalars['String'];
};

export type ContactsAvgAggregateOutputType = {
  __typename?: 'ContactsAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type ContactsAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type ContactsCountAggregateOutputType = {
  __typename?: 'ContactsCountAggregateOutputType';
  _all: Scalars['Int'];
  icon: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  url: Scalars['Int'];
};

export type ContactsCountOrderByAggregateInput = {
  icon?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type ContactsCreateInput = {
  icon: Scalars['String'];
  name: Scalars['String'];
  url: Scalars['String'];
};

export type ContactsCreateManyInput = {
  icon: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  url: Scalars['String'];
};

export type ContactsMaxAggregateOutputType = {
  __typename?: 'ContactsMaxAggregateOutputType';
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ContactsMaxOrderByAggregateInput = {
  icon?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type ContactsMinAggregateOutputType = {
  __typename?: 'ContactsMinAggregateOutputType';
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ContactsMinOrderByAggregateInput = {
  icon?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type ContactsOrderByWithAggregationInput = {
  _avg?: Maybe<ContactsAvgOrderByAggregateInput>;
  _count?: Maybe<ContactsCountOrderByAggregateInput>;
  _max?: Maybe<ContactsMaxOrderByAggregateInput>;
  _min?: Maybe<ContactsMinOrderByAggregateInput>;
  _sum?: Maybe<ContactsSumOrderByAggregateInput>;
  icon?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type ContactsOrderByWithRelationInput = {
  icon?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export enum ContactsScalarFieldEnum {
  Icon = 'icon',
  Id = 'id',
  Name = 'name',
  Url = 'url'
}

export type ContactsScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<ContactsScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<ContactsScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<ContactsScalarWhereWithAggregatesInput>>>;
  icon?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  url?: Maybe<StringWithAggregatesFilter>;
};

export type ContactsSumAggregateOutputType = {
  __typename?: 'ContactsSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type ContactsSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type ContactsUncheckedCreateInput = {
  icon: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  url: Scalars['String'];
};

export type ContactsUncheckedUpdateInput = {
  icon?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ContactsUncheckedUpdateManyInput = {
  icon?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ContactsUpdateInput = {
  icon?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ContactsUpdateManyMutationInput = {
  icon?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ContactsWhereInput = {
  AND?: Maybe<Array<Maybe<ContactsWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ContactsWhereInput>>>;
  OR?: Maybe<Array<Maybe<ContactsWhereInput>>>;
  icon?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
};

export type ContactsWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedDateTimeNullableFilter>;
  _min?: Maybe<NestedDateTimeNullableFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export enum EButtonColor {
  Blue = 'BLUE',
  Green = 'GREEN'
}

export enum EStatusOfProductInInventory {
  Inventory = 'INVENTORY',
  OnServer = 'ON_SERVER'
}

export enum EStatusOfRefill {
  Denied = 'DENIED',
  False = 'FALSE',
  InProgress = 'IN_PROGRESS',
  Refund = 'REFUND',
  Success = 'SUCCESS'
}

export enum ETypeOfProduct {
  Cards = 'CARDS',
  Currency = 'CURRENCY',
  GameItem = 'GAME_ITEM',
  HttpRequest = 'HTTP_REQUEST',
  Service = 'SERVICE',
  SetsOfProducts = 'SETS_OF_PRODUCTS'
}

export enum ETypeOfUrl {
  CustomPage = 'CUSTOM_PAGE',
  DropdownList = 'DROPDOWN_LIST',
  ExternalLink = 'EXTERNAL_LINK',
  SiteSection = 'SITE_SECTION'
}

export type Enum = {
  __typename?: 'Enum';
  fields: Array<Scalars['String']>;
  name: Scalars['String'];
};

export type EnumEButtonColorFieldUpdateOperationsInput = {
  set?: Maybe<EButtonColor>;
};

export type EnumEButtonColorFilter = {
  equals?: Maybe<EButtonColor>;
  in?: Maybe<Array<Maybe<EButtonColor>>>;
  not?: Maybe<NestedEnumEButtonColorFilter>;
  notIn?: Maybe<Array<Maybe<EButtonColor>>>;
};

export type EnumEButtonColorWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumEButtonColorFilter>;
  _min?: Maybe<NestedEnumEButtonColorFilter>;
  equals?: Maybe<EButtonColor>;
  in?: Maybe<Array<Maybe<EButtonColor>>>;
  not?: Maybe<NestedEnumEButtonColorWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<EButtonColor>>>;
};

export type EnumEStatusOfProductInInventoryFieldUpdateOperationsInput = {
  set?: Maybe<EStatusOfProductInInventory>;
};

export type EnumEStatusOfProductInInventoryFilter = {
  equals?: Maybe<EStatusOfProductInInventory>;
  in?: Maybe<Array<Maybe<EStatusOfProductInInventory>>>;
  not?: Maybe<NestedEnumEStatusOfProductInInventoryFilter>;
  notIn?: Maybe<Array<Maybe<EStatusOfProductInInventory>>>;
};

export type EnumEStatusOfProductInInventoryWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumEStatusOfProductInInventoryFilter>;
  _min?: Maybe<NestedEnumEStatusOfProductInInventoryFilter>;
  equals?: Maybe<EStatusOfProductInInventory>;
  in?: Maybe<Array<Maybe<EStatusOfProductInInventory>>>;
  not?: Maybe<NestedEnumEStatusOfProductInInventoryWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<EStatusOfProductInInventory>>>;
};

export type EnumEStatusOfRefillFieldUpdateOperationsInput = {
  set?: Maybe<EStatusOfRefill>;
};

export type EnumEStatusOfRefillFilter = {
  equals?: Maybe<EStatusOfRefill>;
  in?: Maybe<Array<Maybe<EStatusOfRefill>>>;
  not?: Maybe<NestedEnumEStatusOfRefillFilter>;
  notIn?: Maybe<Array<Maybe<EStatusOfRefill>>>;
};

export type EnumEStatusOfRefillWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumEStatusOfRefillFilter>;
  _min?: Maybe<NestedEnumEStatusOfRefillFilter>;
  equals?: Maybe<EStatusOfRefill>;
  in?: Maybe<Array<Maybe<EStatusOfRefill>>>;
  not?: Maybe<NestedEnumEStatusOfRefillWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<EStatusOfRefill>>>;
};

export type EnumETypeOfProductFieldUpdateOperationsInput = {
  set?: Maybe<ETypeOfProduct>;
};

export type EnumETypeOfProductFilter = {
  equals?: Maybe<ETypeOfProduct>;
  in?: Maybe<Array<Maybe<ETypeOfProduct>>>;
  not?: Maybe<NestedEnumETypeOfProductFilter>;
  notIn?: Maybe<Array<Maybe<ETypeOfProduct>>>;
};

export type EnumETypeOfProductWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumETypeOfProductFilter>;
  _min?: Maybe<NestedEnumETypeOfProductFilter>;
  equals?: Maybe<ETypeOfProduct>;
  in?: Maybe<Array<Maybe<ETypeOfProduct>>>;
  not?: Maybe<NestedEnumETypeOfProductWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<ETypeOfProduct>>>;
};

export type EnumETypeOfUrlFieldUpdateOperationsInput = {
  set?: Maybe<ETypeOfUrl>;
};

export type EnumETypeOfUrlFilter = {
  equals?: Maybe<ETypeOfUrl>;
  in?: Maybe<Array<Maybe<ETypeOfUrl>>>;
  not?: Maybe<NestedEnumETypeOfUrlFilter>;
  notIn?: Maybe<Array<Maybe<ETypeOfUrl>>>;
};

export type EnumETypeOfUrlWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumETypeOfUrlFilter>;
  _min?: Maybe<NestedEnumETypeOfUrlFilter>;
  equals?: Maybe<ETypeOfUrl>;
  in?: Maybe<Array<Maybe<ETypeOfUrl>>>;
  not?: Maybe<NestedEnumETypeOfUrlWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<ETypeOfUrl>>>;
};

export type EnumUser_RoleFieldUpdateOperationsInput = {
  set?: Maybe<User_Role>;
};

export type EnumUser_RoleFilter = {
  equals?: Maybe<User_Role>;
  in?: Maybe<Array<Maybe<User_Role>>>;
  not?: Maybe<NestedEnumUser_RoleFilter>;
  notIn?: Maybe<Array<Maybe<User_Role>>>;
};

export type EnumUser_RoleWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumUser_RoleFilter>;
  _min?: Maybe<NestedEnumUser_RoleFilter>;
  equals?: Maybe<User_Role>;
  in?: Maybe<Array<Maybe<User_Role>>>;
  not?: Maybe<NestedEnumUser_RoleWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<User_Role>>>;
};

export type Field = {
  __typename?: 'Field';
  create: Scalars['Boolean'];
  editor: Scalars['Boolean'];
  filter: Scalars['Boolean'];
  id: Scalars['String'];
  isId: Scalars['Boolean'];
  kind: KindEnum;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
  read: Scalars['Boolean'];
  relationField?: Maybe<Scalars['Boolean']>;
  required: Scalars['Boolean'];
  sort: Scalars['Boolean'];
  title: Scalars['String'];
  type: Scalars['String'];
  unique: Scalars['Boolean'];
  update: Scalars['Boolean'];
  upload: Scalars['Boolean'];
};

export type IntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Inventory = {
  __typename?: 'Inventory';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  dateOfReceive?: Maybe<Scalars['DateTime']>;
  historyOfPurchaseId: Scalars['Int'];
  id: Scalars['Int'];
  isCanBeRefund: Scalars['Boolean'];
  isPartOfPack?: Maybe<Scalars['Boolean']>;
  packId?: Maybe<Scalars['Int']>;
  product: Product;
  productId: Scalars['Int'];
  purchase: Purchase;
  server?: Maybe<Server>;
  serverId?: Maybe<Scalars['Int']>;
  serverName?: Maybe<Scalars['String']>;
  serverType?: Maybe<ServerType>;
  serverTypeId?: Maybe<Scalars['Int']>;
  status: EStatusOfProductInInventory;
  user: User;
  userId: Scalars['Int'];
};

export type InventoryAvgAggregateOutputType = {
  __typename?: 'InventoryAvgAggregateOutputType';
  amount?: Maybe<Scalars['Float']>;
  historyOfPurchaseId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  packId?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  serverId?: Maybe<Scalars['Float']>;
  serverTypeId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type InventoryAvgOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  historyOfPurchaseId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  packId?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  serverId?: Maybe<SortOrder>;
  serverTypeId?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type InventoryCountAggregateOutputType = {
  __typename?: 'InventoryCountAggregateOutputType';
  _all: Scalars['Int'];
  amount: Scalars['Int'];
  createdAt: Scalars['Int'];
  dateOfReceive: Scalars['Int'];
  historyOfPurchaseId: Scalars['Int'];
  id: Scalars['Int'];
  isCanBeRefund: Scalars['Int'];
  isPartOfPack: Scalars['Int'];
  packId: Scalars['Int'];
  productId: Scalars['Int'];
  serverId: Scalars['Int'];
  serverName: Scalars['Int'];
  serverTypeId: Scalars['Int'];
  status: Scalars['Int'];
  userId: Scalars['Int'];
};

export type InventoryCountOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  dateOfReceive?: Maybe<SortOrder>;
  historyOfPurchaseId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isCanBeRefund?: Maybe<SortOrder>;
  isPartOfPack?: Maybe<SortOrder>;
  packId?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  serverId?: Maybe<SortOrder>;
  serverName?: Maybe<SortOrder>;
  serverTypeId?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type InventoryCreateInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfReceive?: Maybe<Scalars['DateTime']>;
  isCanBeRefund?: Maybe<Scalars['Boolean']>;
  isPartOfPack?: Maybe<Scalars['Boolean']>;
  packId?: Maybe<Scalars['Int']>;
  product: ProductCreateNestedOneWithoutInventoryInput;
  purchase: PurchaseCreateNestedOneWithoutInventoryInput;
  server?: Maybe<ServerCreateNestedOneWithoutInventoryInput>;
  serverName?: Maybe<Scalars['String']>;
  serverType?: Maybe<ServerTypeCreateNestedOneWithoutInventoryInput>;
  status?: Maybe<EStatusOfProductInInventory>;
  user: UserCreateNestedOneWithoutInventoryInput;
};

export type InventoryCreateManyInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfReceive?: Maybe<Scalars['DateTime']>;
  historyOfPurchaseId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  isCanBeRefund?: Maybe<Scalars['Boolean']>;
  isPartOfPack?: Maybe<Scalars['Boolean']>;
  packId?: Maybe<Scalars['Int']>;
  productId: Scalars['Int'];
  serverId?: Maybe<Scalars['Int']>;
  serverName?: Maybe<Scalars['String']>;
  serverTypeId?: Maybe<Scalars['Int']>;
  status?: Maybe<EStatusOfProductInInventory>;
  userId: Scalars['Int'];
};

export type InventoryCreateManyProductInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfReceive?: Maybe<Scalars['DateTime']>;
  historyOfPurchaseId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  isCanBeRefund?: Maybe<Scalars['Boolean']>;
  isPartOfPack?: Maybe<Scalars['Boolean']>;
  packId?: Maybe<Scalars['Int']>;
  serverId?: Maybe<Scalars['Int']>;
  serverName?: Maybe<Scalars['String']>;
  serverTypeId?: Maybe<Scalars['Int']>;
  status?: Maybe<EStatusOfProductInInventory>;
  userId: Scalars['Int'];
};

export type InventoryCreateManyProductInputEnvelope = {
  data: InventoryCreateManyProductInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type InventoryCreateManyPurchaseInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfReceive?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  isCanBeRefund?: Maybe<Scalars['Boolean']>;
  isPartOfPack?: Maybe<Scalars['Boolean']>;
  packId?: Maybe<Scalars['Int']>;
  productId: Scalars['Int'];
  serverId?: Maybe<Scalars['Int']>;
  serverName?: Maybe<Scalars['String']>;
  serverTypeId?: Maybe<Scalars['Int']>;
  status?: Maybe<EStatusOfProductInInventory>;
  userId: Scalars['Int'];
};

export type InventoryCreateManyPurchaseInputEnvelope = {
  data: InventoryCreateManyPurchaseInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type InventoryCreateManyServerInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfReceive?: Maybe<Scalars['DateTime']>;
  historyOfPurchaseId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  isCanBeRefund?: Maybe<Scalars['Boolean']>;
  isPartOfPack?: Maybe<Scalars['Boolean']>;
  packId?: Maybe<Scalars['Int']>;
  productId: Scalars['Int'];
  serverName?: Maybe<Scalars['String']>;
  serverTypeId?: Maybe<Scalars['Int']>;
  status?: Maybe<EStatusOfProductInInventory>;
  userId: Scalars['Int'];
};

export type InventoryCreateManyServerInputEnvelope = {
  data: InventoryCreateManyServerInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type InventoryCreateManyServerTypeInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfReceive?: Maybe<Scalars['DateTime']>;
  historyOfPurchaseId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  isCanBeRefund?: Maybe<Scalars['Boolean']>;
  isPartOfPack?: Maybe<Scalars['Boolean']>;
  packId?: Maybe<Scalars['Int']>;
  productId: Scalars['Int'];
  serverId?: Maybe<Scalars['Int']>;
  serverName?: Maybe<Scalars['String']>;
  status?: Maybe<EStatusOfProductInInventory>;
  userId: Scalars['Int'];
};

export type InventoryCreateManyServerTypeInputEnvelope = {
  data: InventoryCreateManyServerTypeInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type InventoryCreateManyUserInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfReceive?: Maybe<Scalars['DateTime']>;
  historyOfPurchaseId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  isCanBeRefund?: Maybe<Scalars['Boolean']>;
  isPartOfPack?: Maybe<Scalars['Boolean']>;
  packId?: Maybe<Scalars['Int']>;
  productId: Scalars['Int'];
  serverId?: Maybe<Scalars['Int']>;
  serverName?: Maybe<Scalars['String']>;
  serverTypeId?: Maybe<Scalars['Int']>;
  status?: Maybe<EStatusOfProductInInventory>;
};

export type InventoryCreateManyUserInputEnvelope = {
  data: InventoryCreateManyUserInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type InventoryCreateNestedManyWithoutProductInput = {
  connect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<InventoryCreateOrConnectWithoutProductInput>>>;
  create?: Maybe<Array<Maybe<InventoryCreateWithoutProductInput>>>;
  createMany?: Maybe<InventoryCreateManyProductInputEnvelope>;
};

export type InventoryCreateNestedManyWithoutPurchaseInput = {
  connect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<InventoryCreateOrConnectWithoutPurchaseInput>>>;
  create?: Maybe<Array<Maybe<InventoryCreateWithoutPurchaseInput>>>;
  createMany?: Maybe<InventoryCreateManyPurchaseInputEnvelope>;
};

export type InventoryCreateNestedManyWithoutServerInput = {
  connect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<InventoryCreateOrConnectWithoutServerInput>>>;
  create?: Maybe<Array<Maybe<InventoryCreateWithoutServerInput>>>;
  createMany?: Maybe<InventoryCreateManyServerInputEnvelope>;
};

export type InventoryCreateNestedManyWithoutServerTypeInput = {
  connect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<InventoryCreateOrConnectWithoutServerTypeInput>>>;
  create?: Maybe<Array<Maybe<InventoryCreateWithoutServerTypeInput>>>;
  createMany?: Maybe<InventoryCreateManyServerTypeInputEnvelope>;
};

export type InventoryCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<InventoryCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<InventoryCreateWithoutUserInput>>>;
  createMany?: Maybe<InventoryCreateManyUserInputEnvelope>;
};

export type InventoryCreateOrConnectWithoutProductInput = {
  create: InventoryUncheckedCreateWithoutProductInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryCreateOrConnectWithoutPurchaseInput = {
  create: InventoryUncheckedCreateWithoutPurchaseInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryCreateOrConnectWithoutServerInput = {
  create: InventoryUncheckedCreateWithoutServerInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryCreateOrConnectWithoutServerTypeInput = {
  create: InventoryUncheckedCreateWithoutServerTypeInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryCreateOrConnectWithoutUserInput = {
  create: InventoryUncheckedCreateWithoutUserInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryCreateWithoutProductInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfReceive?: Maybe<Scalars['DateTime']>;
  isCanBeRefund?: Maybe<Scalars['Boolean']>;
  isPartOfPack?: Maybe<Scalars['Boolean']>;
  packId?: Maybe<Scalars['Int']>;
  purchase: PurchaseCreateNestedOneWithoutInventoryInput;
  server?: Maybe<ServerCreateNestedOneWithoutInventoryInput>;
  serverName?: Maybe<Scalars['String']>;
  serverType?: Maybe<ServerTypeCreateNestedOneWithoutInventoryInput>;
  status?: Maybe<EStatusOfProductInInventory>;
  user: UserCreateNestedOneWithoutInventoryInput;
};

export type InventoryCreateWithoutPurchaseInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfReceive?: Maybe<Scalars['DateTime']>;
  isCanBeRefund?: Maybe<Scalars['Boolean']>;
  isPartOfPack?: Maybe<Scalars['Boolean']>;
  packId?: Maybe<Scalars['Int']>;
  product: ProductCreateNestedOneWithoutInventoryInput;
  server?: Maybe<ServerCreateNestedOneWithoutInventoryInput>;
  serverName?: Maybe<Scalars['String']>;
  serverType?: Maybe<ServerTypeCreateNestedOneWithoutInventoryInput>;
  status?: Maybe<EStatusOfProductInInventory>;
  user: UserCreateNestedOneWithoutInventoryInput;
};

export type InventoryCreateWithoutServerInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfReceive?: Maybe<Scalars['DateTime']>;
  isCanBeRefund?: Maybe<Scalars['Boolean']>;
  isPartOfPack?: Maybe<Scalars['Boolean']>;
  packId?: Maybe<Scalars['Int']>;
  product: ProductCreateNestedOneWithoutInventoryInput;
  purchase: PurchaseCreateNestedOneWithoutInventoryInput;
  serverName?: Maybe<Scalars['String']>;
  serverType?: Maybe<ServerTypeCreateNestedOneWithoutInventoryInput>;
  status?: Maybe<EStatusOfProductInInventory>;
  user: UserCreateNestedOneWithoutInventoryInput;
};

export type InventoryCreateWithoutServerTypeInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfReceive?: Maybe<Scalars['DateTime']>;
  isCanBeRefund?: Maybe<Scalars['Boolean']>;
  isPartOfPack?: Maybe<Scalars['Boolean']>;
  packId?: Maybe<Scalars['Int']>;
  product: ProductCreateNestedOneWithoutInventoryInput;
  purchase: PurchaseCreateNestedOneWithoutInventoryInput;
  server?: Maybe<ServerCreateNestedOneWithoutInventoryInput>;
  serverName?: Maybe<Scalars['String']>;
  status?: Maybe<EStatusOfProductInInventory>;
  user: UserCreateNestedOneWithoutInventoryInput;
};

export type InventoryCreateWithoutUserInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfReceive?: Maybe<Scalars['DateTime']>;
  isCanBeRefund?: Maybe<Scalars['Boolean']>;
  isPartOfPack?: Maybe<Scalars['Boolean']>;
  packId?: Maybe<Scalars['Int']>;
  product: ProductCreateNestedOneWithoutInventoryInput;
  purchase: PurchaseCreateNestedOneWithoutInventoryInput;
  server?: Maybe<ServerCreateNestedOneWithoutInventoryInput>;
  serverName?: Maybe<Scalars['String']>;
  serverType?: Maybe<ServerTypeCreateNestedOneWithoutInventoryInput>;
  status?: Maybe<EStatusOfProductInInventory>;
};

export type InventoryListRelationFilter = {
  every?: Maybe<InventoryWhereInput>;
  none?: Maybe<InventoryWhereInput>;
  some?: Maybe<InventoryWhereInput>;
};

export type InventoryMaxAggregateOutputType = {
  __typename?: 'InventoryMaxAggregateOutputType';
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfReceive?: Maybe<Scalars['DateTime']>;
  historyOfPurchaseId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isCanBeRefund?: Maybe<Scalars['Boolean']>;
  isPartOfPack?: Maybe<Scalars['Boolean']>;
  packId?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  serverId?: Maybe<Scalars['Int']>;
  serverName?: Maybe<Scalars['String']>;
  serverTypeId?: Maybe<Scalars['Int']>;
  status?: Maybe<EStatusOfProductInInventory>;
  userId?: Maybe<Scalars['Int']>;
};

export type InventoryMaxOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  dateOfReceive?: Maybe<SortOrder>;
  historyOfPurchaseId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isCanBeRefund?: Maybe<SortOrder>;
  isPartOfPack?: Maybe<SortOrder>;
  packId?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  serverId?: Maybe<SortOrder>;
  serverName?: Maybe<SortOrder>;
  serverTypeId?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type InventoryMinAggregateOutputType = {
  __typename?: 'InventoryMinAggregateOutputType';
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfReceive?: Maybe<Scalars['DateTime']>;
  historyOfPurchaseId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isCanBeRefund?: Maybe<Scalars['Boolean']>;
  isPartOfPack?: Maybe<Scalars['Boolean']>;
  packId?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  serverId?: Maybe<Scalars['Int']>;
  serverName?: Maybe<Scalars['String']>;
  serverTypeId?: Maybe<Scalars['Int']>;
  status?: Maybe<EStatusOfProductInInventory>;
  userId?: Maybe<Scalars['Int']>;
};

export type InventoryMinOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  dateOfReceive?: Maybe<SortOrder>;
  historyOfPurchaseId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isCanBeRefund?: Maybe<SortOrder>;
  isPartOfPack?: Maybe<SortOrder>;
  packId?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  serverId?: Maybe<SortOrder>;
  serverName?: Maybe<SortOrder>;
  serverTypeId?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type InventoryOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type InventoryOrderByWithAggregationInput = {
  _avg?: Maybe<InventoryAvgOrderByAggregateInput>;
  _count?: Maybe<InventoryCountOrderByAggregateInput>;
  _max?: Maybe<InventoryMaxOrderByAggregateInput>;
  _min?: Maybe<InventoryMinOrderByAggregateInput>;
  _sum?: Maybe<InventorySumOrderByAggregateInput>;
  amount?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  dateOfReceive?: Maybe<SortOrder>;
  historyOfPurchaseId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isCanBeRefund?: Maybe<SortOrder>;
  isPartOfPack?: Maybe<SortOrder>;
  packId?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  serverId?: Maybe<SortOrder>;
  serverName?: Maybe<SortOrder>;
  serverTypeId?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type InventoryOrderByWithRelationInput = {
  amount?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  dateOfReceive?: Maybe<SortOrder>;
  historyOfPurchaseId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isCanBeRefund?: Maybe<SortOrder>;
  isPartOfPack?: Maybe<SortOrder>;
  packId?: Maybe<SortOrder>;
  product?: Maybe<ProductOrderByWithRelationInput>;
  productId?: Maybe<SortOrder>;
  purchase?: Maybe<PurchaseOrderByWithRelationInput>;
  server?: Maybe<ServerOrderByWithRelationInput>;
  serverId?: Maybe<SortOrder>;
  serverName?: Maybe<SortOrder>;
  serverType?: Maybe<ServerTypeOrderByWithRelationInput>;
  serverTypeId?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  user?: Maybe<UserOrderByWithRelationInput>;
  userId?: Maybe<SortOrder>;
};

export enum InventoryScalarFieldEnum {
  Amount = 'amount',
  CreatedAt = 'createdAt',
  DateOfReceive = 'dateOfReceive',
  HistoryOfPurchaseId = 'historyOfPurchaseId',
  Id = 'id',
  IsCanBeRefund = 'isCanBeRefund',
  IsPartOfPack = 'isPartOfPack',
  PackId = 'packId',
  ProductId = 'productId',
  ServerId = 'serverId',
  ServerName = 'serverName',
  ServerTypeId = 'serverTypeId',
  Status = 'status',
  UserId = 'userId'
}

export type InventoryScalarWhereInput = {
  AND?: Maybe<Array<Maybe<InventoryScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<InventoryScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<InventoryScalarWhereInput>>>;
  amount?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  dateOfReceive?: Maybe<DateTimeNullableFilter>;
  historyOfPurchaseId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  isCanBeRefund?: Maybe<BoolFilter>;
  isPartOfPack?: Maybe<BoolNullableFilter>;
  packId?: Maybe<IntNullableFilter>;
  productId?: Maybe<IntFilter>;
  serverId?: Maybe<IntNullableFilter>;
  serverName?: Maybe<StringNullableFilter>;
  serverTypeId?: Maybe<IntNullableFilter>;
  status?: Maybe<EnumEStatusOfProductInInventoryFilter>;
  userId?: Maybe<IntFilter>;
};

export type InventoryScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<InventoryScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<InventoryScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<InventoryScalarWhereWithAggregatesInput>>>;
  amount?: Maybe<IntWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  dateOfReceive?: Maybe<DateTimeNullableWithAggregatesFilter>;
  historyOfPurchaseId?: Maybe<IntWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  isCanBeRefund?: Maybe<BoolWithAggregatesFilter>;
  isPartOfPack?: Maybe<BoolNullableWithAggregatesFilter>;
  packId?: Maybe<IntNullableWithAggregatesFilter>;
  productId?: Maybe<IntWithAggregatesFilter>;
  serverId?: Maybe<IntNullableWithAggregatesFilter>;
  serverName?: Maybe<StringNullableWithAggregatesFilter>;
  serverTypeId?: Maybe<IntNullableWithAggregatesFilter>;
  status?: Maybe<EnumEStatusOfProductInInventoryWithAggregatesFilter>;
  userId?: Maybe<IntWithAggregatesFilter>;
};

export type InventorySumAggregateOutputType = {
  __typename?: 'InventorySumAggregateOutputType';
  amount?: Maybe<Scalars['Int']>;
  historyOfPurchaseId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  packId?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  serverId?: Maybe<Scalars['Int']>;
  serverTypeId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type InventorySumOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  historyOfPurchaseId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  packId?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  serverId?: Maybe<SortOrder>;
  serverTypeId?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type InventoryUncheckedCreateInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfReceive?: Maybe<Scalars['DateTime']>;
  historyOfPurchaseId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  isCanBeRefund?: Maybe<Scalars['Boolean']>;
  isPartOfPack?: Maybe<Scalars['Boolean']>;
  packId?: Maybe<Scalars['Int']>;
  productId: Scalars['Int'];
  serverId?: Maybe<Scalars['Int']>;
  serverName?: Maybe<Scalars['String']>;
  serverTypeId?: Maybe<Scalars['Int']>;
  status?: Maybe<EStatusOfProductInInventory>;
  userId: Scalars['Int'];
};

export type InventoryUncheckedCreateNestedManyWithoutProductInput = {
  connect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<InventoryCreateOrConnectWithoutProductInput>>>;
  create?: Maybe<Array<Maybe<InventoryCreateWithoutProductInput>>>;
  createMany?: Maybe<InventoryCreateManyProductInputEnvelope>;
};

export type InventoryUncheckedCreateNestedManyWithoutPurchaseInput = {
  connect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<InventoryCreateOrConnectWithoutPurchaseInput>>>;
  create?: Maybe<Array<Maybe<InventoryCreateWithoutPurchaseInput>>>;
  createMany?: Maybe<InventoryCreateManyPurchaseInputEnvelope>;
};

export type InventoryUncheckedCreateNestedManyWithoutServerInput = {
  connect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<InventoryCreateOrConnectWithoutServerInput>>>;
  create?: Maybe<Array<Maybe<InventoryCreateWithoutServerInput>>>;
  createMany?: Maybe<InventoryCreateManyServerInputEnvelope>;
};

export type InventoryUncheckedCreateNestedManyWithoutServerTypeInput = {
  connect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<InventoryCreateOrConnectWithoutServerTypeInput>>>;
  create?: Maybe<Array<Maybe<InventoryCreateWithoutServerTypeInput>>>;
  createMany?: Maybe<InventoryCreateManyServerTypeInputEnvelope>;
};

export type InventoryUncheckedCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<InventoryCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<InventoryCreateWithoutUserInput>>>;
  createMany?: Maybe<InventoryCreateManyUserInputEnvelope>;
};

export type InventoryUncheckedCreateWithoutProductInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfReceive?: Maybe<Scalars['DateTime']>;
  historyOfPurchaseId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  isCanBeRefund?: Maybe<Scalars['Boolean']>;
  isPartOfPack?: Maybe<Scalars['Boolean']>;
  packId?: Maybe<Scalars['Int']>;
  serverId?: Maybe<Scalars['Int']>;
  serverName?: Maybe<Scalars['String']>;
  serverTypeId?: Maybe<Scalars['Int']>;
  status?: Maybe<EStatusOfProductInInventory>;
  userId: Scalars['Int'];
};

export type InventoryUncheckedCreateWithoutPurchaseInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfReceive?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  isCanBeRefund?: Maybe<Scalars['Boolean']>;
  isPartOfPack?: Maybe<Scalars['Boolean']>;
  packId?: Maybe<Scalars['Int']>;
  productId: Scalars['Int'];
  serverId?: Maybe<Scalars['Int']>;
  serverName?: Maybe<Scalars['String']>;
  serverTypeId?: Maybe<Scalars['Int']>;
  status?: Maybe<EStatusOfProductInInventory>;
  userId: Scalars['Int'];
};

export type InventoryUncheckedCreateWithoutServerInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfReceive?: Maybe<Scalars['DateTime']>;
  historyOfPurchaseId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  isCanBeRefund?: Maybe<Scalars['Boolean']>;
  isPartOfPack?: Maybe<Scalars['Boolean']>;
  packId?: Maybe<Scalars['Int']>;
  productId: Scalars['Int'];
  serverName?: Maybe<Scalars['String']>;
  serverTypeId?: Maybe<Scalars['Int']>;
  status?: Maybe<EStatusOfProductInInventory>;
  userId: Scalars['Int'];
};

export type InventoryUncheckedCreateWithoutServerTypeInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfReceive?: Maybe<Scalars['DateTime']>;
  historyOfPurchaseId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  isCanBeRefund?: Maybe<Scalars['Boolean']>;
  isPartOfPack?: Maybe<Scalars['Boolean']>;
  packId?: Maybe<Scalars['Int']>;
  productId: Scalars['Int'];
  serverId?: Maybe<Scalars['Int']>;
  serverName?: Maybe<Scalars['String']>;
  status?: Maybe<EStatusOfProductInInventory>;
  userId: Scalars['Int'];
};

export type InventoryUncheckedCreateWithoutUserInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfReceive?: Maybe<Scalars['DateTime']>;
  historyOfPurchaseId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  isCanBeRefund?: Maybe<Scalars['Boolean']>;
  isPartOfPack?: Maybe<Scalars['Boolean']>;
  packId?: Maybe<Scalars['Int']>;
  productId: Scalars['Int'];
  serverId?: Maybe<Scalars['Int']>;
  serverName?: Maybe<Scalars['String']>;
  serverTypeId?: Maybe<Scalars['Int']>;
  status?: Maybe<EStatusOfProductInInventory>;
};

export type InventoryUncheckedUpdateInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfReceive?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  historyOfPurchaseId?: Maybe<IntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isCanBeRefund?: Maybe<BoolFieldUpdateOperationsInput>;
  isPartOfPack?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  packId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  serverId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  serverName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  serverTypeId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  status?: Maybe<EnumEStatusOfProductInInventoryFieldUpdateOperationsInput>;
  userId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type InventoryUncheckedUpdateManyInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfReceive?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  historyOfPurchaseId?: Maybe<IntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isCanBeRefund?: Maybe<BoolFieldUpdateOperationsInput>;
  isPartOfPack?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  packId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  serverId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  serverName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  serverTypeId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  status?: Maybe<EnumEStatusOfProductInInventoryFieldUpdateOperationsInput>;
  userId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type InventoryUncheckedUpdateManyWithoutInventoryInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfReceive?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  historyOfPurchaseId?: Maybe<IntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isCanBeRefund?: Maybe<BoolFieldUpdateOperationsInput>;
  isPartOfPack?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  packId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  serverId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  serverName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  serverTypeId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  status?: Maybe<EnumEStatusOfProductInInventoryFieldUpdateOperationsInput>;
};

export type InventoryUncheckedUpdateManyWithoutProductInput = {
  connect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<InventoryCreateOrConnectWithoutProductInput>>>;
  create?: Maybe<Array<Maybe<InventoryCreateWithoutProductInput>>>;
  createMany?: Maybe<InventoryCreateManyProductInputEnvelope>;
  delete?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<InventoryScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<InventoryUpdateWithWhereUniqueWithoutProductInput>>>;
  updateMany?: Maybe<Array<Maybe<InventoryUpdateManyWithWhereWithoutProductInput>>>;
  upsert?: Maybe<Array<Maybe<InventoryUpsertWithWhereUniqueWithoutProductInput>>>;
};

export type InventoryUncheckedUpdateManyWithoutPurchaseInput = {
  connect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<InventoryCreateOrConnectWithoutPurchaseInput>>>;
  create?: Maybe<Array<Maybe<InventoryCreateWithoutPurchaseInput>>>;
  createMany?: Maybe<InventoryCreateManyPurchaseInputEnvelope>;
  delete?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<InventoryScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<InventoryUpdateWithWhereUniqueWithoutPurchaseInput>>>;
  updateMany?: Maybe<Array<Maybe<InventoryUpdateManyWithWhereWithoutPurchaseInput>>>;
  upsert?: Maybe<Array<Maybe<InventoryUpsertWithWhereUniqueWithoutPurchaseInput>>>;
};

export type InventoryUncheckedUpdateManyWithoutServerInput = {
  connect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<InventoryCreateOrConnectWithoutServerInput>>>;
  create?: Maybe<Array<Maybe<InventoryCreateWithoutServerInput>>>;
  createMany?: Maybe<InventoryCreateManyServerInputEnvelope>;
  delete?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<InventoryScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<InventoryUpdateWithWhereUniqueWithoutServerInput>>>;
  updateMany?: Maybe<Array<Maybe<InventoryUpdateManyWithWhereWithoutServerInput>>>;
  upsert?: Maybe<Array<Maybe<InventoryUpsertWithWhereUniqueWithoutServerInput>>>;
};

export type InventoryUncheckedUpdateManyWithoutServerTypeInput = {
  connect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<InventoryCreateOrConnectWithoutServerTypeInput>>>;
  create?: Maybe<Array<Maybe<InventoryCreateWithoutServerTypeInput>>>;
  createMany?: Maybe<InventoryCreateManyServerTypeInputEnvelope>;
  delete?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<InventoryScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<InventoryUpdateWithWhereUniqueWithoutServerTypeInput>>>;
  updateMany?: Maybe<Array<Maybe<InventoryUpdateManyWithWhereWithoutServerTypeInput>>>;
  upsert?: Maybe<Array<Maybe<InventoryUpsertWithWhereUniqueWithoutServerTypeInput>>>;
};

export type InventoryUncheckedUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<InventoryCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<InventoryCreateWithoutUserInput>>>;
  createMany?: Maybe<InventoryCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<InventoryScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<InventoryUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<InventoryUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<InventoryUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type InventoryUncheckedUpdateWithoutProductInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfReceive?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  historyOfPurchaseId?: Maybe<IntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isCanBeRefund?: Maybe<BoolFieldUpdateOperationsInput>;
  isPartOfPack?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  packId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  serverId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  serverName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  serverTypeId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  status?: Maybe<EnumEStatusOfProductInInventoryFieldUpdateOperationsInput>;
  userId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type InventoryUncheckedUpdateWithoutPurchaseInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfReceive?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isCanBeRefund?: Maybe<BoolFieldUpdateOperationsInput>;
  isPartOfPack?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  packId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  serverId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  serverName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  serverTypeId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  status?: Maybe<EnumEStatusOfProductInInventoryFieldUpdateOperationsInput>;
  userId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type InventoryUncheckedUpdateWithoutServerInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfReceive?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  historyOfPurchaseId?: Maybe<IntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isCanBeRefund?: Maybe<BoolFieldUpdateOperationsInput>;
  isPartOfPack?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  packId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  serverName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  serverTypeId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  status?: Maybe<EnumEStatusOfProductInInventoryFieldUpdateOperationsInput>;
  userId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type InventoryUncheckedUpdateWithoutServerTypeInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfReceive?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  historyOfPurchaseId?: Maybe<IntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isCanBeRefund?: Maybe<BoolFieldUpdateOperationsInput>;
  isPartOfPack?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  packId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  serverId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  serverName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<EnumEStatusOfProductInInventoryFieldUpdateOperationsInput>;
  userId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type InventoryUncheckedUpdateWithoutUserInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfReceive?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  historyOfPurchaseId?: Maybe<IntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isCanBeRefund?: Maybe<BoolFieldUpdateOperationsInput>;
  isPartOfPack?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  packId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  serverId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  serverName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  serverTypeId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  status?: Maybe<EnumEStatusOfProductInInventoryFieldUpdateOperationsInput>;
};

export type InventoryUpdateInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfReceive?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isCanBeRefund?: Maybe<BoolFieldUpdateOperationsInput>;
  isPartOfPack?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  packId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutInventoryInput>;
  purchase?: Maybe<PurchaseUpdateOneRequiredWithoutInventoryInput>;
  server?: Maybe<ServerUpdateOneWithoutInventoryInput>;
  serverName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  serverType?: Maybe<ServerTypeUpdateOneWithoutInventoryInput>;
  status?: Maybe<EnumEStatusOfProductInInventoryFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutInventoryInput>;
};

export type InventoryUpdateManyMutationInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfReceive?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isCanBeRefund?: Maybe<BoolFieldUpdateOperationsInput>;
  isPartOfPack?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  packId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  serverName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<EnumEStatusOfProductInInventoryFieldUpdateOperationsInput>;
};

export type InventoryUpdateManyWithWhereWithoutProductInput = {
  data: InventoryUncheckedUpdateManyWithoutInventoryInput;
  where: InventoryScalarWhereInput;
};

export type InventoryUpdateManyWithWhereWithoutPurchaseInput = {
  data: InventoryUncheckedUpdateManyWithoutInventoryInput;
  where: InventoryScalarWhereInput;
};

export type InventoryUpdateManyWithWhereWithoutServerInput = {
  data: InventoryUncheckedUpdateManyWithoutInventoryInput;
  where: InventoryScalarWhereInput;
};

export type InventoryUpdateManyWithWhereWithoutServerTypeInput = {
  data: InventoryUncheckedUpdateManyWithoutInventoryInput;
  where: InventoryScalarWhereInput;
};

export type InventoryUpdateManyWithWhereWithoutUserInput = {
  data: InventoryUncheckedUpdateManyWithoutInventoryInput;
  where: InventoryScalarWhereInput;
};

export type InventoryUpdateManyWithoutProductInput = {
  connect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<InventoryCreateOrConnectWithoutProductInput>>>;
  create?: Maybe<Array<Maybe<InventoryCreateWithoutProductInput>>>;
  createMany?: Maybe<InventoryCreateManyProductInputEnvelope>;
  delete?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<InventoryScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<InventoryUpdateWithWhereUniqueWithoutProductInput>>>;
  updateMany?: Maybe<Array<Maybe<InventoryUpdateManyWithWhereWithoutProductInput>>>;
  upsert?: Maybe<Array<Maybe<InventoryUpsertWithWhereUniqueWithoutProductInput>>>;
};

export type InventoryUpdateManyWithoutPurchaseInput = {
  connect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<InventoryCreateOrConnectWithoutPurchaseInput>>>;
  create?: Maybe<Array<Maybe<InventoryCreateWithoutPurchaseInput>>>;
  createMany?: Maybe<InventoryCreateManyPurchaseInputEnvelope>;
  delete?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<InventoryScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<InventoryUpdateWithWhereUniqueWithoutPurchaseInput>>>;
  updateMany?: Maybe<Array<Maybe<InventoryUpdateManyWithWhereWithoutPurchaseInput>>>;
  upsert?: Maybe<Array<Maybe<InventoryUpsertWithWhereUniqueWithoutPurchaseInput>>>;
};

export type InventoryUpdateManyWithoutServerInput = {
  connect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<InventoryCreateOrConnectWithoutServerInput>>>;
  create?: Maybe<Array<Maybe<InventoryCreateWithoutServerInput>>>;
  createMany?: Maybe<InventoryCreateManyServerInputEnvelope>;
  delete?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<InventoryScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<InventoryUpdateWithWhereUniqueWithoutServerInput>>>;
  updateMany?: Maybe<Array<Maybe<InventoryUpdateManyWithWhereWithoutServerInput>>>;
  upsert?: Maybe<Array<Maybe<InventoryUpsertWithWhereUniqueWithoutServerInput>>>;
};

export type InventoryUpdateManyWithoutServerTypeInput = {
  connect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<InventoryCreateOrConnectWithoutServerTypeInput>>>;
  create?: Maybe<Array<Maybe<InventoryCreateWithoutServerTypeInput>>>;
  createMany?: Maybe<InventoryCreateManyServerTypeInputEnvelope>;
  delete?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<InventoryScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<InventoryUpdateWithWhereUniqueWithoutServerTypeInput>>>;
  updateMany?: Maybe<Array<Maybe<InventoryUpdateManyWithWhereWithoutServerTypeInput>>>;
  upsert?: Maybe<Array<Maybe<InventoryUpsertWithWhereUniqueWithoutServerTypeInput>>>;
};

export type InventoryUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<InventoryCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<InventoryCreateWithoutUserInput>>>;
  createMany?: Maybe<InventoryCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<InventoryScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<InventoryWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<InventoryUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<InventoryUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<InventoryUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type InventoryUpdateWithWhereUniqueWithoutProductInput = {
  data: InventoryUncheckedUpdateWithoutProductInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryUpdateWithWhereUniqueWithoutPurchaseInput = {
  data: InventoryUncheckedUpdateWithoutPurchaseInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryUpdateWithWhereUniqueWithoutServerInput = {
  data: InventoryUncheckedUpdateWithoutServerInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryUpdateWithWhereUniqueWithoutServerTypeInput = {
  data: InventoryUncheckedUpdateWithoutServerTypeInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryUpdateWithWhereUniqueWithoutUserInput = {
  data: InventoryUncheckedUpdateWithoutUserInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryUpdateWithoutProductInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfReceive?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isCanBeRefund?: Maybe<BoolFieldUpdateOperationsInput>;
  isPartOfPack?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  packId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  purchase?: Maybe<PurchaseUpdateOneRequiredWithoutInventoryInput>;
  server?: Maybe<ServerUpdateOneWithoutInventoryInput>;
  serverName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  serverType?: Maybe<ServerTypeUpdateOneWithoutInventoryInput>;
  status?: Maybe<EnumEStatusOfProductInInventoryFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutInventoryInput>;
};

export type InventoryUpdateWithoutPurchaseInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfReceive?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isCanBeRefund?: Maybe<BoolFieldUpdateOperationsInput>;
  isPartOfPack?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  packId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutInventoryInput>;
  server?: Maybe<ServerUpdateOneWithoutInventoryInput>;
  serverName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  serverType?: Maybe<ServerTypeUpdateOneWithoutInventoryInput>;
  status?: Maybe<EnumEStatusOfProductInInventoryFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutInventoryInput>;
};

export type InventoryUpdateWithoutServerInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfReceive?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isCanBeRefund?: Maybe<BoolFieldUpdateOperationsInput>;
  isPartOfPack?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  packId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutInventoryInput>;
  purchase?: Maybe<PurchaseUpdateOneRequiredWithoutInventoryInput>;
  serverName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  serverType?: Maybe<ServerTypeUpdateOneWithoutInventoryInput>;
  status?: Maybe<EnumEStatusOfProductInInventoryFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutInventoryInput>;
};

export type InventoryUpdateWithoutServerTypeInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfReceive?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isCanBeRefund?: Maybe<BoolFieldUpdateOperationsInput>;
  isPartOfPack?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  packId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutInventoryInput>;
  purchase?: Maybe<PurchaseUpdateOneRequiredWithoutInventoryInput>;
  server?: Maybe<ServerUpdateOneWithoutInventoryInput>;
  serverName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<EnumEStatusOfProductInInventoryFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutInventoryInput>;
};

export type InventoryUpdateWithoutUserInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfReceive?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isCanBeRefund?: Maybe<BoolFieldUpdateOperationsInput>;
  isPartOfPack?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  packId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutInventoryInput>;
  purchase?: Maybe<PurchaseUpdateOneRequiredWithoutInventoryInput>;
  server?: Maybe<ServerUpdateOneWithoutInventoryInput>;
  serverName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  serverType?: Maybe<ServerTypeUpdateOneWithoutInventoryInput>;
  status?: Maybe<EnumEStatusOfProductInInventoryFieldUpdateOperationsInput>;
};

export type InventoryUpsertWithWhereUniqueWithoutProductInput = {
  create: InventoryUncheckedCreateWithoutProductInput;
  update: InventoryUncheckedUpdateWithoutProductInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryUpsertWithWhereUniqueWithoutPurchaseInput = {
  create: InventoryUncheckedCreateWithoutPurchaseInput;
  update: InventoryUncheckedUpdateWithoutPurchaseInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryUpsertWithWhereUniqueWithoutServerInput = {
  create: InventoryUncheckedCreateWithoutServerInput;
  update: InventoryUncheckedUpdateWithoutServerInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryUpsertWithWhereUniqueWithoutServerTypeInput = {
  create: InventoryUncheckedCreateWithoutServerTypeInput;
  update: InventoryUncheckedUpdateWithoutServerTypeInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryUpsertWithWhereUniqueWithoutUserInput = {
  create: InventoryUncheckedCreateWithoutUserInput;
  update: InventoryUncheckedUpdateWithoutUserInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryWhereInput = {
  AND?: Maybe<Array<Maybe<InventoryWhereInput>>>;
  NOT?: Maybe<Array<Maybe<InventoryWhereInput>>>;
  OR?: Maybe<Array<Maybe<InventoryWhereInput>>>;
  amount?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  dateOfReceive?: Maybe<DateTimeNullableFilter>;
  historyOfPurchaseId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  isCanBeRefund?: Maybe<BoolFilter>;
  isPartOfPack?: Maybe<BoolNullableFilter>;
  packId?: Maybe<IntNullableFilter>;
  product?: Maybe<ProductWhereInput>;
  productId?: Maybe<IntFilter>;
  purchase?: Maybe<PurchaseWhereInput>;
  server?: Maybe<ServerWhereInput>;
  serverId?: Maybe<IntNullableFilter>;
  serverName?: Maybe<StringNullableFilter>;
  serverType?: Maybe<ServerTypeWhereInput>;
  serverTypeId?: Maybe<IntNullableFilter>;
  status?: Maybe<EnumEStatusOfProductInInventoryFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntFilter>;
};

export type InventoryWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum JsonNullValueFilter {
  AnyNull = 'AnyNull',
  DbNull = 'DbNull',
  JsonNull = 'JsonNull'
}

export type JsonNullableFilter = {
  equals?: Maybe<Scalars['Json']>;
  not?: Maybe<Scalars['Json']>;
};

export type JsonNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedJsonNullableFilter>;
  _min?: Maybe<NestedJsonNullableFilter>;
  equals?: Maybe<Scalars['Json']>;
  not?: Maybe<Scalars['Json']>;
};

export enum KindEnum {
  Enum = 'enum',
  Object = 'object',
  Scalar = 'scalar'
}

export type Model = {
  __typename?: 'Model';
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  displayFields: Array<Scalars['String']>;
  fields: Array<Field>;
  id: Scalars['String'];
  idField: Scalars['String'];
  name: Scalars['String'];
  update: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneBaseSettings: BaseSettings;
  createOneContacts: Contacts;
  createOneInventory: Inventory;
  createOneProduct: Product;
  createOnePromocodes: Promocodes;
  createOnePurchase: Purchase;
  createOneServer: Server;
  createOneServerType: ServerType;
  createOneToken: Token;
  createOneTransaction: Transaction;
  createOneTransfers: Transfers;
  createOneUrlSettings: UrlSettings;
  createOneUser: User;
  createOneVisitors: Visitors;
  deleteManyBaseSettings: BatchPayload;
  deleteManyContacts: BatchPayload;
  deleteManyInventory: BatchPayload;
  deleteManyProduct: BatchPayload;
  deleteManyPromocodes: BatchPayload;
  deleteManyPurchase: BatchPayload;
  deleteManyServer: BatchPayload;
  deleteManyServerType: BatchPayload;
  deleteManyToken: BatchPayload;
  deleteManyTransaction: BatchPayload;
  deleteManyTransfers: BatchPayload;
  deleteManyUrlSettings: BatchPayload;
  deleteManyUser: BatchPayload;
  deleteManyVisitors: BatchPayload;
  deleteOneBaseSettings?: Maybe<BaseSettings>;
  deleteOneContacts?: Maybe<Contacts>;
  deleteOneInventory?: Maybe<Inventory>;
  deleteOneProduct?: Maybe<Product>;
  deleteOnePromocodes?: Maybe<Promocodes>;
  deleteOnePurchase?: Maybe<Purchase>;
  deleteOneServer?: Maybe<Server>;
  deleteOneServerType?: Maybe<ServerType>;
  deleteOneToken?: Maybe<Token>;
  deleteOneTransaction?: Maybe<Transaction>;
  deleteOneTransfers?: Maybe<Transfers>;
  deleteOneUrlSettings?: Maybe<UrlSettings>;
  deleteOneUser?: Maybe<User>;
  deleteOneVisitors?: Maybe<Visitors>;
  updateField: Field;
  updateManyBaseSettings: BatchPayload;
  updateManyContacts: BatchPayload;
  updateManyInventory: BatchPayload;
  updateManyProduct: BatchPayload;
  updateManyPromocodes: BatchPayload;
  updateManyPurchase: BatchPayload;
  updateManyServer: BatchPayload;
  updateManyServerType: BatchPayload;
  updateManyToken: BatchPayload;
  updateManyTransaction: BatchPayload;
  updateManyTransfers: BatchPayload;
  updateManyUrlSettings: BatchPayload;
  updateManyUser: BatchPayload;
  updateManyVisitors: BatchPayload;
  updateModel: Model;
  updateOneBaseSettings: BaseSettings;
  updateOneContacts: Contacts;
  updateOneInventory: Inventory;
  updateOneProduct: Product;
  updateOnePromocodes: Promocodes;
  updateOnePurchase: Purchase;
  updateOneServer: Server;
  updateOneServerType: ServerType;
  updateOneToken: Token;
  updateOneTransaction: Transaction;
  updateOneTransfers: Transfers;
  updateOneUrlSettings: UrlSettings;
  updateOneUser: User;
  updateOneVisitors: Visitors;
  upsertOneBaseSettings: BaseSettings;
  upsertOneContacts: Contacts;
  upsertOneInventory: Inventory;
  upsertOneProduct: Product;
  upsertOnePromocodes: Promocodes;
  upsertOnePurchase: Purchase;
  upsertOneServer: Server;
  upsertOneServerType: ServerType;
  upsertOneToken: Token;
  upsertOneTransaction: Transaction;
  upsertOneTransfers: Transfers;
  upsertOneUrlSettings: UrlSettings;
  upsertOneUser: User;
  upsertOneVisitors: Visitors;
};


export type MutationCreateOneBaseSettingsArgs = {
  data: BaseSettingsCreateInput;
};


export type MutationCreateOneContactsArgs = {
  data: ContactsCreateInput;
};


export type MutationCreateOneInventoryArgs = {
  data: InventoryCreateInput;
};


export type MutationCreateOneProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateOnePromocodesArgs = {
  data: PromocodesCreateInput;
};


export type MutationCreateOnePurchaseArgs = {
  data: PurchaseCreateInput;
};


export type MutationCreateOneServerArgs = {
  data: ServerCreateInput;
};


export type MutationCreateOneServerTypeArgs = {
  data: ServerTypeCreateInput;
};


export type MutationCreateOneTokenArgs = {
  data: TokenCreateInput;
};


export type MutationCreateOneTransactionArgs = {
  data: TransactionCreateInput;
};


export type MutationCreateOneTransfersArgs = {
  data: TransfersCreateInput;
};


export type MutationCreateOneUrlSettingsArgs = {
  data: UrlSettingsCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateOneVisitorsArgs = {
  data: VisitorsCreateInput;
};


export type MutationDeleteManyBaseSettingsArgs = {
  where?: Maybe<BaseSettingsWhereInput>;
};


export type MutationDeleteManyContactsArgs = {
  where?: Maybe<ContactsWhereInput>;
};


export type MutationDeleteManyInventoryArgs = {
  where?: Maybe<InventoryWhereInput>;
};


export type MutationDeleteManyProductArgs = {
  where?: Maybe<ProductWhereInput>;
};


export type MutationDeleteManyPromocodesArgs = {
  where?: Maybe<PromocodesWhereInput>;
};


export type MutationDeleteManyPurchaseArgs = {
  where?: Maybe<PurchaseWhereInput>;
};


export type MutationDeleteManyServerArgs = {
  where?: Maybe<ServerWhereInput>;
};


export type MutationDeleteManyServerTypeArgs = {
  where?: Maybe<ServerTypeWhereInput>;
};


export type MutationDeleteManyTokenArgs = {
  where?: Maybe<TokenWhereInput>;
};


export type MutationDeleteManyTransactionArgs = {
  where?: Maybe<TransactionWhereInput>;
};


export type MutationDeleteManyTransfersArgs = {
  where?: Maybe<TransfersWhereInput>;
};


export type MutationDeleteManyUrlSettingsArgs = {
  where?: Maybe<UrlSettingsWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteManyVisitorsArgs = {
  where?: Maybe<VisitorsWhereInput>;
};


export type MutationDeleteOneBaseSettingsArgs = {
  where: BaseSettingsWhereUniqueInput;
};


export type MutationDeleteOneContactsArgs = {
  where: ContactsWhereUniqueInput;
};


export type MutationDeleteOneInventoryArgs = {
  where: InventoryWhereUniqueInput;
};


export type MutationDeleteOneProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteOnePromocodesArgs = {
  where: PromocodesWhereUniqueInput;
};


export type MutationDeleteOnePurchaseArgs = {
  where: PurchaseWhereUniqueInput;
};


export type MutationDeleteOneServerArgs = {
  where: ServerWhereUniqueInput;
};


export type MutationDeleteOneServerTypeArgs = {
  where: ServerTypeWhereUniqueInput;
};


export type MutationDeleteOneTokenArgs = {
  where: TokenWhereUniqueInput;
};


export type MutationDeleteOneTransactionArgs = {
  where: TransactionWhereUniqueInput;
};


export type MutationDeleteOneTransfersArgs = {
  where: TransfersWhereUniqueInput;
};


export type MutationDeleteOneUrlSettingsArgs = {
  where: UrlSettingsWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteOneVisitorsArgs = {
  where: VisitorsWhereUniqueInput;
};


export type MutationUpdateFieldArgs = {
  data: UpdateFieldInput;
  id: Scalars['String'];
  modelId: Scalars['String'];
};


export type MutationUpdateManyBaseSettingsArgs = {
  data: BaseSettingsUpdateManyMutationInput;
  where?: Maybe<BaseSettingsWhereInput>;
};


export type MutationUpdateManyContactsArgs = {
  data: ContactsUpdateManyMutationInput;
  where?: Maybe<ContactsWhereInput>;
};


export type MutationUpdateManyInventoryArgs = {
  data: InventoryUpdateManyMutationInput;
  where?: Maybe<InventoryWhereInput>;
};


export type MutationUpdateManyProductArgs = {
  data: ProductUpdateManyMutationInput;
  where?: Maybe<ProductWhereInput>;
};


export type MutationUpdateManyPromocodesArgs = {
  data: PromocodesUpdateManyMutationInput;
  where?: Maybe<PromocodesWhereInput>;
};


export type MutationUpdateManyPurchaseArgs = {
  data: PurchaseUpdateManyMutationInput;
  where?: Maybe<PurchaseWhereInput>;
};


export type MutationUpdateManyServerArgs = {
  data: ServerUpdateManyMutationInput;
  where?: Maybe<ServerWhereInput>;
};


export type MutationUpdateManyServerTypeArgs = {
  data: ServerTypeUpdateManyMutationInput;
  where?: Maybe<ServerTypeWhereInput>;
};


export type MutationUpdateManyTokenArgs = {
  data: TokenUpdateManyMutationInput;
  where?: Maybe<TokenWhereInput>;
};


export type MutationUpdateManyTransactionArgs = {
  data: TransactionUpdateManyMutationInput;
  where?: Maybe<TransactionWhereInput>;
};


export type MutationUpdateManyTransfersArgs = {
  data: TransfersUpdateManyMutationInput;
  where?: Maybe<TransfersWhereInput>;
};


export type MutationUpdateManyUrlSettingsArgs = {
  data: UrlSettingsUpdateManyMutationInput;
  where?: Maybe<UrlSettingsWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateManyVisitorsArgs = {
  data: VisitorsUpdateManyMutationInput;
  where?: Maybe<VisitorsWhereInput>;
};


export type MutationUpdateModelArgs = {
  data: UpdateModelInput;
  id: Scalars['String'];
};


export type MutationUpdateOneBaseSettingsArgs = {
  data: BaseSettingsUpdateInput;
  where: BaseSettingsWhereUniqueInput;
};


export type MutationUpdateOneContactsArgs = {
  data: ContactsUpdateInput;
  where: ContactsWhereUniqueInput;
};


export type MutationUpdateOneInventoryArgs = {
  data: InventoryUpdateInput;
  where: InventoryWhereUniqueInput;
};


export type MutationUpdateOneProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateOnePromocodesArgs = {
  data: PromocodesUpdateInput;
  where: PromocodesWhereUniqueInput;
};


export type MutationUpdateOnePurchaseArgs = {
  data: PurchaseUpdateInput;
  where: PurchaseWhereUniqueInput;
};


export type MutationUpdateOneServerArgs = {
  data: ServerUpdateInput;
  where: ServerWhereUniqueInput;
};


export type MutationUpdateOneServerTypeArgs = {
  data: ServerTypeUpdateInput;
  where: ServerTypeWhereUniqueInput;
};


export type MutationUpdateOneTokenArgs = {
  data: TokenUpdateInput;
  where: TokenWhereUniqueInput;
};


export type MutationUpdateOneTransactionArgs = {
  data: TransactionUpdateInput;
  where: TransactionWhereUniqueInput;
};


export type MutationUpdateOneTransfersArgs = {
  data: TransfersUpdateInput;
  where: TransfersWhereUniqueInput;
};


export type MutationUpdateOneUrlSettingsArgs = {
  data: UrlSettingsUpdateInput;
  where: UrlSettingsWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneVisitorsArgs = {
  data: VisitorsUpdateInput;
  where: VisitorsWhereUniqueInput;
};


export type MutationUpsertOneBaseSettingsArgs = {
  create: BaseSettingsCreateInput;
  update: BaseSettingsUpdateInput;
  where: BaseSettingsWhereUniqueInput;
};


export type MutationUpsertOneContactsArgs = {
  create: ContactsCreateInput;
  update: ContactsUpdateInput;
  where: ContactsWhereUniqueInput;
};


export type MutationUpsertOneInventoryArgs = {
  create: InventoryCreateInput;
  update: InventoryUpdateInput;
  where: InventoryWhereUniqueInput;
};


export type MutationUpsertOneProductArgs = {
  create: ProductCreateInput;
  update: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpsertOnePromocodesArgs = {
  create: PromocodesCreateInput;
  update: PromocodesUpdateInput;
  where: PromocodesWhereUniqueInput;
};


export type MutationUpsertOnePurchaseArgs = {
  create: PurchaseCreateInput;
  update: PurchaseUpdateInput;
  where: PurchaseWhereUniqueInput;
};


export type MutationUpsertOneServerArgs = {
  create: ServerCreateInput;
  update: ServerUpdateInput;
  where: ServerWhereUniqueInput;
};


export type MutationUpsertOneServerTypeArgs = {
  create: ServerTypeCreateInput;
  update: ServerTypeUpdateInput;
  where: ServerTypeWhereUniqueInput;
};


export type MutationUpsertOneTokenArgs = {
  create: TokenCreateInput;
  update: TokenUpdateInput;
  where: TokenWhereUniqueInput;
};


export type MutationUpsertOneTransactionArgs = {
  create: TransactionCreateInput;
  update: TransactionUpdateInput;
  where: TransactionWhereUniqueInput;
};


export type MutationUpsertOneTransfersArgs = {
  create: TransfersCreateInput;
  update: TransfersUpdateInput;
  where: TransfersWhereUniqueInput;
};


export type MutationUpsertOneUrlSettingsArgs = {
  create: UrlSettingsCreateInput;
  update: UrlSettingsUpdateInput;
  where: UrlSettingsWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneVisitorsArgs = {
  create: VisitorsCreateInput;
  update: VisitorsUpdateInput;
  where: VisitorsWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
};

export type NestedBoolNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedBoolNullableFilter>;
  _min?: Maybe<NestedBoolNullableFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableWithAggregatesFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedDateTimeNullableFilter>;
  _min?: Maybe<NestedDateTimeNullableFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedEnumEButtonColorFilter = {
  equals?: Maybe<EButtonColor>;
  in?: Maybe<Array<Maybe<EButtonColor>>>;
  not?: Maybe<NestedEnumEButtonColorFilter>;
  notIn?: Maybe<Array<Maybe<EButtonColor>>>;
};

export type NestedEnumEButtonColorWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumEButtonColorFilter>;
  _min?: Maybe<NestedEnumEButtonColorFilter>;
  equals?: Maybe<EButtonColor>;
  in?: Maybe<Array<Maybe<EButtonColor>>>;
  not?: Maybe<NestedEnumEButtonColorWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<EButtonColor>>>;
};

export type NestedEnumEStatusOfProductInInventoryFilter = {
  equals?: Maybe<EStatusOfProductInInventory>;
  in?: Maybe<Array<Maybe<EStatusOfProductInInventory>>>;
  not?: Maybe<NestedEnumEStatusOfProductInInventoryFilter>;
  notIn?: Maybe<Array<Maybe<EStatusOfProductInInventory>>>;
};

export type NestedEnumEStatusOfProductInInventoryWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumEStatusOfProductInInventoryFilter>;
  _min?: Maybe<NestedEnumEStatusOfProductInInventoryFilter>;
  equals?: Maybe<EStatusOfProductInInventory>;
  in?: Maybe<Array<Maybe<EStatusOfProductInInventory>>>;
  not?: Maybe<NestedEnumEStatusOfProductInInventoryWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<EStatusOfProductInInventory>>>;
};

export type NestedEnumEStatusOfRefillFilter = {
  equals?: Maybe<EStatusOfRefill>;
  in?: Maybe<Array<Maybe<EStatusOfRefill>>>;
  not?: Maybe<NestedEnumEStatusOfRefillFilter>;
  notIn?: Maybe<Array<Maybe<EStatusOfRefill>>>;
};

export type NestedEnumEStatusOfRefillWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumEStatusOfRefillFilter>;
  _min?: Maybe<NestedEnumEStatusOfRefillFilter>;
  equals?: Maybe<EStatusOfRefill>;
  in?: Maybe<Array<Maybe<EStatusOfRefill>>>;
  not?: Maybe<NestedEnumEStatusOfRefillWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<EStatusOfRefill>>>;
};

export type NestedEnumETypeOfProductFilter = {
  equals?: Maybe<ETypeOfProduct>;
  in?: Maybe<Array<Maybe<ETypeOfProduct>>>;
  not?: Maybe<NestedEnumETypeOfProductFilter>;
  notIn?: Maybe<Array<Maybe<ETypeOfProduct>>>;
};

export type NestedEnumETypeOfProductWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumETypeOfProductFilter>;
  _min?: Maybe<NestedEnumETypeOfProductFilter>;
  equals?: Maybe<ETypeOfProduct>;
  in?: Maybe<Array<Maybe<ETypeOfProduct>>>;
  not?: Maybe<NestedEnumETypeOfProductWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<ETypeOfProduct>>>;
};

export type NestedEnumETypeOfUrlFilter = {
  equals?: Maybe<ETypeOfUrl>;
  in?: Maybe<Array<Maybe<ETypeOfUrl>>>;
  not?: Maybe<NestedEnumETypeOfUrlFilter>;
  notIn?: Maybe<Array<Maybe<ETypeOfUrl>>>;
};

export type NestedEnumETypeOfUrlWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumETypeOfUrlFilter>;
  _min?: Maybe<NestedEnumETypeOfUrlFilter>;
  equals?: Maybe<ETypeOfUrl>;
  in?: Maybe<Array<Maybe<ETypeOfUrl>>>;
  not?: Maybe<NestedEnumETypeOfUrlWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<ETypeOfUrl>>>;
};

export type NestedEnumUser_RoleFilter = {
  equals?: Maybe<User_Role>;
  in?: Maybe<Array<Maybe<User_Role>>>;
  not?: Maybe<NestedEnumUser_RoleFilter>;
  notIn?: Maybe<Array<Maybe<User_Role>>>;
};

export type NestedEnumUser_RoleWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumUser_RoleFilter>;
  _min?: Maybe<NestedEnumUser_RoleFilter>;
  equals?: Maybe<User_Role>;
  in?: Maybe<Array<Maybe<User_Role>>>;
  not?: Maybe<NestedEnumUser_RoleWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<User_Role>>>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedJsonNullableFilter = {
  equals?: Maybe<Scalars['Json']>;
  not?: Maybe<Scalars['Json']>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export enum NullableJsonNullValueInput {
  DbNull = 'DbNull',
  JsonNull = 'JsonNull'
}

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  Inventory: Array<Inventory>;
  Purchase: Array<Purchase>;
  _count?: Maybe<ProductCountOutputType>;
  amount: Scalars['Int'];
  autoactivation: Scalars['Boolean'];
  blockSize: Scalars['Int'];
  buttonColor: EButtonColor;
  description_en?: Maybe<Scalars['String']>;
  description_ru?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  hidden: Scalars['Boolean'];
  iconButton?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  isBackgroundColor: Scalars['Boolean'];
  isBackgroundImage: Scalars['Boolean'];
  isChangeAmount: Scalars['Boolean'];
  maxCountOfSale?: Maybe<Scalars['Int']>;
  nameID?: Maybe<Scalars['String']>;
  name_en: Scalars['String'];
  name_ru: Scalars['String'];
  number?: Maybe<Scalars['Int']>;
  price: Scalars['Int'];
  productContent?: Maybe<Scalars['Json']>;
  saleDeadline?: Maybe<Scalars['DateTime']>;
  saleDiscount?: Maybe<Scalars['Int']>;
  serverType?: Maybe<ServerType>;
  serverTypeId?: Maybe<Scalars['Int']>;
  textButton?: Maybe<Scalars['String']>;
  textButton_en?: Maybe<Scalars['String']>;
  type: ETypeOfProduct;
};


export type ProductInventoryArgs = {
  cursor?: Maybe<InventoryWhereUniqueInput>;
  distinct?: Maybe<InventoryScalarFieldEnum>;
  orderBy?: Maybe<InventoryOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<InventoryWhereInput>;
};


export type ProductPurchaseArgs = {
  cursor?: Maybe<PurchaseWhereUniqueInput>;
  distinct?: Maybe<PurchaseScalarFieldEnum>;
  orderBy?: Maybe<PurchaseOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PurchaseWhereInput>;
};

export type ProductAvgAggregateOutputType = {
  __typename?: 'ProductAvgAggregateOutputType';
  amount?: Maybe<Scalars['Float']>;
  blockSize?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  maxCountOfSale?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  saleDiscount?: Maybe<Scalars['Float']>;
  serverTypeId?: Maybe<Scalars['Float']>;
};

export type ProductAvgOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  blockSize?: Maybe<SortOrder>;
  discount?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  maxCountOfSale?: Maybe<SortOrder>;
  number?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  saleDiscount?: Maybe<SortOrder>;
  serverTypeId?: Maybe<SortOrder>;
};

export type ProductCountAggregateOutputType = {
  __typename?: 'ProductCountAggregateOutputType';
  _all: Scalars['Int'];
  amount: Scalars['Int'];
  autoactivation: Scalars['Int'];
  blockSize: Scalars['Int'];
  buttonColor: Scalars['Int'];
  description_en: Scalars['Int'];
  description_ru: Scalars['Int'];
  discount: Scalars['Int'];
  height: Scalars['Int'];
  hidden: Scalars['Int'];
  iconButton: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  isBackgroundColor: Scalars['Int'];
  isBackgroundImage: Scalars['Int'];
  isChangeAmount: Scalars['Int'];
  maxCountOfSale: Scalars['Int'];
  nameID: Scalars['Int'];
  name_en: Scalars['Int'];
  name_ru: Scalars['Int'];
  number: Scalars['Int'];
  price: Scalars['Int'];
  productContent: Scalars['Int'];
  saleDeadline: Scalars['Int'];
  saleDiscount: Scalars['Int'];
  serverTypeId: Scalars['Int'];
  textButton: Scalars['Int'];
  textButton_en: Scalars['Int'];
  type: Scalars['Int'];
};

export type ProductCountOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  autoactivation?: Maybe<SortOrder>;
  blockSize?: Maybe<SortOrder>;
  buttonColor?: Maybe<SortOrder>;
  description_en?: Maybe<SortOrder>;
  description_ru?: Maybe<SortOrder>;
  discount?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  hidden?: Maybe<SortOrder>;
  iconButton?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  isBackgroundColor?: Maybe<SortOrder>;
  isBackgroundImage?: Maybe<SortOrder>;
  isChangeAmount?: Maybe<SortOrder>;
  maxCountOfSale?: Maybe<SortOrder>;
  nameID?: Maybe<SortOrder>;
  name_en?: Maybe<SortOrder>;
  name_ru?: Maybe<SortOrder>;
  number?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  productContent?: Maybe<SortOrder>;
  saleDeadline?: Maybe<SortOrder>;
  saleDiscount?: Maybe<SortOrder>;
  serverTypeId?: Maybe<SortOrder>;
  textButton?: Maybe<SortOrder>;
  textButton_en?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
};

export type ProductCountOutputType = {
  __typename?: 'ProductCountOutputType';
  Inventory: Scalars['Int'];
  Purchase: Scalars['Int'];
};

export type ProductCreateInput = {
  Inventory?: Maybe<InventoryCreateNestedManyWithoutProductInput>;
  Purchase?: Maybe<PurchaseCreateNestedManyWithoutProductInput>;
  amount?: Maybe<Scalars['Int']>;
  autoactivation?: Maybe<Scalars['Boolean']>;
  blockSize?: Maybe<Scalars['Int']>;
  buttonColor?: Maybe<EButtonColor>;
  description_en?: Maybe<Scalars['String']>;
  description_ru?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  hidden?: Maybe<Scalars['Boolean']>;
  iconButton?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  isBackgroundColor?: Maybe<Scalars['Boolean']>;
  isBackgroundImage?: Maybe<Scalars['Boolean']>;
  isChangeAmount?: Maybe<Scalars['Boolean']>;
  maxCountOfSale?: Maybe<Scalars['Int']>;
  nameID?: Maybe<Scalars['String']>;
  name_en: Scalars['String'];
  name_ru: Scalars['String'];
  number?: Maybe<Scalars['Int']>;
  price: Scalars['Int'];
  productContent?: Maybe<Scalars['Json']>;
  saleDeadline?: Maybe<Scalars['DateTime']>;
  saleDiscount?: Maybe<Scalars['Int']>;
  serverType?: Maybe<ServerTypeCreateNestedOneWithoutProductInput>;
  textButton?: Maybe<Scalars['String']>;
  textButton_en?: Maybe<Scalars['String']>;
  type?: Maybe<ETypeOfProduct>;
};

export type ProductCreateManyInput = {
  amount?: Maybe<Scalars['Int']>;
  autoactivation?: Maybe<Scalars['Boolean']>;
  blockSize?: Maybe<Scalars['Int']>;
  buttonColor?: Maybe<EButtonColor>;
  description_en?: Maybe<Scalars['String']>;
  description_ru?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  hidden?: Maybe<Scalars['Boolean']>;
  iconButton?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  isBackgroundColor?: Maybe<Scalars['Boolean']>;
  isBackgroundImage?: Maybe<Scalars['Boolean']>;
  isChangeAmount?: Maybe<Scalars['Boolean']>;
  maxCountOfSale?: Maybe<Scalars['Int']>;
  nameID?: Maybe<Scalars['String']>;
  name_en: Scalars['String'];
  name_ru: Scalars['String'];
  number?: Maybe<Scalars['Int']>;
  price: Scalars['Int'];
  productContent?: Maybe<Scalars['Json']>;
  saleDeadline?: Maybe<Scalars['DateTime']>;
  saleDiscount?: Maybe<Scalars['Int']>;
  serverTypeId?: Maybe<Scalars['Int']>;
  textButton?: Maybe<Scalars['String']>;
  textButton_en?: Maybe<Scalars['String']>;
  type?: Maybe<ETypeOfProduct>;
};

export type ProductCreateManyServerTypeInput = {
  amount?: Maybe<Scalars['Int']>;
  autoactivation?: Maybe<Scalars['Boolean']>;
  blockSize?: Maybe<Scalars['Int']>;
  buttonColor?: Maybe<EButtonColor>;
  description_en?: Maybe<Scalars['String']>;
  description_ru?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  hidden?: Maybe<Scalars['Boolean']>;
  iconButton?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  isBackgroundColor?: Maybe<Scalars['Boolean']>;
  isBackgroundImage?: Maybe<Scalars['Boolean']>;
  isChangeAmount?: Maybe<Scalars['Boolean']>;
  maxCountOfSale?: Maybe<Scalars['Int']>;
  nameID?: Maybe<Scalars['String']>;
  name_en: Scalars['String'];
  name_ru: Scalars['String'];
  number?: Maybe<Scalars['Int']>;
  price: Scalars['Int'];
  productContent?: Maybe<Scalars['Json']>;
  saleDeadline?: Maybe<Scalars['DateTime']>;
  saleDiscount?: Maybe<Scalars['Int']>;
  textButton?: Maybe<Scalars['String']>;
  textButton_en?: Maybe<Scalars['String']>;
  type?: Maybe<ETypeOfProduct>;
};

export type ProductCreateManyServerTypeInputEnvelope = {
  data: ProductCreateManyServerTypeInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductCreateNestedManyWithoutServerTypeInput = {
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProductCreateOrConnectWithoutServerTypeInput>>>;
  create?: Maybe<Array<Maybe<ProductCreateWithoutServerTypeInput>>>;
  createMany?: Maybe<ProductCreateManyServerTypeInputEnvelope>;
};

export type ProductCreateNestedOneWithoutInventoryInput = {
  connect?: Maybe<ProductWhereUniqueInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutInventoryInput>;
  create?: Maybe<ProductUncheckedCreateWithoutInventoryInput>;
};

export type ProductCreateNestedOneWithoutPurchaseInput = {
  connect?: Maybe<ProductWhereUniqueInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutPurchaseInput>;
  create?: Maybe<ProductUncheckedCreateWithoutPurchaseInput>;
};

export type ProductCreateOrConnectWithoutInventoryInput = {
  create: ProductUncheckedCreateWithoutInventoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutPurchaseInput = {
  create: ProductUncheckedCreateWithoutPurchaseInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutServerTypeInput = {
  create: ProductUncheckedCreateWithoutServerTypeInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateWithoutInventoryInput = {
  Purchase?: Maybe<PurchaseCreateNestedManyWithoutProductInput>;
  amount?: Maybe<Scalars['Int']>;
  autoactivation?: Maybe<Scalars['Boolean']>;
  blockSize?: Maybe<Scalars['Int']>;
  buttonColor?: Maybe<EButtonColor>;
  description_en?: Maybe<Scalars['String']>;
  description_ru?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  hidden?: Maybe<Scalars['Boolean']>;
  iconButton?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  isBackgroundColor?: Maybe<Scalars['Boolean']>;
  isBackgroundImage?: Maybe<Scalars['Boolean']>;
  isChangeAmount?: Maybe<Scalars['Boolean']>;
  maxCountOfSale?: Maybe<Scalars['Int']>;
  nameID?: Maybe<Scalars['String']>;
  name_en: Scalars['String'];
  name_ru: Scalars['String'];
  number?: Maybe<Scalars['Int']>;
  price: Scalars['Int'];
  productContent?: Maybe<Scalars['Json']>;
  saleDeadline?: Maybe<Scalars['DateTime']>;
  saleDiscount?: Maybe<Scalars['Int']>;
  serverType?: Maybe<ServerTypeCreateNestedOneWithoutProductInput>;
  textButton?: Maybe<Scalars['String']>;
  textButton_en?: Maybe<Scalars['String']>;
  type?: Maybe<ETypeOfProduct>;
};

export type ProductCreateWithoutPurchaseInput = {
  Inventory?: Maybe<InventoryCreateNestedManyWithoutProductInput>;
  amount?: Maybe<Scalars['Int']>;
  autoactivation?: Maybe<Scalars['Boolean']>;
  blockSize?: Maybe<Scalars['Int']>;
  buttonColor?: Maybe<EButtonColor>;
  description_en?: Maybe<Scalars['String']>;
  description_ru?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  hidden?: Maybe<Scalars['Boolean']>;
  iconButton?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  isBackgroundColor?: Maybe<Scalars['Boolean']>;
  isBackgroundImage?: Maybe<Scalars['Boolean']>;
  isChangeAmount?: Maybe<Scalars['Boolean']>;
  maxCountOfSale?: Maybe<Scalars['Int']>;
  nameID?: Maybe<Scalars['String']>;
  name_en: Scalars['String'];
  name_ru: Scalars['String'];
  number?: Maybe<Scalars['Int']>;
  price: Scalars['Int'];
  productContent?: Maybe<Scalars['Json']>;
  saleDeadline?: Maybe<Scalars['DateTime']>;
  saleDiscount?: Maybe<Scalars['Int']>;
  serverType?: Maybe<ServerTypeCreateNestedOneWithoutProductInput>;
  textButton?: Maybe<Scalars['String']>;
  textButton_en?: Maybe<Scalars['String']>;
  type?: Maybe<ETypeOfProduct>;
};

export type ProductCreateWithoutServerTypeInput = {
  Inventory?: Maybe<InventoryCreateNestedManyWithoutProductInput>;
  Purchase?: Maybe<PurchaseCreateNestedManyWithoutProductInput>;
  amount?: Maybe<Scalars['Int']>;
  autoactivation?: Maybe<Scalars['Boolean']>;
  blockSize?: Maybe<Scalars['Int']>;
  buttonColor?: Maybe<EButtonColor>;
  description_en?: Maybe<Scalars['String']>;
  description_ru?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  hidden?: Maybe<Scalars['Boolean']>;
  iconButton?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  isBackgroundColor?: Maybe<Scalars['Boolean']>;
  isBackgroundImage?: Maybe<Scalars['Boolean']>;
  isChangeAmount?: Maybe<Scalars['Boolean']>;
  maxCountOfSale?: Maybe<Scalars['Int']>;
  nameID?: Maybe<Scalars['String']>;
  name_en: Scalars['String'];
  name_ru: Scalars['String'];
  number?: Maybe<Scalars['Int']>;
  price: Scalars['Int'];
  productContent?: Maybe<Scalars['Json']>;
  saleDeadline?: Maybe<Scalars['DateTime']>;
  saleDiscount?: Maybe<Scalars['Int']>;
  textButton?: Maybe<Scalars['String']>;
  textButton_en?: Maybe<Scalars['String']>;
  type?: Maybe<ETypeOfProduct>;
};

export type ProductListRelationFilter = {
  every?: Maybe<ProductWhereInput>;
  none?: Maybe<ProductWhereInput>;
  some?: Maybe<ProductWhereInput>;
};

export type ProductMaxAggregateOutputType = {
  __typename?: 'ProductMaxAggregateOutputType';
  amount?: Maybe<Scalars['Int']>;
  autoactivation?: Maybe<Scalars['Boolean']>;
  blockSize?: Maybe<Scalars['Int']>;
  buttonColor?: Maybe<EButtonColor>;
  description_en?: Maybe<Scalars['String']>;
  description_ru?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  hidden?: Maybe<Scalars['Boolean']>;
  iconButton?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  isBackgroundColor?: Maybe<Scalars['Boolean']>;
  isBackgroundImage?: Maybe<Scalars['Boolean']>;
  isChangeAmount?: Maybe<Scalars['Boolean']>;
  maxCountOfSale?: Maybe<Scalars['Int']>;
  nameID?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  name_ru?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  saleDeadline?: Maybe<Scalars['DateTime']>;
  saleDiscount?: Maybe<Scalars['Int']>;
  serverTypeId?: Maybe<Scalars['Int']>;
  textButton?: Maybe<Scalars['String']>;
  textButton_en?: Maybe<Scalars['String']>;
  type?: Maybe<ETypeOfProduct>;
};

export type ProductMaxOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  autoactivation?: Maybe<SortOrder>;
  blockSize?: Maybe<SortOrder>;
  buttonColor?: Maybe<SortOrder>;
  description_en?: Maybe<SortOrder>;
  description_ru?: Maybe<SortOrder>;
  discount?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  hidden?: Maybe<SortOrder>;
  iconButton?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  isBackgroundColor?: Maybe<SortOrder>;
  isBackgroundImage?: Maybe<SortOrder>;
  isChangeAmount?: Maybe<SortOrder>;
  maxCountOfSale?: Maybe<SortOrder>;
  nameID?: Maybe<SortOrder>;
  name_en?: Maybe<SortOrder>;
  name_ru?: Maybe<SortOrder>;
  number?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  saleDeadline?: Maybe<SortOrder>;
  saleDiscount?: Maybe<SortOrder>;
  serverTypeId?: Maybe<SortOrder>;
  textButton?: Maybe<SortOrder>;
  textButton_en?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
};

export type ProductMinAggregateOutputType = {
  __typename?: 'ProductMinAggregateOutputType';
  amount?: Maybe<Scalars['Int']>;
  autoactivation?: Maybe<Scalars['Boolean']>;
  blockSize?: Maybe<Scalars['Int']>;
  buttonColor?: Maybe<EButtonColor>;
  description_en?: Maybe<Scalars['String']>;
  description_ru?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  hidden?: Maybe<Scalars['Boolean']>;
  iconButton?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  isBackgroundColor?: Maybe<Scalars['Boolean']>;
  isBackgroundImage?: Maybe<Scalars['Boolean']>;
  isChangeAmount?: Maybe<Scalars['Boolean']>;
  maxCountOfSale?: Maybe<Scalars['Int']>;
  nameID?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  name_ru?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  saleDeadline?: Maybe<Scalars['DateTime']>;
  saleDiscount?: Maybe<Scalars['Int']>;
  serverTypeId?: Maybe<Scalars['Int']>;
  textButton?: Maybe<Scalars['String']>;
  textButton_en?: Maybe<Scalars['String']>;
  type?: Maybe<ETypeOfProduct>;
};

export type ProductMinOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  autoactivation?: Maybe<SortOrder>;
  blockSize?: Maybe<SortOrder>;
  buttonColor?: Maybe<SortOrder>;
  description_en?: Maybe<SortOrder>;
  description_ru?: Maybe<SortOrder>;
  discount?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  hidden?: Maybe<SortOrder>;
  iconButton?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  isBackgroundColor?: Maybe<SortOrder>;
  isBackgroundImage?: Maybe<SortOrder>;
  isChangeAmount?: Maybe<SortOrder>;
  maxCountOfSale?: Maybe<SortOrder>;
  nameID?: Maybe<SortOrder>;
  name_en?: Maybe<SortOrder>;
  name_ru?: Maybe<SortOrder>;
  number?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  saleDeadline?: Maybe<SortOrder>;
  saleDiscount?: Maybe<SortOrder>;
  serverTypeId?: Maybe<SortOrder>;
  textButton?: Maybe<SortOrder>;
  textButton_en?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
};

export type ProductOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type ProductOrderByWithAggregationInput = {
  _avg?: Maybe<ProductAvgOrderByAggregateInput>;
  _count?: Maybe<ProductCountOrderByAggregateInput>;
  _max?: Maybe<ProductMaxOrderByAggregateInput>;
  _min?: Maybe<ProductMinOrderByAggregateInput>;
  _sum?: Maybe<ProductSumOrderByAggregateInput>;
  amount?: Maybe<SortOrder>;
  autoactivation?: Maybe<SortOrder>;
  blockSize?: Maybe<SortOrder>;
  buttonColor?: Maybe<SortOrder>;
  description_en?: Maybe<SortOrder>;
  description_ru?: Maybe<SortOrder>;
  discount?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  hidden?: Maybe<SortOrder>;
  iconButton?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  isBackgroundColor?: Maybe<SortOrder>;
  isBackgroundImage?: Maybe<SortOrder>;
  isChangeAmount?: Maybe<SortOrder>;
  maxCountOfSale?: Maybe<SortOrder>;
  nameID?: Maybe<SortOrder>;
  name_en?: Maybe<SortOrder>;
  name_ru?: Maybe<SortOrder>;
  number?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  productContent?: Maybe<SortOrder>;
  saleDeadline?: Maybe<SortOrder>;
  saleDiscount?: Maybe<SortOrder>;
  serverTypeId?: Maybe<SortOrder>;
  textButton?: Maybe<SortOrder>;
  textButton_en?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
};

export type ProductOrderByWithRelationInput = {
  Inventory?: Maybe<InventoryOrderByRelationAggregateInput>;
  Purchase?: Maybe<PurchaseOrderByRelationAggregateInput>;
  amount?: Maybe<SortOrder>;
  autoactivation?: Maybe<SortOrder>;
  blockSize?: Maybe<SortOrder>;
  buttonColor?: Maybe<SortOrder>;
  description_en?: Maybe<SortOrder>;
  description_ru?: Maybe<SortOrder>;
  discount?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  hidden?: Maybe<SortOrder>;
  iconButton?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  isBackgroundColor?: Maybe<SortOrder>;
  isBackgroundImage?: Maybe<SortOrder>;
  isChangeAmount?: Maybe<SortOrder>;
  maxCountOfSale?: Maybe<SortOrder>;
  nameID?: Maybe<SortOrder>;
  name_en?: Maybe<SortOrder>;
  name_ru?: Maybe<SortOrder>;
  number?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  productContent?: Maybe<SortOrder>;
  saleDeadline?: Maybe<SortOrder>;
  saleDiscount?: Maybe<SortOrder>;
  serverType?: Maybe<ServerTypeOrderByWithRelationInput>;
  serverTypeId?: Maybe<SortOrder>;
  textButton?: Maybe<SortOrder>;
  textButton_en?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
};

export type ProductRelationFilter = {
  is?: Maybe<ProductWhereInput>;
  isNot?: Maybe<ProductWhereInput>;
};

export enum ProductScalarFieldEnum {
  Amount = 'amount',
  Autoactivation = 'autoactivation',
  BlockSize = 'blockSize',
  ButtonColor = 'buttonColor',
  DescriptionEn = 'description_en',
  DescriptionRu = 'description_ru',
  Discount = 'discount',
  Height = 'height',
  Hidden = 'hidden',
  IconButton = 'iconButton',
  Id = 'id',
  Image = 'image',
  IsBackgroundColor = 'isBackgroundColor',
  IsBackgroundImage = 'isBackgroundImage',
  IsChangeAmount = 'isChangeAmount',
  MaxCountOfSale = 'maxCountOfSale',
  NameId = 'nameID',
  NameEn = 'name_en',
  NameRu = 'name_ru',
  Number = 'number',
  Price = 'price',
  ProductContent = 'productContent',
  SaleDeadline = 'saleDeadline',
  SaleDiscount = 'saleDiscount',
  ServerTypeId = 'serverTypeId',
  TextButton = 'textButton',
  TextButtonEn = 'textButton_en',
  Type = 'type'
}

export type ProductScalarWhereInput = {
  AND?: Maybe<Array<Maybe<ProductScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ProductScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<ProductScalarWhereInput>>>;
  amount?: Maybe<IntFilter>;
  autoactivation?: Maybe<BoolFilter>;
  blockSize?: Maybe<IntFilter>;
  buttonColor?: Maybe<EnumEButtonColorFilter>;
  description_en?: Maybe<StringNullableFilter>;
  description_ru?: Maybe<StringNullableFilter>;
  discount?: Maybe<IntNullableFilter>;
  height?: Maybe<IntNullableFilter>;
  hidden?: Maybe<BoolFilter>;
  iconButton?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  image?: Maybe<StringNullableFilter>;
  isBackgroundColor?: Maybe<BoolFilter>;
  isBackgroundImage?: Maybe<BoolFilter>;
  isChangeAmount?: Maybe<BoolFilter>;
  maxCountOfSale?: Maybe<IntNullableFilter>;
  nameID?: Maybe<StringNullableFilter>;
  name_en?: Maybe<StringFilter>;
  name_ru?: Maybe<StringFilter>;
  number?: Maybe<IntNullableFilter>;
  price?: Maybe<IntFilter>;
  productContent?: Maybe<JsonNullableFilter>;
  saleDeadline?: Maybe<DateTimeNullableFilter>;
  saleDiscount?: Maybe<IntNullableFilter>;
  serverTypeId?: Maybe<IntNullableFilter>;
  textButton?: Maybe<StringNullableFilter>;
  textButton_en?: Maybe<StringNullableFilter>;
  type?: Maybe<EnumETypeOfProductFilter>;
};

export type ProductScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<ProductScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<ProductScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<ProductScalarWhereWithAggregatesInput>>>;
  amount?: Maybe<IntWithAggregatesFilter>;
  autoactivation?: Maybe<BoolWithAggregatesFilter>;
  blockSize?: Maybe<IntWithAggregatesFilter>;
  buttonColor?: Maybe<EnumEButtonColorWithAggregatesFilter>;
  description_en?: Maybe<StringNullableWithAggregatesFilter>;
  description_ru?: Maybe<StringNullableWithAggregatesFilter>;
  discount?: Maybe<IntNullableWithAggregatesFilter>;
  height?: Maybe<IntNullableWithAggregatesFilter>;
  hidden?: Maybe<BoolWithAggregatesFilter>;
  iconButton?: Maybe<StringNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  image?: Maybe<StringNullableWithAggregatesFilter>;
  isBackgroundColor?: Maybe<BoolWithAggregatesFilter>;
  isBackgroundImage?: Maybe<BoolWithAggregatesFilter>;
  isChangeAmount?: Maybe<BoolWithAggregatesFilter>;
  maxCountOfSale?: Maybe<IntNullableWithAggregatesFilter>;
  nameID?: Maybe<StringNullableWithAggregatesFilter>;
  name_en?: Maybe<StringWithAggregatesFilter>;
  name_ru?: Maybe<StringWithAggregatesFilter>;
  number?: Maybe<IntNullableWithAggregatesFilter>;
  price?: Maybe<IntWithAggregatesFilter>;
  productContent?: Maybe<JsonNullableWithAggregatesFilter>;
  saleDeadline?: Maybe<DateTimeNullableWithAggregatesFilter>;
  saleDiscount?: Maybe<IntNullableWithAggregatesFilter>;
  serverTypeId?: Maybe<IntNullableWithAggregatesFilter>;
  textButton?: Maybe<StringNullableWithAggregatesFilter>;
  textButton_en?: Maybe<StringNullableWithAggregatesFilter>;
  type?: Maybe<EnumETypeOfProductWithAggregatesFilter>;
};

export type ProductSumAggregateOutputType = {
  __typename?: 'ProductSumAggregateOutputType';
  amount?: Maybe<Scalars['Int']>;
  blockSize?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  maxCountOfSale?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  saleDiscount?: Maybe<Scalars['Int']>;
  serverTypeId?: Maybe<Scalars['Int']>;
};

export type ProductSumOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  blockSize?: Maybe<SortOrder>;
  discount?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  maxCountOfSale?: Maybe<SortOrder>;
  number?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  saleDiscount?: Maybe<SortOrder>;
  serverTypeId?: Maybe<SortOrder>;
};

export type ProductUncheckedCreateInput = {
  Inventory?: Maybe<InventoryUncheckedCreateNestedManyWithoutProductInput>;
  Purchase?: Maybe<PurchaseUncheckedCreateNestedManyWithoutProductInput>;
  amount?: Maybe<Scalars['Int']>;
  autoactivation?: Maybe<Scalars['Boolean']>;
  blockSize?: Maybe<Scalars['Int']>;
  buttonColor?: Maybe<EButtonColor>;
  description_en?: Maybe<Scalars['String']>;
  description_ru?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  hidden?: Maybe<Scalars['Boolean']>;
  iconButton?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  isBackgroundColor?: Maybe<Scalars['Boolean']>;
  isBackgroundImage?: Maybe<Scalars['Boolean']>;
  isChangeAmount?: Maybe<Scalars['Boolean']>;
  maxCountOfSale?: Maybe<Scalars['Int']>;
  nameID?: Maybe<Scalars['String']>;
  name_en: Scalars['String'];
  name_ru: Scalars['String'];
  number?: Maybe<Scalars['Int']>;
  price: Scalars['Int'];
  productContent?: Maybe<Scalars['Json']>;
  saleDeadline?: Maybe<Scalars['DateTime']>;
  saleDiscount?: Maybe<Scalars['Int']>;
  serverTypeId?: Maybe<Scalars['Int']>;
  textButton?: Maybe<Scalars['String']>;
  textButton_en?: Maybe<Scalars['String']>;
  type?: Maybe<ETypeOfProduct>;
};

export type ProductUncheckedCreateNestedManyWithoutServerTypeInput = {
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProductCreateOrConnectWithoutServerTypeInput>>>;
  create?: Maybe<Array<Maybe<ProductCreateWithoutServerTypeInput>>>;
  createMany?: Maybe<ProductCreateManyServerTypeInputEnvelope>;
};

export type ProductUncheckedCreateWithoutInventoryInput = {
  Purchase?: Maybe<PurchaseUncheckedCreateNestedManyWithoutProductInput>;
  amount?: Maybe<Scalars['Int']>;
  autoactivation?: Maybe<Scalars['Boolean']>;
  blockSize?: Maybe<Scalars['Int']>;
  buttonColor?: Maybe<EButtonColor>;
  description_en?: Maybe<Scalars['String']>;
  description_ru?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  hidden?: Maybe<Scalars['Boolean']>;
  iconButton?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  isBackgroundColor?: Maybe<Scalars['Boolean']>;
  isBackgroundImage?: Maybe<Scalars['Boolean']>;
  isChangeAmount?: Maybe<Scalars['Boolean']>;
  maxCountOfSale?: Maybe<Scalars['Int']>;
  nameID?: Maybe<Scalars['String']>;
  name_en: Scalars['String'];
  name_ru: Scalars['String'];
  number?: Maybe<Scalars['Int']>;
  price: Scalars['Int'];
  productContent?: Maybe<Scalars['Json']>;
  saleDeadline?: Maybe<Scalars['DateTime']>;
  saleDiscount?: Maybe<Scalars['Int']>;
  serverTypeId?: Maybe<Scalars['Int']>;
  textButton?: Maybe<Scalars['String']>;
  textButton_en?: Maybe<Scalars['String']>;
  type?: Maybe<ETypeOfProduct>;
};

export type ProductUncheckedCreateWithoutPurchaseInput = {
  Inventory?: Maybe<InventoryUncheckedCreateNestedManyWithoutProductInput>;
  amount?: Maybe<Scalars['Int']>;
  autoactivation?: Maybe<Scalars['Boolean']>;
  blockSize?: Maybe<Scalars['Int']>;
  buttonColor?: Maybe<EButtonColor>;
  description_en?: Maybe<Scalars['String']>;
  description_ru?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  hidden?: Maybe<Scalars['Boolean']>;
  iconButton?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  isBackgroundColor?: Maybe<Scalars['Boolean']>;
  isBackgroundImage?: Maybe<Scalars['Boolean']>;
  isChangeAmount?: Maybe<Scalars['Boolean']>;
  maxCountOfSale?: Maybe<Scalars['Int']>;
  nameID?: Maybe<Scalars['String']>;
  name_en: Scalars['String'];
  name_ru: Scalars['String'];
  number?: Maybe<Scalars['Int']>;
  price: Scalars['Int'];
  productContent?: Maybe<Scalars['Json']>;
  saleDeadline?: Maybe<Scalars['DateTime']>;
  saleDiscount?: Maybe<Scalars['Int']>;
  serverTypeId?: Maybe<Scalars['Int']>;
  textButton?: Maybe<Scalars['String']>;
  textButton_en?: Maybe<Scalars['String']>;
  type?: Maybe<ETypeOfProduct>;
};

export type ProductUncheckedCreateWithoutServerTypeInput = {
  Inventory?: Maybe<InventoryUncheckedCreateNestedManyWithoutProductInput>;
  Purchase?: Maybe<PurchaseUncheckedCreateNestedManyWithoutProductInput>;
  amount?: Maybe<Scalars['Int']>;
  autoactivation?: Maybe<Scalars['Boolean']>;
  blockSize?: Maybe<Scalars['Int']>;
  buttonColor?: Maybe<EButtonColor>;
  description_en?: Maybe<Scalars['String']>;
  description_ru?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  hidden?: Maybe<Scalars['Boolean']>;
  iconButton?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  isBackgroundColor?: Maybe<Scalars['Boolean']>;
  isBackgroundImage?: Maybe<Scalars['Boolean']>;
  isChangeAmount?: Maybe<Scalars['Boolean']>;
  maxCountOfSale?: Maybe<Scalars['Int']>;
  nameID?: Maybe<Scalars['String']>;
  name_en: Scalars['String'];
  name_ru: Scalars['String'];
  number?: Maybe<Scalars['Int']>;
  price: Scalars['Int'];
  productContent?: Maybe<Scalars['Json']>;
  saleDeadline?: Maybe<Scalars['DateTime']>;
  saleDiscount?: Maybe<Scalars['Int']>;
  textButton?: Maybe<Scalars['String']>;
  textButton_en?: Maybe<Scalars['String']>;
  type?: Maybe<ETypeOfProduct>;
};

export type ProductUncheckedUpdateInput = {
  Inventory?: Maybe<InventoryUncheckedUpdateManyWithoutProductInput>;
  Purchase?: Maybe<PurchaseUncheckedUpdateManyWithoutProductInput>;
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  autoactivation?: Maybe<BoolFieldUpdateOperationsInput>;
  blockSize?: Maybe<IntFieldUpdateOperationsInput>;
  buttonColor?: Maybe<EnumEButtonColorFieldUpdateOperationsInput>;
  description_en?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description_ru?: Maybe<NullableStringFieldUpdateOperationsInput>;
  discount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  height?: Maybe<NullableIntFieldUpdateOperationsInput>;
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  iconButton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isBackgroundColor?: Maybe<BoolFieldUpdateOperationsInput>;
  isBackgroundImage?: Maybe<BoolFieldUpdateOperationsInput>;
  isChangeAmount?: Maybe<BoolFieldUpdateOperationsInput>;
  maxCountOfSale?: Maybe<NullableIntFieldUpdateOperationsInput>;
  nameID?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name_en?: Maybe<StringFieldUpdateOperationsInput>;
  name_ru?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<NullableIntFieldUpdateOperationsInput>;
  price?: Maybe<IntFieldUpdateOperationsInput>;
  productContent?: Maybe<Scalars['Json']>;
  saleDeadline?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleDiscount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  serverTypeId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  textButton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  textButton_en?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumETypeOfProductFieldUpdateOperationsInput>;
};

export type ProductUncheckedUpdateManyInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  autoactivation?: Maybe<BoolFieldUpdateOperationsInput>;
  blockSize?: Maybe<IntFieldUpdateOperationsInput>;
  buttonColor?: Maybe<EnumEButtonColorFieldUpdateOperationsInput>;
  description_en?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description_ru?: Maybe<NullableStringFieldUpdateOperationsInput>;
  discount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  height?: Maybe<NullableIntFieldUpdateOperationsInput>;
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  iconButton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isBackgroundColor?: Maybe<BoolFieldUpdateOperationsInput>;
  isBackgroundImage?: Maybe<BoolFieldUpdateOperationsInput>;
  isChangeAmount?: Maybe<BoolFieldUpdateOperationsInput>;
  maxCountOfSale?: Maybe<NullableIntFieldUpdateOperationsInput>;
  nameID?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name_en?: Maybe<StringFieldUpdateOperationsInput>;
  name_ru?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<NullableIntFieldUpdateOperationsInput>;
  price?: Maybe<IntFieldUpdateOperationsInput>;
  productContent?: Maybe<Scalars['Json']>;
  saleDeadline?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleDiscount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  serverTypeId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  textButton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  textButton_en?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumETypeOfProductFieldUpdateOperationsInput>;
};

export type ProductUncheckedUpdateManyWithoutProductInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  autoactivation?: Maybe<BoolFieldUpdateOperationsInput>;
  blockSize?: Maybe<IntFieldUpdateOperationsInput>;
  buttonColor?: Maybe<EnumEButtonColorFieldUpdateOperationsInput>;
  description_en?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description_ru?: Maybe<NullableStringFieldUpdateOperationsInput>;
  discount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  height?: Maybe<NullableIntFieldUpdateOperationsInput>;
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  iconButton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isBackgroundColor?: Maybe<BoolFieldUpdateOperationsInput>;
  isBackgroundImage?: Maybe<BoolFieldUpdateOperationsInput>;
  isChangeAmount?: Maybe<BoolFieldUpdateOperationsInput>;
  maxCountOfSale?: Maybe<NullableIntFieldUpdateOperationsInput>;
  nameID?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name_en?: Maybe<StringFieldUpdateOperationsInput>;
  name_ru?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<NullableIntFieldUpdateOperationsInput>;
  price?: Maybe<IntFieldUpdateOperationsInput>;
  productContent?: Maybe<Scalars['Json']>;
  saleDeadline?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleDiscount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  textButton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  textButton_en?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumETypeOfProductFieldUpdateOperationsInput>;
};

export type ProductUncheckedUpdateManyWithoutServerTypeInput = {
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProductCreateOrConnectWithoutServerTypeInput>>>;
  create?: Maybe<Array<Maybe<ProductCreateWithoutServerTypeInput>>>;
  createMany?: Maybe<ProductCreateManyServerTypeInputEnvelope>;
  delete?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ProductScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ProductUpdateWithWhereUniqueWithoutServerTypeInput>>>;
  updateMany?: Maybe<Array<Maybe<ProductUpdateManyWithWhereWithoutServerTypeInput>>>;
  upsert?: Maybe<Array<Maybe<ProductUpsertWithWhereUniqueWithoutServerTypeInput>>>;
};

export type ProductUncheckedUpdateWithoutInventoryInput = {
  Purchase?: Maybe<PurchaseUncheckedUpdateManyWithoutProductInput>;
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  autoactivation?: Maybe<BoolFieldUpdateOperationsInput>;
  blockSize?: Maybe<IntFieldUpdateOperationsInput>;
  buttonColor?: Maybe<EnumEButtonColorFieldUpdateOperationsInput>;
  description_en?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description_ru?: Maybe<NullableStringFieldUpdateOperationsInput>;
  discount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  height?: Maybe<NullableIntFieldUpdateOperationsInput>;
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  iconButton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isBackgroundColor?: Maybe<BoolFieldUpdateOperationsInput>;
  isBackgroundImage?: Maybe<BoolFieldUpdateOperationsInput>;
  isChangeAmount?: Maybe<BoolFieldUpdateOperationsInput>;
  maxCountOfSale?: Maybe<NullableIntFieldUpdateOperationsInput>;
  nameID?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name_en?: Maybe<StringFieldUpdateOperationsInput>;
  name_ru?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<NullableIntFieldUpdateOperationsInput>;
  price?: Maybe<IntFieldUpdateOperationsInput>;
  productContent?: Maybe<Scalars['Json']>;
  saleDeadline?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleDiscount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  serverTypeId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  textButton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  textButton_en?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumETypeOfProductFieldUpdateOperationsInput>;
};

export type ProductUncheckedUpdateWithoutPurchaseInput = {
  Inventory?: Maybe<InventoryUncheckedUpdateManyWithoutProductInput>;
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  autoactivation?: Maybe<BoolFieldUpdateOperationsInput>;
  blockSize?: Maybe<IntFieldUpdateOperationsInput>;
  buttonColor?: Maybe<EnumEButtonColorFieldUpdateOperationsInput>;
  description_en?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description_ru?: Maybe<NullableStringFieldUpdateOperationsInput>;
  discount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  height?: Maybe<NullableIntFieldUpdateOperationsInput>;
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  iconButton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isBackgroundColor?: Maybe<BoolFieldUpdateOperationsInput>;
  isBackgroundImage?: Maybe<BoolFieldUpdateOperationsInput>;
  isChangeAmount?: Maybe<BoolFieldUpdateOperationsInput>;
  maxCountOfSale?: Maybe<NullableIntFieldUpdateOperationsInput>;
  nameID?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name_en?: Maybe<StringFieldUpdateOperationsInput>;
  name_ru?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<NullableIntFieldUpdateOperationsInput>;
  price?: Maybe<IntFieldUpdateOperationsInput>;
  productContent?: Maybe<Scalars['Json']>;
  saleDeadline?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleDiscount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  serverTypeId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  textButton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  textButton_en?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumETypeOfProductFieldUpdateOperationsInput>;
};

export type ProductUncheckedUpdateWithoutServerTypeInput = {
  Inventory?: Maybe<InventoryUncheckedUpdateManyWithoutProductInput>;
  Purchase?: Maybe<PurchaseUncheckedUpdateManyWithoutProductInput>;
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  autoactivation?: Maybe<BoolFieldUpdateOperationsInput>;
  blockSize?: Maybe<IntFieldUpdateOperationsInput>;
  buttonColor?: Maybe<EnumEButtonColorFieldUpdateOperationsInput>;
  description_en?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description_ru?: Maybe<NullableStringFieldUpdateOperationsInput>;
  discount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  height?: Maybe<NullableIntFieldUpdateOperationsInput>;
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  iconButton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isBackgroundColor?: Maybe<BoolFieldUpdateOperationsInput>;
  isBackgroundImage?: Maybe<BoolFieldUpdateOperationsInput>;
  isChangeAmount?: Maybe<BoolFieldUpdateOperationsInput>;
  maxCountOfSale?: Maybe<NullableIntFieldUpdateOperationsInput>;
  nameID?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name_en?: Maybe<StringFieldUpdateOperationsInput>;
  name_ru?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<NullableIntFieldUpdateOperationsInput>;
  price?: Maybe<IntFieldUpdateOperationsInput>;
  productContent?: Maybe<Scalars['Json']>;
  saleDeadline?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleDiscount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  textButton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  textButton_en?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumETypeOfProductFieldUpdateOperationsInput>;
};

export type ProductUpdateInput = {
  Inventory?: Maybe<InventoryUpdateManyWithoutProductInput>;
  Purchase?: Maybe<PurchaseUpdateManyWithoutProductInput>;
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  autoactivation?: Maybe<BoolFieldUpdateOperationsInput>;
  blockSize?: Maybe<IntFieldUpdateOperationsInput>;
  buttonColor?: Maybe<EnumEButtonColorFieldUpdateOperationsInput>;
  description_en?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description_ru?: Maybe<NullableStringFieldUpdateOperationsInput>;
  discount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  height?: Maybe<NullableIntFieldUpdateOperationsInput>;
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  iconButton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isBackgroundColor?: Maybe<BoolFieldUpdateOperationsInput>;
  isBackgroundImage?: Maybe<BoolFieldUpdateOperationsInput>;
  isChangeAmount?: Maybe<BoolFieldUpdateOperationsInput>;
  maxCountOfSale?: Maybe<NullableIntFieldUpdateOperationsInput>;
  nameID?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name_en?: Maybe<StringFieldUpdateOperationsInput>;
  name_ru?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<NullableIntFieldUpdateOperationsInput>;
  price?: Maybe<IntFieldUpdateOperationsInput>;
  productContent?: Maybe<Scalars['Json']>;
  saleDeadline?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleDiscount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  serverType?: Maybe<ServerTypeUpdateOneWithoutProductInput>;
  textButton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  textButton_en?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumETypeOfProductFieldUpdateOperationsInput>;
};

export type ProductUpdateManyMutationInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  autoactivation?: Maybe<BoolFieldUpdateOperationsInput>;
  blockSize?: Maybe<IntFieldUpdateOperationsInput>;
  buttonColor?: Maybe<EnumEButtonColorFieldUpdateOperationsInput>;
  description_en?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description_ru?: Maybe<NullableStringFieldUpdateOperationsInput>;
  discount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  height?: Maybe<NullableIntFieldUpdateOperationsInput>;
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  iconButton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isBackgroundColor?: Maybe<BoolFieldUpdateOperationsInput>;
  isBackgroundImage?: Maybe<BoolFieldUpdateOperationsInput>;
  isChangeAmount?: Maybe<BoolFieldUpdateOperationsInput>;
  maxCountOfSale?: Maybe<NullableIntFieldUpdateOperationsInput>;
  nameID?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name_en?: Maybe<StringFieldUpdateOperationsInput>;
  name_ru?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<NullableIntFieldUpdateOperationsInput>;
  price?: Maybe<IntFieldUpdateOperationsInput>;
  productContent?: Maybe<Scalars['Json']>;
  saleDeadline?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleDiscount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  textButton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  textButton_en?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumETypeOfProductFieldUpdateOperationsInput>;
};

export type ProductUpdateManyWithWhereWithoutServerTypeInput = {
  data: ProductUncheckedUpdateManyWithoutProductInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithoutServerTypeInput = {
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProductCreateOrConnectWithoutServerTypeInput>>>;
  create?: Maybe<Array<Maybe<ProductCreateWithoutServerTypeInput>>>;
  createMany?: Maybe<ProductCreateManyServerTypeInputEnvelope>;
  delete?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ProductScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ProductUpdateWithWhereUniqueWithoutServerTypeInput>>>;
  updateMany?: Maybe<Array<Maybe<ProductUpdateManyWithWhereWithoutServerTypeInput>>>;
  upsert?: Maybe<Array<Maybe<ProductUpsertWithWhereUniqueWithoutServerTypeInput>>>;
};

export type ProductUpdateOneRequiredWithoutInventoryInput = {
  connect?: Maybe<ProductWhereUniqueInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutInventoryInput>;
  create?: Maybe<ProductUncheckedCreateWithoutInventoryInput>;
  update?: Maybe<ProductUncheckedUpdateWithoutInventoryInput>;
  upsert?: Maybe<ProductUpsertWithoutInventoryInput>;
};

export type ProductUpdateOneRequiredWithoutPurchaseInput = {
  connect?: Maybe<ProductWhereUniqueInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutPurchaseInput>;
  create?: Maybe<ProductUncheckedCreateWithoutPurchaseInput>;
  update?: Maybe<ProductUncheckedUpdateWithoutPurchaseInput>;
  upsert?: Maybe<ProductUpsertWithoutPurchaseInput>;
};

export type ProductUpdateWithWhereUniqueWithoutServerTypeInput = {
  data: ProductUncheckedUpdateWithoutServerTypeInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithoutInventoryInput = {
  Purchase?: Maybe<PurchaseUpdateManyWithoutProductInput>;
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  autoactivation?: Maybe<BoolFieldUpdateOperationsInput>;
  blockSize?: Maybe<IntFieldUpdateOperationsInput>;
  buttonColor?: Maybe<EnumEButtonColorFieldUpdateOperationsInput>;
  description_en?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description_ru?: Maybe<NullableStringFieldUpdateOperationsInput>;
  discount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  height?: Maybe<NullableIntFieldUpdateOperationsInput>;
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  iconButton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isBackgroundColor?: Maybe<BoolFieldUpdateOperationsInput>;
  isBackgroundImage?: Maybe<BoolFieldUpdateOperationsInput>;
  isChangeAmount?: Maybe<BoolFieldUpdateOperationsInput>;
  maxCountOfSale?: Maybe<NullableIntFieldUpdateOperationsInput>;
  nameID?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name_en?: Maybe<StringFieldUpdateOperationsInput>;
  name_ru?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<NullableIntFieldUpdateOperationsInput>;
  price?: Maybe<IntFieldUpdateOperationsInput>;
  productContent?: Maybe<Scalars['Json']>;
  saleDeadline?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleDiscount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  serverType?: Maybe<ServerTypeUpdateOneWithoutProductInput>;
  textButton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  textButton_en?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumETypeOfProductFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutPurchaseInput = {
  Inventory?: Maybe<InventoryUpdateManyWithoutProductInput>;
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  autoactivation?: Maybe<BoolFieldUpdateOperationsInput>;
  blockSize?: Maybe<IntFieldUpdateOperationsInput>;
  buttonColor?: Maybe<EnumEButtonColorFieldUpdateOperationsInput>;
  description_en?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description_ru?: Maybe<NullableStringFieldUpdateOperationsInput>;
  discount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  height?: Maybe<NullableIntFieldUpdateOperationsInput>;
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  iconButton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isBackgroundColor?: Maybe<BoolFieldUpdateOperationsInput>;
  isBackgroundImage?: Maybe<BoolFieldUpdateOperationsInput>;
  isChangeAmount?: Maybe<BoolFieldUpdateOperationsInput>;
  maxCountOfSale?: Maybe<NullableIntFieldUpdateOperationsInput>;
  nameID?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name_en?: Maybe<StringFieldUpdateOperationsInput>;
  name_ru?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<NullableIntFieldUpdateOperationsInput>;
  price?: Maybe<IntFieldUpdateOperationsInput>;
  productContent?: Maybe<Scalars['Json']>;
  saleDeadline?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleDiscount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  serverType?: Maybe<ServerTypeUpdateOneWithoutProductInput>;
  textButton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  textButton_en?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumETypeOfProductFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutServerTypeInput = {
  Inventory?: Maybe<InventoryUpdateManyWithoutProductInput>;
  Purchase?: Maybe<PurchaseUpdateManyWithoutProductInput>;
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  autoactivation?: Maybe<BoolFieldUpdateOperationsInput>;
  blockSize?: Maybe<IntFieldUpdateOperationsInput>;
  buttonColor?: Maybe<EnumEButtonColorFieldUpdateOperationsInput>;
  description_en?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description_ru?: Maybe<NullableStringFieldUpdateOperationsInput>;
  discount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  height?: Maybe<NullableIntFieldUpdateOperationsInput>;
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  iconButton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isBackgroundColor?: Maybe<BoolFieldUpdateOperationsInput>;
  isBackgroundImage?: Maybe<BoolFieldUpdateOperationsInput>;
  isChangeAmount?: Maybe<BoolFieldUpdateOperationsInput>;
  maxCountOfSale?: Maybe<NullableIntFieldUpdateOperationsInput>;
  nameID?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name_en?: Maybe<StringFieldUpdateOperationsInput>;
  name_ru?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<NullableIntFieldUpdateOperationsInput>;
  price?: Maybe<IntFieldUpdateOperationsInput>;
  productContent?: Maybe<Scalars['Json']>;
  saleDeadline?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleDiscount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  textButton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  textButton_en?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumETypeOfProductFieldUpdateOperationsInput>;
};

export type ProductUpsertWithWhereUniqueWithoutServerTypeInput = {
  create: ProductUncheckedCreateWithoutServerTypeInput;
  update: ProductUncheckedUpdateWithoutServerTypeInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithoutInventoryInput = {
  create: ProductUncheckedCreateWithoutInventoryInput;
  update: ProductUncheckedUpdateWithoutInventoryInput;
};

export type ProductUpsertWithoutPurchaseInput = {
  create: ProductUncheckedCreateWithoutPurchaseInput;
  update: ProductUncheckedUpdateWithoutPurchaseInput;
};

export type ProductWhereInput = {
  AND?: Maybe<Array<Maybe<ProductWhereInput>>>;
  Inventory?: Maybe<InventoryListRelationFilter>;
  NOT?: Maybe<Array<Maybe<ProductWhereInput>>>;
  OR?: Maybe<Array<Maybe<ProductWhereInput>>>;
  Purchase?: Maybe<PurchaseListRelationFilter>;
  amount?: Maybe<IntFilter>;
  autoactivation?: Maybe<BoolFilter>;
  blockSize?: Maybe<IntFilter>;
  buttonColor?: Maybe<EnumEButtonColorFilter>;
  description_en?: Maybe<StringNullableFilter>;
  description_ru?: Maybe<StringNullableFilter>;
  discount?: Maybe<IntNullableFilter>;
  height?: Maybe<IntNullableFilter>;
  hidden?: Maybe<BoolFilter>;
  iconButton?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  image?: Maybe<StringNullableFilter>;
  isBackgroundColor?: Maybe<BoolFilter>;
  isBackgroundImage?: Maybe<BoolFilter>;
  isChangeAmount?: Maybe<BoolFilter>;
  maxCountOfSale?: Maybe<IntNullableFilter>;
  nameID?: Maybe<StringNullableFilter>;
  name_en?: Maybe<StringFilter>;
  name_ru?: Maybe<StringFilter>;
  number?: Maybe<IntNullableFilter>;
  price?: Maybe<IntFilter>;
  productContent?: Maybe<JsonNullableFilter>;
  saleDeadline?: Maybe<DateTimeNullableFilter>;
  saleDiscount?: Maybe<IntNullableFilter>;
  serverType?: Maybe<ServerTypeWhereInput>;
  serverTypeId?: Maybe<IntNullableFilter>;
  textButton?: Maybe<StringNullableFilter>;
  textButton_en?: Maybe<StringNullableFilter>;
  type?: Maybe<EnumETypeOfProductFilter>;
};

export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Promocodes = {
  __typename?: 'Promocodes';
  countOfActivation: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  depositBonus?: Maybe<Scalars['Int']>;
  discountAmount?: Maybe<Scalars['Int']>;
  endDate: Scalars['DateTime'];
  groupId: Scalars['String'];
  id: Scalars['Int'];
  itemSet?: Maybe<Scalars['String']>;
  limitActivation: Scalars['Int'];
  name: Scalars['String'];
  plusBonusBalance?: Maybe<Scalars['Int']>;
  startDate: Scalars['DateTime'];
};

export type PromocodesAvgAggregateOutputType = {
  __typename?: 'PromocodesAvgAggregateOutputType';
  countOfActivation?: Maybe<Scalars['Float']>;
  depositBonus?: Maybe<Scalars['Float']>;
  discountAmount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  limitActivation?: Maybe<Scalars['Float']>;
  plusBonusBalance?: Maybe<Scalars['Float']>;
};

export type PromocodesAvgOrderByAggregateInput = {
  countOfActivation?: Maybe<SortOrder>;
  depositBonus?: Maybe<SortOrder>;
  discountAmount?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  limitActivation?: Maybe<SortOrder>;
  plusBonusBalance?: Maybe<SortOrder>;
};

export type PromocodesCountAggregateOutputType = {
  __typename?: 'PromocodesCountAggregateOutputType';
  _all: Scalars['Int'];
  countOfActivation: Scalars['Int'];
  createdAt: Scalars['Int'];
  depositBonus: Scalars['Int'];
  discountAmount: Scalars['Int'];
  endDate: Scalars['Int'];
  groupId: Scalars['Int'];
  id: Scalars['Int'];
  itemSet: Scalars['Int'];
  limitActivation: Scalars['Int'];
  name: Scalars['Int'];
  plusBonusBalance: Scalars['Int'];
  startDate: Scalars['Int'];
};

export type PromocodesCountOrderByAggregateInput = {
  countOfActivation?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  depositBonus?: Maybe<SortOrder>;
  discountAmount?: Maybe<SortOrder>;
  endDate?: Maybe<SortOrder>;
  groupId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  itemSet?: Maybe<SortOrder>;
  limitActivation?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  plusBonusBalance?: Maybe<SortOrder>;
  startDate?: Maybe<SortOrder>;
};

export type PromocodesCreateInput = {
  countOfActivation: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  depositBonus?: Maybe<Scalars['Int']>;
  discountAmount?: Maybe<Scalars['Int']>;
  endDate: Scalars['DateTime'];
  groupId?: Maybe<Scalars['String']>;
  itemSet?: Maybe<Scalars['String']>;
  limitActivation: Scalars['Int'];
  name: Scalars['String'];
  plusBonusBalance?: Maybe<Scalars['Int']>;
  startDate: Scalars['DateTime'];
};

export type PromocodesCreateManyInput = {
  countOfActivation: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  depositBonus?: Maybe<Scalars['Int']>;
  discountAmount?: Maybe<Scalars['Int']>;
  endDate: Scalars['DateTime'];
  groupId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  itemSet?: Maybe<Scalars['String']>;
  limitActivation: Scalars['Int'];
  name: Scalars['String'];
  plusBonusBalance?: Maybe<Scalars['Int']>;
  startDate: Scalars['DateTime'];
};

export type PromocodesMaxAggregateOutputType = {
  __typename?: 'PromocodesMaxAggregateOutputType';
  countOfActivation?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  depositBonus?: Maybe<Scalars['Int']>;
  discountAmount?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['DateTime']>;
  groupId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  itemSet?: Maybe<Scalars['String']>;
  limitActivation?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  plusBonusBalance?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['DateTime']>;
};

export type PromocodesMaxOrderByAggregateInput = {
  countOfActivation?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  depositBonus?: Maybe<SortOrder>;
  discountAmount?: Maybe<SortOrder>;
  endDate?: Maybe<SortOrder>;
  groupId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  itemSet?: Maybe<SortOrder>;
  limitActivation?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  plusBonusBalance?: Maybe<SortOrder>;
  startDate?: Maybe<SortOrder>;
};

export type PromocodesMinAggregateOutputType = {
  __typename?: 'PromocodesMinAggregateOutputType';
  countOfActivation?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  depositBonus?: Maybe<Scalars['Int']>;
  discountAmount?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['DateTime']>;
  groupId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  itemSet?: Maybe<Scalars['String']>;
  limitActivation?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  plusBonusBalance?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['DateTime']>;
};

export type PromocodesMinOrderByAggregateInput = {
  countOfActivation?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  depositBonus?: Maybe<SortOrder>;
  discountAmount?: Maybe<SortOrder>;
  endDate?: Maybe<SortOrder>;
  groupId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  itemSet?: Maybe<SortOrder>;
  limitActivation?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  plusBonusBalance?: Maybe<SortOrder>;
  startDate?: Maybe<SortOrder>;
};

export type PromocodesOrderByWithAggregationInput = {
  _avg?: Maybe<PromocodesAvgOrderByAggregateInput>;
  _count?: Maybe<PromocodesCountOrderByAggregateInput>;
  _max?: Maybe<PromocodesMaxOrderByAggregateInput>;
  _min?: Maybe<PromocodesMinOrderByAggregateInput>;
  _sum?: Maybe<PromocodesSumOrderByAggregateInput>;
  countOfActivation?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  depositBonus?: Maybe<SortOrder>;
  discountAmount?: Maybe<SortOrder>;
  endDate?: Maybe<SortOrder>;
  groupId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  itemSet?: Maybe<SortOrder>;
  limitActivation?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  plusBonusBalance?: Maybe<SortOrder>;
  startDate?: Maybe<SortOrder>;
};

export type PromocodesOrderByWithRelationInput = {
  countOfActivation?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  depositBonus?: Maybe<SortOrder>;
  discountAmount?: Maybe<SortOrder>;
  endDate?: Maybe<SortOrder>;
  groupId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  itemSet?: Maybe<SortOrder>;
  limitActivation?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  plusBonusBalance?: Maybe<SortOrder>;
  startDate?: Maybe<SortOrder>;
};

export enum PromocodesScalarFieldEnum {
  CountOfActivation = 'countOfActivation',
  CreatedAt = 'createdAt',
  DepositBonus = 'depositBonus',
  DiscountAmount = 'discountAmount',
  EndDate = 'endDate',
  GroupId = 'groupId',
  Id = 'id',
  ItemSet = 'itemSet',
  LimitActivation = 'limitActivation',
  Name = 'name',
  PlusBonusBalance = 'plusBonusBalance',
  StartDate = 'startDate'
}

export type PromocodesScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<PromocodesScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<PromocodesScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<PromocodesScalarWhereWithAggregatesInput>>>;
  countOfActivation?: Maybe<IntWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  depositBonus?: Maybe<IntNullableWithAggregatesFilter>;
  discountAmount?: Maybe<IntNullableWithAggregatesFilter>;
  endDate?: Maybe<DateTimeWithAggregatesFilter>;
  groupId?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  itemSet?: Maybe<StringNullableWithAggregatesFilter>;
  limitActivation?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  plusBonusBalance?: Maybe<IntNullableWithAggregatesFilter>;
  startDate?: Maybe<DateTimeWithAggregatesFilter>;
};

export type PromocodesSumAggregateOutputType = {
  __typename?: 'PromocodesSumAggregateOutputType';
  countOfActivation?: Maybe<Scalars['Int']>;
  depositBonus?: Maybe<Scalars['Int']>;
  discountAmount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  limitActivation?: Maybe<Scalars['Int']>;
  plusBonusBalance?: Maybe<Scalars['Int']>;
};

export type PromocodesSumOrderByAggregateInput = {
  countOfActivation?: Maybe<SortOrder>;
  depositBonus?: Maybe<SortOrder>;
  discountAmount?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  limitActivation?: Maybe<SortOrder>;
  plusBonusBalance?: Maybe<SortOrder>;
};

export type PromocodesUncheckedCreateInput = {
  countOfActivation: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  depositBonus?: Maybe<Scalars['Int']>;
  discountAmount?: Maybe<Scalars['Int']>;
  endDate: Scalars['DateTime'];
  groupId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  itemSet?: Maybe<Scalars['String']>;
  limitActivation: Scalars['Int'];
  name: Scalars['String'];
  plusBonusBalance?: Maybe<Scalars['Int']>;
  startDate: Scalars['DateTime'];
};

export type PromocodesUncheckedUpdateInput = {
  countOfActivation?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  depositBonus?: Maybe<NullableIntFieldUpdateOperationsInput>;
  discountAmount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  groupId?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  itemSet?: Maybe<NullableStringFieldUpdateOperationsInput>;
  limitActivation?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  plusBonusBalance?: Maybe<NullableIntFieldUpdateOperationsInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PromocodesUncheckedUpdateManyInput = {
  countOfActivation?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  depositBonus?: Maybe<NullableIntFieldUpdateOperationsInput>;
  discountAmount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  groupId?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  itemSet?: Maybe<NullableStringFieldUpdateOperationsInput>;
  limitActivation?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  plusBonusBalance?: Maybe<NullableIntFieldUpdateOperationsInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PromocodesUpdateInput = {
  countOfActivation?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  depositBonus?: Maybe<NullableIntFieldUpdateOperationsInput>;
  discountAmount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  groupId?: Maybe<StringFieldUpdateOperationsInput>;
  itemSet?: Maybe<NullableStringFieldUpdateOperationsInput>;
  limitActivation?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  plusBonusBalance?: Maybe<NullableIntFieldUpdateOperationsInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PromocodesUpdateManyMutationInput = {
  countOfActivation?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  depositBonus?: Maybe<NullableIntFieldUpdateOperationsInput>;
  discountAmount?: Maybe<NullableIntFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  groupId?: Maybe<StringFieldUpdateOperationsInput>;
  itemSet?: Maybe<NullableStringFieldUpdateOperationsInput>;
  limitActivation?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  plusBonusBalance?: Maybe<NullableIntFieldUpdateOperationsInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PromocodesWhereInput = {
  AND?: Maybe<Array<Maybe<PromocodesWhereInput>>>;
  NOT?: Maybe<Array<Maybe<PromocodesWhereInput>>>;
  OR?: Maybe<Array<Maybe<PromocodesWhereInput>>>;
  countOfActivation?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  depositBonus?: Maybe<IntNullableFilter>;
  discountAmount?: Maybe<IntNullableFilter>;
  endDate?: Maybe<DateTimeFilter>;
  groupId?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  itemSet?: Maybe<StringNullableFilter>;
  limitActivation?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  plusBonusBalance?: Maybe<IntNullableFilter>;
  startDate?: Maybe<DateTimeFilter>;
};

export type PromocodesWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Purchase = {
  __typename?: 'Purchase';
  Inventory: Array<Inventory>;
  _count?: Maybe<PurchaseCountOutputType>;
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  dateOfPurchase?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lostBonusBalance: Scalars['Int'];
  lostMainBalance: Scalars['Int'];
  product: Product;
  productId: Scalars['Int'];
  refund: Scalars['Boolean'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};


export type PurchaseInventoryArgs = {
  cursor?: Maybe<InventoryWhereUniqueInput>;
  distinct?: Maybe<InventoryScalarFieldEnum>;
  orderBy?: Maybe<InventoryOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<InventoryWhereInput>;
};

export type PurchaseAvgAggregateOutputType = {
  __typename?: 'PurchaseAvgAggregateOutputType';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lostBonusBalance?: Maybe<Scalars['Float']>;
  lostMainBalance?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type PurchaseAvgOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lostBonusBalance?: Maybe<SortOrder>;
  lostMainBalance?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type PurchaseCountAggregateOutputType = {
  __typename?: 'PurchaseCountAggregateOutputType';
  _all: Scalars['Int'];
  amount: Scalars['Int'];
  createdAt: Scalars['Int'];
  dateOfPurchase: Scalars['Int'];
  id: Scalars['Int'];
  lostBonusBalance: Scalars['Int'];
  lostMainBalance: Scalars['Int'];
  productId: Scalars['Int'];
  refund: Scalars['Int'];
  userId: Scalars['Int'];
};

export type PurchaseCountOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  dateOfPurchase?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lostBonusBalance?: Maybe<SortOrder>;
  lostMainBalance?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  refund?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type PurchaseCountOutputType = {
  __typename?: 'PurchaseCountOutputType';
  Inventory: Scalars['Int'];
};

export type PurchaseCreateInput = {
  Inventory?: Maybe<InventoryCreateNestedManyWithoutPurchaseInput>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfPurchase?: Maybe<Scalars['String']>;
  lostBonusBalance: Scalars['Int'];
  lostMainBalance: Scalars['Int'];
  product: ProductCreateNestedOneWithoutPurchaseInput;
  refund: Scalars['Boolean'];
  user?: Maybe<UserCreateNestedOneWithoutPurchaseInput>;
};

export type PurchaseCreateManyInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfPurchase?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lostBonusBalance: Scalars['Int'];
  lostMainBalance: Scalars['Int'];
  productId: Scalars['Int'];
  refund: Scalars['Boolean'];
  userId?: Maybe<Scalars['Int']>;
};

export type PurchaseCreateManyProductInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfPurchase?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lostBonusBalance: Scalars['Int'];
  lostMainBalance: Scalars['Int'];
  refund: Scalars['Boolean'];
  userId?: Maybe<Scalars['Int']>;
};

export type PurchaseCreateManyProductInputEnvelope = {
  data: PurchaseCreateManyProductInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type PurchaseCreateManyUserInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfPurchase?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lostBonusBalance: Scalars['Int'];
  lostMainBalance: Scalars['Int'];
  productId: Scalars['Int'];
  refund: Scalars['Boolean'];
};

export type PurchaseCreateManyUserInputEnvelope = {
  data: PurchaseCreateManyUserInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type PurchaseCreateNestedManyWithoutProductInput = {
  connect?: Maybe<Array<Maybe<PurchaseWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PurchaseCreateOrConnectWithoutProductInput>>>;
  create?: Maybe<Array<Maybe<PurchaseCreateWithoutProductInput>>>;
  createMany?: Maybe<PurchaseCreateManyProductInputEnvelope>;
};

export type PurchaseCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<PurchaseWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PurchaseCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<PurchaseCreateWithoutUserInput>>>;
  createMany?: Maybe<PurchaseCreateManyUserInputEnvelope>;
};

export type PurchaseCreateNestedOneWithoutInventoryInput = {
  connect?: Maybe<PurchaseWhereUniqueInput>;
  connectOrCreate?: Maybe<PurchaseCreateOrConnectWithoutInventoryInput>;
  create?: Maybe<PurchaseUncheckedCreateWithoutInventoryInput>;
};

export type PurchaseCreateOrConnectWithoutInventoryInput = {
  create: PurchaseUncheckedCreateWithoutInventoryInput;
  where: PurchaseWhereUniqueInput;
};

export type PurchaseCreateOrConnectWithoutProductInput = {
  create: PurchaseUncheckedCreateWithoutProductInput;
  where: PurchaseWhereUniqueInput;
};

export type PurchaseCreateOrConnectWithoutUserInput = {
  create: PurchaseUncheckedCreateWithoutUserInput;
  where: PurchaseWhereUniqueInput;
};

export type PurchaseCreateWithoutInventoryInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfPurchase?: Maybe<Scalars['String']>;
  lostBonusBalance: Scalars['Int'];
  lostMainBalance: Scalars['Int'];
  product: ProductCreateNestedOneWithoutPurchaseInput;
  refund: Scalars['Boolean'];
  user?: Maybe<UserCreateNestedOneWithoutPurchaseInput>;
};

export type PurchaseCreateWithoutProductInput = {
  Inventory?: Maybe<InventoryCreateNestedManyWithoutPurchaseInput>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfPurchase?: Maybe<Scalars['String']>;
  lostBonusBalance: Scalars['Int'];
  lostMainBalance: Scalars['Int'];
  refund: Scalars['Boolean'];
  user?: Maybe<UserCreateNestedOneWithoutPurchaseInput>;
};

export type PurchaseCreateWithoutUserInput = {
  Inventory?: Maybe<InventoryCreateNestedManyWithoutPurchaseInput>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfPurchase?: Maybe<Scalars['String']>;
  lostBonusBalance: Scalars['Int'];
  lostMainBalance: Scalars['Int'];
  product: ProductCreateNestedOneWithoutPurchaseInput;
  refund: Scalars['Boolean'];
};

export type PurchaseListRelationFilter = {
  every?: Maybe<PurchaseWhereInput>;
  none?: Maybe<PurchaseWhereInput>;
  some?: Maybe<PurchaseWhereInput>;
};

export type PurchaseMaxAggregateOutputType = {
  __typename?: 'PurchaseMaxAggregateOutputType';
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfPurchase?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lostBonusBalance?: Maybe<Scalars['Int']>;
  lostMainBalance?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  refund?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['Int']>;
};

export type PurchaseMaxOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  dateOfPurchase?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lostBonusBalance?: Maybe<SortOrder>;
  lostMainBalance?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  refund?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type PurchaseMinAggregateOutputType = {
  __typename?: 'PurchaseMinAggregateOutputType';
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfPurchase?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lostBonusBalance?: Maybe<Scalars['Int']>;
  lostMainBalance?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  refund?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['Int']>;
};

export type PurchaseMinOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  dateOfPurchase?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lostBonusBalance?: Maybe<SortOrder>;
  lostMainBalance?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  refund?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type PurchaseOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type PurchaseOrderByWithAggregationInput = {
  _avg?: Maybe<PurchaseAvgOrderByAggregateInput>;
  _count?: Maybe<PurchaseCountOrderByAggregateInput>;
  _max?: Maybe<PurchaseMaxOrderByAggregateInput>;
  _min?: Maybe<PurchaseMinOrderByAggregateInput>;
  _sum?: Maybe<PurchaseSumOrderByAggregateInput>;
  amount?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  dateOfPurchase?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lostBonusBalance?: Maybe<SortOrder>;
  lostMainBalance?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  refund?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type PurchaseOrderByWithRelationInput = {
  Inventory?: Maybe<InventoryOrderByRelationAggregateInput>;
  amount?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  dateOfPurchase?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lostBonusBalance?: Maybe<SortOrder>;
  lostMainBalance?: Maybe<SortOrder>;
  product?: Maybe<ProductOrderByWithRelationInput>;
  productId?: Maybe<SortOrder>;
  refund?: Maybe<SortOrder>;
  user?: Maybe<UserOrderByWithRelationInput>;
  userId?: Maybe<SortOrder>;
};

export type PurchaseRelationFilter = {
  is?: Maybe<PurchaseWhereInput>;
  isNot?: Maybe<PurchaseWhereInput>;
};

export enum PurchaseScalarFieldEnum {
  Amount = 'amount',
  CreatedAt = 'createdAt',
  DateOfPurchase = 'dateOfPurchase',
  Id = 'id',
  LostBonusBalance = 'lostBonusBalance',
  LostMainBalance = 'lostMainBalance',
  ProductId = 'productId',
  Refund = 'refund',
  UserId = 'userId'
}

export type PurchaseScalarWhereInput = {
  AND?: Maybe<Array<Maybe<PurchaseScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<PurchaseScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<PurchaseScalarWhereInput>>>;
  amount?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  dateOfPurchase?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  lostBonusBalance?: Maybe<IntFilter>;
  lostMainBalance?: Maybe<IntFilter>;
  productId?: Maybe<IntFilter>;
  refund?: Maybe<BoolFilter>;
  userId?: Maybe<IntNullableFilter>;
};

export type PurchaseScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<PurchaseScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<PurchaseScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<PurchaseScalarWhereWithAggregatesInput>>>;
  amount?: Maybe<IntWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  dateOfPurchase?: Maybe<StringNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  lostBonusBalance?: Maybe<IntWithAggregatesFilter>;
  lostMainBalance?: Maybe<IntWithAggregatesFilter>;
  productId?: Maybe<IntWithAggregatesFilter>;
  refund?: Maybe<BoolWithAggregatesFilter>;
  userId?: Maybe<IntNullableWithAggregatesFilter>;
};

export type PurchaseSumAggregateOutputType = {
  __typename?: 'PurchaseSumAggregateOutputType';
  amount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  lostBonusBalance?: Maybe<Scalars['Int']>;
  lostMainBalance?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type PurchaseSumOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lostBonusBalance?: Maybe<SortOrder>;
  lostMainBalance?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type PurchaseUncheckedCreateInput = {
  Inventory?: Maybe<InventoryUncheckedCreateNestedManyWithoutPurchaseInput>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfPurchase?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lostBonusBalance: Scalars['Int'];
  lostMainBalance: Scalars['Int'];
  productId: Scalars['Int'];
  refund: Scalars['Boolean'];
  userId?: Maybe<Scalars['Int']>;
};

export type PurchaseUncheckedCreateNestedManyWithoutProductInput = {
  connect?: Maybe<Array<Maybe<PurchaseWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PurchaseCreateOrConnectWithoutProductInput>>>;
  create?: Maybe<Array<Maybe<PurchaseCreateWithoutProductInput>>>;
  createMany?: Maybe<PurchaseCreateManyProductInputEnvelope>;
};

export type PurchaseUncheckedCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<PurchaseWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PurchaseCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<PurchaseCreateWithoutUserInput>>>;
  createMany?: Maybe<PurchaseCreateManyUserInputEnvelope>;
};

export type PurchaseUncheckedCreateWithoutInventoryInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfPurchase?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lostBonusBalance: Scalars['Int'];
  lostMainBalance: Scalars['Int'];
  productId: Scalars['Int'];
  refund: Scalars['Boolean'];
  userId?: Maybe<Scalars['Int']>;
};

export type PurchaseUncheckedCreateWithoutProductInput = {
  Inventory?: Maybe<InventoryUncheckedCreateNestedManyWithoutPurchaseInput>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfPurchase?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lostBonusBalance: Scalars['Int'];
  lostMainBalance: Scalars['Int'];
  refund: Scalars['Boolean'];
  userId?: Maybe<Scalars['Int']>;
};

export type PurchaseUncheckedCreateWithoutUserInput = {
  Inventory?: Maybe<InventoryUncheckedCreateNestedManyWithoutPurchaseInput>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfPurchase?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lostBonusBalance: Scalars['Int'];
  lostMainBalance: Scalars['Int'];
  productId: Scalars['Int'];
  refund: Scalars['Boolean'];
};

export type PurchaseUncheckedUpdateInput = {
  Inventory?: Maybe<InventoryUncheckedUpdateManyWithoutPurchaseInput>;
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfPurchase?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  lostBonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  lostMainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  refund?: Maybe<BoolFieldUpdateOperationsInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type PurchaseUncheckedUpdateManyInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfPurchase?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  lostBonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  lostMainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  refund?: Maybe<BoolFieldUpdateOperationsInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type PurchaseUncheckedUpdateManyWithoutProductInput = {
  connect?: Maybe<Array<Maybe<PurchaseWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PurchaseCreateOrConnectWithoutProductInput>>>;
  create?: Maybe<Array<Maybe<PurchaseCreateWithoutProductInput>>>;
  createMany?: Maybe<PurchaseCreateManyProductInputEnvelope>;
  delete?: Maybe<Array<Maybe<PurchaseWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<PurchaseScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<PurchaseWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<PurchaseWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<PurchaseUpdateWithWhereUniqueWithoutProductInput>>>;
  updateMany?: Maybe<Array<Maybe<PurchaseUpdateManyWithWhereWithoutProductInput>>>;
  upsert?: Maybe<Array<Maybe<PurchaseUpsertWithWhereUniqueWithoutProductInput>>>;
};

export type PurchaseUncheckedUpdateManyWithoutPurchaseInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfPurchase?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  lostBonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  lostMainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  refund?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type PurchaseUncheckedUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<PurchaseWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PurchaseCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<PurchaseCreateWithoutUserInput>>>;
  createMany?: Maybe<PurchaseCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<PurchaseWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<PurchaseScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<PurchaseWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<PurchaseWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<PurchaseUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<PurchaseUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<PurchaseUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type PurchaseUncheckedUpdateWithoutInventoryInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfPurchase?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  lostBonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  lostMainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  refund?: Maybe<BoolFieldUpdateOperationsInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type PurchaseUncheckedUpdateWithoutProductInput = {
  Inventory?: Maybe<InventoryUncheckedUpdateManyWithoutPurchaseInput>;
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfPurchase?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  lostBonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  lostMainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  refund?: Maybe<BoolFieldUpdateOperationsInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type PurchaseUncheckedUpdateWithoutUserInput = {
  Inventory?: Maybe<InventoryUncheckedUpdateManyWithoutPurchaseInput>;
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfPurchase?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  lostBonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  lostMainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  refund?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type PurchaseUpdateInput = {
  Inventory?: Maybe<InventoryUpdateManyWithoutPurchaseInput>;
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfPurchase?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lostBonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  lostMainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutPurchaseInput>;
  refund?: Maybe<BoolFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneWithoutPurchaseInput>;
};

export type PurchaseUpdateManyMutationInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfPurchase?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lostBonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  lostMainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  refund?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type PurchaseUpdateManyWithWhereWithoutProductInput = {
  data: PurchaseUncheckedUpdateManyWithoutPurchaseInput;
  where: PurchaseScalarWhereInput;
};

export type PurchaseUpdateManyWithWhereWithoutUserInput = {
  data: PurchaseUncheckedUpdateManyWithoutPurchaseInput;
  where: PurchaseScalarWhereInput;
};

export type PurchaseUpdateManyWithoutProductInput = {
  connect?: Maybe<Array<Maybe<PurchaseWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PurchaseCreateOrConnectWithoutProductInput>>>;
  create?: Maybe<Array<Maybe<PurchaseCreateWithoutProductInput>>>;
  createMany?: Maybe<PurchaseCreateManyProductInputEnvelope>;
  delete?: Maybe<Array<Maybe<PurchaseWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<PurchaseScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<PurchaseWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<PurchaseWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<PurchaseUpdateWithWhereUniqueWithoutProductInput>>>;
  updateMany?: Maybe<Array<Maybe<PurchaseUpdateManyWithWhereWithoutProductInput>>>;
  upsert?: Maybe<Array<Maybe<PurchaseUpsertWithWhereUniqueWithoutProductInput>>>;
};

export type PurchaseUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<PurchaseWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PurchaseCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<PurchaseCreateWithoutUserInput>>>;
  createMany?: Maybe<PurchaseCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<PurchaseWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<PurchaseScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<PurchaseWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<PurchaseWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<PurchaseUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<PurchaseUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<PurchaseUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type PurchaseUpdateOneRequiredWithoutInventoryInput = {
  connect?: Maybe<PurchaseWhereUniqueInput>;
  connectOrCreate?: Maybe<PurchaseCreateOrConnectWithoutInventoryInput>;
  create?: Maybe<PurchaseUncheckedCreateWithoutInventoryInput>;
  update?: Maybe<PurchaseUncheckedUpdateWithoutInventoryInput>;
  upsert?: Maybe<PurchaseUpsertWithoutInventoryInput>;
};

export type PurchaseUpdateWithWhereUniqueWithoutProductInput = {
  data: PurchaseUncheckedUpdateWithoutProductInput;
  where: PurchaseWhereUniqueInput;
};

export type PurchaseUpdateWithWhereUniqueWithoutUserInput = {
  data: PurchaseUncheckedUpdateWithoutUserInput;
  where: PurchaseWhereUniqueInput;
};

export type PurchaseUpdateWithoutInventoryInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfPurchase?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lostBonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  lostMainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutPurchaseInput>;
  refund?: Maybe<BoolFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneWithoutPurchaseInput>;
};

export type PurchaseUpdateWithoutProductInput = {
  Inventory?: Maybe<InventoryUpdateManyWithoutPurchaseInput>;
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfPurchase?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lostBonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  lostMainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  refund?: Maybe<BoolFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneWithoutPurchaseInput>;
};

export type PurchaseUpdateWithoutUserInput = {
  Inventory?: Maybe<InventoryUpdateManyWithoutPurchaseInput>;
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfPurchase?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lostBonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  lostMainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutPurchaseInput>;
  refund?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type PurchaseUpsertWithWhereUniqueWithoutProductInput = {
  create: PurchaseUncheckedCreateWithoutProductInput;
  update: PurchaseUncheckedUpdateWithoutProductInput;
  where: PurchaseWhereUniqueInput;
};

export type PurchaseUpsertWithWhereUniqueWithoutUserInput = {
  create: PurchaseUncheckedCreateWithoutUserInput;
  update: PurchaseUncheckedUpdateWithoutUserInput;
  where: PurchaseWhereUniqueInput;
};

export type PurchaseUpsertWithoutInventoryInput = {
  create: PurchaseUncheckedCreateWithoutInventoryInput;
  update: PurchaseUncheckedUpdateWithoutInventoryInput;
};

export type PurchaseWhereInput = {
  AND?: Maybe<Array<Maybe<PurchaseWhereInput>>>;
  Inventory?: Maybe<InventoryListRelationFilter>;
  NOT?: Maybe<Array<Maybe<PurchaseWhereInput>>>;
  OR?: Maybe<Array<Maybe<PurchaseWhereInput>>>;
  amount?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  dateOfPurchase?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  lostBonusBalance?: Maybe<IntFilter>;
  lostMainBalance?: Maybe<IntFilter>;
  product?: Maybe<ProductWhereInput>;
  productId?: Maybe<IntFilter>;
  refund?: Maybe<BoolFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntNullableFilter>;
};

export type PurchaseWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateBaseSettings?: Maybe<AggregateBaseSettings>;
  aggregateContacts?: Maybe<AggregateContacts>;
  aggregateInventory?: Maybe<AggregateInventory>;
  aggregateProduct?: Maybe<AggregateProduct>;
  aggregatePromocodes?: Maybe<AggregatePromocodes>;
  aggregatePurchase?: Maybe<AggregatePurchase>;
  aggregateServer?: Maybe<AggregateServer>;
  aggregateServerType?: Maybe<AggregateServerType>;
  aggregateToken?: Maybe<AggregateToken>;
  aggregateTransaction?: Maybe<AggregateTransaction>;
  aggregateTransfers?: Maybe<AggregateTransfers>;
  aggregateUrlSettings?: Maybe<AggregateUrlSettings>;
  aggregateUser?: Maybe<AggregateUser>;
  aggregateVisitors?: Maybe<AggregateVisitors>;
  findFirstBaseSettings?: Maybe<BaseSettings>;
  findFirstContacts?: Maybe<Contacts>;
  findFirstInventory?: Maybe<Inventory>;
  findFirstProduct?: Maybe<Product>;
  findFirstPromocodes?: Maybe<Promocodes>;
  findFirstPurchase?: Maybe<Purchase>;
  findFirstServer?: Maybe<Server>;
  findFirstServerType?: Maybe<ServerType>;
  findFirstToken?: Maybe<Token>;
  findFirstTransaction?: Maybe<Transaction>;
  findFirstTransfers?: Maybe<Transfers>;
  findFirstUrlSettings?: Maybe<UrlSettings>;
  findFirstUser?: Maybe<User>;
  findFirstVisitors?: Maybe<Visitors>;
  findManyBaseSettings: Array<BaseSettings>;
  findManyBaseSettingsCount: Scalars['Int'];
  findManyContacts: Array<Contacts>;
  findManyContactsCount: Scalars['Int'];
  findManyInventory: Array<Inventory>;
  findManyInventoryCount: Scalars['Int'];
  findManyProduct: Array<Product>;
  findManyProductCount: Scalars['Int'];
  findManyPromocodes: Array<Promocodes>;
  findManyPromocodesCount: Scalars['Int'];
  findManyPurchase: Array<Purchase>;
  findManyPurchaseCount: Scalars['Int'];
  findManyServer: Array<Server>;
  findManyServerCount: Scalars['Int'];
  findManyServerType: Array<ServerType>;
  findManyServerTypeCount: Scalars['Int'];
  findManyToken: Array<Token>;
  findManyTokenCount: Scalars['Int'];
  findManyTransaction: Array<Transaction>;
  findManyTransactionCount: Scalars['Int'];
  findManyTransfers: Array<Transfers>;
  findManyTransfersCount: Scalars['Int'];
  findManyUrlSettings: Array<UrlSettings>;
  findManyUrlSettingsCount: Scalars['Int'];
  findManyUser: Array<User>;
  findManyUserCount: Scalars['Int'];
  findManyVisitors: Array<Visitors>;
  findManyVisitorsCount: Scalars['Int'];
  findUniqueBaseSettings?: Maybe<BaseSettings>;
  findUniqueContacts?: Maybe<Contacts>;
  findUniqueInventory?: Maybe<Inventory>;
  findUniqueProduct?: Maybe<Product>;
  findUniquePromocodes?: Maybe<Promocodes>;
  findUniquePurchase?: Maybe<Purchase>;
  findUniqueServer?: Maybe<Server>;
  findUniqueServerType?: Maybe<ServerType>;
  findUniqueToken?: Maybe<Token>;
  findUniqueTransaction?: Maybe<Transaction>;
  findUniqueTransfers?: Maybe<Transfers>;
  findUniqueUrlSettings?: Maybe<UrlSettings>;
  findUniqueUser?: Maybe<User>;
  findUniqueVisitors?: Maybe<Visitors>;
  getSchema: Schema;
};


export type QueryAggregateBaseSettingsArgs = {
  cursor?: Maybe<BaseSettingsWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<BaseSettingsOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<BaseSettingsWhereInput>;
};


export type QueryAggregateContactsArgs = {
  cursor?: Maybe<ContactsWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<ContactsOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ContactsWhereInput>;
};


export type QueryAggregateInventoryArgs = {
  cursor?: Maybe<InventoryWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<InventoryOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<InventoryWhereInput>;
};


export type QueryAggregateProductArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<ProductOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};


export type QueryAggregatePromocodesArgs = {
  cursor?: Maybe<PromocodesWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<PromocodesOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PromocodesWhereInput>;
};


export type QueryAggregatePurchaseArgs = {
  cursor?: Maybe<PurchaseWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<PurchaseOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PurchaseWhereInput>;
};


export type QueryAggregateServerArgs = {
  cursor?: Maybe<ServerWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<ServerOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ServerWhereInput>;
};


export type QueryAggregateServerTypeArgs = {
  cursor?: Maybe<ServerTypeWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<ServerTypeOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ServerTypeWhereInput>;
};


export type QueryAggregateTokenArgs = {
  cursor?: Maybe<TokenWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<TokenOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TokenWhereInput>;
};


export type QueryAggregateTransactionArgs = {
  cursor?: Maybe<TransactionWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<TransactionOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TransactionWhereInput>;
};


export type QueryAggregateTransfersArgs = {
  cursor?: Maybe<TransfersWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<TransfersOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TransfersWhereInput>;
};


export type QueryAggregateUrlSettingsArgs = {
  cursor?: Maybe<UrlSettingsWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<UrlSettingsOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UrlSettingsWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<UserOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryAggregateVisitorsArgs = {
  cursor?: Maybe<VisitorsWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<VisitorsOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<VisitorsWhereInput>;
};


export type QueryFindFirstBaseSettingsArgs = {
  cursor?: Maybe<BaseSettingsWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<BaseSettingsScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<BaseSettingsOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<BaseSettingsWhereInput>;
};


export type QueryFindFirstContactsArgs = {
  cursor?: Maybe<ContactsWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<ContactsScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<ContactsOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ContactsWhereInput>;
};


export type QueryFindFirstInventoryArgs = {
  cursor?: Maybe<InventoryWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<InventoryScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<InventoryOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<InventoryWhereInput>;
};


export type QueryFindFirstProductArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<ProductScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<ProductOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};


export type QueryFindFirstPromocodesArgs = {
  cursor?: Maybe<PromocodesWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<PromocodesScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<PromocodesOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PromocodesWhereInput>;
};


export type QueryFindFirstPurchaseArgs = {
  cursor?: Maybe<PurchaseWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<PurchaseScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<PurchaseOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PurchaseWhereInput>;
};


export type QueryFindFirstServerArgs = {
  cursor?: Maybe<ServerWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<ServerScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<ServerOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ServerWhereInput>;
};


export type QueryFindFirstServerTypeArgs = {
  cursor?: Maybe<ServerTypeWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<ServerTypeScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<ServerTypeOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ServerTypeWhereInput>;
};


export type QueryFindFirstTokenArgs = {
  cursor?: Maybe<TokenWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<TokenScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<TokenOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TokenWhereInput>;
};


export type QueryFindFirstTransactionArgs = {
  cursor?: Maybe<TransactionWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<TransactionScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<TransactionOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TransactionWhereInput>;
};


export type QueryFindFirstTransfersArgs = {
  cursor?: Maybe<TransfersWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<TransfersScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<TransfersOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TransfersWhereInput>;
};


export type QueryFindFirstUrlSettingsArgs = {
  cursor?: Maybe<UrlSettingsWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<UrlSettingsScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<UrlSettingsOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UrlSettingsWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<UserScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<UserOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindFirstVisitorsArgs = {
  cursor?: Maybe<VisitorsWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<VisitorsScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<VisitorsOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<VisitorsWhereInput>;
};


export type QueryFindManyBaseSettingsArgs = {
  cursor?: Maybe<BaseSettingsWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<BaseSettingsScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<BaseSettingsOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<BaseSettingsWhereInput>;
};


export type QueryFindManyBaseSettingsCountArgs = {
  cursor?: Maybe<BaseSettingsWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<BaseSettingsScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<BaseSettingsOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<BaseSettingsWhereInput>;
};


export type QueryFindManyContactsArgs = {
  cursor?: Maybe<ContactsWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<ContactsScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<ContactsOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ContactsWhereInput>;
};


export type QueryFindManyContactsCountArgs = {
  cursor?: Maybe<ContactsWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<ContactsScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<ContactsOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ContactsWhereInput>;
};


export type QueryFindManyInventoryArgs = {
  cursor?: Maybe<InventoryWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<InventoryScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<InventoryOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<InventoryWhereInput>;
};


export type QueryFindManyInventoryCountArgs = {
  cursor?: Maybe<InventoryWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<InventoryScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<InventoryOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<InventoryWhereInput>;
};


export type QueryFindManyProductArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<ProductScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<ProductOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};


export type QueryFindManyProductCountArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<ProductScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<ProductOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};


export type QueryFindManyPromocodesArgs = {
  cursor?: Maybe<PromocodesWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<PromocodesScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<PromocodesOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PromocodesWhereInput>;
};


export type QueryFindManyPromocodesCountArgs = {
  cursor?: Maybe<PromocodesWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<PromocodesScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<PromocodesOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PromocodesWhereInput>;
};


export type QueryFindManyPurchaseArgs = {
  cursor?: Maybe<PurchaseWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<PurchaseScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<PurchaseOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PurchaseWhereInput>;
};


export type QueryFindManyPurchaseCountArgs = {
  cursor?: Maybe<PurchaseWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<PurchaseScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<PurchaseOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PurchaseWhereInput>;
};


export type QueryFindManyServerArgs = {
  cursor?: Maybe<ServerWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<ServerScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<ServerOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ServerWhereInput>;
};


export type QueryFindManyServerCountArgs = {
  cursor?: Maybe<ServerWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<ServerScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<ServerOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ServerWhereInput>;
};


export type QueryFindManyServerTypeArgs = {
  cursor?: Maybe<ServerTypeWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<ServerTypeScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<ServerTypeOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ServerTypeWhereInput>;
};


export type QueryFindManyServerTypeCountArgs = {
  cursor?: Maybe<ServerTypeWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<ServerTypeScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<ServerTypeOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ServerTypeWhereInput>;
};


export type QueryFindManyTokenArgs = {
  cursor?: Maybe<TokenWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<TokenScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<TokenOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TokenWhereInput>;
};


export type QueryFindManyTokenCountArgs = {
  cursor?: Maybe<TokenWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<TokenScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<TokenOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TokenWhereInput>;
};


export type QueryFindManyTransactionArgs = {
  cursor?: Maybe<TransactionWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<TransactionScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<TransactionOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TransactionWhereInput>;
};


export type QueryFindManyTransactionCountArgs = {
  cursor?: Maybe<TransactionWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<TransactionScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<TransactionOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TransactionWhereInput>;
};


export type QueryFindManyTransfersArgs = {
  cursor?: Maybe<TransfersWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<TransfersScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<TransfersOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TransfersWhereInput>;
};


export type QueryFindManyTransfersCountArgs = {
  cursor?: Maybe<TransfersWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<TransfersScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<TransfersOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TransfersWhereInput>;
};


export type QueryFindManyUrlSettingsArgs = {
  cursor?: Maybe<UrlSettingsWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<UrlSettingsScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<UrlSettingsOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UrlSettingsWhereInput>;
};


export type QueryFindManyUrlSettingsCountArgs = {
  cursor?: Maybe<UrlSettingsWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<UrlSettingsScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<UrlSettingsOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UrlSettingsWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<UserScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<UserOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyUserCountArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<UserScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<UserOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyVisitorsArgs = {
  cursor?: Maybe<VisitorsWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<VisitorsScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<VisitorsOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<VisitorsWhereInput>;
};


export type QueryFindManyVisitorsCountArgs = {
  cursor?: Maybe<VisitorsWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<VisitorsScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<VisitorsOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<VisitorsWhereInput>;
};


export type QueryFindUniqueBaseSettingsArgs = {
  where: BaseSettingsWhereUniqueInput;
};


export type QueryFindUniqueContactsArgs = {
  where: ContactsWhereUniqueInput;
};


export type QueryFindUniqueInventoryArgs = {
  where: InventoryWhereUniqueInput;
};


export type QueryFindUniqueProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryFindUniquePromocodesArgs = {
  where: PromocodesWhereUniqueInput;
};


export type QueryFindUniquePurchaseArgs = {
  where: PurchaseWhereUniqueInput;
};


export type QueryFindUniqueServerArgs = {
  where: ServerWhereUniqueInput;
};


export type QueryFindUniqueServerTypeArgs = {
  where: ServerTypeWhereUniqueInput;
};


export type QueryFindUniqueTokenArgs = {
  where: TokenWhereUniqueInput;
};


export type QueryFindUniqueTransactionArgs = {
  where: TransactionWhereUniqueInput;
};


export type QueryFindUniqueTransfersArgs = {
  where: TransfersWhereUniqueInput;
};


export type QueryFindUniqueUrlSettingsArgs = {
  where: UrlSettingsWhereUniqueInput;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryFindUniqueVisitorsArgs = {
  where: VisitorsWhereUniqueInput;
};

export type Schema = {
  __typename?: 'Schema';
  enums: Array<Enum>;
  models: Array<Model>;
};

export type Server = {
  __typename?: 'Server';
  IP: Scalars['String'];
  Inventory: Array<Inventory>;
  _count?: Maybe<ServerCountOutputType>;
  apiKey: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  port: Scalars['String'];
  serverID: Scalars['Int'];
  serverTypeId: Scalars['Int'];
  typeOfSever: ServerType;
};


export type ServerInventoryArgs = {
  cursor?: Maybe<InventoryWhereUniqueInput>;
  distinct?: Maybe<InventoryScalarFieldEnum>;
  orderBy?: Maybe<InventoryOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<InventoryWhereInput>;
};

export type ServerAvgAggregateOutputType = {
  __typename?: 'ServerAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
  serverID?: Maybe<Scalars['Float']>;
  serverTypeId?: Maybe<Scalars['Float']>;
};

export type ServerAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  serverID?: Maybe<SortOrder>;
  serverTypeId?: Maybe<SortOrder>;
};

export type ServerCountAggregateOutputType = {
  __typename?: 'ServerCountAggregateOutputType';
  IP: Scalars['Int'];
  _all: Scalars['Int'];
  apiKey: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  port: Scalars['Int'];
  serverID: Scalars['Int'];
  serverTypeId: Scalars['Int'];
};

export type ServerCountOrderByAggregateInput = {
  IP?: Maybe<SortOrder>;
  apiKey?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  port?: Maybe<SortOrder>;
  serverID?: Maybe<SortOrder>;
  serverTypeId?: Maybe<SortOrder>;
};

export type ServerCountOutputType = {
  __typename?: 'ServerCountOutputType';
  Inventory: Scalars['Int'];
};

export type ServerCreateInput = {
  IP: Scalars['String'];
  Inventory?: Maybe<InventoryCreateNestedManyWithoutServerInput>;
  apiKey: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  port: Scalars['String'];
  serverID: Scalars['Int'];
  typeOfSever: ServerTypeCreateNestedOneWithoutServerInput;
};

export type ServerCreateManyInput = {
  IP: Scalars['String'];
  apiKey: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  port: Scalars['String'];
  serverID: Scalars['Int'];
  serverTypeId: Scalars['Int'];
};

export type ServerCreateManyTypeOfSeverInput = {
  IP: Scalars['String'];
  apiKey: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  port: Scalars['String'];
  serverID: Scalars['Int'];
};

export type ServerCreateManyTypeOfSeverInputEnvelope = {
  data: ServerCreateManyTypeOfSeverInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ServerCreateNestedManyWithoutTypeOfSeverInput = {
  connect?: Maybe<Array<Maybe<ServerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ServerCreateOrConnectWithoutTypeOfSeverInput>>>;
  create?: Maybe<Array<Maybe<ServerCreateWithoutTypeOfSeverInput>>>;
  createMany?: Maybe<ServerCreateManyTypeOfSeverInputEnvelope>;
};

export type ServerCreateNestedOneWithoutInventoryInput = {
  connect?: Maybe<ServerWhereUniqueInput>;
  connectOrCreate?: Maybe<ServerCreateOrConnectWithoutInventoryInput>;
  create?: Maybe<ServerUncheckedCreateWithoutInventoryInput>;
};

export type ServerCreateOrConnectWithoutInventoryInput = {
  create: ServerUncheckedCreateWithoutInventoryInput;
  where: ServerWhereUniqueInput;
};

export type ServerCreateOrConnectWithoutTypeOfSeverInput = {
  create: ServerUncheckedCreateWithoutTypeOfSeverInput;
  where: ServerWhereUniqueInput;
};

export type ServerCreateWithoutInventoryInput = {
  IP: Scalars['String'];
  apiKey: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  port: Scalars['String'];
  serverID: Scalars['Int'];
  typeOfSever: ServerTypeCreateNestedOneWithoutServerInput;
};

export type ServerCreateWithoutTypeOfSeverInput = {
  IP: Scalars['String'];
  Inventory?: Maybe<InventoryCreateNestedManyWithoutServerInput>;
  apiKey: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  port: Scalars['String'];
  serverID: Scalars['Int'];
};

export type ServerListRelationFilter = {
  every?: Maybe<ServerWhereInput>;
  none?: Maybe<ServerWhereInput>;
  some?: Maybe<ServerWhereInput>;
};

export type ServerMaxAggregateOutputType = {
  __typename?: 'ServerMaxAggregateOutputType';
  IP?: Maybe<Scalars['String']>;
  apiKey?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  serverID?: Maybe<Scalars['Int']>;
  serverTypeId?: Maybe<Scalars['Int']>;
};

export type ServerMaxOrderByAggregateInput = {
  IP?: Maybe<SortOrder>;
  apiKey?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  port?: Maybe<SortOrder>;
  serverID?: Maybe<SortOrder>;
  serverTypeId?: Maybe<SortOrder>;
};

export type ServerMinAggregateOutputType = {
  __typename?: 'ServerMinAggregateOutputType';
  IP?: Maybe<Scalars['String']>;
  apiKey?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  serverID?: Maybe<Scalars['Int']>;
  serverTypeId?: Maybe<Scalars['Int']>;
};

export type ServerMinOrderByAggregateInput = {
  IP?: Maybe<SortOrder>;
  apiKey?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  port?: Maybe<SortOrder>;
  serverID?: Maybe<SortOrder>;
  serverTypeId?: Maybe<SortOrder>;
};

export type ServerOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type ServerOrderByWithAggregationInput = {
  IP?: Maybe<SortOrder>;
  _avg?: Maybe<ServerAvgOrderByAggregateInput>;
  _count?: Maybe<ServerCountOrderByAggregateInput>;
  _max?: Maybe<ServerMaxOrderByAggregateInput>;
  _min?: Maybe<ServerMinOrderByAggregateInput>;
  _sum?: Maybe<ServerSumOrderByAggregateInput>;
  apiKey?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  port?: Maybe<SortOrder>;
  serverID?: Maybe<SortOrder>;
  serverTypeId?: Maybe<SortOrder>;
};

export type ServerOrderByWithRelationInput = {
  IP?: Maybe<SortOrder>;
  Inventory?: Maybe<InventoryOrderByRelationAggregateInput>;
  apiKey?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  port?: Maybe<SortOrder>;
  serverID?: Maybe<SortOrder>;
  serverTypeId?: Maybe<SortOrder>;
  typeOfSever?: Maybe<ServerTypeOrderByWithRelationInput>;
};

export type ServerRelationFilter = {
  is?: Maybe<ServerWhereInput>;
  isNot?: Maybe<ServerWhereInput>;
};

export enum ServerScalarFieldEnum {
  Ip = 'IP',
  ApiKey = 'apiKey',
  Id = 'id',
  Name = 'name',
  Port = 'port',
  ServerId = 'serverID',
  ServerTypeId = 'serverTypeId'
}

export type ServerScalarWhereInput = {
  AND?: Maybe<Array<Maybe<ServerScalarWhereInput>>>;
  IP?: Maybe<StringFilter>;
  NOT?: Maybe<Array<Maybe<ServerScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<ServerScalarWhereInput>>>;
  apiKey?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  port?: Maybe<StringFilter>;
  serverID?: Maybe<IntFilter>;
  serverTypeId?: Maybe<IntFilter>;
};

export type ServerScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<ServerScalarWhereWithAggregatesInput>>>;
  IP?: Maybe<StringWithAggregatesFilter>;
  NOT?: Maybe<Array<Maybe<ServerScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<ServerScalarWhereWithAggregatesInput>>>;
  apiKey?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  port?: Maybe<StringWithAggregatesFilter>;
  serverID?: Maybe<IntWithAggregatesFilter>;
  serverTypeId?: Maybe<IntWithAggregatesFilter>;
};

export type ServerSumAggregateOutputType = {
  __typename?: 'ServerSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  serverID?: Maybe<Scalars['Int']>;
  serverTypeId?: Maybe<Scalars['Int']>;
};

export type ServerSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  serverID?: Maybe<SortOrder>;
  serverTypeId?: Maybe<SortOrder>;
};

export type ServerType = {
  __typename?: 'ServerType';
  Inventory: Array<Inventory>;
  Product: Array<Product>;
  Server: Array<Server>;
  _count?: Maybe<ServerTypeCountOutputType>;
  description: Scalars['String'];
  hidden: Scalars['Boolean'];
  id: Scalars['Int'];
  name: Scalars['String'];
  number: Scalars['Int'];
};


export type ServerTypeInventoryArgs = {
  cursor?: Maybe<InventoryWhereUniqueInput>;
  distinct?: Maybe<InventoryScalarFieldEnum>;
  orderBy?: Maybe<InventoryOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<InventoryWhereInput>;
};


export type ServerTypeProductArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  distinct?: Maybe<ProductScalarFieldEnum>;
  orderBy?: Maybe<ProductOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};


export type ServerTypeServerArgs = {
  cursor?: Maybe<ServerWhereUniqueInput>;
  distinct?: Maybe<ServerScalarFieldEnum>;
  orderBy?: Maybe<ServerOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ServerWhereInput>;
};

export type ServerTypeAvgAggregateOutputType = {
  __typename?: 'ServerTypeAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
};

export type ServerTypeAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  number?: Maybe<SortOrder>;
};

export type ServerTypeCountAggregateOutputType = {
  __typename?: 'ServerTypeCountAggregateOutputType';
  _all: Scalars['Int'];
  description: Scalars['Int'];
  hidden: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  number: Scalars['Int'];
};

export type ServerTypeCountOrderByAggregateInput = {
  description?: Maybe<SortOrder>;
  hidden?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  number?: Maybe<SortOrder>;
};

export type ServerTypeCountOutputType = {
  __typename?: 'ServerTypeCountOutputType';
  Inventory: Scalars['Int'];
  Product: Scalars['Int'];
  Server: Scalars['Int'];
};

export type ServerTypeCreateInput = {
  Inventory?: Maybe<InventoryCreateNestedManyWithoutServerTypeInput>;
  Product?: Maybe<ProductCreateNestedManyWithoutServerTypeInput>;
  Server?: Maybe<ServerCreateNestedManyWithoutTypeOfSeverInput>;
  description: Scalars['String'];
  hidden?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  number: Scalars['Int'];
};

export type ServerTypeCreateManyInput = {
  description: Scalars['String'];
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  number: Scalars['Int'];
};

export type ServerTypeCreateNestedOneWithoutInventoryInput = {
  connect?: Maybe<ServerTypeWhereUniqueInput>;
  connectOrCreate?: Maybe<ServerTypeCreateOrConnectWithoutInventoryInput>;
  create?: Maybe<ServerTypeUncheckedCreateWithoutInventoryInput>;
};

export type ServerTypeCreateNestedOneWithoutProductInput = {
  connect?: Maybe<ServerTypeWhereUniqueInput>;
  connectOrCreate?: Maybe<ServerTypeCreateOrConnectWithoutProductInput>;
  create?: Maybe<ServerTypeUncheckedCreateWithoutProductInput>;
};

export type ServerTypeCreateNestedOneWithoutServerInput = {
  connect?: Maybe<ServerTypeWhereUniqueInput>;
  connectOrCreate?: Maybe<ServerTypeCreateOrConnectWithoutServerInput>;
  create?: Maybe<ServerTypeUncheckedCreateWithoutServerInput>;
};

export type ServerTypeCreateOrConnectWithoutInventoryInput = {
  create: ServerTypeUncheckedCreateWithoutInventoryInput;
  where: ServerTypeWhereUniqueInput;
};

export type ServerTypeCreateOrConnectWithoutProductInput = {
  create: ServerTypeUncheckedCreateWithoutProductInput;
  where: ServerTypeWhereUniqueInput;
};

export type ServerTypeCreateOrConnectWithoutServerInput = {
  create: ServerTypeUncheckedCreateWithoutServerInput;
  where: ServerTypeWhereUniqueInput;
};

export type ServerTypeCreateWithoutInventoryInput = {
  Product?: Maybe<ProductCreateNestedManyWithoutServerTypeInput>;
  Server?: Maybe<ServerCreateNestedManyWithoutTypeOfSeverInput>;
  description: Scalars['String'];
  hidden?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  number: Scalars['Int'];
};

export type ServerTypeCreateWithoutProductInput = {
  Inventory?: Maybe<InventoryCreateNestedManyWithoutServerTypeInput>;
  Server?: Maybe<ServerCreateNestedManyWithoutTypeOfSeverInput>;
  description: Scalars['String'];
  hidden?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  number: Scalars['Int'];
};

export type ServerTypeCreateWithoutServerInput = {
  Inventory?: Maybe<InventoryCreateNestedManyWithoutServerTypeInput>;
  Product?: Maybe<ProductCreateNestedManyWithoutServerTypeInput>;
  description: Scalars['String'];
  hidden?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  number: Scalars['Int'];
};

export type ServerTypeMaxAggregateOutputType = {
  __typename?: 'ServerTypeMaxAggregateOutputType';
  description?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
};

export type ServerTypeMaxOrderByAggregateInput = {
  description?: Maybe<SortOrder>;
  hidden?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  number?: Maybe<SortOrder>;
};

export type ServerTypeMinAggregateOutputType = {
  __typename?: 'ServerTypeMinAggregateOutputType';
  description?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
};

export type ServerTypeMinOrderByAggregateInput = {
  description?: Maybe<SortOrder>;
  hidden?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  number?: Maybe<SortOrder>;
};

export type ServerTypeOrderByWithAggregationInput = {
  _avg?: Maybe<ServerTypeAvgOrderByAggregateInput>;
  _count?: Maybe<ServerTypeCountOrderByAggregateInput>;
  _max?: Maybe<ServerTypeMaxOrderByAggregateInput>;
  _min?: Maybe<ServerTypeMinOrderByAggregateInput>;
  _sum?: Maybe<ServerTypeSumOrderByAggregateInput>;
  description?: Maybe<SortOrder>;
  hidden?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  number?: Maybe<SortOrder>;
};

export type ServerTypeOrderByWithRelationInput = {
  Inventory?: Maybe<InventoryOrderByRelationAggregateInput>;
  Product?: Maybe<ProductOrderByRelationAggregateInput>;
  Server?: Maybe<ServerOrderByRelationAggregateInput>;
  description?: Maybe<SortOrder>;
  hidden?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  number?: Maybe<SortOrder>;
};

export type ServerTypeRelationFilter = {
  is?: Maybe<ServerTypeWhereInput>;
  isNot?: Maybe<ServerTypeWhereInput>;
};

export enum ServerTypeScalarFieldEnum {
  Description = 'description',
  Hidden = 'hidden',
  Id = 'id',
  Name = 'name',
  Number = 'number'
}

export type ServerTypeScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<ServerTypeScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<ServerTypeScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<ServerTypeScalarWhereWithAggregatesInput>>>;
  description?: Maybe<StringWithAggregatesFilter>;
  hidden?: Maybe<BoolWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  number?: Maybe<IntWithAggregatesFilter>;
};

export type ServerTypeSumAggregateOutputType = {
  __typename?: 'ServerTypeSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
};

export type ServerTypeSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  number?: Maybe<SortOrder>;
};

export type ServerTypeUncheckedCreateInput = {
  Inventory?: Maybe<InventoryUncheckedCreateNestedManyWithoutServerTypeInput>;
  Product?: Maybe<ProductUncheckedCreateNestedManyWithoutServerTypeInput>;
  Server?: Maybe<ServerUncheckedCreateNestedManyWithoutTypeOfSeverInput>;
  description: Scalars['String'];
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  number: Scalars['Int'];
};

export type ServerTypeUncheckedCreateWithoutInventoryInput = {
  Product?: Maybe<ProductUncheckedCreateNestedManyWithoutServerTypeInput>;
  Server?: Maybe<ServerUncheckedCreateNestedManyWithoutTypeOfSeverInput>;
  description: Scalars['String'];
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  number: Scalars['Int'];
};

export type ServerTypeUncheckedCreateWithoutProductInput = {
  Inventory?: Maybe<InventoryUncheckedCreateNestedManyWithoutServerTypeInput>;
  Server?: Maybe<ServerUncheckedCreateNestedManyWithoutTypeOfSeverInput>;
  description: Scalars['String'];
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  number: Scalars['Int'];
};

export type ServerTypeUncheckedCreateWithoutServerInput = {
  Inventory?: Maybe<InventoryUncheckedCreateNestedManyWithoutServerTypeInput>;
  Product?: Maybe<ProductUncheckedCreateNestedManyWithoutServerTypeInput>;
  description: Scalars['String'];
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  number: Scalars['Int'];
};

export type ServerTypeUncheckedUpdateInput = {
  Inventory?: Maybe<InventoryUncheckedUpdateManyWithoutServerTypeInput>;
  Product?: Maybe<ProductUncheckedUpdateManyWithoutServerTypeInput>;
  Server?: Maybe<ServerUncheckedUpdateManyWithoutTypeOfSeverInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ServerTypeUncheckedUpdateManyInput = {
  description?: Maybe<StringFieldUpdateOperationsInput>;
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ServerTypeUncheckedUpdateWithoutInventoryInput = {
  Product?: Maybe<ProductUncheckedUpdateManyWithoutServerTypeInput>;
  Server?: Maybe<ServerUncheckedUpdateManyWithoutTypeOfSeverInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ServerTypeUncheckedUpdateWithoutProductInput = {
  Inventory?: Maybe<InventoryUncheckedUpdateManyWithoutServerTypeInput>;
  Server?: Maybe<ServerUncheckedUpdateManyWithoutTypeOfSeverInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ServerTypeUncheckedUpdateWithoutServerInput = {
  Inventory?: Maybe<InventoryUncheckedUpdateManyWithoutServerTypeInput>;
  Product?: Maybe<ProductUncheckedUpdateManyWithoutServerTypeInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ServerTypeUpdateInput = {
  Inventory?: Maybe<InventoryUpdateManyWithoutServerTypeInput>;
  Product?: Maybe<ProductUpdateManyWithoutServerTypeInput>;
  Server?: Maybe<ServerUpdateManyWithoutTypeOfSeverInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ServerTypeUpdateManyMutationInput = {
  description?: Maybe<StringFieldUpdateOperationsInput>;
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ServerTypeUpdateOneRequiredWithoutServerInput = {
  connect?: Maybe<ServerTypeWhereUniqueInput>;
  connectOrCreate?: Maybe<ServerTypeCreateOrConnectWithoutServerInput>;
  create?: Maybe<ServerTypeUncheckedCreateWithoutServerInput>;
  update?: Maybe<ServerTypeUncheckedUpdateWithoutServerInput>;
  upsert?: Maybe<ServerTypeUpsertWithoutServerInput>;
};

export type ServerTypeUpdateOneWithoutInventoryInput = {
  connect?: Maybe<ServerTypeWhereUniqueInput>;
  connectOrCreate?: Maybe<ServerTypeCreateOrConnectWithoutInventoryInput>;
  create?: Maybe<ServerTypeUncheckedCreateWithoutInventoryInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ServerTypeUncheckedUpdateWithoutInventoryInput>;
  upsert?: Maybe<ServerTypeUpsertWithoutInventoryInput>;
};

export type ServerTypeUpdateOneWithoutProductInput = {
  connect?: Maybe<ServerTypeWhereUniqueInput>;
  connectOrCreate?: Maybe<ServerTypeCreateOrConnectWithoutProductInput>;
  create?: Maybe<ServerTypeUncheckedCreateWithoutProductInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ServerTypeUncheckedUpdateWithoutProductInput>;
  upsert?: Maybe<ServerTypeUpsertWithoutProductInput>;
};

export type ServerTypeUpdateWithoutInventoryInput = {
  Product?: Maybe<ProductUpdateManyWithoutServerTypeInput>;
  Server?: Maybe<ServerUpdateManyWithoutTypeOfSeverInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ServerTypeUpdateWithoutProductInput = {
  Inventory?: Maybe<InventoryUpdateManyWithoutServerTypeInput>;
  Server?: Maybe<ServerUpdateManyWithoutTypeOfSeverInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ServerTypeUpdateWithoutServerInput = {
  Inventory?: Maybe<InventoryUpdateManyWithoutServerTypeInput>;
  Product?: Maybe<ProductUpdateManyWithoutServerTypeInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ServerTypeUpsertWithoutInventoryInput = {
  create: ServerTypeUncheckedCreateWithoutInventoryInput;
  update: ServerTypeUncheckedUpdateWithoutInventoryInput;
};

export type ServerTypeUpsertWithoutProductInput = {
  create: ServerTypeUncheckedCreateWithoutProductInput;
  update: ServerTypeUncheckedUpdateWithoutProductInput;
};

export type ServerTypeUpsertWithoutServerInput = {
  create: ServerTypeUncheckedCreateWithoutServerInput;
  update: ServerTypeUncheckedUpdateWithoutServerInput;
};

export type ServerTypeWhereInput = {
  AND?: Maybe<Array<Maybe<ServerTypeWhereInput>>>;
  Inventory?: Maybe<InventoryListRelationFilter>;
  NOT?: Maybe<Array<Maybe<ServerTypeWhereInput>>>;
  OR?: Maybe<Array<Maybe<ServerTypeWhereInput>>>;
  Product?: Maybe<ProductListRelationFilter>;
  Server?: Maybe<ServerListRelationFilter>;
  description?: Maybe<StringFilter>;
  hidden?: Maybe<BoolFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  number?: Maybe<IntFilter>;
};

export type ServerTypeWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ServerUncheckedCreateInput = {
  IP: Scalars['String'];
  Inventory?: Maybe<InventoryUncheckedCreateNestedManyWithoutServerInput>;
  apiKey: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  port: Scalars['String'];
  serverID: Scalars['Int'];
  serverTypeId: Scalars['Int'];
};

export type ServerUncheckedCreateNestedManyWithoutTypeOfSeverInput = {
  connect?: Maybe<Array<Maybe<ServerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ServerCreateOrConnectWithoutTypeOfSeverInput>>>;
  create?: Maybe<Array<Maybe<ServerCreateWithoutTypeOfSeverInput>>>;
  createMany?: Maybe<ServerCreateManyTypeOfSeverInputEnvelope>;
};

export type ServerUncheckedCreateWithoutInventoryInput = {
  IP: Scalars['String'];
  apiKey: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  port: Scalars['String'];
  serverID: Scalars['Int'];
  serverTypeId: Scalars['Int'];
};

export type ServerUncheckedCreateWithoutTypeOfSeverInput = {
  IP: Scalars['String'];
  Inventory?: Maybe<InventoryUncheckedCreateNestedManyWithoutServerInput>;
  apiKey: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  port: Scalars['String'];
  serverID: Scalars['Int'];
};

export type ServerUncheckedUpdateInput = {
  IP?: Maybe<StringFieldUpdateOperationsInput>;
  Inventory?: Maybe<InventoryUncheckedUpdateManyWithoutServerInput>;
  apiKey?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  port?: Maybe<StringFieldUpdateOperationsInput>;
  serverID?: Maybe<IntFieldUpdateOperationsInput>;
  serverTypeId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ServerUncheckedUpdateManyInput = {
  IP?: Maybe<StringFieldUpdateOperationsInput>;
  apiKey?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  port?: Maybe<StringFieldUpdateOperationsInput>;
  serverID?: Maybe<IntFieldUpdateOperationsInput>;
  serverTypeId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ServerUncheckedUpdateManyWithoutServerInput = {
  IP?: Maybe<StringFieldUpdateOperationsInput>;
  apiKey?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  port?: Maybe<StringFieldUpdateOperationsInput>;
  serverID?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ServerUncheckedUpdateManyWithoutTypeOfSeverInput = {
  connect?: Maybe<Array<Maybe<ServerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ServerCreateOrConnectWithoutTypeOfSeverInput>>>;
  create?: Maybe<Array<Maybe<ServerCreateWithoutTypeOfSeverInput>>>;
  createMany?: Maybe<ServerCreateManyTypeOfSeverInputEnvelope>;
  delete?: Maybe<Array<Maybe<ServerWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ServerScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ServerWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ServerWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ServerUpdateWithWhereUniqueWithoutTypeOfSeverInput>>>;
  updateMany?: Maybe<Array<Maybe<ServerUpdateManyWithWhereWithoutTypeOfSeverInput>>>;
  upsert?: Maybe<Array<Maybe<ServerUpsertWithWhereUniqueWithoutTypeOfSeverInput>>>;
};

export type ServerUncheckedUpdateWithoutInventoryInput = {
  IP?: Maybe<StringFieldUpdateOperationsInput>;
  apiKey?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  port?: Maybe<StringFieldUpdateOperationsInput>;
  serverID?: Maybe<IntFieldUpdateOperationsInput>;
  serverTypeId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ServerUncheckedUpdateWithoutTypeOfSeverInput = {
  IP?: Maybe<StringFieldUpdateOperationsInput>;
  Inventory?: Maybe<InventoryUncheckedUpdateManyWithoutServerInput>;
  apiKey?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  port?: Maybe<StringFieldUpdateOperationsInput>;
  serverID?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ServerUpdateInput = {
  IP?: Maybe<StringFieldUpdateOperationsInput>;
  Inventory?: Maybe<InventoryUpdateManyWithoutServerInput>;
  apiKey?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  port?: Maybe<StringFieldUpdateOperationsInput>;
  serverID?: Maybe<IntFieldUpdateOperationsInput>;
  typeOfSever?: Maybe<ServerTypeUpdateOneRequiredWithoutServerInput>;
};

export type ServerUpdateManyMutationInput = {
  IP?: Maybe<StringFieldUpdateOperationsInput>;
  apiKey?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  port?: Maybe<StringFieldUpdateOperationsInput>;
  serverID?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ServerUpdateManyWithWhereWithoutTypeOfSeverInput = {
  data: ServerUncheckedUpdateManyWithoutServerInput;
  where: ServerScalarWhereInput;
};

export type ServerUpdateManyWithoutTypeOfSeverInput = {
  connect?: Maybe<Array<Maybe<ServerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ServerCreateOrConnectWithoutTypeOfSeverInput>>>;
  create?: Maybe<Array<Maybe<ServerCreateWithoutTypeOfSeverInput>>>;
  createMany?: Maybe<ServerCreateManyTypeOfSeverInputEnvelope>;
  delete?: Maybe<Array<Maybe<ServerWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ServerScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ServerWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ServerWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ServerUpdateWithWhereUniqueWithoutTypeOfSeverInput>>>;
  updateMany?: Maybe<Array<Maybe<ServerUpdateManyWithWhereWithoutTypeOfSeverInput>>>;
  upsert?: Maybe<Array<Maybe<ServerUpsertWithWhereUniqueWithoutTypeOfSeverInput>>>;
};

export type ServerUpdateOneWithoutInventoryInput = {
  connect?: Maybe<ServerWhereUniqueInput>;
  connectOrCreate?: Maybe<ServerCreateOrConnectWithoutInventoryInput>;
  create?: Maybe<ServerUncheckedCreateWithoutInventoryInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ServerUncheckedUpdateWithoutInventoryInput>;
  upsert?: Maybe<ServerUpsertWithoutInventoryInput>;
};

export type ServerUpdateWithWhereUniqueWithoutTypeOfSeverInput = {
  data: ServerUncheckedUpdateWithoutTypeOfSeverInput;
  where: ServerWhereUniqueInput;
};

export type ServerUpdateWithoutInventoryInput = {
  IP?: Maybe<StringFieldUpdateOperationsInput>;
  apiKey?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  port?: Maybe<StringFieldUpdateOperationsInput>;
  serverID?: Maybe<IntFieldUpdateOperationsInput>;
  typeOfSever?: Maybe<ServerTypeUpdateOneRequiredWithoutServerInput>;
};

export type ServerUpdateWithoutTypeOfSeverInput = {
  IP?: Maybe<StringFieldUpdateOperationsInput>;
  Inventory?: Maybe<InventoryUpdateManyWithoutServerInput>;
  apiKey?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  port?: Maybe<StringFieldUpdateOperationsInput>;
  serverID?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ServerUpsertWithWhereUniqueWithoutTypeOfSeverInput = {
  create: ServerUncheckedCreateWithoutTypeOfSeverInput;
  update: ServerUncheckedUpdateWithoutTypeOfSeverInput;
  where: ServerWhereUniqueInput;
};

export type ServerUpsertWithoutInventoryInput = {
  create: ServerUncheckedCreateWithoutInventoryInput;
  update: ServerUncheckedUpdateWithoutInventoryInput;
};

export type ServerWhereInput = {
  AND?: Maybe<Array<Maybe<ServerWhereInput>>>;
  IP?: Maybe<StringFilter>;
  Inventory?: Maybe<InventoryListRelationFilter>;
  NOT?: Maybe<Array<Maybe<ServerWhereInput>>>;
  OR?: Maybe<Array<Maybe<ServerWhereInput>>>;
  apiKey?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  port?: Maybe<StringFilter>;
  serverID?: Maybe<IntFilter>;
  serverTypeId?: Maybe<IntFilter>;
  typeOfSever?: Maybe<ServerTypeWhereInput>;
};

export type ServerWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Token = {
  __typename?: 'Token';
  User?: Maybe<User>;
  browser?: Maybe<Scalars['String']>;
  clientIp?: Maybe<Scalars['String']>;
  deviceName?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  os?: Maybe<Scalars['String']>;
  token: Scalars['String'];
  userId: Scalars['Int'];
};

export type TokenAvgAggregateOutputType = {
  __typename?: 'TokenAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type TokenAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type TokenCountAggregateOutputType = {
  __typename?: 'TokenCountAggregateOutputType';
  _all: Scalars['Int'];
  browser: Scalars['Int'];
  clientIp: Scalars['Int'];
  deviceName: Scalars['Int'];
  deviceType: Scalars['Int'];
  id: Scalars['Int'];
  os: Scalars['Int'];
  token: Scalars['Int'];
  userId: Scalars['Int'];
};

export type TokenCountOrderByAggregateInput = {
  browser?: Maybe<SortOrder>;
  clientIp?: Maybe<SortOrder>;
  deviceName?: Maybe<SortOrder>;
  deviceType?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  os?: Maybe<SortOrder>;
  token?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type TokenCreateInput = {
  User?: Maybe<UserCreateNestedOneWithoutTokensInput>;
  browser?: Maybe<Scalars['String']>;
  clientIp?: Maybe<Scalars['String']>;
  deviceName?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  os?: Maybe<Scalars['String']>;
  token: Scalars['String'];
};

export type TokenCreateManyInput = {
  browser?: Maybe<Scalars['String']>;
  clientIp?: Maybe<Scalars['String']>;
  deviceName?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  os?: Maybe<Scalars['String']>;
  token: Scalars['String'];
  userId: Scalars['Int'];
};

export type TokenCreateManyUserInput = {
  browser?: Maybe<Scalars['String']>;
  clientIp?: Maybe<Scalars['String']>;
  deviceName?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  os?: Maybe<Scalars['String']>;
  token: Scalars['String'];
};

export type TokenCreateManyUserInputEnvelope = {
  data: TokenCreateManyUserInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TokenCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<TokenWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TokenCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<TokenCreateWithoutUserInput>>>;
  createMany?: Maybe<TokenCreateManyUserInputEnvelope>;
};

export type TokenCreateOrConnectWithoutUserInput = {
  create: TokenUncheckedCreateWithoutUserInput;
  where: TokenWhereUniqueInput;
};

export type TokenCreateWithoutUserInput = {
  browser?: Maybe<Scalars['String']>;
  clientIp?: Maybe<Scalars['String']>;
  deviceName?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  os?: Maybe<Scalars['String']>;
  token: Scalars['String'];
};

export type TokenListRelationFilter = {
  every?: Maybe<TokenWhereInput>;
  none?: Maybe<TokenWhereInput>;
  some?: Maybe<TokenWhereInput>;
};

export type TokenMaxAggregateOutputType = {
  __typename?: 'TokenMaxAggregateOutputType';
  browser?: Maybe<Scalars['String']>;
  clientIp?: Maybe<Scalars['String']>;
  deviceName?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  os?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type TokenMaxOrderByAggregateInput = {
  browser?: Maybe<SortOrder>;
  clientIp?: Maybe<SortOrder>;
  deviceName?: Maybe<SortOrder>;
  deviceType?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  os?: Maybe<SortOrder>;
  token?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type TokenMinAggregateOutputType = {
  __typename?: 'TokenMinAggregateOutputType';
  browser?: Maybe<Scalars['String']>;
  clientIp?: Maybe<Scalars['String']>;
  deviceName?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  os?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type TokenMinOrderByAggregateInput = {
  browser?: Maybe<SortOrder>;
  clientIp?: Maybe<SortOrder>;
  deviceName?: Maybe<SortOrder>;
  deviceType?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  os?: Maybe<SortOrder>;
  token?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type TokenOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type TokenOrderByWithAggregationInput = {
  _avg?: Maybe<TokenAvgOrderByAggregateInput>;
  _count?: Maybe<TokenCountOrderByAggregateInput>;
  _max?: Maybe<TokenMaxOrderByAggregateInput>;
  _min?: Maybe<TokenMinOrderByAggregateInput>;
  _sum?: Maybe<TokenSumOrderByAggregateInput>;
  browser?: Maybe<SortOrder>;
  clientIp?: Maybe<SortOrder>;
  deviceName?: Maybe<SortOrder>;
  deviceType?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  os?: Maybe<SortOrder>;
  token?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type TokenOrderByWithRelationInput = {
  User?: Maybe<UserOrderByWithRelationInput>;
  browser?: Maybe<SortOrder>;
  clientIp?: Maybe<SortOrder>;
  deviceName?: Maybe<SortOrder>;
  deviceType?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  os?: Maybe<SortOrder>;
  token?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export enum TokenScalarFieldEnum {
  Browser = 'browser',
  ClientIp = 'clientIp',
  DeviceName = 'deviceName',
  DeviceType = 'deviceType',
  Id = 'id',
  Os = 'os',
  Token = 'token',
  UserId = 'userId'
}

export type TokenScalarWhereInput = {
  AND?: Maybe<Array<Maybe<TokenScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<TokenScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<TokenScalarWhereInput>>>;
  browser?: Maybe<StringNullableFilter>;
  clientIp?: Maybe<StringNullableFilter>;
  deviceName?: Maybe<StringNullableFilter>;
  deviceType?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  os?: Maybe<StringNullableFilter>;
  token?: Maybe<StringFilter>;
  userId?: Maybe<IntFilter>;
};

export type TokenScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<TokenScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<TokenScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<TokenScalarWhereWithAggregatesInput>>>;
  browser?: Maybe<StringNullableWithAggregatesFilter>;
  clientIp?: Maybe<StringNullableWithAggregatesFilter>;
  deviceName?: Maybe<StringNullableWithAggregatesFilter>;
  deviceType?: Maybe<StringNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  os?: Maybe<StringNullableWithAggregatesFilter>;
  token?: Maybe<StringWithAggregatesFilter>;
  userId?: Maybe<IntWithAggregatesFilter>;
};

export type TokenSumAggregateOutputType = {
  __typename?: 'TokenSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type TokenSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type TokenUncheckedCreateInput = {
  browser?: Maybe<Scalars['String']>;
  clientIp?: Maybe<Scalars['String']>;
  deviceName?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  os?: Maybe<Scalars['String']>;
  token: Scalars['String'];
  userId: Scalars['Int'];
};

export type TokenUncheckedCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<TokenWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TokenCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<TokenCreateWithoutUserInput>>>;
  createMany?: Maybe<TokenCreateManyUserInputEnvelope>;
};

export type TokenUncheckedCreateWithoutUserInput = {
  browser?: Maybe<Scalars['String']>;
  clientIp?: Maybe<Scalars['String']>;
  deviceName?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  os?: Maybe<Scalars['String']>;
  token: Scalars['String'];
};

export type TokenUncheckedUpdateInput = {
  browser?: Maybe<NullableStringFieldUpdateOperationsInput>;
  clientIp?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deviceName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deviceType?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  os?: Maybe<NullableStringFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type TokenUncheckedUpdateManyInput = {
  browser?: Maybe<NullableStringFieldUpdateOperationsInput>;
  clientIp?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deviceName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deviceType?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  os?: Maybe<NullableStringFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type TokenUncheckedUpdateManyWithoutTokensInput = {
  browser?: Maybe<NullableStringFieldUpdateOperationsInput>;
  clientIp?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deviceName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deviceType?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  os?: Maybe<NullableStringFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TokenUncheckedUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<TokenWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TokenCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<TokenCreateWithoutUserInput>>>;
  createMany?: Maybe<TokenCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<TokenWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<TokenScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<TokenWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<TokenWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<TokenUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<TokenUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<TokenUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type TokenUncheckedUpdateWithoutUserInput = {
  browser?: Maybe<NullableStringFieldUpdateOperationsInput>;
  clientIp?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deviceName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deviceType?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  os?: Maybe<NullableStringFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TokenUpdateInput = {
  User?: Maybe<UserUpdateOneWithoutTokensInput>;
  browser?: Maybe<NullableStringFieldUpdateOperationsInput>;
  clientIp?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deviceName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deviceType?: Maybe<NullableStringFieldUpdateOperationsInput>;
  os?: Maybe<NullableStringFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TokenUpdateManyMutationInput = {
  browser?: Maybe<NullableStringFieldUpdateOperationsInput>;
  clientIp?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deviceName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deviceType?: Maybe<NullableStringFieldUpdateOperationsInput>;
  os?: Maybe<NullableStringFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TokenUpdateManyWithWhereWithoutUserInput = {
  data: TokenUncheckedUpdateManyWithoutTokensInput;
  where: TokenScalarWhereInput;
};

export type TokenUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<TokenWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TokenCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<TokenCreateWithoutUserInput>>>;
  createMany?: Maybe<TokenCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<TokenWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<TokenScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<TokenWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<TokenWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<TokenUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<TokenUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<TokenUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type TokenUpdateWithWhereUniqueWithoutUserInput = {
  data: TokenUncheckedUpdateWithoutUserInput;
  where: TokenWhereUniqueInput;
};

export type TokenUpdateWithoutUserInput = {
  browser?: Maybe<NullableStringFieldUpdateOperationsInput>;
  clientIp?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deviceName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deviceType?: Maybe<NullableStringFieldUpdateOperationsInput>;
  os?: Maybe<NullableStringFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TokenUpsertWithWhereUniqueWithoutUserInput = {
  create: TokenUncheckedCreateWithoutUserInput;
  update: TokenUncheckedUpdateWithoutUserInput;
  where: TokenWhereUniqueInput;
};

export type TokenWhereInput = {
  AND?: Maybe<Array<Maybe<TokenWhereInput>>>;
  NOT?: Maybe<Array<Maybe<TokenWhereInput>>>;
  OR?: Maybe<Array<Maybe<TokenWhereInput>>>;
  User?: Maybe<UserWhereInput>;
  browser?: Maybe<StringNullableFilter>;
  clientIp?: Maybe<StringNullableFilter>;
  deviceName?: Maybe<StringNullableFilter>;
  deviceType?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  os?: Maybe<StringNullableFilter>;
  token?: Maybe<StringFilter>;
  userId?: Maybe<IntFilter>;
};

export type TokenWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  method: Scalars['String'];
  sendNotification: Scalars['Boolean'];
  status: EStatusOfRefill;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};

export type TransactionAvgAggregateOutputType = {
  __typename?: 'TransactionAvgAggregateOutputType';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type TransactionAvgOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type TransactionCountAggregateOutputType = {
  __typename?: 'TransactionCountAggregateOutputType';
  _all: Scalars['Int'];
  amount: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  method: Scalars['Int'];
  sendNotification: Scalars['Int'];
  status: Scalars['Int'];
  userId: Scalars['Int'];
};

export type TransactionCountOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  method?: Maybe<SortOrder>;
  sendNotification?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type TransactionCreateInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  method: Scalars['String'];
  sendNotification?: Maybe<Scalars['Boolean']>;
  status?: Maybe<EStatusOfRefill>;
  user?: Maybe<UserCreateNestedOneWithoutTransactionInput>;
};

export type TransactionCreateManyInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  method: Scalars['String'];
  sendNotification?: Maybe<Scalars['Boolean']>;
  status?: Maybe<EStatusOfRefill>;
  userId?: Maybe<Scalars['Int']>;
};

export type TransactionCreateManyUserInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  method: Scalars['String'];
  sendNotification?: Maybe<Scalars['Boolean']>;
  status?: Maybe<EStatusOfRefill>;
};

export type TransactionCreateManyUserInputEnvelope = {
  data: TransactionCreateManyUserInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TransactionCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TransactionCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<TransactionCreateWithoutUserInput>>>;
  createMany?: Maybe<TransactionCreateManyUserInputEnvelope>;
};

export type TransactionCreateOrConnectWithoutUserInput = {
  create: TransactionUncheckedCreateWithoutUserInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionCreateWithoutUserInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  method: Scalars['String'];
  sendNotification?: Maybe<Scalars['Boolean']>;
  status?: Maybe<EStatusOfRefill>;
};

export type TransactionListRelationFilter = {
  every?: Maybe<TransactionWhereInput>;
  none?: Maybe<TransactionWhereInput>;
  some?: Maybe<TransactionWhereInput>;
};

export type TransactionMaxAggregateOutputType = {
  __typename?: 'TransactionMaxAggregateOutputType';
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  method?: Maybe<Scalars['String']>;
  sendNotification?: Maybe<Scalars['Boolean']>;
  status?: Maybe<EStatusOfRefill>;
  userId?: Maybe<Scalars['Int']>;
};

export type TransactionMaxOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  method?: Maybe<SortOrder>;
  sendNotification?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type TransactionMinAggregateOutputType = {
  __typename?: 'TransactionMinAggregateOutputType';
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  method?: Maybe<Scalars['String']>;
  sendNotification?: Maybe<Scalars['Boolean']>;
  status?: Maybe<EStatusOfRefill>;
  userId?: Maybe<Scalars['Int']>;
};

export type TransactionMinOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  method?: Maybe<SortOrder>;
  sendNotification?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type TransactionOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type TransactionOrderByWithAggregationInput = {
  _avg?: Maybe<TransactionAvgOrderByAggregateInput>;
  _count?: Maybe<TransactionCountOrderByAggregateInput>;
  _max?: Maybe<TransactionMaxOrderByAggregateInput>;
  _min?: Maybe<TransactionMinOrderByAggregateInput>;
  _sum?: Maybe<TransactionSumOrderByAggregateInput>;
  amount?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  method?: Maybe<SortOrder>;
  sendNotification?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type TransactionOrderByWithRelationInput = {
  amount?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  method?: Maybe<SortOrder>;
  sendNotification?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  user?: Maybe<UserOrderByWithRelationInput>;
  userId?: Maybe<SortOrder>;
};

export enum TransactionScalarFieldEnum {
  Amount = 'amount',
  CreatedAt = 'createdAt',
  Id = 'id',
  Method = 'method',
  SendNotification = 'sendNotification',
  Status = 'status',
  UserId = 'userId'
}

export type TransactionScalarWhereInput = {
  AND?: Maybe<Array<Maybe<TransactionScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<TransactionScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<TransactionScalarWhereInput>>>;
  amount?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  method?: Maybe<StringFilter>;
  sendNotification?: Maybe<BoolFilter>;
  status?: Maybe<EnumEStatusOfRefillFilter>;
  userId?: Maybe<IntNullableFilter>;
};

export type TransactionScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<TransactionScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<TransactionScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<TransactionScalarWhereWithAggregatesInput>>>;
  amount?: Maybe<IntWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  method?: Maybe<StringWithAggregatesFilter>;
  sendNotification?: Maybe<BoolWithAggregatesFilter>;
  status?: Maybe<EnumEStatusOfRefillWithAggregatesFilter>;
  userId?: Maybe<IntNullableWithAggregatesFilter>;
};

export type TransactionSumAggregateOutputType = {
  __typename?: 'TransactionSumAggregateOutputType';
  amount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type TransactionSumOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type TransactionUncheckedCreateInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  method: Scalars['String'];
  sendNotification?: Maybe<Scalars['Boolean']>;
  status?: Maybe<EStatusOfRefill>;
  userId?: Maybe<Scalars['Int']>;
};

export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TransactionCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<TransactionCreateWithoutUserInput>>>;
  createMany?: Maybe<TransactionCreateManyUserInputEnvelope>;
};

export type TransactionUncheckedCreateWithoutUserInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  method: Scalars['String'];
  sendNotification?: Maybe<Scalars['Boolean']>;
  status?: Maybe<EStatusOfRefill>;
};

export type TransactionUncheckedUpdateInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  method?: Maybe<StringFieldUpdateOperationsInput>;
  sendNotification?: Maybe<BoolFieldUpdateOperationsInput>;
  status?: Maybe<EnumEStatusOfRefillFieldUpdateOperationsInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type TransactionUncheckedUpdateManyInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  method?: Maybe<StringFieldUpdateOperationsInput>;
  sendNotification?: Maybe<BoolFieldUpdateOperationsInput>;
  status?: Maybe<EnumEStatusOfRefillFieldUpdateOperationsInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type TransactionUncheckedUpdateManyWithoutTransactionInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  method?: Maybe<StringFieldUpdateOperationsInput>;
  sendNotification?: Maybe<BoolFieldUpdateOperationsInput>;
  status?: Maybe<EnumEStatusOfRefillFieldUpdateOperationsInput>;
};

export type TransactionUncheckedUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TransactionCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<TransactionCreateWithoutUserInput>>>;
  createMany?: Maybe<TransactionCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<TransactionScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<TransactionUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<TransactionUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<TransactionUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type TransactionUncheckedUpdateWithoutUserInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  method?: Maybe<StringFieldUpdateOperationsInput>;
  sendNotification?: Maybe<BoolFieldUpdateOperationsInput>;
  status?: Maybe<EnumEStatusOfRefillFieldUpdateOperationsInput>;
};

export type TransactionUpdateInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  method?: Maybe<StringFieldUpdateOperationsInput>;
  sendNotification?: Maybe<BoolFieldUpdateOperationsInput>;
  status?: Maybe<EnumEStatusOfRefillFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneWithoutTransactionInput>;
};

export type TransactionUpdateManyMutationInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  method?: Maybe<StringFieldUpdateOperationsInput>;
  sendNotification?: Maybe<BoolFieldUpdateOperationsInput>;
  status?: Maybe<EnumEStatusOfRefillFieldUpdateOperationsInput>;
};

export type TransactionUpdateManyWithWhereWithoutUserInput = {
  data: TransactionUncheckedUpdateManyWithoutTransactionInput;
  where: TransactionScalarWhereInput;
};

export type TransactionUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TransactionCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<TransactionCreateWithoutUserInput>>>;
  createMany?: Maybe<TransactionCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<TransactionScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<TransactionUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<TransactionUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<TransactionUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
  data: TransactionUncheckedUpdateWithoutUserInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionUpdateWithoutUserInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  method?: Maybe<StringFieldUpdateOperationsInput>;
  sendNotification?: Maybe<BoolFieldUpdateOperationsInput>;
  status?: Maybe<EnumEStatusOfRefillFieldUpdateOperationsInput>;
};

export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
  create: TransactionUncheckedCreateWithoutUserInput;
  update: TransactionUncheckedUpdateWithoutUserInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionWhereInput = {
  AND?: Maybe<Array<Maybe<TransactionWhereInput>>>;
  NOT?: Maybe<Array<Maybe<TransactionWhereInput>>>;
  OR?: Maybe<Array<Maybe<TransactionWhereInput>>>;
  amount?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  method?: Maybe<StringFilter>;
  sendNotification?: Maybe<BoolFilter>;
  status?: Maybe<EnumEStatusOfRefillFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntNullableFilter>;
};

export type TransactionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Transfers = {
  __typename?: 'Transfers';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  receiver: User;
  receiverId: Scalars['Int'];
  sender: User;
  senderId: Scalars['Int'];
};

export type TransfersAvgAggregateOutputType = {
  __typename?: 'TransfersAvgAggregateOutputType';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  receiverId?: Maybe<Scalars['Float']>;
  senderId?: Maybe<Scalars['Float']>;
};

export type TransfersAvgOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  receiverId?: Maybe<SortOrder>;
  senderId?: Maybe<SortOrder>;
};

export type TransfersCountAggregateOutputType = {
  __typename?: 'TransfersCountAggregateOutputType';
  _all: Scalars['Int'];
  amount: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  receiverId: Scalars['Int'];
  senderId: Scalars['Int'];
};

export type TransfersCountOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  receiverId?: Maybe<SortOrder>;
  senderId?: Maybe<SortOrder>;
};

export type TransfersCreateInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  receiver: UserCreateNestedOneWithoutTransfersReceiverInput;
  sender: UserCreateNestedOneWithoutTransfersSenderInput;
};

export type TransfersCreateManyInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  receiverId: Scalars['Int'];
  senderId: Scalars['Int'];
};

export type TransfersCreateManyReceiverInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  senderId: Scalars['Int'];
};

export type TransfersCreateManyReceiverInputEnvelope = {
  data: TransfersCreateManyReceiverInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TransfersCreateManySenderInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  receiverId: Scalars['Int'];
};

export type TransfersCreateManySenderInputEnvelope = {
  data: TransfersCreateManySenderInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TransfersCreateNestedManyWithoutReceiverInput = {
  connect?: Maybe<Array<Maybe<TransfersWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TransfersCreateOrConnectWithoutReceiverInput>>>;
  create?: Maybe<Array<Maybe<TransfersCreateWithoutReceiverInput>>>;
  createMany?: Maybe<TransfersCreateManyReceiverInputEnvelope>;
};

export type TransfersCreateNestedManyWithoutSenderInput = {
  connect?: Maybe<Array<Maybe<TransfersWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TransfersCreateOrConnectWithoutSenderInput>>>;
  create?: Maybe<Array<Maybe<TransfersCreateWithoutSenderInput>>>;
  createMany?: Maybe<TransfersCreateManySenderInputEnvelope>;
};

export type TransfersCreateOrConnectWithoutReceiverInput = {
  create: TransfersUncheckedCreateWithoutReceiverInput;
  where: TransfersWhereUniqueInput;
};

export type TransfersCreateOrConnectWithoutSenderInput = {
  create: TransfersUncheckedCreateWithoutSenderInput;
  where: TransfersWhereUniqueInput;
};

export type TransfersCreateWithoutReceiverInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  sender: UserCreateNestedOneWithoutTransfersSenderInput;
};

export type TransfersCreateWithoutSenderInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  receiver: UserCreateNestedOneWithoutTransfersReceiverInput;
};

export type TransfersListRelationFilter = {
  every?: Maybe<TransfersWhereInput>;
  none?: Maybe<TransfersWhereInput>;
  some?: Maybe<TransfersWhereInput>;
};

export type TransfersMaxAggregateOutputType = {
  __typename?: 'TransfersMaxAggregateOutputType';
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  receiverId?: Maybe<Scalars['Int']>;
  senderId?: Maybe<Scalars['Int']>;
};

export type TransfersMaxOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  receiverId?: Maybe<SortOrder>;
  senderId?: Maybe<SortOrder>;
};

export type TransfersMinAggregateOutputType = {
  __typename?: 'TransfersMinAggregateOutputType';
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  receiverId?: Maybe<Scalars['Int']>;
  senderId?: Maybe<Scalars['Int']>;
};

export type TransfersMinOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  receiverId?: Maybe<SortOrder>;
  senderId?: Maybe<SortOrder>;
};

export type TransfersOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type TransfersOrderByWithAggregationInput = {
  _avg?: Maybe<TransfersAvgOrderByAggregateInput>;
  _count?: Maybe<TransfersCountOrderByAggregateInput>;
  _max?: Maybe<TransfersMaxOrderByAggregateInput>;
  _min?: Maybe<TransfersMinOrderByAggregateInput>;
  _sum?: Maybe<TransfersSumOrderByAggregateInput>;
  amount?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  receiverId?: Maybe<SortOrder>;
  senderId?: Maybe<SortOrder>;
};

export type TransfersOrderByWithRelationInput = {
  amount?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  receiver?: Maybe<UserOrderByWithRelationInput>;
  receiverId?: Maybe<SortOrder>;
  sender?: Maybe<UserOrderByWithRelationInput>;
  senderId?: Maybe<SortOrder>;
};

export enum TransfersScalarFieldEnum {
  Amount = 'amount',
  CreatedAt = 'createdAt',
  Id = 'id',
  ReceiverId = 'receiverId',
  SenderId = 'senderId'
}

export type TransfersScalarWhereInput = {
  AND?: Maybe<Array<Maybe<TransfersScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<TransfersScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<TransfersScalarWhereInput>>>;
  amount?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  receiverId?: Maybe<IntFilter>;
  senderId?: Maybe<IntFilter>;
};

export type TransfersScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<TransfersScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<TransfersScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<TransfersScalarWhereWithAggregatesInput>>>;
  amount?: Maybe<IntWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  receiverId?: Maybe<IntWithAggregatesFilter>;
  senderId?: Maybe<IntWithAggregatesFilter>;
};

export type TransfersSumAggregateOutputType = {
  __typename?: 'TransfersSumAggregateOutputType';
  amount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  receiverId?: Maybe<Scalars['Int']>;
  senderId?: Maybe<Scalars['Int']>;
};

export type TransfersSumOrderByAggregateInput = {
  amount?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  receiverId?: Maybe<SortOrder>;
  senderId?: Maybe<SortOrder>;
};

export type TransfersUncheckedCreateInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  receiverId: Scalars['Int'];
  senderId: Scalars['Int'];
};

export type TransfersUncheckedCreateNestedManyWithoutReceiverInput = {
  connect?: Maybe<Array<Maybe<TransfersWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TransfersCreateOrConnectWithoutReceiverInput>>>;
  create?: Maybe<Array<Maybe<TransfersCreateWithoutReceiverInput>>>;
  createMany?: Maybe<TransfersCreateManyReceiverInputEnvelope>;
};

export type TransfersUncheckedCreateNestedManyWithoutSenderInput = {
  connect?: Maybe<Array<Maybe<TransfersWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TransfersCreateOrConnectWithoutSenderInput>>>;
  create?: Maybe<Array<Maybe<TransfersCreateWithoutSenderInput>>>;
  createMany?: Maybe<TransfersCreateManySenderInputEnvelope>;
};

export type TransfersUncheckedCreateWithoutReceiverInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  senderId: Scalars['Int'];
};

export type TransfersUncheckedCreateWithoutSenderInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  receiverId: Scalars['Int'];
};

export type TransfersUncheckedUpdateInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  receiverId?: Maybe<IntFieldUpdateOperationsInput>;
  senderId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type TransfersUncheckedUpdateManyInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  receiverId?: Maybe<IntFieldUpdateOperationsInput>;
  senderId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type TransfersUncheckedUpdateManyWithoutReceiverInput = {
  connect?: Maybe<Array<Maybe<TransfersWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TransfersCreateOrConnectWithoutReceiverInput>>>;
  create?: Maybe<Array<Maybe<TransfersCreateWithoutReceiverInput>>>;
  createMany?: Maybe<TransfersCreateManyReceiverInputEnvelope>;
  delete?: Maybe<Array<Maybe<TransfersWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<TransfersScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<TransfersWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<TransfersWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<TransfersUpdateWithWhereUniqueWithoutReceiverInput>>>;
  updateMany?: Maybe<Array<Maybe<TransfersUpdateManyWithWhereWithoutReceiverInput>>>;
  upsert?: Maybe<Array<Maybe<TransfersUpsertWithWhereUniqueWithoutReceiverInput>>>;
};

export type TransfersUncheckedUpdateManyWithoutSenderInput = {
  connect?: Maybe<Array<Maybe<TransfersWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TransfersCreateOrConnectWithoutSenderInput>>>;
  create?: Maybe<Array<Maybe<TransfersCreateWithoutSenderInput>>>;
  createMany?: Maybe<TransfersCreateManySenderInputEnvelope>;
  delete?: Maybe<Array<Maybe<TransfersWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<TransfersScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<TransfersWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<TransfersWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<TransfersUpdateWithWhereUniqueWithoutSenderInput>>>;
  updateMany?: Maybe<Array<Maybe<TransfersUpdateManyWithWhereWithoutSenderInput>>>;
  upsert?: Maybe<Array<Maybe<TransfersUpsertWithWhereUniqueWithoutSenderInput>>>;
};

export type TransfersUncheckedUpdateManyWithoutTransfersReceiverInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  senderId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type TransfersUncheckedUpdateManyWithoutTransfersSenderInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  receiverId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type TransfersUncheckedUpdateWithoutReceiverInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  senderId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type TransfersUncheckedUpdateWithoutSenderInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  receiverId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type TransfersUpdateInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  receiver?: Maybe<UserUpdateOneRequiredWithoutTransfersReceiverInput>;
  sender?: Maybe<UserUpdateOneRequiredWithoutTransfersSenderInput>;
};

export type TransfersUpdateManyMutationInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TransfersUpdateManyWithWhereWithoutReceiverInput = {
  data: TransfersUncheckedUpdateManyWithoutTransfersReceiverInput;
  where: TransfersScalarWhereInput;
};

export type TransfersUpdateManyWithWhereWithoutSenderInput = {
  data: TransfersUncheckedUpdateManyWithoutTransfersSenderInput;
  where: TransfersScalarWhereInput;
};

export type TransfersUpdateManyWithoutReceiverInput = {
  connect?: Maybe<Array<Maybe<TransfersWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TransfersCreateOrConnectWithoutReceiverInput>>>;
  create?: Maybe<Array<Maybe<TransfersCreateWithoutReceiverInput>>>;
  createMany?: Maybe<TransfersCreateManyReceiverInputEnvelope>;
  delete?: Maybe<Array<Maybe<TransfersWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<TransfersScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<TransfersWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<TransfersWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<TransfersUpdateWithWhereUniqueWithoutReceiverInput>>>;
  updateMany?: Maybe<Array<Maybe<TransfersUpdateManyWithWhereWithoutReceiverInput>>>;
  upsert?: Maybe<Array<Maybe<TransfersUpsertWithWhereUniqueWithoutReceiverInput>>>;
};

export type TransfersUpdateManyWithoutSenderInput = {
  connect?: Maybe<Array<Maybe<TransfersWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TransfersCreateOrConnectWithoutSenderInput>>>;
  create?: Maybe<Array<Maybe<TransfersCreateWithoutSenderInput>>>;
  createMany?: Maybe<TransfersCreateManySenderInputEnvelope>;
  delete?: Maybe<Array<Maybe<TransfersWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<TransfersScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<TransfersWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<TransfersWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<TransfersUpdateWithWhereUniqueWithoutSenderInput>>>;
  updateMany?: Maybe<Array<Maybe<TransfersUpdateManyWithWhereWithoutSenderInput>>>;
  upsert?: Maybe<Array<Maybe<TransfersUpsertWithWhereUniqueWithoutSenderInput>>>;
};

export type TransfersUpdateWithWhereUniqueWithoutReceiverInput = {
  data: TransfersUncheckedUpdateWithoutReceiverInput;
  where: TransfersWhereUniqueInput;
};

export type TransfersUpdateWithWhereUniqueWithoutSenderInput = {
  data: TransfersUncheckedUpdateWithoutSenderInput;
  where: TransfersWhereUniqueInput;
};

export type TransfersUpdateWithoutReceiverInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  sender?: Maybe<UserUpdateOneRequiredWithoutTransfersSenderInput>;
};

export type TransfersUpdateWithoutSenderInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  receiver?: Maybe<UserUpdateOneRequiredWithoutTransfersReceiverInput>;
};

export type TransfersUpsertWithWhereUniqueWithoutReceiverInput = {
  create: TransfersUncheckedCreateWithoutReceiverInput;
  update: TransfersUncheckedUpdateWithoutReceiverInput;
  where: TransfersWhereUniqueInput;
};

export type TransfersUpsertWithWhereUniqueWithoutSenderInput = {
  create: TransfersUncheckedCreateWithoutSenderInput;
  update: TransfersUncheckedUpdateWithoutSenderInput;
  where: TransfersWhereUniqueInput;
};

export type TransfersWhereInput = {
  AND?: Maybe<Array<Maybe<TransfersWhereInput>>>;
  NOT?: Maybe<Array<Maybe<TransfersWhereInput>>>;
  OR?: Maybe<Array<Maybe<TransfersWhereInput>>>;
  amount?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  receiver?: Maybe<UserWhereInput>;
  receiverId?: Maybe<IntFilter>;
  sender?: Maybe<UserWhereInput>;
  senderId?: Maybe<IntFilter>;
};

export type TransfersWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum User_Role {
  Administrator = 'ADMINISTRATOR',
  Client = 'CLIENT'
}

export type UpdateFieldInput = {
  create?: Maybe<Scalars['Boolean']>;
  editor?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  isId?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<KindEnum>;
  list?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  read?: Maybe<Scalars['Boolean']>;
  relationField?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unique?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
  upload?: Maybe<Scalars['Boolean']>;
};

export type UpdateModelInput = {
  create?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  displayFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  fields?: Maybe<Array<Maybe<UpdateFieldInput>>>;
  idField?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['Boolean']>;
};

export type UrlSettings = {
  __typename?: 'UrlSettings';
  hidden: Scalars['Boolean'];
  icon?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isHaveSidebar?: Maybe<Scalars['Boolean']>;
  sections?: Maybe<Scalars['Json']>;
  text?: Maybe<Scalars['String']>;
  typeUrl: ETypeOfUrl;
  url: Scalars['String'];
};

export type UrlSettingsAvgAggregateOutputType = {
  __typename?: 'UrlSettingsAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type UrlSettingsAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type UrlSettingsCountAggregateOutputType = {
  __typename?: 'UrlSettingsCountAggregateOutputType';
  _all: Scalars['Int'];
  hidden: Scalars['Int'];
  icon: Scalars['Int'];
  id: Scalars['Int'];
  isHaveSidebar: Scalars['Int'];
  sections: Scalars['Int'];
  text: Scalars['Int'];
  typeUrl: Scalars['Int'];
  url: Scalars['Int'];
};

export type UrlSettingsCountOrderByAggregateInput = {
  hidden?: Maybe<SortOrder>;
  icon?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isHaveSidebar?: Maybe<SortOrder>;
  sections?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  typeUrl?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type UrlSettingsCreateInput = {
  hidden?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  isHaveSidebar?: Maybe<Scalars['Boolean']>;
  sections?: Maybe<Scalars['Json']>;
  text?: Maybe<Scalars['String']>;
  typeUrl?: Maybe<ETypeOfUrl>;
  url: Scalars['String'];
};

export type UrlSettingsCreateManyInput = {
  hidden?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  isHaveSidebar?: Maybe<Scalars['Boolean']>;
  sections?: Maybe<Scalars['Json']>;
  text?: Maybe<Scalars['String']>;
  typeUrl?: Maybe<ETypeOfUrl>;
  url: Scalars['String'];
};

export type UrlSettingsMaxAggregateOutputType = {
  __typename?: 'UrlSettingsMaxAggregateOutputType';
  hidden?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  isHaveSidebar?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  typeUrl?: Maybe<ETypeOfUrl>;
  url?: Maybe<Scalars['String']>;
};

export type UrlSettingsMaxOrderByAggregateInput = {
  hidden?: Maybe<SortOrder>;
  icon?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isHaveSidebar?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  typeUrl?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type UrlSettingsMinAggregateOutputType = {
  __typename?: 'UrlSettingsMinAggregateOutputType';
  hidden?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  isHaveSidebar?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  typeUrl?: Maybe<ETypeOfUrl>;
  url?: Maybe<Scalars['String']>;
};

export type UrlSettingsMinOrderByAggregateInput = {
  hidden?: Maybe<SortOrder>;
  icon?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isHaveSidebar?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  typeUrl?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type UrlSettingsOrderByWithAggregationInput = {
  _avg?: Maybe<UrlSettingsAvgOrderByAggregateInput>;
  _count?: Maybe<UrlSettingsCountOrderByAggregateInput>;
  _max?: Maybe<UrlSettingsMaxOrderByAggregateInput>;
  _min?: Maybe<UrlSettingsMinOrderByAggregateInput>;
  _sum?: Maybe<UrlSettingsSumOrderByAggregateInput>;
  hidden?: Maybe<SortOrder>;
  icon?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isHaveSidebar?: Maybe<SortOrder>;
  sections?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  typeUrl?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type UrlSettingsOrderByWithRelationInput = {
  hidden?: Maybe<SortOrder>;
  icon?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isHaveSidebar?: Maybe<SortOrder>;
  sections?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  typeUrl?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export enum UrlSettingsScalarFieldEnum {
  Hidden = 'hidden',
  Icon = 'icon',
  Id = 'id',
  IsHaveSidebar = 'isHaveSidebar',
  Sections = 'sections',
  Text = 'text',
  TypeUrl = 'typeUrl',
  Url = 'url'
}

export type UrlSettingsScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<UrlSettingsScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<UrlSettingsScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<UrlSettingsScalarWhereWithAggregatesInput>>>;
  hidden?: Maybe<BoolWithAggregatesFilter>;
  icon?: Maybe<StringNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  isHaveSidebar?: Maybe<BoolNullableWithAggregatesFilter>;
  sections?: Maybe<JsonNullableWithAggregatesFilter>;
  text?: Maybe<StringNullableWithAggregatesFilter>;
  typeUrl?: Maybe<EnumETypeOfUrlWithAggregatesFilter>;
  url?: Maybe<StringWithAggregatesFilter>;
};

export type UrlSettingsSumAggregateOutputType = {
  __typename?: 'UrlSettingsSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type UrlSettingsSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type UrlSettingsUncheckedCreateInput = {
  hidden?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  isHaveSidebar?: Maybe<Scalars['Boolean']>;
  sections?: Maybe<Scalars['Json']>;
  text?: Maybe<Scalars['String']>;
  typeUrl?: Maybe<ETypeOfUrl>;
  url: Scalars['String'];
};

export type UrlSettingsUncheckedUpdateInput = {
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  icon?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isHaveSidebar?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  sections?: Maybe<Scalars['Json']>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  typeUrl?: Maybe<EnumETypeOfUrlFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UrlSettingsUncheckedUpdateManyInput = {
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  icon?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isHaveSidebar?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  sections?: Maybe<Scalars['Json']>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  typeUrl?: Maybe<EnumETypeOfUrlFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UrlSettingsUpdateInput = {
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  icon?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isHaveSidebar?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  sections?: Maybe<Scalars['Json']>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  typeUrl?: Maybe<EnumETypeOfUrlFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UrlSettingsUpdateManyMutationInput = {
  hidden?: Maybe<BoolFieldUpdateOperationsInput>;
  icon?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isHaveSidebar?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  sections?: Maybe<Scalars['Json']>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  typeUrl?: Maybe<EnumETypeOfUrlFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UrlSettingsWhereInput = {
  AND?: Maybe<Array<Maybe<UrlSettingsWhereInput>>>;
  NOT?: Maybe<Array<Maybe<UrlSettingsWhereInput>>>;
  OR?: Maybe<Array<Maybe<UrlSettingsWhereInput>>>;
  hidden?: Maybe<BoolFilter>;
  icon?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  isHaveSidebar?: Maybe<BoolNullableFilter>;
  sections?: Maybe<JsonNullableFilter>;
  text?: Maybe<StringNullableFilter>;
  typeUrl?: Maybe<EnumETypeOfUrlFilter>;
  url?: Maybe<StringFilter>;
};

export type UrlSettingsWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  Inventory: Array<Inventory>;
  Purchase: Array<Purchase>;
  TGLink?: Maybe<Scalars['String']>;
  Tokens: Array<Token>;
  Transaction: Array<Transaction>;
  TransfersReceiver: Array<Transfers>;
  TransfersSender: Array<Transfers>;
  VKLink?: Maybe<Scalars['String']>;
  _count?: Maybe<UserCountOutputType>;
  bonusBalance: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  discordLink?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  experience: Scalars['Int'];
  firstDateAuth: Scalars['DateTime'];
  id: Scalars['Int'];
  lastActivity?: Maybe<Scalars['DateTime']>;
  lvl: Scalars['Int'];
  mainBalance: Scalars['Int'];
  role: User_Role;
  steamAvatar: Scalars['String'];
  steamID: Scalars['String'];
  steamName: Scalars['String'];
  sumOfDeposits: Scalars['Int'];
  sumOfRefunds: Scalars['Int'];
};


export type UserInventoryArgs = {
  cursor?: Maybe<InventoryWhereUniqueInput>;
  distinct?: Maybe<InventoryScalarFieldEnum>;
  orderBy?: Maybe<InventoryOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<InventoryWhereInput>;
};


export type UserPurchaseArgs = {
  cursor?: Maybe<PurchaseWhereUniqueInput>;
  distinct?: Maybe<PurchaseScalarFieldEnum>;
  orderBy?: Maybe<PurchaseOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PurchaseWhereInput>;
};


export type UserTokensArgs = {
  cursor?: Maybe<TokenWhereUniqueInput>;
  distinct?: Maybe<TokenScalarFieldEnum>;
  orderBy?: Maybe<TokenOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TokenWhereInput>;
};


export type UserTransactionArgs = {
  cursor?: Maybe<TransactionWhereUniqueInput>;
  distinct?: Maybe<TransactionScalarFieldEnum>;
  orderBy?: Maybe<TransactionOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TransactionWhereInput>;
};


export type UserTransfersReceiverArgs = {
  cursor?: Maybe<TransfersWhereUniqueInput>;
  distinct?: Maybe<TransfersScalarFieldEnum>;
  orderBy?: Maybe<TransfersOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TransfersWhereInput>;
};


export type UserTransfersSenderArgs = {
  cursor?: Maybe<TransfersWhereUniqueInput>;
  distinct?: Maybe<TransfersScalarFieldEnum>;
  orderBy?: Maybe<TransfersOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TransfersWhereInput>;
};

export type UserAvgAggregateOutputType = {
  __typename?: 'UserAvgAggregateOutputType';
  bonusBalance?: Maybe<Scalars['Float']>;
  experience?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lvl?: Maybe<Scalars['Float']>;
  mainBalance?: Maybe<Scalars['Float']>;
  sumOfDeposits?: Maybe<Scalars['Float']>;
  sumOfRefunds?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  bonusBalance?: Maybe<SortOrder>;
  experience?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lvl?: Maybe<SortOrder>;
  mainBalance?: Maybe<SortOrder>;
  sumOfDeposits?: Maybe<SortOrder>;
  sumOfRefunds?: Maybe<SortOrder>;
};

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  TGLink: Scalars['Int'];
  VKLink: Scalars['Int'];
  _all: Scalars['Int'];
  bonusBalance: Scalars['Int'];
  createdAt: Scalars['Int'];
  discordLink: Scalars['Int'];
  email: Scalars['Int'];
  experience: Scalars['Int'];
  firstDateAuth: Scalars['Int'];
  id: Scalars['Int'];
  lastActivity: Scalars['Int'];
  lvl: Scalars['Int'];
  mainBalance: Scalars['Int'];
  role: Scalars['Int'];
  steamAvatar: Scalars['Int'];
  steamID: Scalars['Int'];
  steamName: Scalars['Int'];
  sumOfDeposits: Scalars['Int'];
  sumOfRefunds: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  TGLink?: Maybe<SortOrder>;
  VKLink?: Maybe<SortOrder>;
  bonusBalance?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  discordLink?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  experience?: Maybe<SortOrder>;
  firstDateAuth?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastActivity?: Maybe<SortOrder>;
  lvl?: Maybe<SortOrder>;
  mainBalance?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  steamAvatar?: Maybe<SortOrder>;
  steamID?: Maybe<SortOrder>;
  steamName?: Maybe<SortOrder>;
  sumOfDeposits?: Maybe<SortOrder>;
  sumOfRefunds?: Maybe<SortOrder>;
};

export type UserCountOutputType = {
  __typename?: 'UserCountOutputType';
  Inventory: Scalars['Int'];
  Purchase: Scalars['Int'];
  Tokens: Scalars['Int'];
  Transaction: Scalars['Int'];
  TransfersReceiver: Scalars['Int'];
  TransfersSender: Scalars['Int'];
};

export type UserCreateInput = {
  Inventory?: Maybe<InventoryCreateNestedManyWithoutUserInput>;
  Purchase?: Maybe<PurchaseCreateNestedManyWithoutUserInput>;
  TGLink?: Maybe<Scalars['String']>;
  Tokens?: Maybe<TokenCreateNestedManyWithoutUserInput>;
  Transaction?: Maybe<TransactionCreateNestedManyWithoutUserInput>;
  TransfersReceiver?: Maybe<TransfersCreateNestedManyWithoutReceiverInput>;
  TransfersSender?: Maybe<TransfersCreateNestedManyWithoutSenderInput>;
  VKLink?: Maybe<Scalars['String']>;
  bonusBalance?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordLink?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Int']>;
  firstDateAuth?: Maybe<Scalars['DateTime']>;
  lastActivity?: Maybe<Scalars['DateTime']>;
  lvl?: Maybe<Scalars['Int']>;
  mainBalance: Scalars['Int'];
  role?: Maybe<User_Role>;
  steamAvatar: Scalars['String'];
  steamID: Scalars['String'];
  steamName: Scalars['String'];
  sumOfDeposits?: Maybe<Scalars['Int']>;
  sumOfRefunds?: Maybe<Scalars['Int']>;
};

export type UserCreateManyInput = {
  TGLink?: Maybe<Scalars['String']>;
  VKLink?: Maybe<Scalars['String']>;
  bonusBalance?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordLink?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Int']>;
  firstDateAuth?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  lastActivity?: Maybe<Scalars['DateTime']>;
  lvl?: Maybe<Scalars['Int']>;
  mainBalance: Scalars['Int'];
  role?: Maybe<User_Role>;
  steamAvatar: Scalars['String'];
  steamID: Scalars['String'];
  steamName: Scalars['String'];
  sumOfDeposits?: Maybe<Scalars['Int']>;
  sumOfRefunds?: Maybe<Scalars['Int']>;
};

export type UserCreateNestedOneWithoutInventoryInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutInventoryInput>;
  create?: Maybe<UserUncheckedCreateWithoutInventoryInput>;
};

export type UserCreateNestedOneWithoutPurchaseInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPurchaseInput>;
  create?: Maybe<UserUncheckedCreateWithoutPurchaseInput>;
};

export type UserCreateNestedOneWithoutTokensInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutTokensInput>;
  create?: Maybe<UserUncheckedCreateWithoutTokensInput>;
};

export type UserCreateNestedOneWithoutTransactionInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutTransactionInput>;
  create?: Maybe<UserUncheckedCreateWithoutTransactionInput>;
};

export type UserCreateNestedOneWithoutTransfersReceiverInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutTransfersReceiverInput>;
  create?: Maybe<UserUncheckedCreateWithoutTransfersReceiverInput>;
};

export type UserCreateNestedOneWithoutTransfersSenderInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutTransfersSenderInput>;
  create?: Maybe<UserUncheckedCreateWithoutTransfersSenderInput>;
};

export type UserCreateOrConnectWithoutInventoryInput = {
  create: UserUncheckedCreateWithoutInventoryInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPurchaseInput = {
  create: UserUncheckedCreateWithoutPurchaseInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTokensInput = {
  create: UserUncheckedCreateWithoutTokensInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTransactionInput = {
  create: UserUncheckedCreateWithoutTransactionInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTransfersReceiverInput = {
  create: UserUncheckedCreateWithoutTransfersReceiverInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTransfersSenderInput = {
  create: UserUncheckedCreateWithoutTransfersSenderInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutInventoryInput = {
  Purchase?: Maybe<PurchaseCreateNestedManyWithoutUserInput>;
  TGLink?: Maybe<Scalars['String']>;
  Tokens?: Maybe<TokenCreateNestedManyWithoutUserInput>;
  Transaction?: Maybe<TransactionCreateNestedManyWithoutUserInput>;
  TransfersReceiver?: Maybe<TransfersCreateNestedManyWithoutReceiverInput>;
  TransfersSender?: Maybe<TransfersCreateNestedManyWithoutSenderInput>;
  VKLink?: Maybe<Scalars['String']>;
  bonusBalance?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordLink?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Int']>;
  firstDateAuth?: Maybe<Scalars['DateTime']>;
  lastActivity?: Maybe<Scalars['DateTime']>;
  lvl?: Maybe<Scalars['Int']>;
  mainBalance: Scalars['Int'];
  role?: Maybe<User_Role>;
  steamAvatar: Scalars['String'];
  steamID: Scalars['String'];
  steamName: Scalars['String'];
  sumOfDeposits?: Maybe<Scalars['Int']>;
  sumOfRefunds?: Maybe<Scalars['Int']>;
};

export type UserCreateWithoutPurchaseInput = {
  Inventory?: Maybe<InventoryCreateNestedManyWithoutUserInput>;
  TGLink?: Maybe<Scalars['String']>;
  Tokens?: Maybe<TokenCreateNestedManyWithoutUserInput>;
  Transaction?: Maybe<TransactionCreateNestedManyWithoutUserInput>;
  TransfersReceiver?: Maybe<TransfersCreateNestedManyWithoutReceiverInput>;
  TransfersSender?: Maybe<TransfersCreateNestedManyWithoutSenderInput>;
  VKLink?: Maybe<Scalars['String']>;
  bonusBalance?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordLink?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Int']>;
  firstDateAuth?: Maybe<Scalars['DateTime']>;
  lastActivity?: Maybe<Scalars['DateTime']>;
  lvl?: Maybe<Scalars['Int']>;
  mainBalance: Scalars['Int'];
  role?: Maybe<User_Role>;
  steamAvatar: Scalars['String'];
  steamID: Scalars['String'];
  steamName: Scalars['String'];
  sumOfDeposits?: Maybe<Scalars['Int']>;
  sumOfRefunds?: Maybe<Scalars['Int']>;
};

export type UserCreateWithoutTokensInput = {
  Inventory?: Maybe<InventoryCreateNestedManyWithoutUserInput>;
  Purchase?: Maybe<PurchaseCreateNestedManyWithoutUserInput>;
  TGLink?: Maybe<Scalars['String']>;
  Transaction?: Maybe<TransactionCreateNestedManyWithoutUserInput>;
  TransfersReceiver?: Maybe<TransfersCreateNestedManyWithoutReceiverInput>;
  TransfersSender?: Maybe<TransfersCreateNestedManyWithoutSenderInput>;
  VKLink?: Maybe<Scalars['String']>;
  bonusBalance?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordLink?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Int']>;
  firstDateAuth?: Maybe<Scalars['DateTime']>;
  lastActivity?: Maybe<Scalars['DateTime']>;
  lvl?: Maybe<Scalars['Int']>;
  mainBalance: Scalars['Int'];
  role?: Maybe<User_Role>;
  steamAvatar: Scalars['String'];
  steamID: Scalars['String'];
  steamName: Scalars['String'];
  sumOfDeposits?: Maybe<Scalars['Int']>;
  sumOfRefunds?: Maybe<Scalars['Int']>;
};

export type UserCreateWithoutTransactionInput = {
  Inventory?: Maybe<InventoryCreateNestedManyWithoutUserInput>;
  Purchase?: Maybe<PurchaseCreateNestedManyWithoutUserInput>;
  TGLink?: Maybe<Scalars['String']>;
  Tokens?: Maybe<TokenCreateNestedManyWithoutUserInput>;
  TransfersReceiver?: Maybe<TransfersCreateNestedManyWithoutReceiverInput>;
  TransfersSender?: Maybe<TransfersCreateNestedManyWithoutSenderInput>;
  VKLink?: Maybe<Scalars['String']>;
  bonusBalance?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordLink?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Int']>;
  firstDateAuth?: Maybe<Scalars['DateTime']>;
  lastActivity?: Maybe<Scalars['DateTime']>;
  lvl?: Maybe<Scalars['Int']>;
  mainBalance: Scalars['Int'];
  role?: Maybe<User_Role>;
  steamAvatar: Scalars['String'];
  steamID: Scalars['String'];
  steamName: Scalars['String'];
  sumOfDeposits?: Maybe<Scalars['Int']>;
  sumOfRefunds?: Maybe<Scalars['Int']>;
};

export type UserCreateWithoutTransfersReceiverInput = {
  Inventory?: Maybe<InventoryCreateNestedManyWithoutUserInput>;
  Purchase?: Maybe<PurchaseCreateNestedManyWithoutUserInput>;
  TGLink?: Maybe<Scalars['String']>;
  Tokens?: Maybe<TokenCreateNestedManyWithoutUserInput>;
  Transaction?: Maybe<TransactionCreateNestedManyWithoutUserInput>;
  TransfersSender?: Maybe<TransfersCreateNestedManyWithoutSenderInput>;
  VKLink?: Maybe<Scalars['String']>;
  bonusBalance?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordLink?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Int']>;
  firstDateAuth?: Maybe<Scalars['DateTime']>;
  lastActivity?: Maybe<Scalars['DateTime']>;
  lvl?: Maybe<Scalars['Int']>;
  mainBalance: Scalars['Int'];
  role?: Maybe<User_Role>;
  steamAvatar: Scalars['String'];
  steamID: Scalars['String'];
  steamName: Scalars['String'];
  sumOfDeposits?: Maybe<Scalars['Int']>;
  sumOfRefunds?: Maybe<Scalars['Int']>;
};

export type UserCreateWithoutTransfersSenderInput = {
  Inventory?: Maybe<InventoryCreateNestedManyWithoutUserInput>;
  Purchase?: Maybe<PurchaseCreateNestedManyWithoutUserInput>;
  TGLink?: Maybe<Scalars['String']>;
  Tokens?: Maybe<TokenCreateNestedManyWithoutUserInput>;
  Transaction?: Maybe<TransactionCreateNestedManyWithoutUserInput>;
  TransfersReceiver?: Maybe<TransfersCreateNestedManyWithoutReceiverInput>;
  VKLink?: Maybe<Scalars['String']>;
  bonusBalance?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordLink?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Int']>;
  firstDateAuth?: Maybe<Scalars['DateTime']>;
  lastActivity?: Maybe<Scalars['DateTime']>;
  lvl?: Maybe<Scalars['Int']>;
  mainBalance: Scalars['Int'];
  role?: Maybe<User_Role>;
  steamAvatar: Scalars['String'];
  steamID: Scalars['String'];
  steamName: Scalars['String'];
  sumOfDeposits?: Maybe<Scalars['Int']>;
  sumOfRefunds?: Maybe<Scalars['Int']>;
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  TGLink?: Maybe<Scalars['String']>;
  VKLink?: Maybe<Scalars['String']>;
  bonusBalance?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordLink?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Int']>;
  firstDateAuth?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  lastActivity?: Maybe<Scalars['DateTime']>;
  lvl?: Maybe<Scalars['Int']>;
  mainBalance?: Maybe<Scalars['Int']>;
  role?: Maybe<User_Role>;
  steamAvatar?: Maybe<Scalars['String']>;
  steamID?: Maybe<Scalars['String']>;
  steamName?: Maybe<Scalars['String']>;
  sumOfDeposits?: Maybe<Scalars['Int']>;
  sumOfRefunds?: Maybe<Scalars['Int']>;
};

export type UserMaxOrderByAggregateInput = {
  TGLink?: Maybe<SortOrder>;
  VKLink?: Maybe<SortOrder>;
  bonusBalance?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  discordLink?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  experience?: Maybe<SortOrder>;
  firstDateAuth?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastActivity?: Maybe<SortOrder>;
  lvl?: Maybe<SortOrder>;
  mainBalance?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  steamAvatar?: Maybe<SortOrder>;
  steamID?: Maybe<SortOrder>;
  steamName?: Maybe<SortOrder>;
  sumOfDeposits?: Maybe<SortOrder>;
  sumOfRefunds?: Maybe<SortOrder>;
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  TGLink?: Maybe<Scalars['String']>;
  VKLink?: Maybe<Scalars['String']>;
  bonusBalance?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordLink?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Int']>;
  firstDateAuth?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  lastActivity?: Maybe<Scalars['DateTime']>;
  lvl?: Maybe<Scalars['Int']>;
  mainBalance?: Maybe<Scalars['Int']>;
  role?: Maybe<User_Role>;
  steamAvatar?: Maybe<Scalars['String']>;
  steamID?: Maybe<Scalars['String']>;
  steamName?: Maybe<Scalars['String']>;
  sumOfDeposits?: Maybe<Scalars['Int']>;
  sumOfRefunds?: Maybe<Scalars['Int']>;
};

export type UserMinOrderByAggregateInput = {
  TGLink?: Maybe<SortOrder>;
  VKLink?: Maybe<SortOrder>;
  bonusBalance?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  discordLink?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  experience?: Maybe<SortOrder>;
  firstDateAuth?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastActivity?: Maybe<SortOrder>;
  lvl?: Maybe<SortOrder>;
  mainBalance?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  steamAvatar?: Maybe<SortOrder>;
  steamID?: Maybe<SortOrder>;
  steamName?: Maybe<SortOrder>;
  sumOfDeposits?: Maybe<SortOrder>;
  sumOfRefunds?: Maybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  TGLink?: Maybe<SortOrder>;
  VKLink?: Maybe<SortOrder>;
  _avg?: Maybe<UserAvgOrderByAggregateInput>;
  _count?: Maybe<UserCountOrderByAggregateInput>;
  _max?: Maybe<UserMaxOrderByAggregateInput>;
  _min?: Maybe<UserMinOrderByAggregateInput>;
  _sum?: Maybe<UserSumOrderByAggregateInput>;
  bonusBalance?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  discordLink?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  experience?: Maybe<SortOrder>;
  firstDateAuth?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastActivity?: Maybe<SortOrder>;
  lvl?: Maybe<SortOrder>;
  mainBalance?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  steamAvatar?: Maybe<SortOrder>;
  steamID?: Maybe<SortOrder>;
  steamName?: Maybe<SortOrder>;
  sumOfDeposits?: Maybe<SortOrder>;
  sumOfRefunds?: Maybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  Inventory?: Maybe<InventoryOrderByRelationAggregateInput>;
  Purchase?: Maybe<PurchaseOrderByRelationAggregateInput>;
  TGLink?: Maybe<SortOrder>;
  Tokens?: Maybe<TokenOrderByRelationAggregateInput>;
  Transaction?: Maybe<TransactionOrderByRelationAggregateInput>;
  TransfersReceiver?: Maybe<TransfersOrderByRelationAggregateInput>;
  TransfersSender?: Maybe<TransfersOrderByRelationAggregateInput>;
  VKLink?: Maybe<SortOrder>;
  bonusBalance?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  discordLink?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  experience?: Maybe<SortOrder>;
  firstDateAuth?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastActivity?: Maybe<SortOrder>;
  lvl?: Maybe<SortOrder>;
  mainBalance?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  steamAvatar?: Maybe<SortOrder>;
  steamID?: Maybe<SortOrder>;
  steamName?: Maybe<SortOrder>;
  sumOfDeposits?: Maybe<SortOrder>;
  sumOfRefunds?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  TgLink = 'TGLink',
  VkLink = 'VKLink',
  BonusBalance = 'bonusBalance',
  CreatedAt = 'createdAt',
  DiscordLink = 'discordLink',
  Email = 'email',
  Experience = 'experience',
  FirstDateAuth = 'firstDateAuth',
  Id = 'id',
  LastActivity = 'lastActivity',
  Lvl = 'lvl',
  MainBalance = 'mainBalance',
  Role = 'role',
  SteamAvatar = 'steamAvatar',
  SteamId = 'steamID',
  SteamName = 'steamName',
  SumOfDeposits = 'sumOfDeposits',
  SumOfRefunds = 'sumOfRefunds'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  TGLink?: Maybe<StringNullableWithAggregatesFilter>;
  VKLink?: Maybe<StringNullableWithAggregatesFilter>;
  bonusBalance?: Maybe<IntWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  discordLink?: Maybe<StringNullableWithAggregatesFilter>;
  email?: Maybe<StringNullableWithAggregatesFilter>;
  experience?: Maybe<IntWithAggregatesFilter>;
  firstDateAuth?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  lastActivity?: Maybe<DateTimeNullableWithAggregatesFilter>;
  lvl?: Maybe<IntWithAggregatesFilter>;
  mainBalance?: Maybe<IntWithAggregatesFilter>;
  role?: Maybe<EnumUser_RoleWithAggregatesFilter>;
  steamAvatar?: Maybe<StringWithAggregatesFilter>;
  steamID?: Maybe<StringWithAggregatesFilter>;
  steamName?: Maybe<StringWithAggregatesFilter>;
  sumOfDeposits?: Maybe<IntWithAggregatesFilter>;
  sumOfRefunds?: Maybe<IntWithAggregatesFilter>;
};

export type UserSumAggregateOutputType = {
  __typename?: 'UserSumAggregateOutputType';
  bonusBalance?: Maybe<Scalars['Int']>;
  experience?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  lvl?: Maybe<Scalars['Int']>;
  mainBalance?: Maybe<Scalars['Int']>;
  sumOfDeposits?: Maybe<Scalars['Int']>;
  sumOfRefunds?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  bonusBalance?: Maybe<SortOrder>;
  experience?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lvl?: Maybe<SortOrder>;
  mainBalance?: Maybe<SortOrder>;
  sumOfDeposits?: Maybe<SortOrder>;
  sumOfRefunds?: Maybe<SortOrder>;
};

export type UserUncheckedCreateInput = {
  Inventory?: Maybe<InventoryUncheckedCreateNestedManyWithoutUserInput>;
  Purchase?: Maybe<PurchaseUncheckedCreateNestedManyWithoutUserInput>;
  TGLink?: Maybe<Scalars['String']>;
  Tokens?: Maybe<TokenUncheckedCreateNestedManyWithoutUserInput>;
  Transaction?: Maybe<TransactionUncheckedCreateNestedManyWithoutUserInput>;
  TransfersReceiver?: Maybe<TransfersUncheckedCreateNestedManyWithoutReceiverInput>;
  TransfersSender?: Maybe<TransfersUncheckedCreateNestedManyWithoutSenderInput>;
  VKLink?: Maybe<Scalars['String']>;
  bonusBalance?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordLink?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Int']>;
  firstDateAuth?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  lastActivity?: Maybe<Scalars['DateTime']>;
  lvl?: Maybe<Scalars['Int']>;
  mainBalance: Scalars['Int'];
  role?: Maybe<User_Role>;
  steamAvatar: Scalars['String'];
  steamID: Scalars['String'];
  steamName: Scalars['String'];
  sumOfDeposits?: Maybe<Scalars['Int']>;
  sumOfRefunds?: Maybe<Scalars['Int']>;
};

export type UserUncheckedCreateWithoutInventoryInput = {
  Purchase?: Maybe<PurchaseUncheckedCreateNestedManyWithoutUserInput>;
  TGLink?: Maybe<Scalars['String']>;
  Tokens?: Maybe<TokenUncheckedCreateNestedManyWithoutUserInput>;
  Transaction?: Maybe<TransactionUncheckedCreateNestedManyWithoutUserInput>;
  TransfersReceiver?: Maybe<TransfersUncheckedCreateNestedManyWithoutReceiverInput>;
  TransfersSender?: Maybe<TransfersUncheckedCreateNestedManyWithoutSenderInput>;
  VKLink?: Maybe<Scalars['String']>;
  bonusBalance?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordLink?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Int']>;
  firstDateAuth?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  lastActivity?: Maybe<Scalars['DateTime']>;
  lvl?: Maybe<Scalars['Int']>;
  mainBalance: Scalars['Int'];
  role?: Maybe<User_Role>;
  steamAvatar: Scalars['String'];
  steamID: Scalars['String'];
  steamName: Scalars['String'];
  sumOfDeposits?: Maybe<Scalars['Int']>;
  sumOfRefunds?: Maybe<Scalars['Int']>;
};

export type UserUncheckedCreateWithoutPurchaseInput = {
  Inventory?: Maybe<InventoryUncheckedCreateNestedManyWithoutUserInput>;
  TGLink?: Maybe<Scalars['String']>;
  Tokens?: Maybe<TokenUncheckedCreateNestedManyWithoutUserInput>;
  Transaction?: Maybe<TransactionUncheckedCreateNestedManyWithoutUserInput>;
  TransfersReceiver?: Maybe<TransfersUncheckedCreateNestedManyWithoutReceiverInput>;
  TransfersSender?: Maybe<TransfersUncheckedCreateNestedManyWithoutSenderInput>;
  VKLink?: Maybe<Scalars['String']>;
  bonusBalance?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordLink?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Int']>;
  firstDateAuth?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  lastActivity?: Maybe<Scalars['DateTime']>;
  lvl?: Maybe<Scalars['Int']>;
  mainBalance: Scalars['Int'];
  role?: Maybe<User_Role>;
  steamAvatar: Scalars['String'];
  steamID: Scalars['String'];
  steamName: Scalars['String'];
  sumOfDeposits?: Maybe<Scalars['Int']>;
  sumOfRefunds?: Maybe<Scalars['Int']>;
};

export type UserUncheckedCreateWithoutTokensInput = {
  Inventory?: Maybe<InventoryUncheckedCreateNestedManyWithoutUserInput>;
  Purchase?: Maybe<PurchaseUncheckedCreateNestedManyWithoutUserInput>;
  TGLink?: Maybe<Scalars['String']>;
  Transaction?: Maybe<TransactionUncheckedCreateNestedManyWithoutUserInput>;
  TransfersReceiver?: Maybe<TransfersUncheckedCreateNestedManyWithoutReceiverInput>;
  TransfersSender?: Maybe<TransfersUncheckedCreateNestedManyWithoutSenderInput>;
  VKLink?: Maybe<Scalars['String']>;
  bonusBalance?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordLink?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Int']>;
  firstDateAuth?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  lastActivity?: Maybe<Scalars['DateTime']>;
  lvl?: Maybe<Scalars['Int']>;
  mainBalance: Scalars['Int'];
  role?: Maybe<User_Role>;
  steamAvatar: Scalars['String'];
  steamID: Scalars['String'];
  steamName: Scalars['String'];
  sumOfDeposits?: Maybe<Scalars['Int']>;
  sumOfRefunds?: Maybe<Scalars['Int']>;
};

export type UserUncheckedCreateWithoutTransactionInput = {
  Inventory?: Maybe<InventoryUncheckedCreateNestedManyWithoutUserInput>;
  Purchase?: Maybe<PurchaseUncheckedCreateNestedManyWithoutUserInput>;
  TGLink?: Maybe<Scalars['String']>;
  Tokens?: Maybe<TokenUncheckedCreateNestedManyWithoutUserInput>;
  TransfersReceiver?: Maybe<TransfersUncheckedCreateNestedManyWithoutReceiverInput>;
  TransfersSender?: Maybe<TransfersUncheckedCreateNestedManyWithoutSenderInput>;
  VKLink?: Maybe<Scalars['String']>;
  bonusBalance?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordLink?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Int']>;
  firstDateAuth?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  lastActivity?: Maybe<Scalars['DateTime']>;
  lvl?: Maybe<Scalars['Int']>;
  mainBalance: Scalars['Int'];
  role?: Maybe<User_Role>;
  steamAvatar: Scalars['String'];
  steamID: Scalars['String'];
  steamName: Scalars['String'];
  sumOfDeposits?: Maybe<Scalars['Int']>;
  sumOfRefunds?: Maybe<Scalars['Int']>;
};

export type UserUncheckedCreateWithoutTransfersReceiverInput = {
  Inventory?: Maybe<InventoryUncheckedCreateNestedManyWithoutUserInput>;
  Purchase?: Maybe<PurchaseUncheckedCreateNestedManyWithoutUserInput>;
  TGLink?: Maybe<Scalars['String']>;
  Tokens?: Maybe<TokenUncheckedCreateNestedManyWithoutUserInput>;
  Transaction?: Maybe<TransactionUncheckedCreateNestedManyWithoutUserInput>;
  TransfersSender?: Maybe<TransfersUncheckedCreateNestedManyWithoutSenderInput>;
  VKLink?: Maybe<Scalars['String']>;
  bonusBalance?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordLink?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Int']>;
  firstDateAuth?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  lastActivity?: Maybe<Scalars['DateTime']>;
  lvl?: Maybe<Scalars['Int']>;
  mainBalance: Scalars['Int'];
  role?: Maybe<User_Role>;
  steamAvatar: Scalars['String'];
  steamID: Scalars['String'];
  steamName: Scalars['String'];
  sumOfDeposits?: Maybe<Scalars['Int']>;
  sumOfRefunds?: Maybe<Scalars['Int']>;
};

export type UserUncheckedCreateWithoutTransfersSenderInput = {
  Inventory?: Maybe<InventoryUncheckedCreateNestedManyWithoutUserInput>;
  Purchase?: Maybe<PurchaseUncheckedCreateNestedManyWithoutUserInput>;
  TGLink?: Maybe<Scalars['String']>;
  Tokens?: Maybe<TokenUncheckedCreateNestedManyWithoutUserInput>;
  Transaction?: Maybe<TransactionUncheckedCreateNestedManyWithoutUserInput>;
  TransfersReceiver?: Maybe<TransfersUncheckedCreateNestedManyWithoutReceiverInput>;
  VKLink?: Maybe<Scalars['String']>;
  bonusBalance?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordLink?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Int']>;
  firstDateAuth?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  lastActivity?: Maybe<Scalars['DateTime']>;
  lvl?: Maybe<Scalars['Int']>;
  mainBalance: Scalars['Int'];
  role?: Maybe<User_Role>;
  steamAvatar: Scalars['String'];
  steamID: Scalars['String'];
  steamName: Scalars['String'];
  sumOfDeposits?: Maybe<Scalars['Int']>;
  sumOfRefunds?: Maybe<Scalars['Int']>;
};

export type UserUncheckedUpdateInput = {
  Inventory?: Maybe<InventoryUncheckedUpdateManyWithoutUserInput>;
  Purchase?: Maybe<PurchaseUncheckedUpdateManyWithoutUserInput>;
  TGLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Tokens?: Maybe<TokenUncheckedUpdateManyWithoutUserInput>;
  Transaction?: Maybe<TransactionUncheckedUpdateManyWithoutUserInput>;
  TransfersReceiver?: Maybe<TransfersUncheckedUpdateManyWithoutReceiverInput>;
  TransfersSender?: Maybe<TransfersUncheckedUpdateManyWithoutSenderInput>;
  VKLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  experience?: Maybe<IntFieldUpdateOperationsInput>;
  firstDateAuth?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  lastActivity?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lvl?: Maybe<IntFieldUpdateOperationsInput>;
  mainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  role?: Maybe<EnumUser_RoleFieldUpdateOperationsInput>;
  steamAvatar?: Maybe<StringFieldUpdateOperationsInput>;
  steamID?: Maybe<StringFieldUpdateOperationsInput>;
  steamName?: Maybe<StringFieldUpdateOperationsInput>;
  sumOfDeposits?: Maybe<IntFieldUpdateOperationsInput>;
  sumOfRefunds?: Maybe<IntFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyInput = {
  TGLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  VKLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  experience?: Maybe<IntFieldUpdateOperationsInput>;
  firstDateAuth?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  lastActivity?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lvl?: Maybe<IntFieldUpdateOperationsInput>;
  mainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  role?: Maybe<EnumUser_RoleFieldUpdateOperationsInput>;
  steamAvatar?: Maybe<StringFieldUpdateOperationsInput>;
  steamID?: Maybe<StringFieldUpdateOperationsInput>;
  steamName?: Maybe<StringFieldUpdateOperationsInput>;
  sumOfDeposits?: Maybe<IntFieldUpdateOperationsInput>;
  sumOfRefunds?: Maybe<IntFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutInventoryInput = {
  Purchase?: Maybe<PurchaseUncheckedUpdateManyWithoutUserInput>;
  TGLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Tokens?: Maybe<TokenUncheckedUpdateManyWithoutUserInput>;
  Transaction?: Maybe<TransactionUncheckedUpdateManyWithoutUserInput>;
  TransfersReceiver?: Maybe<TransfersUncheckedUpdateManyWithoutReceiverInput>;
  TransfersSender?: Maybe<TransfersUncheckedUpdateManyWithoutSenderInput>;
  VKLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  experience?: Maybe<IntFieldUpdateOperationsInput>;
  firstDateAuth?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  lastActivity?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lvl?: Maybe<IntFieldUpdateOperationsInput>;
  mainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  role?: Maybe<EnumUser_RoleFieldUpdateOperationsInput>;
  steamAvatar?: Maybe<StringFieldUpdateOperationsInput>;
  steamID?: Maybe<StringFieldUpdateOperationsInput>;
  steamName?: Maybe<StringFieldUpdateOperationsInput>;
  sumOfDeposits?: Maybe<IntFieldUpdateOperationsInput>;
  sumOfRefunds?: Maybe<IntFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutPurchaseInput = {
  Inventory?: Maybe<InventoryUncheckedUpdateManyWithoutUserInput>;
  TGLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Tokens?: Maybe<TokenUncheckedUpdateManyWithoutUserInput>;
  Transaction?: Maybe<TransactionUncheckedUpdateManyWithoutUserInput>;
  TransfersReceiver?: Maybe<TransfersUncheckedUpdateManyWithoutReceiverInput>;
  TransfersSender?: Maybe<TransfersUncheckedUpdateManyWithoutSenderInput>;
  VKLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  experience?: Maybe<IntFieldUpdateOperationsInput>;
  firstDateAuth?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  lastActivity?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lvl?: Maybe<IntFieldUpdateOperationsInput>;
  mainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  role?: Maybe<EnumUser_RoleFieldUpdateOperationsInput>;
  steamAvatar?: Maybe<StringFieldUpdateOperationsInput>;
  steamID?: Maybe<StringFieldUpdateOperationsInput>;
  steamName?: Maybe<StringFieldUpdateOperationsInput>;
  sumOfDeposits?: Maybe<IntFieldUpdateOperationsInput>;
  sumOfRefunds?: Maybe<IntFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutTokensInput = {
  Inventory?: Maybe<InventoryUncheckedUpdateManyWithoutUserInput>;
  Purchase?: Maybe<PurchaseUncheckedUpdateManyWithoutUserInput>;
  TGLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Transaction?: Maybe<TransactionUncheckedUpdateManyWithoutUserInput>;
  TransfersReceiver?: Maybe<TransfersUncheckedUpdateManyWithoutReceiverInput>;
  TransfersSender?: Maybe<TransfersUncheckedUpdateManyWithoutSenderInput>;
  VKLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  experience?: Maybe<IntFieldUpdateOperationsInput>;
  firstDateAuth?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  lastActivity?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lvl?: Maybe<IntFieldUpdateOperationsInput>;
  mainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  role?: Maybe<EnumUser_RoleFieldUpdateOperationsInput>;
  steamAvatar?: Maybe<StringFieldUpdateOperationsInput>;
  steamID?: Maybe<StringFieldUpdateOperationsInput>;
  steamName?: Maybe<StringFieldUpdateOperationsInput>;
  sumOfDeposits?: Maybe<IntFieldUpdateOperationsInput>;
  sumOfRefunds?: Maybe<IntFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutTransactionInput = {
  Inventory?: Maybe<InventoryUncheckedUpdateManyWithoutUserInput>;
  Purchase?: Maybe<PurchaseUncheckedUpdateManyWithoutUserInput>;
  TGLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Tokens?: Maybe<TokenUncheckedUpdateManyWithoutUserInput>;
  TransfersReceiver?: Maybe<TransfersUncheckedUpdateManyWithoutReceiverInput>;
  TransfersSender?: Maybe<TransfersUncheckedUpdateManyWithoutSenderInput>;
  VKLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  experience?: Maybe<IntFieldUpdateOperationsInput>;
  firstDateAuth?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  lastActivity?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lvl?: Maybe<IntFieldUpdateOperationsInput>;
  mainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  role?: Maybe<EnumUser_RoleFieldUpdateOperationsInput>;
  steamAvatar?: Maybe<StringFieldUpdateOperationsInput>;
  steamID?: Maybe<StringFieldUpdateOperationsInput>;
  steamName?: Maybe<StringFieldUpdateOperationsInput>;
  sumOfDeposits?: Maybe<IntFieldUpdateOperationsInput>;
  sumOfRefunds?: Maybe<IntFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutTransfersReceiverInput = {
  Inventory?: Maybe<InventoryUncheckedUpdateManyWithoutUserInput>;
  Purchase?: Maybe<PurchaseUncheckedUpdateManyWithoutUserInput>;
  TGLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Tokens?: Maybe<TokenUncheckedUpdateManyWithoutUserInput>;
  Transaction?: Maybe<TransactionUncheckedUpdateManyWithoutUserInput>;
  TransfersSender?: Maybe<TransfersUncheckedUpdateManyWithoutSenderInput>;
  VKLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  experience?: Maybe<IntFieldUpdateOperationsInput>;
  firstDateAuth?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  lastActivity?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lvl?: Maybe<IntFieldUpdateOperationsInput>;
  mainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  role?: Maybe<EnumUser_RoleFieldUpdateOperationsInput>;
  steamAvatar?: Maybe<StringFieldUpdateOperationsInput>;
  steamID?: Maybe<StringFieldUpdateOperationsInput>;
  steamName?: Maybe<StringFieldUpdateOperationsInput>;
  sumOfDeposits?: Maybe<IntFieldUpdateOperationsInput>;
  sumOfRefunds?: Maybe<IntFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutTransfersSenderInput = {
  Inventory?: Maybe<InventoryUncheckedUpdateManyWithoutUserInput>;
  Purchase?: Maybe<PurchaseUncheckedUpdateManyWithoutUserInput>;
  TGLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Tokens?: Maybe<TokenUncheckedUpdateManyWithoutUserInput>;
  Transaction?: Maybe<TransactionUncheckedUpdateManyWithoutUserInput>;
  TransfersReceiver?: Maybe<TransfersUncheckedUpdateManyWithoutReceiverInput>;
  VKLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  experience?: Maybe<IntFieldUpdateOperationsInput>;
  firstDateAuth?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  lastActivity?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lvl?: Maybe<IntFieldUpdateOperationsInput>;
  mainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  role?: Maybe<EnumUser_RoleFieldUpdateOperationsInput>;
  steamAvatar?: Maybe<StringFieldUpdateOperationsInput>;
  steamID?: Maybe<StringFieldUpdateOperationsInput>;
  steamName?: Maybe<StringFieldUpdateOperationsInput>;
  sumOfDeposits?: Maybe<IntFieldUpdateOperationsInput>;
  sumOfRefunds?: Maybe<IntFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  Inventory?: Maybe<InventoryUpdateManyWithoutUserInput>;
  Purchase?: Maybe<PurchaseUpdateManyWithoutUserInput>;
  TGLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Tokens?: Maybe<TokenUpdateManyWithoutUserInput>;
  Transaction?: Maybe<TransactionUpdateManyWithoutUserInput>;
  TransfersReceiver?: Maybe<TransfersUpdateManyWithoutReceiverInput>;
  TransfersSender?: Maybe<TransfersUpdateManyWithoutSenderInput>;
  VKLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  experience?: Maybe<IntFieldUpdateOperationsInput>;
  firstDateAuth?: Maybe<DateTimeFieldUpdateOperationsInput>;
  lastActivity?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lvl?: Maybe<IntFieldUpdateOperationsInput>;
  mainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  role?: Maybe<EnumUser_RoleFieldUpdateOperationsInput>;
  steamAvatar?: Maybe<StringFieldUpdateOperationsInput>;
  steamID?: Maybe<StringFieldUpdateOperationsInput>;
  steamName?: Maybe<StringFieldUpdateOperationsInput>;
  sumOfDeposits?: Maybe<IntFieldUpdateOperationsInput>;
  sumOfRefunds?: Maybe<IntFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  TGLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  VKLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  experience?: Maybe<IntFieldUpdateOperationsInput>;
  firstDateAuth?: Maybe<DateTimeFieldUpdateOperationsInput>;
  lastActivity?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lvl?: Maybe<IntFieldUpdateOperationsInput>;
  mainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  role?: Maybe<EnumUser_RoleFieldUpdateOperationsInput>;
  steamAvatar?: Maybe<StringFieldUpdateOperationsInput>;
  steamID?: Maybe<StringFieldUpdateOperationsInput>;
  steamName?: Maybe<StringFieldUpdateOperationsInput>;
  sumOfDeposits?: Maybe<IntFieldUpdateOperationsInput>;
  sumOfRefunds?: Maybe<IntFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutInventoryInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutInventoryInput>;
  create?: Maybe<UserUncheckedCreateWithoutInventoryInput>;
  update?: Maybe<UserUncheckedUpdateWithoutInventoryInput>;
  upsert?: Maybe<UserUpsertWithoutInventoryInput>;
};

export type UserUpdateOneRequiredWithoutTransfersReceiverInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutTransfersReceiverInput>;
  create?: Maybe<UserUncheckedCreateWithoutTransfersReceiverInput>;
  update?: Maybe<UserUncheckedUpdateWithoutTransfersReceiverInput>;
  upsert?: Maybe<UserUpsertWithoutTransfersReceiverInput>;
};

export type UserUpdateOneRequiredWithoutTransfersSenderInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutTransfersSenderInput>;
  create?: Maybe<UserUncheckedCreateWithoutTransfersSenderInput>;
  update?: Maybe<UserUncheckedUpdateWithoutTransfersSenderInput>;
  upsert?: Maybe<UserUpsertWithoutTransfersSenderInput>;
};

export type UserUpdateOneWithoutPurchaseInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPurchaseInput>;
  create?: Maybe<UserUncheckedCreateWithoutPurchaseInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUncheckedUpdateWithoutPurchaseInput>;
  upsert?: Maybe<UserUpsertWithoutPurchaseInput>;
};

export type UserUpdateOneWithoutTokensInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutTokensInput>;
  create?: Maybe<UserUncheckedCreateWithoutTokensInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUncheckedUpdateWithoutTokensInput>;
  upsert?: Maybe<UserUpsertWithoutTokensInput>;
};

export type UserUpdateOneWithoutTransactionInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutTransactionInput>;
  create?: Maybe<UserUncheckedCreateWithoutTransactionInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUncheckedUpdateWithoutTransactionInput>;
  upsert?: Maybe<UserUpsertWithoutTransactionInput>;
};

export type UserUpdateWithoutInventoryInput = {
  Purchase?: Maybe<PurchaseUpdateManyWithoutUserInput>;
  TGLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Tokens?: Maybe<TokenUpdateManyWithoutUserInput>;
  Transaction?: Maybe<TransactionUpdateManyWithoutUserInput>;
  TransfersReceiver?: Maybe<TransfersUpdateManyWithoutReceiverInput>;
  TransfersSender?: Maybe<TransfersUpdateManyWithoutSenderInput>;
  VKLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  experience?: Maybe<IntFieldUpdateOperationsInput>;
  firstDateAuth?: Maybe<DateTimeFieldUpdateOperationsInput>;
  lastActivity?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lvl?: Maybe<IntFieldUpdateOperationsInput>;
  mainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  role?: Maybe<EnumUser_RoleFieldUpdateOperationsInput>;
  steamAvatar?: Maybe<StringFieldUpdateOperationsInput>;
  steamID?: Maybe<StringFieldUpdateOperationsInput>;
  steamName?: Maybe<StringFieldUpdateOperationsInput>;
  sumOfDeposits?: Maybe<IntFieldUpdateOperationsInput>;
  sumOfRefunds?: Maybe<IntFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutPurchaseInput = {
  Inventory?: Maybe<InventoryUpdateManyWithoutUserInput>;
  TGLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Tokens?: Maybe<TokenUpdateManyWithoutUserInput>;
  Transaction?: Maybe<TransactionUpdateManyWithoutUserInput>;
  TransfersReceiver?: Maybe<TransfersUpdateManyWithoutReceiverInput>;
  TransfersSender?: Maybe<TransfersUpdateManyWithoutSenderInput>;
  VKLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  experience?: Maybe<IntFieldUpdateOperationsInput>;
  firstDateAuth?: Maybe<DateTimeFieldUpdateOperationsInput>;
  lastActivity?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lvl?: Maybe<IntFieldUpdateOperationsInput>;
  mainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  role?: Maybe<EnumUser_RoleFieldUpdateOperationsInput>;
  steamAvatar?: Maybe<StringFieldUpdateOperationsInput>;
  steamID?: Maybe<StringFieldUpdateOperationsInput>;
  steamName?: Maybe<StringFieldUpdateOperationsInput>;
  sumOfDeposits?: Maybe<IntFieldUpdateOperationsInput>;
  sumOfRefunds?: Maybe<IntFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTokensInput = {
  Inventory?: Maybe<InventoryUpdateManyWithoutUserInput>;
  Purchase?: Maybe<PurchaseUpdateManyWithoutUserInput>;
  TGLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Transaction?: Maybe<TransactionUpdateManyWithoutUserInput>;
  TransfersReceiver?: Maybe<TransfersUpdateManyWithoutReceiverInput>;
  TransfersSender?: Maybe<TransfersUpdateManyWithoutSenderInput>;
  VKLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  experience?: Maybe<IntFieldUpdateOperationsInput>;
  firstDateAuth?: Maybe<DateTimeFieldUpdateOperationsInput>;
  lastActivity?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lvl?: Maybe<IntFieldUpdateOperationsInput>;
  mainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  role?: Maybe<EnumUser_RoleFieldUpdateOperationsInput>;
  steamAvatar?: Maybe<StringFieldUpdateOperationsInput>;
  steamID?: Maybe<StringFieldUpdateOperationsInput>;
  steamName?: Maybe<StringFieldUpdateOperationsInput>;
  sumOfDeposits?: Maybe<IntFieldUpdateOperationsInput>;
  sumOfRefunds?: Maybe<IntFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTransactionInput = {
  Inventory?: Maybe<InventoryUpdateManyWithoutUserInput>;
  Purchase?: Maybe<PurchaseUpdateManyWithoutUserInput>;
  TGLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Tokens?: Maybe<TokenUpdateManyWithoutUserInput>;
  TransfersReceiver?: Maybe<TransfersUpdateManyWithoutReceiverInput>;
  TransfersSender?: Maybe<TransfersUpdateManyWithoutSenderInput>;
  VKLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  experience?: Maybe<IntFieldUpdateOperationsInput>;
  firstDateAuth?: Maybe<DateTimeFieldUpdateOperationsInput>;
  lastActivity?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lvl?: Maybe<IntFieldUpdateOperationsInput>;
  mainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  role?: Maybe<EnumUser_RoleFieldUpdateOperationsInput>;
  steamAvatar?: Maybe<StringFieldUpdateOperationsInput>;
  steamID?: Maybe<StringFieldUpdateOperationsInput>;
  steamName?: Maybe<StringFieldUpdateOperationsInput>;
  sumOfDeposits?: Maybe<IntFieldUpdateOperationsInput>;
  sumOfRefunds?: Maybe<IntFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTransfersReceiverInput = {
  Inventory?: Maybe<InventoryUpdateManyWithoutUserInput>;
  Purchase?: Maybe<PurchaseUpdateManyWithoutUserInput>;
  TGLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Tokens?: Maybe<TokenUpdateManyWithoutUserInput>;
  Transaction?: Maybe<TransactionUpdateManyWithoutUserInput>;
  TransfersSender?: Maybe<TransfersUpdateManyWithoutSenderInput>;
  VKLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  experience?: Maybe<IntFieldUpdateOperationsInput>;
  firstDateAuth?: Maybe<DateTimeFieldUpdateOperationsInput>;
  lastActivity?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lvl?: Maybe<IntFieldUpdateOperationsInput>;
  mainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  role?: Maybe<EnumUser_RoleFieldUpdateOperationsInput>;
  steamAvatar?: Maybe<StringFieldUpdateOperationsInput>;
  steamID?: Maybe<StringFieldUpdateOperationsInput>;
  steamName?: Maybe<StringFieldUpdateOperationsInput>;
  sumOfDeposits?: Maybe<IntFieldUpdateOperationsInput>;
  sumOfRefunds?: Maybe<IntFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTransfersSenderInput = {
  Inventory?: Maybe<InventoryUpdateManyWithoutUserInput>;
  Purchase?: Maybe<PurchaseUpdateManyWithoutUserInput>;
  TGLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Tokens?: Maybe<TokenUpdateManyWithoutUserInput>;
  Transaction?: Maybe<TransactionUpdateManyWithoutUserInput>;
  TransfersReceiver?: Maybe<TransfersUpdateManyWithoutReceiverInput>;
  VKLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bonusBalance?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  experience?: Maybe<IntFieldUpdateOperationsInput>;
  firstDateAuth?: Maybe<DateTimeFieldUpdateOperationsInput>;
  lastActivity?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lvl?: Maybe<IntFieldUpdateOperationsInput>;
  mainBalance?: Maybe<IntFieldUpdateOperationsInput>;
  role?: Maybe<EnumUser_RoleFieldUpdateOperationsInput>;
  steamAvatar?: Maybe<StringFieldUpdateOperationsInput>;
  steamID?: Maybe<StringFieldUpdateOperationsInput>;
  steamName?: Maybe<StringFieldUpdateOperationsInput>;
  sumOfDeposits?: Maybe<IntFieldUpdateOperationsInput>;
  sumOfRefunds?: Maybe<IntFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutInventoryInput = {
  create: UserUncheckedCreateWithoutInventoryInput;
  update: UserUncheckedUpdateWithoutInventoryInput;
};

export type UserUpsertWithoutPurchaseInput = {
  create: UserUncheckedCreateWithoutPurchaseInput;
  update: UserUncheckedUpdateWithoutPurchaseInput;
};

export type UserUpsertWithoutTokensInput = {
  create: UserUncheckedCreateWithoutTokensInput;
  update: UserUncheckedUpdateWithoutTokensInput;
};

export type UserUpsertWithoutTransactionInput = {
  create: UserUncheckedCreateWithoutTransactionInput;
  update: UserUncheckedUpdateWithoutTransactionInput;
};

export type UserUpsertWithoutTransfersReceiverInput = {
  create: UserUncheckedCreateWithoutTransfersReceiverInput;
  update: UserUncheckedUpdateWithoutTransfersReceiverInput;
};

export type UserUpsertWithoutTransfersSenderInput = {
  create: UserUncheckedCreateWithoutTransfersSenderInput;
  update: UserUncheckedUpdateWithoutTransfersSenderInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  Inventory?: Maybe<InventoryListRelationFilter>;
  NOT?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  Purchase?: Maybe<PurchaseListRelationFilter>;
  TGLink?: Maybe<StringNullableFilter>;
  Tokens?: Maybe<TokenListRelationFilter>;
  Transaction?: Maybe<TransactionListRelationFilter>;
  TransfersReceiver?: Maybe<TransfersListRelationFilter>;
  TransfersSender?: Maybe<TransfersListRelationFilter>;
  VKLink?: Maybe<StringNullableFilter>;
  bonusBalance?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  discordLink?: Maybe<StringNullableFilter>;
  email?: Maybe<StringNullableFilter>;
  experience?: Maybe<IntFilter>;
  firstDateAuth?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  lastActivity?: Maybe<DateTimeNullableFilter>;
  lvl?: Maybe<IntFilter>;
  mainBalance?: Maybe<IntFilter>;
  role?: Maybe<EnumUser_RoleFilter>;
  steamAvatar?: Maybe<StringFilter>;
  steamID?: Maybe<StringFilter>;
  steamName?: Maybe<StringFilter>;
  sumOfDeposits?: Maybe<IntFilter>;
  sumOfRefunds?: Maybe<IntFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  steamID?: Maybe<Scalars['String']>;
};

export type Visitors = {
  __typename?: 'Visitors';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  ip: Scalars['String'];
  sortDate: Scalars['String'];
  sortedMonth: Scalars['String'];
};

export type VisitorsAvgAggregateOutputType = {
  __typename?: 'VisitorsAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type VisitorsAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type VisitorsCountAggregateOutputType = {
  __typename?: 'VisitorsCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  ip: Scalars['Int'];
  sortDate: Scalars['Int'];
  sortedMonth: Scalars['Int'];
};

export type VisitorsCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  ip?: Maybe<SortOrder>;
  sortDate?: Maybe<SortOrder>;
  sortedMonth?: Maybe<SortOrder>;
};

export type VisitorsCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  ip: Scalars['String'];
  sortDate: Scalars['String'];
  sortedMonth: Scalars['String'];
};

export type VisitorsCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  ip: Scalars['String'];
  sortDate: Scalars['String'];
  sortedMonth: Scalars['String'];
};

export type VisitorsMaxAggregateOutputType = {
  __typename?: 'VisitorsMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  ip?: Maybe<Scalars['String']>;
  sortDate?: Maybe<Scalars['String']>;
  sortedMonth?: Maybe<Scalars['String']>;
};

export type VisitorsMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  ip?: Maybe<SortOrder>;
  sortDate?: Maybe<SortOrder>;
  sortedMonth?: Maybe<SortOrder>;
};

export type VisitorsMinAggregateOutputType = {
  __typename?: 'VisitorsMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  ip?: Maybe<Scalars['String']>;
  sortDate?: Maybe<Scalars['String']>;
  sortedMonth?: Maybe<Scalars['String']>;
};

export type VisitorsMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  ip?: Maybe<SortOrder>;
  sortDate?: Maybe<SortOrder>;
  sortedMonth?: Maybe<SortOrder>;
};

export type VisitorsOrderByWithAggregationInput = {
  _avg?: Maybe<VisitorsAvgOrderByAggregateInput>;
  _count?: Maybe<VisitorsCountOrderByAggregateInput>;
  _max?: Maybe<VisitorsMaxOrderByAggregateInput>;
  _min?: Maybe<VisitorsMinOrderByAggregateInput>;
  _sum?: Maybe<VisitorsSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  ip?: Maybe<SortOrder>;
  sortDate?: Maybe<SortOrder>;
  sortedMonth?: Maybe<SortOrder>;
};

export type VisitorsOrderByWithRelationInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  ip?: Maybe<SortOrder>;
  sortDate?: Maybe<SortOrder>;
  sortedMonth?: Maybe<SortOrder>;
};

export enum VisitorsScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Ip = 'ip',
  SortDate = 'sortDate',
  SortedMonth = 'sortedMonth'
}

export type VisitorsScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<VisitorsScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<VisitorsScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<VisitorsScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  ip?: Maybe<StringWithAggregatesFilter>;
  sortDate?: Maybe<StringWithAggregatesFilter>;
  sortedMonth?: Maybe<StringWithAggregatesFilter>;
};

export type VisitorsSumAggregateOutputType = {
  __typename?: 'VisitorsSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type VisitorsSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type VisitorsUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  ip: Scalars['String'];
  sortDate: Scalars['String'];
  sortedMonth: Scalars['String'];
};

export type VisitorsUncheckedUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  ip?: Maybe<StringFieldUpdateOperationsInput>;
  sortDate?: Maybe<StringFieldUpdateOperationsInput>;
  sortedMonth?: Maybe<StringFieldUpdateOperationsInput>;
};

export type VisitorsUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  ip?: Maybe<StringFieldUpdateOperationsInput>;
  sortDate?: Maybe<StringFieldUpdateOperationsInput>;
  sortedMonth?: Maybe<StringFieldUpdateOperationsInput>;
};

export type VisitorsUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  ip?: Maybe<StringFieldUpdateOperationsInput>;
  sortDate?: Maybe<StringFieldUpdateOperationsInput>;
  sortedMonth?: Maybe<StringFieldUpdateOperationsInput>;
};

export type VisitorsUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  ip?: Maybe<StringFieldUpdateOperationsInput>;
  sortDate?: Maybe<StringFieldUpdateOperationsInput>;
  sortedMonth?: Maybe<StringFieldUpdateOperationsInput>;
};

export type VisitorsWhereInput = {
  AND?: Maybe<Array<Maybe<VisitorsWhereInput>>>;
  NOT?: Maybe<Array<Maybe<VisitorsWhereInput>>>;
  OR?: Maybe<Array<Maybe<VisitorsWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  ip?: Maybe<StringFilter>;
  sortDate?: Maybe<StringFilter>;
  sortedMonth?: Maybe<StringFilter>;
};

export type VisitorsWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

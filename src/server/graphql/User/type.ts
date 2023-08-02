import { objectType } from 'nexus'

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.int('id')
    t.string('steamName')
    t.string('steamID')
    t.nullable.string('email')
    t.string('steamAvatar')
    t.int('mainBalance')
    t.int('bonusBalance')
    t.field('firstDateAuth', { type: 'DateTime' })
    t.int('lvl')
    t.int('experience')
    t.int('sumOfDeposits')
    t.int('sumOfRefunds')
    t.nullable.string('discordLink')
    t.nullable.string('VKLink')
    t.nullable.string('TGLink')
    t.field('createdAt', { type: 'DateTime' })
    t.nullable.field('lastActivity', { type: 'DateTime' })
    t.field('role', { type: 'USER_ROLE' })
    t.list.field('Transaction', {
      type: 'Transaction',
      args: {
        where: 'TransactionWhereInput',
        orderBy: 'TransactionOrderByWithRelationInput',
        cursor: 'TransactionWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'TransactionScalarFieldEnum',
      },
      resolve(root: any) {
        return root.Transaction
      },
    })
    t.list.field('Purchase', {
      type: 'Purchase',
      args: {
        where: 'PurchaseWhereInput',
        orderBy: 'PurchaseOrderByWithRelationInput',
        cursor: 'PurchaseWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'PurchaseScalarFieldEnum',
      },
      resolve(root: any) {
        return root.Purchase
      },
    })
    t.list.field('TransfersSender', {
      type: 'Transfers',
      args: {
        where: 'TransfersWhereInput',
        orderBy: 'TransfersOrderByWithRelationInput',
        cursor: 'TransfersWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'TransfersScalarFieldEnum',
      },
      resolve(root: any) {
        return root.TransfersSender
      },
    })
    t.list.field('TransfersReceiver', {
      type: 'Transfers',
      args: {
        where: 'TransfersWhereInput',
        orderBy: 'TransfersOrderByWithRelationInput',
        cursor: 'TransfersWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'TransfersScalarFieldEnum',
      },
      resolve(root: any) {
        return root.TransfersReceiver
      },
    })
    t.list.field('Inventory', {
      type: 'Inventory',
      args: {
        where: 'InventoryWhereInput',
        orderBy: 'InventoryOrderByWithRelationInput',
        cursor: 'InventoryWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'InventoryScalarFieldEnum',
      },
      resolve(root: any) {
        return root.Inventory
      },
    })
    t.list.field('Tokens', {
      type: 'Token',
      args: {
        where: 'TokenWhereInput',
        orderBy: 'TokenOrderByWithRelationInput',
        cursor: 'TokenWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'TokenScalarFieldEnum',
      },
      resolve(root: any) {
        return root.Tokens
      },
    })
    t.nullable.field('_count', {
      type: 'UserCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})

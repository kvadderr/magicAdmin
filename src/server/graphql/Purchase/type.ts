import { objectType } from 'nexus'

export const Purchase = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Purchase',
  definition(t) {
    t.int('id')
    t.nullable.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.nullable.int('userId')
    t.int('amount')
    t.field('createdAt', { type: 'DateTime' })
    t.int('lostMainBalance')
    t.int('lostBonusBalance')
    t.boolean('refund')
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
    t.field('product', {
      type: 'Product',
      resolve(root: any) {
        return root.product
      },
    })
    t.int('productId')
    t.nullable.field('_count', {
      type: 'PurchaseCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})

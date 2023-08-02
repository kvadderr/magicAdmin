import { objectType } from 'nexus'

export const Inventory = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Inventory',
  definition(t) {
    t.int('id')
    t.int('amount')
    t.field('status', { type: 'EStatusOfProductInInventory' })
    t.nullable.field('dateOfReceive', { type: 'DateTime' })
    t.field('purchase', {
      type: 'Purchase',
      resolve(root: any) {
        return root.purchase
      },
    })
    t.int('historyOfPurchaseId')
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.int('userId')
    t.nullable.field('serverType', {
      type: 'ServerType',
      resolve(root: any) {
        return root.serverType
      },
    })
    t.nullable.int('serverTypeId')
    t.nullable.field('server', {
      type: 'Server',
      resolve(root: any) {
        return root.server
      },
    })
    t.nullable.int('serverId')
    t.nullable.string('serverName')
    t.field('product', {
      type: 'Product',
      resolve(root: any) {
        return root.product
      },
    })
    t.int('productId')
    t.field('createdAt', { type: 'DateTime' })
  },
})

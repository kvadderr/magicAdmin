import { objectType } from 'nexus'

export const Product = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Product',
  definition(t) {
    t.int('id')
    t.string('name')
    t.nullable.string('nameID')
    t.nullable.string('description')
    t.nullable.string('image')
    t.field('type', { type: 'ETypeOfProduct' })
    t.nullable.json('productContent')
    t.nullable.field('serverType', {
      type: 'ServerType',
      resolve(root: any) {
        return root.serverType
      },
    })
    t.nullable.int('serverTypeId')
    t.int('amount')
    t.boolean('isChangeAmount')
    t.int('price')
    t.nullable.float('discount')
    t.nullable.float('saleDiscount')
    t.nullable.field('saleDeadline', { type: 'DateTime' })
    t.nullable.int('maxCountOfSale')
    t.boolean('hidden')
    t.nullable.int('number')
    t.boolean('autoactivation')
    t.boolean('isBackgroundColor')
    t.int('blockSize')
    t.boolean('isBackgroundImage')
    t.field('buttonColor', { type: 'EButtonColor' })
    t.nullable.string('textButton')
    t.nullable.string('iconButton')
    t.nullable.int('height')
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
    t.nullable.field('_count', {
      type: 'ProductCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})

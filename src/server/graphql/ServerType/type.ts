import { objectType } from 'nexus'

export const ServerType = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ServerType',
  definition(t) {
    t.int('id')
    t.string('name')
    t.string('description')
    t.int('number')
    t.boolean('hidden')
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
    t.list.field('Server', {
      type: 'Server',
      args: {
        where: 'ServerWhereInput',
        orderBy: 'ServerOrderByWithRelationInput',
        cursor: 'ServerWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ServerScalarFieldEnum',
      },
      resolve(root: any) {
        return root.Server
      },
    })
    t.list.field('Product', {
      type: 'Product',
      args: {
        where: 'ProductWhereInput',
        orderBy: 'ProductOrderByWithRelationInput',
        cursor: 'ProductWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ProductScalarFieldEnum',
      },
      resolve(root: any) {
        return root.Product
      },
    })
    t.nullable.field('_count', {
      type: 'ServerTypeCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})

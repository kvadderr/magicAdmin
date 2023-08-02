import { objectType } from 'nexus'

export const Server = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Server',
  definition(t) {
    t.int('id')
    t.field('typeOfSever', {
      type: 'ServerType',
      resolve(root: any) {
        return root.typeOfSever
      },
    })
    t.int('serverTypeId')
    t.string('IP')
    t.string('port')
    t.string('apiKey')
    t.string('name')
    t.int('serverID')
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
      type: 'ServerCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})

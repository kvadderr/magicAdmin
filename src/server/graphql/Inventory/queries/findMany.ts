import { queryField, nonNull, list } from 'nexus'

export const InventoryFindManyQuery = queryField('findManyInventory', {
  type: nonNull(list(nonNull('Inventory'))),
  args: {
    where: 'InventoryWhereInput',
    orderBy: list('InventoryOrderByWithRelationInput'),
    cursor: 'InventoryWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('InventoryScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.inventory.findMany({
      ...args,
      ...select,
    })
  },
})

import { queryField, list } from 'nexus'

export const InventoryFindFirstQuery = queryField('findFirstInventory', {
  type: 'Inventory',
  args: {
    where: 'InventoryWhereInput',
    orderBy: list('InventoryOrderByWithRelationInput'),
    cursor: 'InventoryWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('InventoryScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.inventory.findFirst({
      ...args,
      ...select,
    })
  },
})

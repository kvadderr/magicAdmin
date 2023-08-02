import { queryField, list } from 'nexus'

export const InventoryAggregateQuery = queryField('aggregateInventory', {
  type: 'AggregateInventory',
  args: {
    where: 'InventoryWhereInput',
    orderBy: list('InventoryOrderByWithRelationInput'),
    cursor: 'InventoryWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.inventory.aggregate({ ...args, ...select }) as any
  },
})

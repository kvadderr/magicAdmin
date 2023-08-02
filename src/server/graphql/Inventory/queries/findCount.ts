import { queryField, nonNull, list } from 'nexus'

export const InventoryFindCountQuery = queryField('findManyInventoryCount', {
  type: nonNull('Int'),
  args: {
    where: 'InventoryWhereInput',
    orderBy: list('InventoryOrderByWithRelationInput'),
    cursor: 'InventoryWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('InventoryScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.inventory.count(args as any)
  },
})

import { queryField, nonNull, list } from 'nexus'

export const PurchaseFindCountQuery = queryField('findManyPurchaseCount', {
  type: nonNull('Int'),
  args: {
    where: 'PurchaseWhereInput',
    orderBy: list('PurchaseOrderByWithRelationInput'),
    cursor: 'PurchaseWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('PurchaseScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.purchase.count(args as any)
  },
})

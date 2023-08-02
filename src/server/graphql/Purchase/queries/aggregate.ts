import { queryField, list } from 'nexus'

export const PurchaseAggregateQuery = queryField('aggregatePurchase', {
  type: 'AggregatePurchase',
  args: {
    where: 'PurchaseWhereInput',
    orderBy: list('PurchaseOrderByWithRelationInput'),
    cursor: 'PurchaseWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.purchase.aggregate({ ...args, ...select }) as any
  },
})

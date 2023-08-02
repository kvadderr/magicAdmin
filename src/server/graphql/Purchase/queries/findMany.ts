import { queryField, nonNull, list } from 'nexus'

export const PurchaseFindManyQuery = queryField('findManyPurchase', {
  type: nonNull(list(nonNull('Purchase'))),
  args: {
    where: 'PurchaseWhereInput',
    orderBy: list('PurchaseOrderByWithRelationInput'),
    cursor: 'PurchaseWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('PurchaseScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.purchase.findMany({
      ...args,
      ...select,
    })
  },
})

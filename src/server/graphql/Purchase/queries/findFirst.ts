import { queryField, list } from 'nexus'

export const PurchaseFindFirstQuery = queryField('findFirstPurchase', {
  type: 'Purchase',
  args: {
    where: 'PurchaseWhereInput',
    orderBy: list('PurchaseOrderByWithRelationInput'),
    cursor: 'PurchaseWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('PurchaseScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.purchase.findFirst({
      ...args,
      ...select,
    })
  },
})

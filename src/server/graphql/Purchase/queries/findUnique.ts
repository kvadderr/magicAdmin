import { queryField, nonNull } from 'nexus'

export const PurchaseFindUniqueQuery = queryField('findUniquePurchase', {
  type: 'Purchase',
  args: {
    where: nonNull('PurchaseWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.purchase.findUnique({
      where,
      ...select,
    })
  },
})

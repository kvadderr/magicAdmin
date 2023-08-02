import { mutationField, nonNull } from 'nexus'

export const PurchaseUpdateOneMutation = mutationField('updateOnePurchase', {
  type: nonNull('Purchase'),
  args: {
    data: nonNull('PurchaseUpdateInput'),
    where: nonNull('PurchaseWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.purchase.update({
      where,
      data,
      ...select,
    })
  },
})

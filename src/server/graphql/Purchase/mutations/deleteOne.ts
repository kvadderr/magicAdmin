import { mutationField, nonNull } from 'nexus'

export const PurchaseDeleteOneMutation = mutationField('deleteOnePurchase', {
  type: 'Purchase',
  args: {
    where: nonNull('PurchaseWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.purchase.delete({
      where,
      ...select,
    })
  },
})

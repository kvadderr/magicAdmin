import { mutationField, nonNull } from 'nexus'

export const PurchaseDeleteManyMutation = mutationField('deleteManyPurchase', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'PurchaseWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.purchase.deleteMany({ where } as any)
  },
})

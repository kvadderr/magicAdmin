import { mutationField, nonNull } from 'nexus'

export const PurchaseUpdateManyMutation = mutationField('updateManyPurchase', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('PurchaseUpdateManyMutationInput'),
    where: 'PurchaseWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.purchase.updateMany(args as any)
  },
})

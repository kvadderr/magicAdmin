import { mutationField, nonNull } from 'nexus'

export const PurchaseUpsertOneMutation = mutationField('upsertOnePurchase', {
  type: nonNull('Purchase'),
  args: {
    where: nonNull('PurchaseWhereUniqueInput'),
    create: nonNull('PurchaseCreateInput'),
    update: nonNull('PurchaseUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.purchase.upsert({
      ...args,
      ...select,
    })
  },
})

import { mutationField, nonNull } from 'nexus'

export const PurchaseCreateOneMutation = mutationField('createOnePurchase', {
  type: nonNull('Purchase'),
  args: {
    data: nonNull('PurchaseCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.purchase.create({
      data,
      ...select,
    })
  },
})

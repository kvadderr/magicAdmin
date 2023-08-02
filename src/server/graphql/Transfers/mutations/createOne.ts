import { mutationField, nonNull } from 'nexus'

export const TransfersCreateOneMutation = mutationField('createOneTransfers', {
  type: nonNull('Transfers'),
  args: {
    data: nonNull('TransfersCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.transfers.create({
      data,
      ...select,
    })
  },
})

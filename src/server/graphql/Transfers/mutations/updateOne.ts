import { mutationField, nonNull } from 'nexus'

export const TransfersUpdateOneMutation = mutationField('updateOneTransfers', {
  type: nonNull('Transfers'),
  args: {
    data: nonNull('TransfersUpdateInput'),
    where: nonNull('TransfersWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.transfers.update({
      where,
      data,
      ...select,
    })
  },
})

import { mutationField, nonNull } from 'nexus'

export const TransfersDeleteOneMutation = mutationField('deleteOneTransfers', {
  type: 'Transfers',
  args: {
    where: nonNull('TransfersWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.transfers.delete({
      where,
      ...select,
    })
  },
})

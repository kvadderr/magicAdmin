import { queryField, nonNull } from 'nexus'

export const TransfersFindUniqueQuery = queryField('findUniqueTransfers', {
  type: 'Transfers',
  args: {
    where: nonNull('TransfersWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.transfers.findUnique({
      where,
      ...select,
    })
  },
})

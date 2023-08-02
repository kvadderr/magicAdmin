import { queryField, list } from 'nexus'

export const TransfersFindFirstQuery = queryField('findFirstTransfers', {
  type: 'Transfers',
  args: {
    where: 'TransfersWhereInput',
    orderBy: list('TransfersOrderByWithRelationInput'),
    cursor: 'TransfersWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TransfersScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.transfers.findFirst({
      ...args,
      ...select,
    })
  },
})

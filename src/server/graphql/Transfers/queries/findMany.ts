import { queryField, nonNull, list } from 'nexus'

export const TransfersFindManyQuery = queryField('findManyTransfers', {
  type: nonNull(list(nonNull('Transfers'))),
  args: {
    where: 'TransfersWhereInput',
    orderBy: list('TransfersOrderByWithRelationInput'),
    cursor: 'TransfersWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TransfersScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.transfers.findMany({
      ...args,
      ...select,
    })
  },
})

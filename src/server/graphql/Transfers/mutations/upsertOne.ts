import { mutationField, nonNull } from 'nexus'

export const TransfersUpsertOneMutation = mutationField('upsertOneTransfers', {
  type: nonNull('Transfers'),
  args: {
    where: nonNull('TransfersWhereUniqueInput'),
    create: nonNull('TransfersCreateInput'),
    update: nonNull('TransfersUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.transfers.upsert({
      ...args,
      ...select,
    })
  },
})

import { mutationField, nonNull } from 'nexus'

export const TransfersUpdateManyMutation = mutationField(
  'updateManyTransfers',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('TransfersUpdateManyMutationInput'),
      where: 'TransfersWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.transfers.updateMany(args as any)
    },
  },
)

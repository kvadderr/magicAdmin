import { mutationField, nonNull } from 'nexus'

export const TransfersDeleteManyMutation = mutationField(
  'deleteManyTransfers',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'TransfersWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.transfers.deleteMany({ where } as any)
    },
  },
)

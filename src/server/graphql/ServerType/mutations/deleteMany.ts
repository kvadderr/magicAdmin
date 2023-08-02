import { mutationField, nonNull } from 'nexus'

export const ServerTypeDeleteManyMutation = mutationField(
  'deleteManyServerType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ServerTypeWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.serverType.deleteMany({ where } as any)
    },
  },
)

import { mutationField, nonNull } from 'nexus'

export const ServerTypeUpdateManyMutation = mutationField(
  'updateManyServerType',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('ServerTypeUpdateManyMutationInput'),
      where: 'ServerTypeWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.serverType.updateMany(args as any)
    },
  },
)

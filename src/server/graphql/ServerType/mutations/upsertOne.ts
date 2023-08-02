import { mutationField, nonNull } from 'nexus'

export const ServerTypeUpsertOneMutation = mutationField(
  'upsertOneServerType',
  {
    type: nonNull('ServerType'),
    args: {
      where: nonNull('ServerTypeWhereUniqueInput'),
      create: nonNull('ServerTypeCreateInput'),
      update: nonNull('ServerTypeUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.serverType.upsert({
        ...args,
        ...select,
      })
    },
  },
)

import { mutationField, nonNull } from 'nexus'

export const ServerTypeDeleteOneMutation = mutationField(
  'deleteOneServerType',
  {
    type: 'ServerType',
    args: {
      where: nonNull('ServerTypeWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.serverType.delete({
        where,
        ...select,
      })
    },
  },
)

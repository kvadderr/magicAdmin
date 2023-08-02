import { mutationField, nonNull } from 'nexus'

export const ServerTypeUpdateOneMutation = mutationField(
  'updateOneServerType',
  {
    type: nonNull('ServerType'),
    args: {
      data: nonNull('ServerTypeUpdateInput'),
      where: nonNull('ServerTypeWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.serverType.update({
        where,
        data,
        ...select,
      })
    },
  },
)

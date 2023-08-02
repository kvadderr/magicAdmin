import { mutationField, nonNull } from 'nexus'

export const ServerTypeCreateOneMutation = mutationField(
  'createOneServerType',
  {
    type: nonNull('ServerType'),
    args: {
      data: nonNull('ServerTypeCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.serverType.create({
        data,
        ...select,
      })
    },
  },
)

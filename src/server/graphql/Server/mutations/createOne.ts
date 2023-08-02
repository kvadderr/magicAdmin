import { mutationField, nonNull } from 'nexus'

export const ServerCreateOneMutation = mutationField('createOneServer', {
  type: nonNull('Server'),
  args: {
    data: nonNull('ServerCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.server.create({
      data,
      ...select,
    })
  },
})

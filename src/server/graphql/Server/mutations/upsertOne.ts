import { mutationField, nonNull } from 'nexus'

export const ServerUpsertOneMutation = mutationField('upsertOneServer', {
  type: nonNull('Server'),
  args: {
    where: nonNull('ServerWhereUniqueInput'),
    create: nonNull('ServerCreateInput'),
    update: nonNull('ServerUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.server.upsert({
      ...args,
      ...select,
    })
  },
})

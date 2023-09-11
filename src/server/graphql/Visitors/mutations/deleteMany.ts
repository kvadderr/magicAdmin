import { mutationField, nonNull } from 'nexus'

export const VisitorsDeleteManyMutation = mutationField('deleteManyVisitors', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'VisitorsWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.visitors.deleteMany({ where } as any)
  },
})

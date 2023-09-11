import { mutationField, nonNull } from 'nexus'

export const VisitorsUpdateManyMutation = mutationField('updateManyVisitors', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('VisitorsUpdateManyMutationInput'),
    where: 'VisitorsWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.visitors.updateMany(args as any)
  },
})

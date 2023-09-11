import { mutationField, nonNull } from 'nexus'

export const VisitorsUpsertOneMutation = mutationField('upsertOneVisitors', {
  type: nonNull('Visitors'),
  args: {
    where: nonNull('VisitorsWhereUniqueInput'),
    create: nonNull('VisitorsCreateInput'),
    update: nonNull('VisitorsUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.visitors.upsert({
      ...args,
      ...select,
    })
  },
})

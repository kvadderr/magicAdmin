import { mutationField, nonNull } from 'nexus'

export const VisitorsUpdateOneMutation = mutationField('updateOneVisitors', {
  type: nonNull('Visitors'),
  args: {
    data: nonNull('VisitorsUpdateInput'),
    where: nonNull('VisitorsWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.visitors.update({
      where,
      data,
      ...select,
    })
  },
})

import { mutationField, nonNull } from 'nexus'

export const VisitorsCreateOneMutation = mutationField('createOneVisitors', {
  type: nonNull('Visitors'),
  args: {
    data: nonNull('VisitorsCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.visitors.create({
      data,
      ...select,
    })
  },
})

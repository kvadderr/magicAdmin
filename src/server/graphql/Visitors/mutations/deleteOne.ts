import { mutationField, nonNull } from 'nexus'

export const VisitorsDeleteOneMutation = mutationField('deleteOneVisitors', {
  type: 'Visitors',
  args: {
    where: nonNull('VisitorsWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.visitors.delete({
      where,
      ...select,
    })
  },
})

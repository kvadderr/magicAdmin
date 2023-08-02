import { queryField, nonNull } from 'nexus'

export const PromocodesFindUniqueQuery = queryField('findUniquePromocodes', {
  type: 'Promocodes',
  args: {
    where: nonNull('PromocodesWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.promocodes.findUnique({
      where,
      ...select,
    })
  },
})

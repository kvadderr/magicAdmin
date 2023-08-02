import { mutationField, nonNull } from 'nexus'

export const TokenUpdateOneMutation = mutationField('updateOneToken', {
  type: nonNull('Token'),
  args: {
    data: nonNull('TokenUpdateInput'),
    where: nonNull('TokenWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.token.update({
      where,
      data,
      ...select,
    })
  },
})

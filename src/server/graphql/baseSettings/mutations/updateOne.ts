import { mutationField, nonNull } from 'nexus'

export const BaseSettingsUpdateOneMutation = mutationField(
  'updateOneBaseSettings',
  {
    type: nonNull('BaseSettings'),
    args: {
      data: nonNull('BaseSettingsUpdateInput'),
      where: nonNull('BaseSettingsWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.baseSettings.update({
        where,
        data,
        ...select,
      })
    },
  },
)

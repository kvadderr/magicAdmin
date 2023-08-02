import { mutationField, nonNull } from 'nexus'

export const BaseSettingsUpdateOneMutation = mutationField(
  'updateOneBaseSettings',
  {
    type: nonNull('baseSettings'),

    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.baseSettings.update({
        where,
        data,
        ...select,
      })
    },
  },
)

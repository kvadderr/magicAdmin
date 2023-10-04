import { mutationField, nonNull } from 'nexus'

export const BaseSettingsCreateOneMutation = mutationField(
  'createOneBaseSettings',
  {
    type: nonNull('BaseSettings'),
    args: {
      data: nonNull('BaseSettingsCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.baseSettings.create({
        data,
        ...select,
      })
    },
  },
)

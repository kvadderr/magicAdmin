import { mutationField, nonNull } from 'nexus'

export const BaseSettingsUpsertOneMutation = mutationField(
  'upsertOneBaseSettings',
  {
    type: nonNull('baseSettings'),

    resolve(_parent, args, { prisma, select }) {
      return prisma.baseSettings.upsert({
        ...args,
        ...select,
      })
    },
  },
)

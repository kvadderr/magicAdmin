import { queryField, list } from 'nexus'

export const BaseSettingsAggregateQuery = queryField('aggregateBaseSettings', {
  type: 'AggregateBaseSettings',

  resolve(_parent, args, { prisma, select }) {
    return prisma.baseSettings.aggregate({ ...args, ...select }) as any
  },
})

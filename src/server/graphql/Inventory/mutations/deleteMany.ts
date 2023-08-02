import { mutationField, nonNull } from 'nexus'

export const InventoryDeleteManyMutation = mutationField(
  'deleteManyInventory',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'InventoryWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.inventory.deleteMany({ where } as any)
    },
  },
)

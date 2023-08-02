import { mutationField, nonNull } from 'nexus'

export const InventoryUpdateManyMutation = mutationField(
  'updateManyInventory',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('InventoryUpdateManyMutationInput'),
      where: 'InventoryWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.inventory.updateMany(args as any)
    },
  },
)

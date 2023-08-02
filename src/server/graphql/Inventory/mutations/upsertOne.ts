import { mutationField, nonNull } from 'nexus'

export const InventoryUpsertOneMutation = mutationField('upsertOneInventory', {
  type: nonNull('Inventory'),
  args: {
    where: nonNull('InventoryWhereUniqueInput'),
    create: nonNull('InventoryCreateInput'),
    update: nonNull('InventoryUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.inventory.upsert({
      ...args,
      ...select,
    })
  },
})

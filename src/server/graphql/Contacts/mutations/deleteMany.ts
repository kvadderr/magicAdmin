import { mutationField, nonNull } from 'nexus'

export const ContactsDeleteManyMutation = mutationField('deleteManyContacts', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ContactsWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.contacts.deleteMany({ where } as any)
  },
})

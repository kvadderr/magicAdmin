import { mutationField, nonNull } from 'nexus'

export const ContactsUpdateManyMutation = mutationField('updateManyContacts', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('ContactsUpdateManyMutationInput'),
    where: 'ContactsWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.contacts.updateMany(args as any)
  },
})

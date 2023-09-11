import { mutationField, nonNull } from 'nexus'

export const ContactsUpsertOneMutation = mutationField('upsertOneContacts', {
  type: nonNull('Contacts'),
  args: {
    where: nonNull('ContactsWhereUniqueInput'),
    create: nonNull('ContactsCreateInput'),
    update: nonNull('ContactsUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.contacts.upsert({
      ...args,
      ...select,
    })
  },
})

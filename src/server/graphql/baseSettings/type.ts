import { objectType } from 'nexus'

export const baseSettings = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'baseSettings',
  definition(t) {
    t.int('id')
    t.string('header')
    t.boolean('saleMode')
    t.int('startBalance')
    t.string('mainPage')
    t.string('apiKey')
    t.string('IPWhiteList')
    t.nullable.json('panelURLs')
  },
})

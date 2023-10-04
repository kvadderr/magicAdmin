import { objectType } from 'nexus'

export const BaseSettings = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'BaseSettings',
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

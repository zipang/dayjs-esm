import { PluginFunc } from '../index.js'

declare const plugin: PluginFunc
export default plugin

interface DayjsObject {
  years: number
  months: number
  date: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

declare module 'dayjs' {
  interface Dayjs {
    toObject(): DayjsObject
  }
}

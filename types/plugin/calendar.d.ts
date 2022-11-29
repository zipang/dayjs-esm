import { ConfigType, PluginFunc } from '../index.js'

declare const plugin: PluginFunc
export default plugin

declare module 'dayjs' {
  interface Dayjs {
    calendar(referenceTime?: ConfigType, formats?: object): string
  }
}

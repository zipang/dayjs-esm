import { ConfigType, OpUnitType, PluginFunc } from '../index.js'

declare const plugin: PluginFunc
export default plugin

declare module 'dayjs' {
  interface Dayjs {
    isSameOrBefore(date: ConfigType, unit?: OpUnitType): boolean
  }
}

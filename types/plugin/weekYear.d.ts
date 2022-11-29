import { PluginFunc } from '../index.js'

declare const plugin: PluginFunc
export default plugin

declare module 'dayjs' {
  interface Dayjs {
    weekYear(): number
  }
}

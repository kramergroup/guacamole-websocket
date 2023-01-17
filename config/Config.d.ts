/* tslint:disable */
/* eslint-disable */
declare module "node-config-ts" {
  interface IConfig {
    guacd: Guacd
    token: string
  }
  interface Guacd {
    host: undefined
    port: undefined
  }
  export const config: Config
  export type Config = IConfig
}

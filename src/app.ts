import Guacamole from 'guacamole-lite'

import {config} from 'node-config-ts'
import * as dotenv from 'dotenv'
dotenv.config()

const guacdOptions = {
  host: config.guacd.host,
  port: config.guacd.port // port of guacd
};

const clientOptions = {
  crypt: {
      cypher: 'AES-256-CBC',
      key: config.token
  },
  log: {
      level: 'DEBUG'
  }
};

const guacServer = new Guacamole({}, guacdOptions, clientOptions);



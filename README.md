# Guacamole-light websocket container

This repository provides a containerized websocket to [guacd](https://github.com/glyptodon/guacamole-server/), the Guacamole backend. It is a light wrapper around the [guacamole-light](https://github.com/vadimpronin/guacamole-lite) project.

## Environment variables

| Variable             | Comment                                                                                                                                |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `GUACD_HOST`         | The host address of the guacd server                                                                                                   |
| `GUACD_PORT`         | The port at which guacd is listening                                                                                                   |
| `GUACAMOLE_PASSWORD` | The password used to encrypt the connection token (see [guacamole-light](https://github.com/vadimpronin/guacamole-lite) documentation) |


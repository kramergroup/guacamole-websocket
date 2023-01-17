FROM node:19

WORKDIR /app

COPY package*.json tsconfig.json /app/
COPY config /app/config
COPY src /app/src

RUN npm install

ENV GUACD_HOST="http://localhost"
ENV GUACD_PORT=4822

ENTRYPOINT [ "node", "/app/build/app.js" ]


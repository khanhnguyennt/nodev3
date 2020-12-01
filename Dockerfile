FROM node:12.10.0

RUN mkdir /khanh

COPY app.js /khanh/app.js
COPY package.json /khanh/package.json
RUN cd /khanh && npm install

ENTRYPOINT [ "node", "/khanh/app.js" ]
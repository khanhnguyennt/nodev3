FROM node:12.10.0

RUN mkdir /khanh

COPY app.js /khanh/app.js

ENTRYPOINT [ "node", "/khanh/app.js" ]
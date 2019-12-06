FROM gopowerteam/web-service-image:latest

ADD . /usr/opt/react-service
WORKDIR /usr/opt/react-service

RUN yarn config set registry https://registry.npm.taobao.org/ \
  && yarn \
  && npm run build \
  && rm -rf src node_modules \
  && rm -rf /usr/opt/web-service/public/* \
  && mv /usr/opt/react-service/build/* /usr/opt/web-service/public/

WORKDIR /usr/opt/web-service

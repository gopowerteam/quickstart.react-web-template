# 编译阶段
FROM node:12.3.1-slim as builder

ADD . /builder
WORKDIR /builder

RUN yarn config set registry https://registry.npm.taobao.org/ \
  && yarn \
  && npm run build

# 运行阶段
FROM gopowerteam/web-service-image:latest

COPY --from=builder /builder/build/ /app/public/



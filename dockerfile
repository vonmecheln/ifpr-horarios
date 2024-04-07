FROM node:lts

WORKDIR /app

# EXPOSE 3000 35729
EXPOSE 3000 3000
COPY . .
RUN yarn install

# CMD ["yarn", "start", "--host", "0.0.0.0", "--port", "35729"]
CMD ["yarn", "start", "--host", "0.0.0.0"]
# CMD ["yarn", "start"]
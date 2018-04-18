FROM cypress/base:8

COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
COPY ./package.json ./package.json

RUN npm install
RUN npm run test

# RUN $(npm bin)/cypress verify
# RUN $(npm bin)/cypress run

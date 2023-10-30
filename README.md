<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This exercise is based on the Nestjs and typescript starter repository. It's not expected that you know the ins and outs of Nest, but you are free to look up documentation as needed. This codebase has 87% passing test coverage, but key parts of it are broken in key ways. First, understand the requirements provided below. These requirements are what the endpoints should encompass. Your task is to fix all of the endpoints so they meet the requirements below, and fix or otherwise modify, replace, or add to the test cases so future developers don't break the intended functionality. Please limit your time spent to 1.5 hours. The exercise will be evaluated based on its meeting the product requirements, readability, and following typescript best practices.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```


## Requirements
- **Product creation**:  As an authenticated user, I want to be able to create a product inside my tenant, so that I can retrieve them later

- **Product search**: As an authenticated user, I want to be able to search by partial or full product name, so that I can receive back a list of matching searches within my tenant.

- **Find products**: As an authenticated user, I want to be able to get all products that are a part of my tenant.

- **Find product**: As an authenticated user, I want to be able to get a single product within my tenant, so that I can display its details.

- **Delete product**: As an authenticated user, I want to be able to delete a product from my tenant, so that it no longer shows up

- **Update product**: As an authenticated user, I want to be able to update a product in my tenant, so that it has the correct information.


## Important Notes
1. There is no database for the sake of reducing the number of dependencies for this exercise. All objects are stored in memory, so if you restart the server, they will go away.
2. Pre-built endpoints for login and signup exist to create users and authenticate them (/auth/login, /auth/signup). Authentication uses bearer tokens.
3. If you see something wrong in one of the endpoints, it probably is wrong.
4. If you have any questions before you begin the exercise, please contact the interviewer.
<p align="center">
   <a href="https://www.typescriptlang.org">
      <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  </a>
  <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS"></a>
  <a href="http://expressjs.com/pt-br/">
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">
  </a>
</p>

<p align="center">
  <a href="#run-locally">Run Locally</a> •
  <a href="#run-tests">Run Tests</a> •
  <a href="#architecture">Architecture</a> •
</p>


## Run locally

Clone the project

```bash
gh repo clone MatheusIbarra/github-explorer-api
```

Go to the project directory

```bash
cd github-exlorer-api
```

Install dependencies

```bash
yarn
```

Start the server

```bash
yarn dev
```


## Run tests

To run tests, run the following command

```bash
  yarn test
```
<br />

### Folders Structure

Inside src we have these three folders:
```
config
modules
shared
```
The config folder is used to general project configs like http server and postgres connection, modules folder contain the core code of this api grouped by domain modules, and, the shared folder contain items that can be shared for multiple modules.

Inside each module we have this folder structure:
```
contracts - Type definitions for external libs integration
controllers - Handle with the required content of a httpRequest
infra - Concrete integration with external libs
routes - Http routes that use controllers as handlers
useCases - class that handle with business rules
```

## PROJECT SETUP

## Local Environment Setup

-   [Git](https://git-scm.com/)
-   [Node.js v16.14.2](https://nodejs.org/en/)
-   [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
-   [Lerna](https://lerna.js.org)
-   [Visual Studio Code](https://code.visualstudio.com/)

## Local Development

> After setting up the environment, please open the terminal and run the following command:

```bash
$ git clone https://github.com/fahimjason/jbook.git
$ cd jbook
$ npm install          # install dependencies
```

## NPM Scripts

```bash
# Follow the commands

$ cd packages/cli      # move to cli folder
$ npm install          # install dependencies
$ cd ..                # back to packages

$ cd local-api         # move to local-api folder
$ npm install          # install dependencies
$ cd ..                # back to packages

$ cd local-client      # move to local-client
$ npm install          # install dependencies
$ cd ..                # back to packages

$ cd ..                # back to  the root folder
$ npm start            # development build
```

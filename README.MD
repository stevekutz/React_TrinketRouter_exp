# Authentication using JSON Web Tokens (JWTs)
## Backend SETUP

#### SETUP package.json using npm
 run `npm server` to launch server dev environment
- npm init 
- npm install nodemon --save-dev
- npm install connect-session-knex bcryptjs cors crypto-extra express helmet knex sqlite3 knex-cleaner jsonwebtoken npm dotenv

 
##### SETUP knex & edit
- knex init
- edit knex.file
 ```     
    module.exports = {
            development: {
            client: 'sqlite3',
            connection: {
            filename: './data/JWTauth.db3'
            },
            useNullAsDefault: true, // needed for sqlite

            // to make separate folders for migrations & seeds
            migrations: {
            directory: './data/migrations'
            },
            seeds: {
            directory: './data/seeds'
            },
        }  
    };
```
### SETUP files & folders
- files
  - index.js
  - server.js

- folders
  - data (trinkets.db3 will be created here)
  - auth
    - auth-model.js
    - auth-router.js
  - restricted
    - restricted-model.js
    - restricted-router.js
  - users
    - users-model.js
    - users-router.js
  - myMiddleware
    - myMW (multiple exports modules accessed via chaining)
    - restrictedMiddlware (as anonymous function)

## Frontend
#### SETUP React for installation
- run `npm install --save-dev create-react-app`
#### Create React application called `app`
- run `npx creat-react-app app`
#### Test client (should run on localhost:3000 in browser)
- cd into `client`
- run `npm start` to test installation
-  
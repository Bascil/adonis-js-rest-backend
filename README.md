# AdonisJS REST Backend

## Project Setup

1. Clone the repository via git:

   ```bash
   git clone git@github.com:Bascil/adonis-js-rest-backend.git

   ```

2. change directory

   ```
   cd adonis-js-rest-backend.git
   ```

3. copy .env.example to .env file and modify database settings

   ```
   cp .env.example .env
   ```

4. install dependencies

   ```
   npm install
   ```

5. run the project
   ```
   npm run dev
   ```

# useful adonis commands

1. Start the http server

   ```
   npm run dev
   ```

2. Setup models

   ```
   node ace make:model Task
   node ace make:model User
   ```

3. Create Migrations

   ```
   node ace make:migration users
   node ace make:migration tasks
   ```

4. Run migrations

   ```
   node ace migration:run
   ```

5. Setup Controllers

   ```
   node ace make:controller users
   node ace make:controller tasks
   ```

6. Setup Seeders

   ```
   node ace make:seeder User
   node ace make:seeder Task

   ```

7. Create user seeder factory

   ```
   node ace make:factory User
   ```

8. Run seed

   ```
   node ace db:seed
   ```

9. Seed specific file

   ```
   node ace db:seed --files=./database/seeders/user_seeder.ts
   ```

10. Make Middleware
    ```
    node ace make:middleware Auth
    ```

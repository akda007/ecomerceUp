
# E-commerce Manager


Requisitos para rodar o sistema:

- **Node.js** (>= 14.x)
- **NPM** (comes with Node.js)
- **MySQL** (or another supported SQL dialect)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ecommerceUp
cd ecommerceUp
```

### 2. Install dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

### 3. Set up environment variables

Create or edit the `.env` file in the root directory with the following content:

```env
SECRET_TOKEN=Token para geraçao de jwt
```

### 4. Set up the database

Ensure MySQL is installed and running, and create the necessary database:

```sql
CREATE DATABASE ecomerce;
```

Once the database is created, Sequelize will handle the table creation when the app runs.

### 5. Running the project

You can run the project in different modes:

- **Development Mode** (with `nodemon` and `babel-node`):
  
  ```bash
  npm run dev
  ```

  This will automatically restart the server when file changes are detected.

- **Production Build** (Transpile code and run it):

  First, build the project:

  ```bash
  npm run build
  ```

  Then, run the transpiled code:

  ```bash
  node dist/index.js
  ```

- **Start Without Building** (Run using `babel-node` directly):

  ```bash
  npm start
  ```


## Scripts

- `npm run dev`: Starts the app in development mode using `nodemon` and `babel-node`.
- `npm start`: Starts the app using `babel-node`.
- `npm run build`: Transpiles ES6+ code from the `src` folder to the `dist` folder.

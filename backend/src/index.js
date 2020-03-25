const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);


/**
 * Rota / Recursos
 * Métodos HTTP:
 * 
 *GET: Buscar uma informação do back-end
 *POST: Criar uma informação no back-end
 *PUT: Alterar um informação no back-end
 *DELETE: Deletar uma informação no banck-end
 */


 /**
  * Tipos de parametros
  * 
  * Query Params: Parametros nomeados enviados na rota apos  "?" (filtros, paginação)
  * Route Params: Paramentros utilizados para indentificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostegreSQL, Oracle, MS SQL Server
   * NoSQL: MongoDB, CouchDB, ETC
   */

   /**
    * Driver: SELECT * FROM users
    * QUERY BUILDER: table('users').select('*').users
    */




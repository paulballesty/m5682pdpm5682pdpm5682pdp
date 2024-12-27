import { IdGenerator } from './base/id_generator.js';
import { installTodos } from './todos/install.js'
import { installUsers } from './users/install.js';

const app = require('./server-config.js');

const idGenerator = new IdGenerator();

installTodos({ app, idGenerator });
installUsers({ app, idGenerator });

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;
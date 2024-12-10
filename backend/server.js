// backend/server.js
import { create, router as _router, defaults } from 'json-server';
const server = create();
const router = _router('Data/todos.json'); // Path to your todos.json file
const middlewares = defaults();

server.use(middlewares);
server.use(router);

server.listen(3001, () => {
  console.log('JSON Server is running on http://localhost:3001');
});

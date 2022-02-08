/* eslint-disable no-var */
import { SetupServer } from '@src/server';
import supertest from 'supertest';


let server: SetupServer;
beforeAll(async () => {
  server = new SetupServer();
  await server.init();
  global.testRequest = supertest(server.app);

});

// afterAll(async () => {
//   await server.close();
// }



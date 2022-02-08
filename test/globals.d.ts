/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/prefer-namespace-keyword */
export { };

declare global {
  namespace NodeJS {
    interface Global {
      testRequest: import('supertest').SuperTest<import('supertest').Test>;
    }
  }
}



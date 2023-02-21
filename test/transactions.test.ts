/* eslint-disable prettier/prettier */
import { expect, test, beforeAll, afterAll } from 'vitest'
import request from 'supertest'

import { app } from '../src/app'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test('User can create a new transaction', async () => {
  const response = await request(app.server).post('/transactions').send({
    title: 'New transaction',
    amount: 5000,
    type: 'credit',
  }) // .expect(201)

  expect(response.statusCode).toEqual(201)
})

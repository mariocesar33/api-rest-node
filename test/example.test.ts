/* eslint-disable prettier/prettier */
import { expect, test } from 'vitest'

test('o usuário consegue criar uma nova transação', () => {
  // fazer chamda HTTP p/ criar uma nova transação
  const responseStatusCode = 500

  // validação
  expect(responseStatusCode).toEqual(201)
})

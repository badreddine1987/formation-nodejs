// src/routes/calculatrice.ts

import { FastifyInstance, FastifyPluginOptions } from 'fastify'

type CalcRoute = {
  Params: {
    x: string
    y: string
  }
}

export default function (app: FastifyInstance, options: FastifyPluginOptions, done: () => void) {

  app.get<CalcRoute>('/calc/add/:x/:y', (request) => {
    const x = parseFloat(request.params.x)
    const y = parseFloat(request.params.y)

    return {
      result: x + y,
      x,
      y,
      operation: 'add',
    }
  })

  app.get<CalcRoute>('/calc/sub/:x/:y', (request) => {
    const x = parseFloat(request.params.x)
    const y = parseFloat(request.params.y)

    return {
      result: x - y,
      x,
      y,
      operation: 'sub',
    }
  })

  app.get<CalcRoute>('/calc/mul/:x/:y', (request) => {
    const x = parseFloat(request.params.x)
    const y = parseFloat(request.params.y)

    return {
      result: x * y,
      x,
      y,
      operation: 'mul',
    }
  })

  app.get<CalcRoute>('/calc/div/:x/:y', (request, response) => {
    const x = parseFloat(request.params.x)
    const y = parseFloat(request.params.y)

    if (y === 0) {
      response.code(400)

      return {
        error: 'division par 0',
        message: 'Il est impossible de diviser un nombre par 0',
      }
    }

    return {
      result: x / y,
      x,
      y,
      operation: 'div',
    }
  })

  done()
}

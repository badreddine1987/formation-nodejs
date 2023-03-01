import fastify from 'fastify'
import fastifyPlugin from 'fastify-plugin'
import calculatrice from './routes/calculatrice'
// Création d'une application (notre serveur logique HTTP)
const app = fastify()

// Première route sur le resource principale
app.get('/', () => {
  return {
    message: 'Coucou',
  }
})

// enregistrement de notre plugin
app.register(fastifyPlugin(calculatrice))

// On écoute une porte de notre ordinateur
app.listen({ port: process.env.PORT as any, host: process.env.HOST }, () => {
  // Petit fonction qui se déclenche lorsque notre serveur se met à écouter la porte
  console.log(
    `Mon serveur est prèt : http://${process.env.HOST}:${process.env.PORT}`,
  )
})

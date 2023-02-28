import fastify from 'fastify';

const app = fastify();

app.get('/', () => {
  return 'Bienvenue sur mon serveur';
});

app.get('/hello',  () => {
  return 'Bonjour tout le monde';
});


app.listen({ port: 5656, host: '127.0.0.1' }, () => {
   
    console.log('Mon serveur est prèt : http://127.0.0.1:5656')
  })
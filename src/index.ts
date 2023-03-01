import fastify from 'fastify';

const app = fastify();

app.get('/', () => {
  return 'Bienvenue sur mon super serveur';
});

app.get('/hello',  () => {
  return 'Bonjour tout le monde ! je suis trop fort voici ma requete';
});

app.get("/eleves", (req, res) => {
  const eleves = [
    [1, "john", "john", 32],
    [2, "rose", "john", 36],
    [3, "jane", "john", 40],
    [4, "jean", "john", 38],
  ];

  res.header("Developed-With", "fastify");
  res.send(eleves);
});

app.listen({ port: process.env.PORT as any, host: process.env.HOST }, () => {
   
    console.log('Mon serveur est prèt : http://${process.env.HOST}:${process.env.PORT}')
  })
import fastify from "fastify";

const app = fastify();

// fazendo um GET com fastify: http://localhost:3333/hello 
// primeiro vem o recurso, depois função com o retorno desejado

/**
 * JS : é runtime checking, ou seja, só descubro que tá ]
 * dando erro quando executo o código

 * TS : é compile time checking, ou seja, descubro o erro
 * durante o desenvolvimento, durante a digitação do código
 
 * Nem toda plataforma entende TS. Nodejs não entende. Bum
 * e Deno entendem.
 */

app.get("/hello", () => {
    return "Hello World";
})

// o listen ouve uma porta e é uma promise
// quando ele retornar resposta, ele vai executar o then
app.listen({
    port: 3333
}).then(() => { console.log('HTTP Server Running!') })


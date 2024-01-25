"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = require("fastify");
var app = (0, fastify_1.default)();
// fazendo um GET com fastify: http://localhost:3333/hello 
// primeiro vem o recurso, depois função com o retorno desejado
app.get("/hello", function () {
    return "Hello World";
});
// o listen ouve uma porta e é uma promise
// quando ele retornar resposta, ele vai executar o then
app.listen({
    port: 3333
}).then(function () { console.log('HTTP Server Running!'); });
/**
 * JS : é runtime checking, ou seja, só descubro que tá ]
 * dando erro quando executo o código

 * TS : é compile time checking, ou seja, descubro o erro
 * durante o desenvolvimento, durante a digitação do código
 
 * Nem toda plataforma entende TS. Nodejs não entende. Bum
 * e Deno entendem.
 */ 

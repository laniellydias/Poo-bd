let db = require("./db");
let Cliente = require("./model/Cliente");

async function sincronizar() {
    await db.sync();
}

async function inserir(obj) {
    let res = await Cliente.create(obj)
    console.log(res);
}
/*
let T1 = {nome: "Clara", endereco: "Rua Celso Garcia"};
let T2 = {nome: "Luiza", endereco: "Rua Santo Antônio"};
let T3 = {nome: "Maria Rita", endereco: "Rua São Luís"};
let T4 = {nome: "Ana Laura", endereco: "Rua Cícero Olímpio"};
let T5 = {nome: "Luciana", endereco: "Rua Bahia"};

inserir(T1);
inserir(T2);
inserir(T3);
inserir(T4);
inserir(T5);
*/

async function consultar(){
    let resultado = await Cliente.findAll();
    console.log(resultado[2]);
    conseole.log(resultado[0]);
    conseole.log(resultado[1]);
    conseole.log(resultado[3]);
    conseole.log(resultado[4]);
}
//sincronizar();

consultar();

const { Pool } = require("pg");

const{POLL} = requiere ("pg");
async function CriarConexao() {
    const poll = new POLL( {
        connectionString = 'postgres: // gcgmrslmsipedh : 0a7624bc541c48f50e28e2550f0ef3538ce0ec7cf58682e4ce1cb737be1245c2 @ ec2-52-203-27-62.compute-1.amazonaws.com : 5432 / ddqehffmakacjl',
        ssl: {
            rejectUnawthorized: false
    }
});
let con = await pool.connect();
 let ingrediente = await con.query(`
    creat table Ingrediente(
        id serial primary Key, 
        produtos varchar,
        valores integer,
        estoque integer
    )`
 ); 
 await con.query("insert into Ingrediente(produtos, valores, estoque) valores ($1), ($2), ($3)",
  ["farinha", "tomate", "frango"],
  ["35,00", "25,00",  "20,00"], ["100%", "75%", "55%"]);
 await con.query("update Ingrediente set produtos = $1 where id = $2", ["tomate", 3]);
 await con.query("delete from Ingrediente where upper(produto) like 'tomate' ");
 let res = await con.query("select * from Ingrediente");
 let tuplas = res.rows;
 for (let tupla of tuplas) {
     console.log(tupla);
 }
     console.log(ingrediente);
 con.release();
}
 CriarConexao();
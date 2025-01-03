// var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
// Acima, temos o uso do operador ternário para definir o caminho do arquivo .env
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

var usuarioRouter = require("./src/routes/usuarios");
var personagemRouter = require("./src/routes/personagem");
var dashboardRouter = require("./src/routes/dashboard");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/usuarios", usuarioRouter);
app.use("/personagem", personagemRouter);
app.use("/dashboard", dashboardRouter);

app.listen(PORTA_APP, function () {
    console.log(`
    #####   #####    ####   ######  ######   ####   ######  
    ##  ##  ##  ##  ##  ##      ##  ##      ##  ##    ##    
    ##  ##  ##  ##  ##  ##      ##  ##      ##        ##    
    #####   #####   ##  ##      ##  ####    ##        ##    
    ##      ## ##   ##  ##  ##  ##  ##      ##        ##    
    ##      ##  ##  ##  ##  ##  ##  ##      ##  ##    ##    
    ##      ##  ##   ####    ####   ######   ####     ##    

                  ##    ##       ####   ##  ##
                 ####   ##      ##  ##  ##  ##
                ##  ##  ##      ##  ##  ##  ##
                ######  ##      ##  ##   #### 
                ##  ##  ##      ##  ##    ##  
                ##  ##  ##      ##  ##    ##  
                ##  ##  ######   ####     ##  
    \n                                                                                                 
    Servidor já está rodando! Acesse o caminho a seguir: http://${HOST_APP}:${PORTA_APP}/homepage.html :. \n
    Rodando aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n
    Se .:desenvolvimento:. conectando ao banco local. \n
    Se .:producao:. conectando ao banco remoto. \n
    Para alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});

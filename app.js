//crrega a biblioteca do Express
const express = require('express');

//carrega a biblioteca de handlrbars
const exphbs = require ('express-handlebars');

//Instancia (cria) um objeto de express
const app = express();//recebe requisições e responde requisições e ossui funções(método)ss

//Configura o handlebars como mecanismo de vizualização(view engie)
app.engine(
    'handlebars',
     exphbs.engine( {defaultLayout : false} )//passando objeto (defaut) para valor (false)
);
app.set(
    'view engine',
    'handlebars'
);

app.use(

    express.urlencoded({extended: true})
)
//Adicionamos ID as comidas,para adidionarcoloquei elas como objeto.
let comidas = [
    {
        id:1,
        nome:"Estrogonofe",
        imagem:"https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/chicken-&-other-poultry-dishes/strogonoff-de-frango/main-header.jpg"
    },
    {
        id:2,
        nome:"Coxinha",
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRidFITcBxaphfF0OoIE5E9lFJ7_c4x6jqnSQ&s"
    },
    {
        id:3,
        nome:"Pastel",
        imagem:"https://prodcontent.yoki.com.br/wp-content/uploads/2024/09/Pastel-Mineiro-800x450-1.jpg"
    },
    {
        id:4,
        nome:"Açaí",
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbk7GGySYINKxNQF-Chg5AW_BVfviV-HGXjg&s"
    }
    
    ];

//Rota que rndeiza a página listarComidas.
//O array de comidas é passado para a páina como um objeto.
//Esse objeto comidas pode ser acessado na página listarComidas.

app.get(
    '/',
    (req,res) => res.render('listarComidas', {comidas})
);

app.get(
    '/comidas/cadastrar',
    (req,res) => res.render('cadastrarComida')
);

app.post(
    '/comidas',
     (req,res) => {
        let comida = {}; //criação de objeto chamado comida
        comida.id = comidas.length + 1;//tamah do array atual (onde está as comidas) + a  cadastrada
        comida.nome = req.body.nome;//.body pois esta vindo do formulário
        comida.imagem = req.body.imagem;

        comidas.push(comida);

        res.redirect('/');//vai direcionar para a rai,uma requisição tipo get.
     }
);

//A aplicação passa a "executar" a porta 3000.
//Ou seja,recebe as requisições que chegam nessa porta.
app.listen(//uma das funções é o 'listen' que recebe requisições e responde,ela sempre fica em execução.
    3000,//essa é a porta padrão para apli. web não pode haver 2 aplicações com o mesmo numero.A requisição é direcionada pra uma das portas.
    () => console.log('Servidor em execução.')
     
);

//para executar o 'app.listen' é necessário usarmos o comando 'node app.js'







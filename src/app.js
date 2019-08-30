const express=require('express');
const colors=require('colors');
const path=require('path');
const app=express();
const morgan=require('morgan');
const mysql=require('mysql');
const myConnection=require('express-myconnection');

//importando rutas
const customerRoutes= require('./routes/customer');

//setting

app.set('port', process.env.PORT || 3000);// esto es como decirle:¿que rebize si en el sistema operativo hay algun puerto 
//o si no que me ejecute en el puerto 3000, en definitiva el port seria como una variable

app.set('view engine','ejs');//motor de plantilla es ejs
app.set('views', path.join(__dirname, 'views'));//el path une los directorios

//middlewares
 app.use(morgan('dev'));//este es el servidor de peticiones o sea me sirve para saber cuales son las peticiones que me van aparecer por consola como por ejemplo el GET
 app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'123456',
     port:3306,
     database:'crudenodejsmysql'
 },'single'));

 app.use(express.urlencoded({extended:false}));


//routes

app.use('/',customerRoutes);

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'),()=>{//y aqui obtengo lo que me dice esa variable
    console.log('server on port 3000'.red);
});
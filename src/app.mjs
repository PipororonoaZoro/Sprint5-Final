import dns from "dns";

// Forzar servidores DNS: Google y Cloudflare
dns.setServers(["8.8.8.8", "1.1.1.1"]);


import dotenv from 'dotenv';
dotenv.config();
import dbConnection from './config/dbConfig.mjs';
import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuracion de vistas

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

// Archivos estaticos

app.use(express.static(path.join(__dirname, 'public')));

// Middleware para formularios y JSON

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas de pruebas para ver que todo esta funcionando(no me odie por mis errores profe)

app.get('/test', (req, res) => {
    res.send('El servidor en src/ funciona correctamente como se debe');
});

app.get('/', (req,res) => {
    res.redirect('/test');
})

dbConnection(); // Deberia conectar a la base de datos, o no?

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});
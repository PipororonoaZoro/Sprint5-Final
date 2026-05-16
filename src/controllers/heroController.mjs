import Superhero from '../models/superheroModel.mjs';

// Funcion para obtener todos los heroes
export const getAllHeroes = async (req, res) => {
    try {
        const heroes = await Superhero.find();
        res.render('dashboard', { heroes });
    }
    catch (error) {
        console.error('Error al obtener heroes:', error);
        res.status(500).send('Error del servidor');
    }
};
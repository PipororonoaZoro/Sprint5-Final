import mongoose from 'mongoose';

const superheroSchema = new mongoose.Schema({
    nombreSuperheroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    nombreSociedad: { type: String },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: { type: String },
    poderes: [String],
    aliados: [String],
    enemigos: [String]
}, {
// Coleccion de superheroes
collection: 'Grupo-14'
});

const Superhero = mongoose.model('Superhero', superheroSchema);

export default Superhero;
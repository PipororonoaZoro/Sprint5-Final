import mongoose from 'mongoose';

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('\u2705 Conexión exitosa a MongoDB Atlas');
    }
    catch (error) {
        console.error('\u274C Error al conectar a MongoDB Atlas:', error);
        process.exit(1);
    }
    };

export default dbConnection;
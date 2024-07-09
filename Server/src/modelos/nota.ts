import { DataTypes } from 'sequelize';
import db from '../db/connectiondb';


const Nota = db.define('Nota', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    calificacion: {
        type: DataTypes.DOUBLE, // Utilizamos DOUBLE para calificaciones decimales
        allowNull: false, // Asegúrate de que el campo no sea nulo
    }
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'notas', // Especifica el nombre de la tabla
});

export default Nota;
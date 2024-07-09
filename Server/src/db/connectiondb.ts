import {Sequelize} from 'sequelize';
//creation of database connection
const sequelize = new Sequelize('app-anm','root','',{
    host: 'localhost',
    dialect:'mariadb',
});

export default sequelize;
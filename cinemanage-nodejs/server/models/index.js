'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const options = { dialect: 'mssql', host: 'localhost', logging: false, operatorsAliases: false };
const sequelize = new Sequelize('CinemanageDB', 'cinemanage', 'password', options);

const db = {};
const basename  = path.basename(__filename);
// read all models inside '/models' and parse
fs.readdirSync(__dirname)
	.filter(file => {
		return (file.indexOf('.') !== 0)
			&& (file !== basename)
			&& (file.slice(-3) === '.js');
	})
	.forEach(file => {
		var model = sequelize['import'](path.join(__dirname, file));
		var modelName = file.slice(0, -3);
		db[modelName] = model;
	});


module.exports = db;

'use strict';

module.exports = (sequelize, DataTypes) => {
	var order = sequelize.define('Room', {
        Id:   { type: DataTypes.INTEGER, primaryKey: true },
		Name: { type: DataTypes.STRING                    }
	}, { timestamps: false});
	
	return order;
};
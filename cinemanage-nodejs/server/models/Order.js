'use strict';

module.exports = (sequelize, DataTypes) => {
	var order = sequelize.define('Order', {
        Id:     { type: DataTypes.INTEGER, primaryKey: true },
		UserId: { type: DataTypes.UUID                      },
        Closed: { type: DataTypes.BOOLEAN                   }
	}, { timestamps: false});
	
	return order;
};
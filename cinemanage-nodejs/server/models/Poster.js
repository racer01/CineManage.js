'use strict';

module.exports = (sequelize, DataTypes) => {
	var movie = sequelize.define('Movie', {
        Poster: { type: DataTypes.BLOB }
	}, { timestamps: false });
	
	return movie;
};
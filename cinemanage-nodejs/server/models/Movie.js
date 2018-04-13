'use strict';

module.exports = (sequelize, DataTypes) => {
	var movie = sequelize.define('Movie', {
        Id:             { type: DataTypes.INTEGER, primaryKey: true },
        Title:          { type: DataTypes.STRING                    },
        OriginalTitle:  { type: DataTypes.STRING                    },
        Length:         { type: DataTypes.INTEGER                   },
        Description:    { type: DataTypes.STRING                    },
        AgeRestriction: { type: DataTypes.INTEGER                   },
        Genre:          { type: DataTypes.STRING                    },
        Cast:           { type: DataTypes.STRING                    },
        IsPublished:    { type: DataTypes.BOOLEAN                   }
	}, { timestamps: false });
	
	return movie;
};
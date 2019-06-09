module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Employee', {
        imagePath: DataTypes.STRING,
        name: DataTypes.STRING,
        jobTitle: DataTypes.STRING,
        description: DataTypes.TEXT,
        twitter: DataTypes.STRING,
        facebook: DataTypes.STRING,
        linkedin: DataTypes.STRING
    });


};
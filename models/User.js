'use strict';

const User = (sequelize, DataTypes) => {
  const myUser = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    resetPasswordToken:DataTypes.STRING,
    resetPasswordExpires: DataTypes.DATE
  }, {});

  myUser.associate = function(models) {

    myUser.hasMany(models.Post, { foreignKey: 'userId', as:'users' });
    myUser.hasMany(models.Likes, {foreignKey: 'postId', as:'likes' });
  };

  return myUser;
};

module.exports = User;
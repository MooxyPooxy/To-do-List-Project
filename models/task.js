'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    dueDate: DataTypes.DATE
  }, {});
  Task.associate = function(models) {
    // associations can be defined here if needed
  };
  return Task;
};

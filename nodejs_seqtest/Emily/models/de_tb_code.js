/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('de_tb_code', {
    MST_CODE: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    MST_CODE_NM: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SUB_CODE: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    SUB_CODE_NM: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    BUFFER_VAL1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    BUFFER_VAL2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    BUFFER_VAL3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DE_C_DTTI: {
      type: DataTypes.DATE,
      allowNull: false
    },
    DE_C_EMPNO: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    DE_U_DTTI: {
      type: DataTypes.DATE,
      allowNull: false
    },
    DE_U_EMPNO: {
      type: DataTypes.STRING(8),
      allowNull: false
    }
  }, {
    tableName: 'de_tb_code',
    timestamps : false
  });
};

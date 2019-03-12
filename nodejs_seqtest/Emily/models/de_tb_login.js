/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('de_tb_login', {
    EMP_NO: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    EMP_NM: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    EMP_LOGIN_DTT: {
      type: DataTypes.DATE,
      allowNull: false
    },
    EMP_LOGIN_IP: {
      type: DataTypes.STRING(20),
      allowNull: false
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
    tableName: 'de_tb_login',
    timestamps : false
  });
};

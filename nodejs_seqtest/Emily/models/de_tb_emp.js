/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('de_tb_emp', {
    EMP_NO: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    EMP_PASSWD: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    EMP_NM: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    EMP_POSTION_CD: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    EMP_OFFICIAL_CD: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    EMP_DEPARTMENT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EMP_GROUP_CD: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    MCC_DVS_CD: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    EMP_CELL_TX_NO: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    EMP_CELL_SPRTLY_NO: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    EMP_TELLNO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    EMP_EMAIL_ADDR: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    WORK_GBN_CD: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    GENDER_CD: {
      type: DataTypes.STRING(5),
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
    tableName: 'de_tb_emp'
  });
};

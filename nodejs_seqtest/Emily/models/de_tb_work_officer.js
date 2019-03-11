/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('de_tb_work_officer', {
    EMP_NO: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    EMP_NM: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    WORK_DTTM: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    WORK_SEQ: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '1',
      primaryKey: true
    },
    WORK_CONTENT: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    WORK_GBN: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    REMARK: {
      type: DataTypes.STRING(200),
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
    tableName: 'de_tb_work_officer'
  });
};

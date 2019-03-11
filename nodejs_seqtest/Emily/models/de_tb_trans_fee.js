/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('de_tb_trans_fee', {
    EMP_NO: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    EMP_NM: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    TRANS_DTTM: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    TRANS_SEQ: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    TRANS_REASON: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    TRANS_START_POINT: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    TRANS_END_POINT: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    TRANS_START_TIME: {
      type: DataTypes.DATE,
      allowNull: false
    },
    TRANS_END_TIME: {
      type: DataTypes.DATE,
      allowNull: false
    },
    TRANS_AMT: {
      type: DataTypes.DECIMAL,
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
    tableName: 'de_tb_trans_fee'
  });
};

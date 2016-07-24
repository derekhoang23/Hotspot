'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _queryHelpers = require('./queryHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DB = function () {
  function DB(pgConnection, schema) {
    _classCallCheck(this, DB);

    this.pg = pgConnection;
    this.schema = schema;
  }

  _createClass(DB, [{
    key: 'getAll',
    value: function getAll() {
      return this.pg.query('select * from ' + this.schema.tableName);
    }
  }, {
    key: 'getOne',
    value: function getOne(id) {
      return this.pg.query('select * from ' + this.schema.tableName + ' where id = ' + id);
    }
  }, {
    key: 'find',
    value: function find(obj) {
      return this.pg.query((0, _queryHelpers.createSelectQuery)(this.schema, obj));
    }
  }, {
    key: 'create',
    value: function create(obj) {
      return this.pg.query((0, _queryHelpers.createInsertQuery)(this.schema, obj));
    }
    //TODO HERE I WAS

  }, {
    key: 'findOrCreate',
    value: function findOrCreate(obj) {
      var _this = this;

      return this.find(obj).then(function (foundObj) {
        if (foundObj.length > 0) {
          return foundObj;
        }
        console.log('make this', obj);
        return _this.create(obj);
      });
    }
  }, {
    key: 'remove',
    value: function remove(id) {
      return this.pg.query('delete from ' + this.schema.tableName + ' where id = ' + id);
    }
  }]);

  return DB;
}();

exports.default = DB;
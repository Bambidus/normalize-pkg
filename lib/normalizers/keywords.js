'use strict';

const utils = require('../utils');
const merge = require('../merge');

module.exports = function(val, key, config, schema) {
  merge(config, schema);

  val = utils.arrayify(val || config[key]);
  if (schema.checked[key]) {
    return val;
  }

  if (val.length === 0) {
    schema.update('name', config);
    val = config[key] = config.name.split(/\W+/).filter(Boolean);
  }

  const res = utils.unique(val).sort();
  schema.checked[key] = true;
  return res;
};


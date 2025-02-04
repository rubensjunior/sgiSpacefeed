
exports.up = function(knex) {
  return knex.schema
    .table('empresas', async function (table) {
      table.string('cep_empresa');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('empresas', async function (table) {
      table.dropColumn('cep_empresa');
    })
};

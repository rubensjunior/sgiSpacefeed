
exports.up = function(knex) {
  return knex.schema
    .table('empresas', async function (table) {
      table.string('celular_empresa');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('empresas', async function (table) {
      table.dropColumn('celular_empresa');
    })
};

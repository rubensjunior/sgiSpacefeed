
exports.up = function(knex) {
  return knex.schema
    .table('empresas', async function (table) {
      table.string('Cidade');
      table.string('Estado');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('empresas', async function (table) {
      table.dropColumn('Cidade');
      table.dropColumn('Estado');
    })
};

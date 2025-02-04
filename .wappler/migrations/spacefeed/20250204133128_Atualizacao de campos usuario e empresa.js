
exports.up = function(knex) {
  return knex.schema
    .table('empresas', async function (table) {
      table.string('nome_polo');
      table.string('nome_fantasia');
    })
    .table('usuarios', async function (table) {
      table.integer('empresa_selecionada').unsigned();
      table.foreign('empresa_selecionada').references('').inTable('usuarios_empresas').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('usuarios', async function (table) {
      table.dropForeign('empresa_selecionada');
      table.dropColumn('empresa_selecionada');
    })
    .table('empresas', async function (table) {
      table.dropColumn('nome_polo');
      table.dropColumn('nome_fantasia');
    })
};

const pg = require ('pg');
const settings = require('./settings');

const knex = require('knex')({
  client: 'pg',
  connection:{
   user: settings.user,
   password: settings.password,
   database: settings.database,
   host: settings.hostname
  }
});

const first_name = process.argv[2];
const last_name = process.argv[3];
const birthdate = process.argv[4];

knex.insert({first_name: first_name, last_name: last_name, birthdate: birthdate}).into('famous_people')
.then(function(result){
  console.log(result);

});

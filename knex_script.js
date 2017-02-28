const pg = require ('pg');
const settings = require("./settings");

const knex = require('knex')({
  client: 'pg',
  connection:{
   user: settings.user,
   password: settings.password,
   database: settings.database,
   hostname: settings.hostname,
  }
});

const inputData = process.argv.slice(2);


knex.select('*')
.from('famous_people')
.where('last_name', inputData[0])
.then((results) => {
  console.log( results)
})

.catch((error) => {
  console.error(error);
});

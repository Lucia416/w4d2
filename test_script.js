const pg = require("pg");
const settings = require("./settings");
const requireData = require("./result"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port
});

var crit = process.argv.slice(2)

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query(`SELECT * FROM famous_people WHERE last_name = '${crit}' OR first_name = '${crit}'`, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }

    requireData(result, crit);
    client.end();
  });
});

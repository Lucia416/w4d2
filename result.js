module.exports =  function requireData(result, crit) {

  if (result.rows.length == 1){
    console.log("Found" + result.rows.length + " person(s) by the name " + result.rows[0].first_name);
    console.log("-"+ result.rows.length + ", " + result.rows[0].first_name +" "+ result.rows[0].last_name + " born "  + result.rows[0].birthdate.toDateString());
  }

}

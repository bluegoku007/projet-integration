const db = require('../util/database');

module.exports = class app {
  constructor(id,firstname,lastname,password,email,phone,type,nomrestaurant,adresse) {
    this.id = id;
    this.firstname=firstname;
    this.password=password;
    this.email=email;
    this.lastname=lastname;
    this.type=type;
    this.phone=phone;
    this.nomrestaurant=nomrestaurant;
    this.adresse=adresee;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM user');
  }

  static post(firstname,lastname,email,phone,password,type) {
    return db.execute('INSERT INTO user (firstname,lastname,email,phone,password,type) VALUES (?,?,?,?,?,?)', [firstname,lastname,email,phone,password,type]);
  }
  static put(firstname,lastname,email,password,type) {
    return db.execute('INSERT INTO user (firstname,lastname,phone,email,password,type) VALUES (?,?,?,?,?,?)', [firstname,lastname,phone,email,password,type]);
  }

  static update(id, firstname) {
    return db.execute('UPDATE user SET firstname = ? WHERE id = ?', [firstname, id]);
  }
  static update(id, password) {
    return db.execute('UPDATE user SET password = ? WHERE id = ?', [password, id]);
  }
  static update(id,email) {
    return db.execute('UPDATE user SET email = ? WHERE id = ?', [firstname, id]);
  }
  static update(id, password) {
    return db.execute('UPDATE user SET password = ? WHERE id = ?', [password, id]);
  }
  static delete(id) {
    return db.execute('DELETE FROM user WHERE id = ?', [id]);
  }
};
const users = [];

export class User {
  constructor(name, last_name) {
    this.name = name;
    this.last_name = last_name;
  }

  save() {
    users.push(this);
  }

  static fetchAll() {
    return users;
  }
}

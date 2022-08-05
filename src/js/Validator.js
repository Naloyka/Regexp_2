export default class Validator {
  constructor(login) {
    this.login = login
  }


   validateUsername(login) {
    const regRule = /^[a-zA-Z]+[a-zA-Z][-_]?[0-9]{0,3}[-_]?[a-zA-Z]+$/;
    return regRule.test(this.login);
  }
}

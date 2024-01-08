class User {
    constructor (email, name) {
        this.email = email;
        this.name = name;
    }
    login() {
        console.log(this.email, 'just logged in');
    }
    logout() {
        console.log(this.email, 'just logged out');
    }
}
const UserOne = new User('mogendieric19@gmail.com', 'Eric')
const Usertwo = new User('mogendicedric1@gmail.com', 'Cedric')
console.log(UserOne)
console.log(Usertwo)
UserOne.login()
UserOne.logout()
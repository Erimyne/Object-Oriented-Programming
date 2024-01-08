class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(this.email, 'just logged in');
        return this;
    }
    logout() {
        console.log(this.email, 'just logged out');
        return this;
    }
    updateSCore() {
        this.score++;
        console.log(this.email, 'score is now', this.score)
        return this;
    }
}
const UserOne = new User('mogendieric19@gmail.com', 'Eric')
const Usertwo = new User('mogendicedric1@gmail.com', 'Cedric')
UserOne.login().updateSCore().updateSCore().logout()

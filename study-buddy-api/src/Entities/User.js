class User { 
    /**
     * @constructor
     * @param {string} email
     * @param {string} name
     * @param {string} password
     */
    constructor(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }

    get email() {
        return this.email;
    }

    /**
     * @param {string} email
     */
    set email(email) {
        this.email = email;
    }

    get name() {
        return this.name;
    }

    /**
     * @param {string} name
     */
    set name(name) {
        this.name = name;
    }

    get password() {
        return this.password;
    }

    /**
     * @param {string} password
     */
    set password(password) {
        this.password = password;
    }
}
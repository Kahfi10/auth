const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    const hash = await bcrypt.hash(password, 12);
    console.log(salt);
    console.log(hash);    
}

const login = async(pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if(result) {
        console.log('Login success');
    } else {
        console.log('Login failed');
    }
}

hashPassword('kahfi');
login('kahfi', '$2b$12$dkmSrVHjKl29CKi.jRjEe./libzKwj1T7h3um/LOY6lI/e27zAcB6')

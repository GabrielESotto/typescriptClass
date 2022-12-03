"use strict";
const verifyUser = (user, receivedValue) => {
    return user.username === receivedValue.username && user.password === receivedValue.password;
};
const bdUser = { username: 'gabriel', password: '123456' };
const sentUser = { username: 'gabriel', password: '123456' };
const isLogged = verifyUser(bdUser, sentUser);
console.log(isLogged);
//# sourceMappingURL=A0016.js.map
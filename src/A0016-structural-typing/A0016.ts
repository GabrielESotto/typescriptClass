type VerifyUserFn = (username: User, receivedValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, receivedValue) => {
  return user.username === receivedValue.username && user.password === receivedValue.password;
};

const bdUser = { username: 'gabriel', password: '123456' };
const sentUser = { username: 'gabriel', password: '123456' };

const isLogged = verifyUser(bdUser, sentUser);
console.log(isLogged);

const request = require('supertest');
const app = require('../src/app');
const User = require('../src/user/User');
const sequelize = require('../src/config/database');

beforeAll(() => {
  return sequelize.sync();
});

beforeEach(() => {
  return User.destroy({ truncate: true });
});

const validUser = {
  username: 'user1',
  email: 'user1@mail.com',
  password: 'P4ssword',
};

const postUser = (user = validUser) => {
  return request(app).post('/api/1.0/users').send(user);
};

describe('Test cases for sign-up feature in server side.', () => {
  it('Return 200 for success message.', async () => {
    const response = await postUser();
    expect(response.status).toBe(200);
  });

  it('Return body message for success creation.', async () => {
    const response = await postUser();
    expect(response.body.message).toBe('User created.');
  });

  it('Saves user to the database', async () => {
    await postUser();
    const users = await User.findAll();
    expect(users.length).toBe(1);
  });

  it('Saves user name and email to the database', async () => {
    await postUser();
    const users = await User.findAll();
    const savedUser = users[0];
    expect(savedUser.username).toBe('user1');
    expect(savedUser.email).toBe('user1@mail.com');
  });

  it('Hashing password in database', async () => {
    await postUser();
    const users = await User.findAll();
    const savedUser = users[0];
    expect(savedUser.password).not.toBe('P4ssword');
  });
  it('return 400 when the username is null', async () => {
    const response = await postUser({
      email: 'user1@mail.com',
      password: 'P4ssword',
    });
    expect(response.status).toBe(400);
  });
  it('returns validation errors field when an error occurs', async () => {
    const response = await postUser({
      email: 'user1@mail.com',
      password: 'P4ssword',
    });
    expect(response.body).not.toBeUndefined();
  });
  it('returns validation errors username when username is empty', async () => {
    const response = await postUser({
      email: 'user1@mail.com',
      password: 'P4ssword',
    });
    expect(response.body.validationErrors.username).toBe('Username parameter is required.');
  });
  it('Returns 400 when the user is null', async () => {
    
  });
});

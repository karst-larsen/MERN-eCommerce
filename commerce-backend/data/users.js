import bcrypt from "bcrypt";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Karsten Larsen",
    email: "karsten@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Bransen Statio",
    email: "bransen@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;

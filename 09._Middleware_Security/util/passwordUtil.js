import bcrypt, { hash } from "bcrypt";

const saltRounds = 14;
const plaintextPassword = "HejSteffen";
const passwordHash = "$2b$14$1BceWWr1HC0S8hNBZ1Hckui2yt0dz92iRNp9iNccqMPajabHY3YRm";

const hashedPassword = await bcrypt.hash(plaintextPassword, saltRounds);
console.log(plaintextPassword + " | " + hashedPassword);

const isSame = await bcrypt.compare(plaintextPassword, passwordHash);
console.log(isSame);
import { config } from 'dotenv';

config();

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

export const Config = Object.freeze({
    PORT,
    NODE_ENV,
});

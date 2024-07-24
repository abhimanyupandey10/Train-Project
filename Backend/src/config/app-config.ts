import dotenv from 'dotenv';

dotenv.config();

const config: any = {
    port: process.env.PORT || 3000,
    LOG_LEVEL: process.env.LOG_LEVEL || 'info',
}

export default config;
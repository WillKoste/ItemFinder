import Redis from 'ioredis';
import 'colors';

export const redis = new Redis(process.env.REDIS_URL);

redis.connect(() => console.log(`Redis connected on port ${process.env.REDIS_PORT}`.blue.bold));

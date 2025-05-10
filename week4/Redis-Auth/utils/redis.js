import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

const redisClient = createClient({ url: process.env.REDIS_URL });

const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log("Connected to Redis!");
  } catch (error) {
    console.error("Redis connection failed:", error);
  } finally {
    console.log("Redis connection attempt completed.");
  }
};

export {redisClient, connectRedis};
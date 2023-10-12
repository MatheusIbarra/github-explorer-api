import { NextFunction, Request, Response } from 'express';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import { createClient } from 'redis';

export const rateLimiter = async (
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> => {
  const redisClient = createClient();

  const limiter = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: 'ratelimit',
    points: 100,
    duration: 1,
  });

  try {
    await limiter.consume(request.ip);

    return next();
  } catch (err) {
    response.status(429).json({
      message: 'Too many requests',
    });
    return undefined;
  }
};

import { httpRequest } from '@/tests/helpers/http';
import { describe, expect, it } from 'vitest';

const method = 'GET';
const path = '/api/users';

describe(`${method} ${path}`, () => {
  it('should return 404 on error - user not found', async () => {
    const { statusCode, body } = await httpRequest({
      method,
      path: `${path}/:username/details`,
    });
    expect(statusCode).toBe(404);
  });

  it('should return 200 on success', async () => {
    const { statusCode, body } = await httpRequest({
      method,
      path: `${path}/imownbey/details`,
    });
    expect(body).toHaveProperty('id');
    expect(statusCode).toBe(200);
  });
});

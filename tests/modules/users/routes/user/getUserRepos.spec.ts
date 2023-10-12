import { httpRequest } from '@/tests/helpers/http';
import { describe, expect, it } from 'vitest';

const method = 'GET';
const path = '/api/users';

describe(`${method} ${path}`, () => {
  it('should return 404 on error - user not found', async () => {
    const { statusCode } = await httpRequest({
      method,
      path: `${path}/:username/repos`,
    });
    expect(statusCode).toBe(404);
  });

  it('should return 200 on success', async () => {
    const { statusCode, body } = await httpRequest({
      method,
      path: `${path}/imownbey/repos`,
    });
    expect(Array.isArray(body)).toBe(true);
    expect(statusCode).toBe(200);
  });
});

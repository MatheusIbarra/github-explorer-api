import { httpRequest } from '@/tests/helpers/http';
import { describe, expect, it } from 'vitest';

const method = 'GET';
const path = '/api/users';

describe(`${method} ${path}`, () => {
  it('should return 400 on error - sending request without since', async () => {
    const { statusCode, body } = await httpRequest({
      method,
      path,
    });
    expect(statusCode).toBe(400);
  });

  it('should return 200 on success', async () => {
    const { statusCode, body } = await httpRequest({
      method,
      path: `${path}?since=1`,
    });
    expect(body).toHaveProperty('results');
    expect(statusCode).toBe(200);
  });
});

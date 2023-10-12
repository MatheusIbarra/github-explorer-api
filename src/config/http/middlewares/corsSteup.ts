import cors from 'cors';

import { env } from '@/shared/helpers';

export const corsSetup = cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    return callback(null, true);
  },
});

import { Router } from 'express';

import { useHandler } from '@/shared/helpers/routes';
import { GetUserController } from '../controllers/getUser';

export default function userRoutes(router: Router): void {
  router.get('/users', useHandler(GetUserController));
}

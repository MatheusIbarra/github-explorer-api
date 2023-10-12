import { Router } from 'express';

import { useHandler } from '@/shared/helpers/routes';
import { GetUserController } from '../controllers/getUsers';
import { GetUserDetailsController } from '../controllers/getUserDetails';

export default function userRoutes(router: Router): void {
  router.get('/users', useHandler(GetUserController));
  router.get('/users/:username/details', useHandler(GetUserDetailsController));
}

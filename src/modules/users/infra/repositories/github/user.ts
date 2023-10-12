import { singleton } from 'tsyringe';

import { GetUserRepo } from '@/modules/users/contracts/repositories';

@singleton()
export class PgUserRepository implements GetUserRepo {
  getUser(input: GetUserRepo.Input): any {
    return { id: 1 };
  }
}

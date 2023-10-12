export namespace GetUsersRepo {
  export type Input = {
    since: string;
  };
  export type Output = any;
}

export interface GetUsersRepo {
  getUser(input: GetUsersRepo.Input): Promise<GetUsersRepo.Output>;
}

export namespace GetUserDetailsRepo {
  export type Input = {
    username: string;
  };
  export type Output = any;
}

export interface GetUserDetailsRepo {
  getUserDetails(
    input: GetUserDetailsRepo.Input,
  ): Promise<GetUserDetailsRepo.Output>;
}

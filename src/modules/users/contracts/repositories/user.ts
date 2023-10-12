export namespace GetUserRepo {
  export type Input = {
    username: string;
  };
  export type Output = any;
}

export interface GetUserRepo {
  getUser(input: GetUserRepo.Input): Promise<GetUserRepo.Output>;
}

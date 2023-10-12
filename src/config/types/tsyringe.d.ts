import * as tsyringe from 'tsyringe';

declare module 'tsyringe' {
  declare function inject(
    token: InjectionToken<any>,
  ): (
    target: any,
    propertyKey: string | symbol | undefined,
    parameterIndex: number,
  ) => any;
}

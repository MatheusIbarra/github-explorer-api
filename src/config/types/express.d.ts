/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace Express {
  interface Request {
    locals: {
      partner: {
        id: number;
      };
      cognito_user: {
        id: string;
        username: string;
      };
      file: {
        buffer: Buffer;
        mimeType: string;
      };
    };
  }
}

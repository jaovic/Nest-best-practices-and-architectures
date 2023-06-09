import { users } from '@prisma/client';

export interface ICreateUser {
  name: string;
  document: string;
  email: string;
}

export interface IFindUser {
  user_id: string;
}

export interface IUpdateUser {
  user: { user_id: string };
  body: Partial<users>;
}

export interface IDeleteUser {
  user_id: string;
}

export interface ICreateUserService {
  execute(data: ICreateUser): Promise<users>;
}

export interface IFindUserService {
  execute(data: IFindUser): Promise<users>;
}

export interface IUpdateUserService {
  execute(data: IUpdateUser): Promise<users>;
}
export interface IDeleteUserService {
  execute(data: IDeleteUser): Promise<boolean>;
}

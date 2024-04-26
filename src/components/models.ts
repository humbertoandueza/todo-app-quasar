export interface Todo {
  title: string;
  description: string;
  status: boolean;
  id?: number;
}

export enum Method {
  create = 'CREATE',
  update = 'UPDATE',
}

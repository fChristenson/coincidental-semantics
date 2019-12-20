export interface IUser {
  id: string;
  name: string;
  createdAt: string;
}

export const User = (name: string): IUser => {
  return {
    id: Math.random().toString(),
    name,
    createdAt: new Date().toISOString()
  };
};

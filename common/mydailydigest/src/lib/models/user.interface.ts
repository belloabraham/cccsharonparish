type UserType = 'Publisher' | 'Editor';

export interface IUser {
  id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  imageUrl: string | null;
  createdOn: Date;
  updatedOn: Date;
  userType: UserType;
}

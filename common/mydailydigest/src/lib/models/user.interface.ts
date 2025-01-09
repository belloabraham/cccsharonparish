import { Timestamp } from '@angular/fire/firestore';

export type UserType = 'Publisher' | 'Editor';

export interface IUserUIState {
  phone: string;
  firstName: string;
  lastName: string;
  imageUrl?: string;
  email?: string;
}

export interface IUser extends IUserUIState {
  id: string;
  email: string | undefined;
  phone: string;
  firstName: string;
  lastName: string;
  imageUrl?: string;
  createdOn?: Date | Timestamp;
  updatedOn: Date | Timestamp;
  userType: UserType;
}

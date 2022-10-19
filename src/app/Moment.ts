export interface Moment {
  id?: number;
  title: string;
  description: string;
  image: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  comments?: [{ text: string; username: string }];
}

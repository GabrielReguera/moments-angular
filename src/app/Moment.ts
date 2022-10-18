export interface Moment {
  id?: number;
  title: string;
  description: string;
  image: string;
  created_at?: string | Date;
  updated_at?: string | Date;
  comments?: [{ text: string; username: string }];
}

import { Moment } from "./Moment";

export interface Comment {
  id?: number;
  text: string;
  username: string;
  moment: Moment;
  createdAt?: string;
  updatedAt?: string;
}

export interface IUser {
  id: number;
  title: string;
  first_name: string;
  last_name: string;

  city: string;
  state: string;
  country: string;

  email: string;
  phone: string;
  pictureUrl: string;

  // 0: prospect, 1: lead, 2: pitched, 3: accepted, 4: under review, 5: closed
  status: number;
  isArchived: boolean;
}

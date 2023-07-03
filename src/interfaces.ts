export interface User {
  id: string;
  name: {
    title: string;
    first: string;
    last: string;
  };

  location: {
    city: string;
    state: string;
    country: string;
  };

  email: string;
  phone: string;
  pictureUrl: string;

  // 0: prospect, 1: lead, 2: pitched, 3: accepted, 4: under review, 5: closed
  status: number;
  isArchived: boolean;
}

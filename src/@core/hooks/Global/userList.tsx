export type User = {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    status: string;
    image:{
      formats:{
        thumbnail: {
          url: string;
        }
      }
    }
  };
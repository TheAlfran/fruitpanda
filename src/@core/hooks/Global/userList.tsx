export type User = {
    id: string;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    status: string;
    wallet: number;
    image:{
      formats:{
        thumbnail: {
          url: string;
        }
      }
    }
  };
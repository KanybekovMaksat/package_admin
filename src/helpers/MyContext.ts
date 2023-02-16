import { createContext } from "react";

export type MyContextType = {
    data: any[];
    category: any[];
    sort: any[];
    type: number;
    setData: React.Dispatch<React.SetStateAction<any[]>>;
    setCategory: React.Dispatch<React.SetStateAction<any[]>>;
    setSort: React.Dispatch<React.SetStateAction<any[]>>;
    setType: React.Dispatch<React.SetStateAction<number>>;
    fetchData: () => Promise<void>;
  };

  export const MyContext = createContext<MyContextType>({
    data: [],
    category: [],
    sort: [],
    type: 0,
    setData: () => {},
    setCategory: () => {},
    setSort: () => {},
    setType: () => {},
    fetchData: async () => {},
  });
  

  
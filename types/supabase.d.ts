export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      poems: {
        Row: {
          id: number; // int8 maps to number
          title: string; // text maps to string
          text: string; // text column for poem content
          created_at: string; // timestamptz maps to ISO string
        };
      };
    };
  };
}

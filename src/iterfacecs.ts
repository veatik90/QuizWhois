export interface Picture {
  id: string;
  name: string;
  src: string;
  date: Date;
}

export interface Category {
  id: string;
  name: string;
  pictures: Picture[];
}


export type Dog = {
    id: string,
    name: string,
    owner: string;
  }

  export type DogNoId = Omit<Dog,'id'>;

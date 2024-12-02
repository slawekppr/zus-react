export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address?: Address;
  company?: Company;
}

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

const users: User[] = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
];

// Type is inferred from data
users[0].address?.street;  // Street or undefined

type UserDetails = { banana: true };

type SuperUser = User & UserDetails & { super: true }; // Extending type alias

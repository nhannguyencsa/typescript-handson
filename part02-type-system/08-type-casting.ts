let firstName = <any>"Nhan";
let age= 99 as any;

//User from API
let user = {
  name: "Nhan",
  age: 99
};

type User = {
  name: string;
  age: number
}

function fetchUser() {
  return user as User;
}

const fetchedUser = fetchUser();


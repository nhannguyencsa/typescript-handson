// inline annotation
// let post: {
//   title: string;
//   content: string;
//   date: Date;
// } = {
//   title: "this is a title",
//   content: "this is a content",
//   date: new Date(),
// };

type Author = {
    name: string;
    age: number;
    email: string;
    readonly type: "human" | "ai"; //readonly propery
}

type AwardsDetail = {
  name: string;
  date: Date;
}

type Awards = {
  [key: string]: AwardsDetail;
}

type Post = {
  title: string;
  content: string;
  date: Date;
  author: Author;
  awards: Awards;
  category?: string; //optional property
}

let post: Post = {
  title: "this is a title",
  content: "this is a content",
  date: new Date(),
  author: {
    name: "John",
    age: 22,
    email: "john@doe.com",
    type: "human"

  },
  awards: {
    web: {
      name: "Web Awards",
      date: new Date(),
    }, 
    web3: {
      name: "Web 3",
      date: new Date()
    }
  },
  category: "javascript"
};

let post2: Post = {
  title: "this is a title",
  content: "this is a content",
  date: new Date(),
  author: {
    name: "John",
    age: 22,
    email: "john@doe.com",
    type: "human"
  },
  awards: {
    web: {
      name: "Web Awards",
      date: new Date(),
    }, 
    web3: {
      name: "Web 3",
      date: new Date()
    }
  }
};

console.log(post);
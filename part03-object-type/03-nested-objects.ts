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
    email: string
  }

type Post = {
  title: string;
  content: string;
  date: Date;
  author: Author;
}

let post: Post = {
  title: "this is a title",
  content: "this is a content",
  date: new Date(),
  author: {
    name: "John",
    age: 22,
    email: "john@doe.com"
  }
};

console.log(post);
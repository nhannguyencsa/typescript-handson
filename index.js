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
var post = {
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

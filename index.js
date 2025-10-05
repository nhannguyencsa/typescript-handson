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

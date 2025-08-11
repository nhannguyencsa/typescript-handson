type StringOrNumber = string | number;
type NumberOrUndefined = number | undefined;
type StringNumberOrUndefined = string | number | undefined;
type DateOrUndefined = Date | undefined;


let StringOrNumber = 1234;

function print(input: string | undefined) {
  if(input) {
    console.log(input);
  } else {
    console.log("Please input something to print");
  }
}

print();
print("Hello World!!");


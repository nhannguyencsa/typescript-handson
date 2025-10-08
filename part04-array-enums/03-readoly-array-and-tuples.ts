let number: readonly number[] = [1, 2, 3];
// number[0] = 4;//se bi loi

type ReadOnlyTuple = readonly [string, string, number];
let person: ReadOnlyTuple = ["John", "Doe", 21];
// person[0] = "Mark";//se bi loi

//alternative syntax
type a = Readonly<(string | number[])>;
type b = ReadonlyArray<string | number>;
type c = Readonly<[number, string, number]>;


"use strict";
/*
  Conditional Type
  - T extends U ? X : Y
      - If type T can be assigned to type U → return X.
      - Otherwise → return Y

  - Practical Applications:
    1. Choose a different type
      type IsString<T> = T extends string ? "Yes" : "No";

    2. Filter to keep only a type (Extract)
      type OnlyString<T> = T extends string ? T : never;

    3. Remove a type (Exclude)
      type NoString<T> = T extends string ? never : T;

    4. Transform a type
      type ToReadonly<T> = { readonly [K in keyof T]: T[K] };

    5. Infer a subtype (infer)
      type ElementType<T> = T extends (infer U)[] ? U : T;
*/
Object.defineProperty(exports, "__esModule", { value: true });

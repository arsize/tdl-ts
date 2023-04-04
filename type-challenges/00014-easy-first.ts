// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
]

type errors = [
  // @ts-expect-error
  First<"notArray">,
  // @ts-expect-error
  First<{ 0: "arrayLike" }>
]

// ============= Your Code Here =============
// type First<T extends any[]> = T extends [] ? never : T[0]
type First<T extends any[]> = T extends [infer P, ...infer rest] ? P : never

/**
 * infer
 * infer可以在extends的条件语句中推断待推断的类型
 * 
  type Ids = number[];
  type Names = string[];
  type Unpacked<T> = T extends Names ? string : T extends Ids ? number : T;
  type idType = Unpacked<Ids>; // idType 类型为 number
  type nameType = Unpacked<Names>; // nameType 类型为string

  type Unpacked<T> = T extends (infer R)[] ? R : T;
  type idType = Unpacked<Ids>; // idType 类型为 number
  type nameType = Unpacked<Names>; // nameType 类型为string

  type Response = Promise<number[]>;
  type Unpacked<T> = T extends Promise<infer R> ? R : T;
  type resType = Unpacked<Response>; // resType 类型为number[]

  参考：https://juejin.cn/post/6844904170353328135

 *
 */

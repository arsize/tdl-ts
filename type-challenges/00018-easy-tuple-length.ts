// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

const tesla = ["tesla", "model 3", "model X", "model Y"] as const
const spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
] as const

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<"hello world">
]

// ============= Your Code Here =============
type Length<T extends readonly string[]> = T["length"]

/**
 * 元组可以理解为一个长度，每一项元素类型都确定的数组，例如：
 * const peopleInfo = ['Dylan', 'male', 23];
 * 此时TypeScript推断出的peopleInfo的类型是一个数组(string | number)[]。可是这样的类型注解并没有太多的约束力，假如说我确定这个数组的长度一定为3，而且数组的前两个元素一定是字符串，最后一个元素一定是数字，那么它就是一个元组，此时的类型注解如下：
 * const peopleArr: [string, string, number] = ['Dylan', 'male', 23];
 *
 */

const tup: readonly [number, number, string] = [1, 1, "a"]

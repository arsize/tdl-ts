// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

const tuple = ["tesla", "model 3", "model X", "model Y"] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, "2", 3, "4"] as const

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla"
        "model 3": "model 3"
        "model X": "model X"
        "model Y": "model Y"
      }
    >
  >,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<
    Equal<TupleToObject<typeof tupleMix>, { 1: 1; "2": "2"; 3: 3; "4": "4" }>
  >
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>

// ============= Your Code Here =============
type uni = typeof tupleNumber["length"]

type TupleToObject<T extends readonly (number | string)[]> = {
  [key in T[number]]: key
}

/**
 * 映射类型
 * [Key in keyof T]: T[Key]
 * keyof T用于从对象类型T中获取键值 key
 * in用于对对象键值key进行迭代
 * T[Key]是指定 Key 的值
 *
 */

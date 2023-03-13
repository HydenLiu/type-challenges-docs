// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
]

// ============= Your Code Here =============

type numberToUnion<T extends unknown | unknown[]> = T extends unknown[]
  ? T[number]
  : T
type Without<T, U, A extends unknown[] = []> = T extends [
  infer H,
  ...infer R
]
  ? H extends numberToUnion<U>
    ? Without<R, U, A>
    : Without<R, U, [...A, H]>
  : A

// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
import { ExpectFalse, NotEqual } from './test-utils'

type cases = [
  Expect<Equal<FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>, [1, 4, 5]>>,
  Expect<Equal<FindEles<[2, 2, 3, 3, 6, 6, 6]>, []>>,
  Expect<Equal<FindEles<[1, 2, 3]>, [1, 2, 3]>>,
]


// ============= Your Code Here =============
type FindEles<
  T extends any[],
  O extends any[] = [],
  A extends any[] = []
> = T extends [infer H, ...infer R]
  ? H extends [...R, ...O][number]
    ? FindEles<R, [...O, H], A>
    : FindEles<R, O, [...A, H]>
  : A 

// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
]


// ============= Your Code Here =============
type MinusOne<T extends number, A extends string[] = []> = 0 extends 1
  ? never
  : T extends 0 
  ? -1
  : ['', ...A]['length'] extends T
  ? A['length']
  : MinusOne<T, ['', ...A]>


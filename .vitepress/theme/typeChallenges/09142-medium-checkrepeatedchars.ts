// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
import { ExpectFalse, NotEqual } from './test-utils'

type cases = [
  Expect<Equal<CheckRepeatedChars<'abc'>, false>>,
  Expect<Equal<CheckRepeatedChars<'abb'>, true>>,
  Expect<Equal<CheckRepeatedChars<'cbc'>, true>>,
  Expect<Equal<CheckRepeatedChars<''>, false>>,
]


// ============= Your Code Here =============
type CheckRepeatedChars<
  T extends string,
  A extends string[] = []
> = T extends `${infer H}${infer R}`
  ? H extends A[number]
    ? true
    : CheckRepeatedChars<R, [...A, H]>
  : false

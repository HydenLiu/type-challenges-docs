// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<FirstUniqueCharIndex<'leetcode'>, 0>>,
  Expect<Equal<FirstUniqueCharIndex<'loveleetcode'>, 2>>,
  Expect<Equal<FirstUniqueCharIndex<'aabb'>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<''>, -1>>
]

// ============= Your Code Here =============
type FirstUniqueCharIndex<
  T extends string,
  _Acc extends string[] = []
> = T extends ''
  ? -1
  : T extends `${infer H}${infer R}`
  ? H extends _Acc[number]
    ? FirstUniqueCharIndex<R, [..._Acc, H]>
    : R extends `${string}${H}${string}`
    ? FirstUniqueCharIndex<R, [..._Acc, H]>
    : _Acc['length']
  : never


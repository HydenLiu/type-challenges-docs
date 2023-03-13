// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Join<['a', 'p', 'p', 'l', 'e'], '-'>, 'a-p-p-l-e'>>,
  Expect<Equal<Join<['Hello', 'World'], ' '>, 'Hello World'>>,
  Expect<Equal<Join<['2', '2', '2'], 1>, '21212'>>,
  Expect<Equal<Join<['o'], 'u'>, 'o'>>
]

// ============= Your Code Here =============
type Join<
  T extends string[],
  U extends string | number,
  S extends string = ''
> = T['length'] extends 1
  ? `${S}${T[0]}`
  : T extends [infer H extends string, ...infer R extends string[]]
  ? Join<R, U, `${S}${H}${U}`>
  : S

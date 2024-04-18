// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
type cases = [
  Expect<
    Equal<
      CountElementNumberToObject<[1, 2, 3, 4, 5]>,
      {
        1: 1
        2: 1
        3: 1
        4: 1
        5: 1
      }
    >
  >,
  Expect<
    Equal<
      CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3]]>,
      {
        1: 2
        2: 2
        3: 2
        4: 1
        5: 1
      }
    >
  >,
  Expect<
    Equal<
      CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3, [4, 4, 1, 2]]]>,
      {
        1: 3
        2: 3
        3: 2
        4: 3
        5: 1
      }
    >
  >,
  Expect<Equal<CountElementNumberToObject<[never]>, {}>>,
  Expect<
    Equal<
      CountElementNumberToObject<['1', '2', '0']>,
      {
        0: 1
        1: 1
        2: 1
      }
    >
  >,
  Expect<
    Equal<
      CountElementNumberToObject<['a', 'b', ['c', ['d']]]>,
      {
        a: 1
        b: 1
        c: 1
        d: 1
      }
    >
  >
]

// ============= Your Code Here =============
type CountElementNumberToObject<
  T extends unknown[],
  U extends Record<any, unknown[]> = {}
> = T extends [never]
  ? {}
  : T extends [infer F, ...infer R]
  ? F extends unknown[]
    ? CountElementNumberToObject<[...F, ...R], U>
    : CountElementNumberToObject<
        R,
        {
          [K in keyof U | (F & PropertyKey)]: K extends keyof U
            ? K extends F
              ? [...U[K], unknown]
              : U[K]
            : [unknown]
        }
      >
  : { [K in keyof U]: U[K]['length'] }

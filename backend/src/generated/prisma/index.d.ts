
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Person
 * 
 */
export type Person = $Result.DefaultSelection<Prisma.$PersonPayload>
/**
 * Model Marriage
 * 
 */
export type Marriage = $Result.DefaultSelection<Prisma.$MarriagePayload>
/**
 * Model Photo
 * 
 */
export type Photo = $Result.DefaultSelection<Prisma.$PhotoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more People
 * const people = await prisma.person.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more People
   * const people = await prisma.person.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marriage`: Exposes CRUD operations for the **Marriage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Marriages
    * const marriages = await prisma.marriage.findMany()
    * ```
    */
  get marriage(): Prisma.MarriageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photo`: Exposes CRUD operations for the **Photo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photo.findMany()
    * ```
    */
  get photo(): Prisma.PhotoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.0
   * Query Engine version: 0c19ccc313cf9911a90d99d2ac2eb0280c76c513
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Person: 'Person',
    Marriage: 'Marriage',
    Photo: 'Photo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "person" | "marriage" | "photo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Person: {
        payload: Prisma.$PersonPayload<ExtArgs>
        fields: Prisma.PersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findFirst: {
            args: Prisma.PersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findMany: {
            args: Prisma.PersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          create: {
            args: Prisma.PersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          createMany: {
            args: Prisma.PersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          delete: {
            args: Prisma.PersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          update: {
            args: Prisma.PersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          deleteMany: {
            args: Prisma.PersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          upsert: {
            args: Prisma.PersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.PersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonCountArgs<ExtArgs>
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
      Marriage: {
        payload: Prisma.$MarriagePayload<ExtArgs>
        fields: Prisma.MarriageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarriageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarriagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarriageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarriagePayload>
          }
          findFirst: {
            args: Prisma.MarriageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarriagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarriageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarriagePayload>
          }
          findMany: {
            args: Prisma.MarriageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarriagePayload>[]
          }
          create: {
            args: Prisma.MarriageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarriagePayload>
          }
          createMany: {
            args: Prisma.MarriageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarriageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarriagePayload>[]
          }
          delete: {
            args: Prisma.MarriageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarriagePayload>
          }
          update: {
            args: Prisma.MarriageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarriagePayload>
          }
          deleteMany: {
            args: Prisma.MarriageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarriageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarriageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarriagePayload>[]
          }
          upsert: {
            args: Prisma.MarriageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarriagePayload>
          }
          aggregate: {
            args: Prisma.MarriageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarriage>
          }
          groupBy: {
            args: Prisma.MarriageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarriageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarriageCountArgs<ExtArgs>
            result: $Utils.Optional<MarriageCountAggregateOutputType> | number
          }
        }
      }
      Photo: {
        payload: Prisma.$PhotoPayload<ExtArgs>
        fields: Prisma.PhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findFirst: {
            args: Prisma.PhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findMany: {
            args: Prisma.PhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          create: {
            args: Prisma.PhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          createMany: {
            args: Prisma.PhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          delete: {
            args: Prisma.PhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          update: {
            args: Prisma.PhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          deleteMany: {
            args: Prisma.PhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          upsert: {
            args: Prisma.PhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          aggregate: {
            args: Prisma.PhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoto>
          }
          groupBy: {
            args: Prisma.PhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    person?: PersonOmit
    marriage?: MarriageOmit
    photo?: PhotoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PersonCountOutputType
   */

  export type PersonCountOutputType = {
    children: number
    marriages: number
    marriagesAsWife: number
    photos: number
  }

  export type PersonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | PersonCountOutputTypeCountChildrenArgs
    marriages?: boolean | PersonCountOutputTypeCountMarriagesArgs
    marriagesAsWife?: boolean | PersonCountOutputTypeCountMarriagesAsWifeArgs
    photos?: boolean | PersonCountOutputTypeCountPhotosArgs
  }

  // Custom InputTypes
  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCountOutputType
     */
    select?: PersonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountMarriagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarriageWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountMarriagesAsWifeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarriageWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Person
   */

  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    birthDate: Date | null
    deathDate: Date | null
    gender: string | null
    phone: string | null
    photoUrl: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    birthDate: Date | null
    deathDate: Date | null
    gender: string | null
    phone: string | null
    photoUrl: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    birthDate: number
    deathDate: number
    gender: number
    phone: number
    photoUrl: number
    parentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PersonMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    deathDate?: true
    gender?: true
    phone?: true
    photoUrl?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    deathDate?: true
    gender?: true
    phone?: true
    photoUrl?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    deathDate?: true
    gender?: true
    phone?: true
    photoUrl?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Person to aggregate.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithAggregationInput | PersonOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }

  export type PersonGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    birthDate: Date | null
    deathDate: Date | null
    gender: string | null
    phone: string | null
    photoUrl: string | null
    parentId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    deathDate?: boolean
    gender?: boolean
    phone?: boolean
    photoUrl?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Person$parentArgs<ExtArgs>
    children?: boolean | Person$childrenArgs<ExtArgs>
    marriages?: boolean | Person$marriagesArgs<ExtArgs>
    marriagesAsWife?: boolean | Person$marriagesAsWifeArgs<ExtArgs>
    photos?: boolean | Person$photosArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    deathDate?: boolean
    gender?: boolean
    phone?: boolean
    photoUrl?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Person$parentArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    deathDate?: boolean
    gender?: boolean
    phone?: boolean
    photoUrl?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Person$parentArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    deathDate?: boolean
    gender?: boolean
    phone?: boolean
    photoUrl?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PersonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "birthDate" | "deathDate" | "gender" | "phone" | "photoUrl" | "parentId" | "createdAt" | "updatedAt", ExtArgs["result"]["person"]>
  export type PersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Person$parentArgs<ExtArgs>
    children?: boolean | Person$childrenArgs<ExtArgs>
    marriages?: boolean | Person$marriagesArgs<ExtArgs>
    marriagesAsWife?: boolean | Person$marriagesAsWifeArgs<ExtArgs>
    photos?: boolean | Person$photosArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Person$parentArgs<ExtArgs>
  }
  export type PersonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Person$parentArgs<ExtArgs>
  }

  export type $PersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Person"
    objects: {
      parent: Prisma.$PersonPayload<ExtArgs> | null
      children: Prisma.$PersonPayload<ExtArgs>[]
      marriages: Prisma.$MarriagePayload<ExtArgs>[]
      marriagesAsWife: Prisma.$MarriagePayload<ExtArgs>[]
      photos: Prisma.$PhotoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      birthDate: Date | null
      deathDate: Date | null
      gender: string | null
      phone: string | null
      photoUrl: string | null
      parentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["person"]>
    composites: {}
  }

  type PersonGetPayload<S extends boolean | null | undefined | PersonDefaultArgs> = $Result.GetResult<Prisma.$PersonPayload, S>

  type PersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface PersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Person'], meta: { name: 'Person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonFindUniqueArgs>(args: SelectSubset<T, PersonFindUniqueArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Person that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonFindFirstArgs>(args?: SelectSubset<T, PersonFindFirstArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonFindManyArgs>(args?: SelectSubset<T, PersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
     */
    create<T extends PersonCreateArgs>(args: SelectSubset<T, PersonCreateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many People.
     * @param {PersonCreateManyArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonCreateManyArgs>(args?: SelectSubset<T, PersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many People and returns the data saved in the database.
     * @param {PersonCreateManyAndReturnArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many People and only return the `id`
     * const personWithIdOnly = await prisma.person.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
     */
    delete<T extends PersonDeleteArgs>(args: SelectSubset<T, PersonDeleteArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonUpdateArgs>(args: SelectSubset<T, PersonUpdateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonDeleteManyArgs>(args?: SelectSubset<T, PersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonUpdateManyArgs>(args: SelectSubset<T, PersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People and returns the data updated in the database.
     * @param {PersonUpdateManyAndReturnArgs} args - Arguments to update many People.
     * @example
     * // Update many People
     * const person = await prisma.person.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more People and only return the `id`
     * const personWithIdOnly = await prisma.person.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
     */
    upsert<T extends PersonUpsertArgs>(args: SelectSubset<T, PersonUpsertArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Person model
   */
  readonly fields: PersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Person$parentArgs<ExtArgs> = {}>(args?: Subset<T, Person$parentArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Person$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Person$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    marriages<T extends Person$marriagesArgs<ExtArgs> = {}>(args?: Subset<T, Person$marriagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarriagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    marriagesAsWife<T extends Person$marriagesAsWifeArgs<ExtArgs> = {}>(args?: Subset<T, Person$marriagesAsWifeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarriagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    photos<T extends Person$photosArgs<ExtArgs> = {}>(args?: Subset<T, Person$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Person model
   */
  interface PersonFieldRefs {
    readonly id: FieldRef<"Person", 'String'>
    readonly firstName: FieldRef<"Person", 'String'>
    readonly lastName: FieldRef<"Person", 'String'>
    readonly birthDate: FieldRef<"Person", 'DateTime'>
    readonly deathDate: FieldRef<"Person", 'DateTime'>
    readonly gender: FieldRef<"Person", 'String'>
    readonly phone: FieldRef<"Person", 'String'>
    readonly photoUrl: FieldRef<"Person", 'String'>
    readonly parentId: FieldRef<"Person", 'String'>
    readonly createdAt: FieldRef<"Person", 'DateTime'>
    readonly updatedAt: FieldRef<"Person", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Person findUnique
   */
  export type PersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findUniqueOrThrow
   */
  export type PersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findFirst
   */
  export type PersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findFirstOrThrow
   */
  export type PersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findMany
   */
  export type PersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which People to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person create
   */
  export type PersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to create a Person.
     */
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }

  /**
   * Person createMany
   */
  export type PersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Person createManyAndReturn
   */
  export type PersonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Person update
   */
  export type PersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to update a Person.
     */
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
  }

  /**
   * Person updateManyAndReturn
   */
  export type PersonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Person upsert
   */
  export type PersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The filter to search for the Person to update in case it exists.
     */
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     */
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }

  /**
   * Person delete
   */
  export type PersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter which Person to delete.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which People to delete
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to delete.
     */
    limit?: number
  }

  /**
   * Person.parent
   */
  export type Person$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
  }

  /**
   * Person.children
   */
  export type Person$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    cursor?: PersonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person.marriages
   */
  export type Person$marriagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marriage
     */
    select?: MarriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marriage
     */
    omit?: MarriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarriageInclude<ExtArgs> | null
    where?: MarriageWhereInput
    orderBy?: MarriageOrderByWithRelationInput | MarriageOrderByWithRelationInput[]
    cursor?: MarriageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarriageScalarFieldEnum | MarriageScalarFieldEnum[]
  }

  /**
   * Person.marriagesAsWife
   */
  export type Person$marriagesAsWifeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marriage
     */
    select?: MarriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marriage
     */
    omit?: MarriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarriageInclude<ExtArgs> | null
    where?: MarriageWhereInput
    orderBy?: MarriageOrderByWithRelationInput | MarriageOrderByWithRelationInput[]
    cursor?: MarriageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarriageScalarFieldEnum | MarriageScalarFieldEnum[]
  }

  /**
   * Person.photos
   */
  export type Person$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    cursor?: PhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Person without action
   */
  export type PersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
  }


  /**
   * Model Marriage
   */

  export type AggregateMarriage = {
    _count: MarriageCountAggregateOutputType | null
    _min: MarriageMinAggregateOutputType | null
    _max: MarriageMaxAggregateOutputType | null
  }

  export type MarriageMinAggregateOutputType = {
    id: string | null
    husbandId: string | null
    wifeId: string | null
    startDate: Date | null
    endDate: Date | null
    place: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MarriageMaxAggregateOutputType = {
    id: string | null
    husbandId: string | null
    wifeId: string | null
    startDate: Date | null
    endDate: Date | null
    place: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MarriageCountAggregateOutputType = {
    id: number
    husbandId: number
    wifeId: number
    startDate: number
    endDate: number
    place: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MarriageMinAggregateInputType = {
    id?: true
    husbandId?: true
    wifeId?: true
    startDate?: true
    endDate?: true
    place?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MarriageMaxAggregateInputType = {
    id?: true
    husbandId?: true
    wifeId?: true
    startDate?: true
    endDate?: true
    place?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MarriageCountAggregateInputType = {
    id?: true
    husbandId?: true
    wifeId?: true
    startDate?: true
    endDate?: true
    place?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MarriageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marriage to aggregate.
     */
    where?: MarriageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marriages to fetch.
     */
    orderBy?: MarriageOrderByWithRelationInput | MarriageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarriageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marriages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marriages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Marriages
    **/
    _count?: true | MarriageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarriageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarriageMaxAggregateInputType
  }

  export type GetMarriageAggregateType<T extends MarriageAggregateArgs> = {
        [P in keyof T & keyof AggregateMarriage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarriage[P]>
      : GetScalarType<T[P], AggregateMarriage[P]>
  }




  export type MarriageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarriageWhereInput
    orderBy?: MarriageOrderByWithAggregationInput | MarriageOrderByWithAggregationInput[]
    by: MarriageScalarFieldEnum[] | MarriageScalarFieldEnum
    having?: MarriageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarriageCountAggregateInputType | true
    _min?: MarriageMinAggregateInputType
    _max?: MarriageMaxAggregateInputType
  }

  export type MarriageGroupByOutputType = {
    id: string
    husbandId: string
    wifeId: string
    startDate: Date | null
    endDate: Date | null
    place: string | null
    createdAt: Date
    updatedAt: Date
    _count: MarriageCountAggregateOutputType | null
    _min: MarriageMinAggregateOutputType | null
    _max: MarriageMaxAggregateOutputType | null
  }

  type GetMarriageGroupByPayload<T extends MarriageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarriageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarriageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarriageGroupByOutputType[P]>
            : GetScalarType<T[P], MarriageGroupByOutputType[P]>
        }
      >
    >


  export type MarriageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    husbandId?: boolean
    wifeId?: boolean
    startDate?: boolean
    endDate?: boolean
    place?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    husband?: boolean | PersonDefaultArgs<ExtArgs>
    wife?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marriage"]>

  export type MarriageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    husbandId?: boolean
    wifeId?: boolean
    startDate?: boolean
    endDate?: boolean
    place?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    husband?: boolean | PersonDefaultArgs<ExtArgs>
    wife?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marriage"]>

  export type MarriageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    husbandId?: boolean
    wifeId?: boolean
    startDate?: boolean
    endDate?: boolean
    place?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    husband?: boolean | PersonDefaultArgs<ExtArgs>
    wife?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marriage"]>

  export type MarriageSelectScalar = {
    id?: boolean
    husbandId?: boolean
    wifeId?: boolean
    startDate?: boolean
    endDate?: boolean
    place?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MarriageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "husbandId" | "wifeId" | "startDate" | "endDate" | "place" | "createdAt" | "updatedAt", ExtArgs["result"]["marriage"]>
  export type MarriageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    husband?: boolean | PersonDefaultArgs<ExtArgs>
    wife?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type MarriageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    husband?: boolean | PersonDefaultArgs<ExtArgs>
    wife?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type MarriageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    husband?: boolean | PersonDefaultArgs<ExtArgs>
    wife?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $MarriagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Marriage"
    objects: {
      husband: Prisma.$PersonPayload<ExtArgs>
      wife: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      husbandId: string
      wifeId: string
      startDate: Date | null
      endDate: Date | null
      place: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["marriage"]>
    composites: {}
  }

  type MarriageGetPayload<S extends boolean | null | undefined | MarriageDefaultArgs> = $Result.GetResult<Prisma.$MarriagePayload, S>

  type MarriageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarriageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarriageCountAggregateInputType | true
    }

  export interface MarriageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Marriage'], meta: { name: 'Marriage' } }
    /**
     * Find zero or one Marriage that matches the filter.
     * @param {MarriageFindUniqueArgs} args - Arguments to find a Marriage
     * @example
     * // Get one Marriage
     * const marriage = await prisma.marriage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarriageFindUniqueArgs>(args: SelectSubset<T, MarriageFindUniqueArgs<ExtArgs>>): Prisma__MarriageClient<$Result.GetResult<Prisma.$MarriagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Marriage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarriageFindUniqueOrThrowArgs} args - Arguments to find a Marriage
     * @example
     * // Get one Marriage
     * const marriage = await prisma.marriage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarriageFindUniqueOrThrowArgs>(args: SelectSubset<T, MarriageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarriageClient<$Result.GetResult<Prisma.$MarriagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marriage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarriageFindFirstArgs} args - Arguments to find a Marriage
     * @example
     * // Get one Marriage
     * const marriage = await prisma.marriage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarriageFindFirstArgs>(args?: SelectSubset<T, MarriageFindFirstArgs<ExtArgs>>): Prisma__MarriageClient<$Result.GetResult<Prisma.$MarriagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marriage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarriageFindFirstOrThrowArgs} args - Arguments to find a Marriage
     * @example
     * // Get one Marriage
     * const marriage = await prisma.marriage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarriageFindFirstOrThrowArgs>(args?: SelectSubset<T, MarriageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarriageClient<$Result.GetResult<Prisma.$MarriagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Marriages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarriageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Marriages
     * const marriages = await prisma.marriage.findMany()
     * 
     * // Get first 10 Marriages
     * const marriages = await prisma.marriage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marriageWithIdOnly = await prisma.marriage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarriageFindManyArgs>(args?: SelectSubset<T, MarriageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarriagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Marriage.
     * @param {MarriageCreateArgs} args - Arguments to create a Marriage.
     * @example
     * // Create one Marriage
     * const Marriage = await prisma.marriage.create({
     *   data: {
     *     // ... data to create a Marriage
     *   }
     * })
     * 
     */
    create<T extends MarriageCreateArgs>(args: SelectSubset<T, MarriageCreateArgs<ExtArgs>>): Prisma__MarriageClient<$Result.GetResult<Prisma.$MarriagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Marriages.
     * @param {MarriageCreateManyArgs} args - Arguments to create many Marriages.
     * @example
     * // Create many Marriages
     * const marriage = await prisma.marriage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarriageCreateManyArgs>(args?: SelectSubset<T, MarriageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Marriages and returns the data saved in the database.
     * @param {MarriageCreateManyAndReturnArgs} args - Arguments to create many Marriages.
     * @example
     * // Create many Marriages
     * const marriage = await prisma.marriage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Marriages and only return the `id`
     * const marriageWithIdOnly = await prisma.marriage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarriageCreateManyAndReturnArgs>(args?: SelectSubset<T, MarriageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarriagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Marriage.
     * @param {MarriageDeleteArgs} args - Arguments to delete one Marriage.
     * @example
     * // Delete one Marriage
     * const Marriage = await prisma.marriage.delete({
     *   where: {
     *     // ... filter to delete one Marriage
     *   }
     * })
     * 
     */
    delete<T extends MarriageDeleteArgs>(args: SelectSubset<T, MarriageDeleteArgs<ExtArgs>>): Prisma__MarriageClient<$Result.GetResult<Prisma.$MarriagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Marriage.
     * @param {MarriageUpdateArgs} args - Arguments to update one Marriage.
     * @example
     * // Update one Marriage
     * const marriage = await prisma.marriage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarriageUpdateArgs>(args: SelectSubset<T, MarriageUpdateArgs<ExtArgs>>): Prisma__MarriageClient<$Result.GetResult<Prisma.$MarriagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Marriages.
     * @param {MarriageDeleteManyArgs} args - Arguments to filter Marriages to delete.
     * @example
     * // Delete a few Marriages
     * const { count } = await prisma.marriage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarriageDeleteManyArgs>(args?: SelectSubset<T, MarriageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marriages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarriageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Marriages
     * const marriage = await prisma.marriage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarriageUpdateManyArgs>(args: SelectSubset<T, MarriageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marriages and returns the data updated in the database.
     * @param {MarriageUpdateManyAndReturnArgs} args - Arguments to update many Marriages.
     * @example
     * // Update many Marriages
     * const marriage = await prisma.marriage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Marriages and only return the `id`
     * const marriageWithIdOnly = await prisma.marriage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarriageUpdateManyAndReturnArgs>(args: SelectSubset<T, MarriageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarriagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Marriage.
     * @param {MarriageUpsertArgs} args - Arguments to update or create a Marriage.
     * @example
     * // Update or create a Marriage
     * const marriage = await prisma.marriage.upsert({
     *   create: {
     *     // ... data to create a Marriage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Marriage we want to update
     *   }
     * })
     */
    upsert<T extends MarriageUpsertArgs>(args: SelectSubset<T, MarriageUpsertArgs<ExtArgs>>): Prisma__MarriageClient<$Result.GetResult<Prisma.$MarriagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Marriages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarriageCountArgs} args - Arguments to filter Marriages to count.
     * @example
     * // Count the number of Marriages
     * const count = await prisma.marriage.count({
     *   where: {
     *     // ... the filter for the Marriages we want to count
     *   }
     * })
    **/
    count<T extends MarriageCountArgs>(
      args?: Subset<T, MarriageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarriageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Marriage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarriageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarriageAggregateArgs>(args: Subset<T, MarriageAggregateArgs>): Prisma.PrismaPromise<GetMarriageAggregateType<T>>

    /**
     * Group by Marriage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarriageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarriageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarriageGroupByArgs['orderBy'] }
        : { orderBy?: MarriageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarriageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarriageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Marriage model
   */
  readonly fields: MarriageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Marriage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarriageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    husband<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    wife<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Marriage model
   */
  interface MarriageFieldRefs {
    readonly id: FieldRef<"Marriage", 'String'>
    readonly husbandId: FieldRef<"Marriage", 'String'>
    readonly wifeId: FieldRef<"Marriage", 'String'>
    readonly startDate: FieldRef<"Marriage", 'DateTime'>
    readonly endDate: FieldRef<"Marriage", 'DateTime'>
    readonly place: FieldRef<"Marriage", 'String'>
    readonly createdAt: FieldRef<"Marriage", 'DateTime'>
    readonly updatedAt: FieldRef<"Marriage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Marriage findUnique
   */
  export type MarriageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marriage
     */
    select?: MarriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marriage
     */
    omit?: MarriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarriageInclude<ExtArgs> | null
    /**
     * Filter, which Marriage to fetch.
     */
    where: MarriageWhereUniqueInput
  }

  /**
   * Marriage findUniqueOrThrow
   */
  export type MarriageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marriage
     */
    select?: MarriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marriage
     */
    omit?: MarriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarriageInclude<ExtArgs> | null
    /**
     * Filter, which Marriage to fetch.
     */
    where: MarriageWhereUniqueInput
  }

  /**
   * Marriage findFirst
   */
  export type MarriageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marriage
     */
    select?: MarriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marriage
     */
    omit?: MarriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarriageInclude<ExtArgs> | null
    /**
     * Filter, which Marriage to fetch.
     */
    where?: MarriageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marriages to fetch.
     */
    orderBy?: MarriageOrderByWithRelationInput | MarriageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marriages.
     */
    cursor?: MarriageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marriages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marriages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marriages.
     */
    distinct?: MarriageScalarFieldEnum | MarriageScalarFieldEnum[]
  }

  /**
   * Marriage findFirstOrThrow
   */
  export type MarriageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marriage
     */
    select?: MarriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marriage
     */
    omit?: MarriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarriageInclude<ExtArgs> | null
    /**
     * Filter, which Marriage to fetch.
     */
    where?: MarriageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marriages to fetch.
     */
    orderBy?: MarriageOrderByWithRelationInput | MarriageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marriages.
     */
    cursor?: MarriageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marriages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marriages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marriages.
     */
    distinct?: MarriageScalarFieldEnum | MarriageScalarFieldEnum[]
  }

  /**
   * Marriage findMany
   */
  export type MarriageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marriage
     */
    select?: MarriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marriage
     */
    omit?: MarriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarriageInclude<ExtArgs> | null
    /**
     * Filter, which Marriages to fetch.
     */
    where?: MarriageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marriages to fetch.
     */
    orderBy?: MarriageOrderByWithRelationInput | MarriageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Marriages.
     */
    cursor?: MarriageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marriages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marriages.
     */
    skip?: number
    distinct?: MarriageScalarFieldEnum | MarriageScalarFieldEnum[]
  }

  /**
   * Marriage create
   */
  export type MarriageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marriage
     */
    select?: MarriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marriage
     */
    omit?: MarriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarriageInclude<ExtArgs> | null
    /**
     * The data needed to create a Marriage.
     */
    data: XOR<MarriageCreateInput, MarriageUncheckedCreateInput>
  }

  /**
   * Marriage createMany
   */
  export type MarriageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Marriages.
     */
    data: MarriageCreateManyInput | MarriageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Marriage createManyAndReturn
   */
  export type MarriageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marriage
     */
    select?: MarriageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Marriage
     */
    omit?: MarriageOmit<ExtArgs> | null
    /**
     * The data used to create many Marriages.
     */
    data: MarriageCreateManyInput | MarriageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarriageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Marriage update
   */
  export type MarriageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marriage
     */
    select?: MarriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marriage
     */
    omit?: MarriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarriageInclude<ExtArgs> | null
    /**
     * The data needed to update a Marriage.
     */
    data: XOR<MarriageUpdateInput, MarriageUncheckedUpdateInput>
    /**
     * Choose, which Marriage to update.
     */
    where: MarriageWhereUniqueInput
  }

  /**
   * Marriage updateMany
   */
  export type MarriageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Marriages.
     */
    data: XOR<MarriageUpdateManyMutationInput, MarriageUncheckedUpdateManyInput>
    /**
     * Filter which Marriages to update
     */
    where?: MarriageWhereInput
    /**
     * Limit how many Marriages to update.
     */
    limit?: number
  }

  /**
   * Marriage updateManyAndReturn
   */
  export type MarriageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marriage
     */
    select?: MarriageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Marriage
     */
    omit?: MarriageOmit<ExtArgs> | null
    /**
     * The data used to update Marriages.
     */
    data: XOR<MarriageUpdateManyMutationInput, MarriageUncheckedUpdateManyInput>
    /**
     * Filter which Marriages to update
     */
    where?: MarriageWhereInput
    /**
     * Limit how many Marriages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarriageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Marriage upsert
   */
  export type MarriageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marriage
     */
    select?: MarriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marriage
     */
    omit?: MarriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarriageInclude<ExtArgs> | null
    /**
     * The filter to search for the Marriage to update in case it exists.
     */
    where: MarriageWhereUniqueInput
    /**
     * In case the Marriage found by the `where` argument doesn't exist, create a new Marriage with this data.
     */
    create: XOR<MarriageCreateInput, MarriageUncheckedCreateInput>
    /**
     * In case the Marriage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarriageUpdateInput, MarriageUncheckedUpdateInput>
  }

  /**
   * Marriage delete
   */
  export type MarriageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marriage
     */
    select?: MarriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marriage
     */
    omit?: MarriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarriageInclude<ExtArgs> | null
    /**
     * Filter which Marriage to delete.
     */
    where: MarriageWhereUniqueInput
  }

  /**
   * Marriage deleteMany
   */
  export type MarriageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marriages to delete
     */
    where?: MarriageWhereInput
    /**
     * Limit how many Marriages to delete.
     */
    limit?: number
  }

  /**
   * Marriage without action
   */
  export type MarriageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marriage
     */
    select?: MarriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marriage
     */
    omit?: MarriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarriageInclude<ExtArgs> | null
  }


  /**
   * Model Photo
   */

  export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  export type PhotoMinAggregateOutputType = {
    id: string | null
    url: string | null
    personId: string | null
    createdAt: Date | null
  }

  export type PhotoMaxAggregateOutputType = {
    id: string | null
    url: string | null
    personId: string | null
    createdAt: Date | null
  }

  export type PhotoCountAggregateOutputType = {
    id: number
    url: number
    personId: number
    createdAt: number
    _all: number
  }


  export type PhotoMinAggregateInputType = {
    id?: true
    url?: true
    personId?: true
    createdAt?: true
  }

  export type PhotoMaxAggregateInputType = {
    id?: true
    url?: true
    personId?: true
    createdAt?: true
  }

  export type PhotoCountAggregateInputType = {
    id?: true
    url?: true
    personId?: true
    createdAt?: true
    _all?: true
  }

  export type PhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photo to aggregate.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photos
    **/
    _count?: true | PhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoMaxAggregateInputType
  }

  export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto[P]>
      : GetScalarType<T[P], AggregatePhoto[P]>
  }




  export type PhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithAggregationInput | PhotoOrderByWithAggregationInput[]
    by: PhotoScalarFieldEnum[] | PhotoScalarFieldEnum
    having?: PhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCountAggregateInputType | true
    _min?: PhotoMinAggregateInputType
    _max?: PhotoMaxAggregateInputType
  }

  export type PhotoGroupByOutputType = {
    id: string
    url: string
    personId: string
    createdAt: Date
    _count: PhotoCountAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  type GetPhotoGroupByPayload<T extends PhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGroupByOutputType[P]>
        }
      >
    >


  export type PhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    personId?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    personId?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    personId?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectScalar = {
    id?: boolean
    url?: boolean
    personId?: boolean
    createdAt?: boolean
  }

  export type PhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "personId" | "createdAt", ExtArgs["result"]["photo"]>
  export type PhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type PhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type PhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $PhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Photo"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      personId: string
      createdAt: Date
    }, ExtArgs["result"]["photo"]>
    composites: {}
  }

  type PhotoGetPayload<S extends boolean | null | undefined | PhotoDefaultArgs> = $Result.GetResult<Prisma.$PhotoPayload, S>

  type PhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoCountAggregateInputType | true
    }

  export interface PhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Photo'], meta: { name: 'Photo' } }
    /**
     * Find zero or one Photo that matches the filter.
     * @param {PhotoFindUniqueArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoFindUniqueArgs>(args: SelectSubset<T, PhotoFindUniqueArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Photo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoFindUniqueOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoFindFirstArgs>(args?: SelectSubset<T, PhotoFindFirstArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photo.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoWithIdOnly = await prisma.photo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoFindManyArgs>(args?: SelectSubset<T, PhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Photo.
     * @param {PhotoCreateArgs} args - Arguments to create a Photo.
     * @example
     * // Create one Photo
     * const Photo = await prisma.photo.create({
     *   data: {
     *     // ... data to create a Photo
     *   }
     * })
     * 
     */
    create<T extends PhotoCreateArgs>(args: SelectSubset<T, PhotoCreateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Photos.
     * @param {PhotoCreateManyArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoCreateManyArgs>(args?: SelectSubset<T, PhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Photos and returns the data saved in the database.
     * @param {PhotoCreateManyAndReturnArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, PhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Photo.
     * @param {PhotoDeleteArgs} args - Arguments to delete one Photo.
     * @example
     * // Delete one Photo
     * const Photo = await prisma.photo.delete({
     *   where: {
     *     // ... filter to delete one Photo
     *   }
     * })
     * 
     */
    delete<T extends PhotoDeleteArgs>(args: SelectSubset<T, PhotoDeleteArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Photo.
     * @param {PhotoUpdateArgs} args - Arguments to update one Photo.
     * @example
     * // Update one Photo
     * const photo = await prisma.photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoUpdateArgs>(args: SelectSubset<T, PhotoUpdateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Photos.
     * @param {PhotoDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoDeleteManyArgs>(args?: SelectSubset<T, PhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoUpdateManyArgs>(args: SelectSubset<T, PhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos and returns the data updated in the database.
     * @param {PhotoUpdateManyAndReturnArgs} args - Arguments to update many Photos.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, PhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Photo.
     * @param {PhotoUpsertArgs} args - Arguments to update or create a Photo.
     * @example
     * // Update or create a Photo
     * const photo = await prisma.photo.upsert({
     *   create: {
     *     // ... data to create a Photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo we want to update
     *   }
     * })
     */
    upsert<T extends PhotoUpsertArgs>(args: SelectSubset<T, PhotoUpsertArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photo.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends PhotoCountArgs>(
      args?: Subset<T, PhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotoAggregateArgs>(args: Subset<T, PhotoAggregateArgs>): Prisma.PrismaPromise<GetPhotoAggregateType<T>>

    /**
     * Group by Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoGroupByArgs['orderBy'] }
        : { orderBy?: PhotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Photo model
   */
  readonly fields: PhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Photo model
   */
  interface PhotoFieldRefs {
    readonly id: FieldRef<"Photo", 'String'>
    readonly url: FieldRef<"Photo", 'String'>
    readonly personId: FieldRef<"Photo", 'String'>
    readonly createdAt: FieldRef<"Photo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Photo findUnique
   */
  export type PhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findUniqueOrThrow
   */
  export type PhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findFirst
   */
  export type PhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findFirstOrThrow
   */
  export type PhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findMany
   */
  export type PhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo create
   */
  export type PhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Photo.
     */
    data: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
  }

  /**
   * Photo createMany
   */
  export type PhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Photo createManyAndReturn
   */
  export type PhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photo update
   */
  export type PhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Photo.
     */
    data: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
    /**
     * Choose, which Photo to update.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo updateMany
   */
  export type PhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
  }

  /**
   * Photo updateManyAndReturn
   */
  export type PhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photo upsert
   */
  export type PhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Photo to update in case it exists.
     */
    where: PhotoWhereUniqueInput
    /**
     * In case the Photo found by the `where` argument doesn't exist, create a new Photo with this data.
     */
    create: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
    /**
     * In case the Photo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
  }

  /**
   * Photo delete
   */
  export type PhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter which Photo to delete.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo deleteMany
   */
  export type PhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photos to delete
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to delete.
     */
    limit?: number
  }

  /**
   * Photo without action
   */
  export type PhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PersonScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    birthDate: 'birthDate',
    deathDate: 'deathDate',
    gender: 'gender',
    phone: 'phone',
    photoUrl: 'photoUrl',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const MarriageScalarFieldEnum: {
    id: 'id',
    husbandId: 'husbandId',
    wifeId: 'wifeId',
    startDate: 'startDate',
    endDate: 'endDate',
    place: 'place',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MarriageScalarFieldEnum = (typeof MarriageScalarFieldEnum)[keyof typeof MarriageScalarFieldEnum]


  export const PhotoScalarFieldEnum: {
    id: 'id',
    url: 'url',
    personId: 'personId',
    createdAt: 'createdAt'
  };

  export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PersonWhereInput = {
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    id?: StringFilter<"Person"> | string
    firstName?: StringFilter<"Person"> | string
    lastName?: StringFilter<"Person"> | string
    birthDate?: DateTimeNullableFilter<"Person"> | Date | string | null
    deathDate?: DateTimeNullableFilter<"Person"> | Date | string | null
    gender?: StringNullableFilter<"Person"> | string | null
    phone?: StringNullableFilter<"Person"> | string | null
    photoUrl?: StringNullableFilter<"Person"> | string | null
    parentId?: StringNullableFilter<"Person"> | string | null
    createdAt?: DateTimeFilter<"Person"> | Date | string
    updatedAt?: DateTimeFilter<"Person"> | Date | string
    parent?: XOR<PersonNullableScalarRelationFilter, PersonWhereInput> | null
    children?: PersonListRelationFilter
    marriages?: MarriageListRelationFilter
    marriagesAsWife?: MarriageListRelationFilter
    photos?: PhotoListRelationFilter
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    deathDate?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parent?: PersonOrderByWithRelationInput
    children?: PersonOrderByRelationAggregateInput
    marriages?: MarriageOrderByRelationAggregateInput
    marriagesAsWife?: MarriageOrderByRelationAggregateInput
    photos?: PhotoOrderByRelationAggregateInput
  }

  export type PersonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    firstName?: StringFilter<"Person"> | string
    lastName?: StringFilter<"Person"> | string
    birthDate?: DateTimeNullableFilter<"Person"> | Date | string | null
    deathDate?: DateTimeNullableFilter<"Person"> | Date | string | null
    gender?: StringNullableFilter<"Person"> | string | null
    phone?: StringNullableFilter<"Person"> | string | null
    photoUrl?: StringNullableFilter<"Person"> | string | null
    parentId?: StringNullableFilter<"Person"> | string | null
    createdAt?: DateTimeFilter<"Person"> | Date | string
    updatedAt?: DateTimeFilter<"Person"> | Date | string
    parent?: XOR<PersonNullableScalarRelationFilter, PersonWhereInput> | null
    children?: PersonListRelationFilter
    marriages?: MarriageListRelationFilter
    marriagesAsWife?: MarriageListRelationFilter
    photos?: PhotoListRelationFilter
  }, "id">

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    deathDate?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PersonCountOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    OR?: PersonScalarWhereWithAggregatesInput[]
    NOT?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Person"> | string
    firstName?: StringWithAggregatesFilter<"Person"> | string
    lastName?: StringWithAggregatesFilter<"Person"> | string
    birthDate?: DateTimeNullableWithAggregatesFilter<"Person"> | Date | string | null
    deathDate?: DateTimeNullableWithAggregatesFilter<"Person"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"Person"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Person"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"Person"> | string | null
    parentId?: StringNullableWithAggregatesFilter<"Person"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Person"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Person"> | Date | string
  }

  export type MarriageWhereInput = {
    AND?: MarriageWhereInput | MarriageWhereInput[]
    OR?: MarriageWhereInput[]
    NOT?: MarriageWhereInput | MarriageWhereInput[]
    id?: StringFilter<"Marriage"> | string
    husbandId?: StringFilter<"Marriage"> | string
    wifeId?: StringFilter<"Marriage"> | string
    startDate?: DateTimeNullableFilter<"Marriage"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Marriage"> | Date | string | null
    place?: StringNullableFilter<"Marriage"> | string | null
    createdAt?: DateTimeFilter<"Marriage"> | Date | string
    updatedAt?: DateTimeFilter<"Marriage"> | Date | string
    husband?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    wife?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }

  export type MarriageOrderByWithRelationInput = {
    id?: SortOrder
    husbandId?: SortOrder
    wifeId?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    place?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    husband?: PersonOrderByWithRelationInput
    wife?: PersonOrderByWithRelationInput
  }

  export type MarriageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    husbandId_wifeId?: MarriageHusbandIdWifeIdCompoundUniqueInput
    AND?: MarriageWhereInput | MarriageWhereInput[]
    OR?: MarriageWhereInput[]
    NOT?: MarriageWhereInput | MarriageWhereInput[]
    husbandId?: StringFilter<"Marriage"> | string
    wifeId?: StringFilter<"Marriage"> | string
    startDate?: DateTimeNullableFilter<"Marriage"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Marriage"> | Date | string | null
    place?: StringNullableFilter<"Marriage"> | string | null
    createdAt?: DateTimeFilter<"Marriage"> | Date | string
    updatedAt?: DateTimeFilter<"Marriage"> | Date | string
    husband?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    wife?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }, "id" | "husbandId_wifeId">

  export type MarriageOrderByWithAggregationInput = {
    id?: SortOrder
    husbandId?: SortOrder
    wifeId?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    place?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MarriageCountOrderByAggregateInput
    _max?: MarriageMaxOrderByAggregateInput
    _min?: MarriageMinOrderByAggregateInput
  }

  export type MarriageScalarWhereWithAggregatesInput = {
    AND?: MarriageScalarWhereWithAggregatesInput | MarriageScalarWhereWithAggregatesInput[]
    OR?: MarriageScalarWhereWithAggregatesInput[]
    NOT?: MarriageScalarWhereWithAggregatesInput | MarriageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Marriage"> | string
    husbandId?: StringWithAggregatesFilter<"Marriage"> | string
    wifeId?: StringWithAggregatesFilter<"Marriage"> | string
    startDate?: DateTimeNullableWithAggregatesFilter<"Marriage"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Marriage"> | Date | string | null
    place?: StringNullableWithAggregatesFilter<"Marriage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Marriage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Marriage"> | Date | string
  }

  export type PhotoWhereInput = {
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    id?: StringFilter<"Photo"> | string
    url?: StringFilter<"Photo"> | string
    personId?: StringFilter<"Photo"> | string
    createdAt?: DateTimeFilter<"Photo"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }

  export type PhotoOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    personId?: SortOrder
    createdAt?: SortOrder
    person?: PersonOrderByWithRelationInput
  }

  export type PhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    url?: StringFilter<"Photo"> | string
    personId?: StringFilter<"Photo"> | string
    createdAt?: DateTimeFilter<"Photo"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }, "id">

  export type PhotoOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    personId?: SortOrder
    createdAt?: SortOrder
    _count?: PhotoCountOrderByAggregateInput
    _max?: PhotoMaxOrderByAggregateInput
    _min?: PhotoMinOrderByAggregateInput
  }

  export type PhotoScalarWhereWithAggregatesInput = {
    AND?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    OR?: PhotoScalarWhereWithAggregatesInput[]
    NOT?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Photo"> | string
    url?: StringWithAggregatesFilter<"Photo"> | string
    personId?: StringWithAggregatesFilter<"Photo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Photo"> | Date | string
  }

  export type PersonCreateInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    gender?: string | null
    phone?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: PersonCreateNestedOneWithoutChildrenInput
    children?: PersonCreateNestedManyWithoutParentInput
    marriages?: MarriageCreateNestedManyWithoutHusbandInput
    marriagesAsWife?: MarriageCreateNestedManyWithoutWifeInput
    photos?: PhotoCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    gender?: string | null
    phone?: string | null
    photoUrl?: string | null
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: PersonUncheckedCreateNestedManyWithoutParentInput
    marriages?: MarriageUncheckedCreateNestedManyWithoutHusbandInput
    marriagesAsWife?: MarriageUncheckedCreateNestedManyWithoutWifeInput
    photos?: PhotoUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: PersonUpdateOneWithoutChildrenNestedInput
    children?: PersonUpdateManyWithoutParentNestedInput
    marriages?: MarriageUpdateManyWithoutHusbandNestedInput
    marriagesAsWife?: MarriageUpdateManyWithoutWifeNestedInput
    photos?: PhotoUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: PersonUncheckedUpdateManyWithoutParentNestedInput
    marriages?: MarriageUncheckedUpdateManyWithoutHusbandNestedInput
    marriagesAsWife?: MarriageUncheckedUpdateManyWithoutWifeNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    gender?: string | null
    phone?: string | null
    photoUrl?: string | null
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarriageCreateInput = {
    id?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    place?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    husband: PersonCreateNestedOneWithoutMarriagesInput
    wife: PersonCreateNestedOneWithoutMarriagesAsWifeInput
  }

  export type MarriageUncheckedCreateInput = {
    id?: string
    husbandId: string
    wifeId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    place?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarriageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    place?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    husband?: PersonUpdateOneRequiredWithoutMarriagesNestedInput
    wife?: PersonUpdateOneRequiredWithoutMarriagesAsWifeNestedInput
  }

  export type MarriageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    husbandId?: StringFieldUpdateOperationsInput | string
    wifeId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    place?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarriageCreateManyInput = {
    id?: string
    husbandId: string
    wifeId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    place?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarriageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    place?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarriageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    husbandId?: StringFieldUpdateOperationsInput | string
    wifeId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    place?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    person: PersonCreateNestedOneWithoutPhotosInput
  }

  export type PhotoUncheckedCreateInput = {
    id?: string
    url: string
    personId: string
    createdAt?: Date | string
  }

  export type PhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type PhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCreateManyInput = {
    id?: string
    url: string
    personId: string
    createdAt?: Date | string
  }

  export type PhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PersonNullableScalarRelationFilter = {
    is?: PersonWhereInput | null
    isNot?: PersonWhereInput | null
  }

  export type PersonListRelationFilter = {
    every?: PersonWhereInput
    some?: PersonWhereInput
    none?: PersonWhereInput
  }

  export type MarriageListRelationFilter = {
    every?: MarriageWhereInput
    some?: MarriageWhereInput
    none?: MarriageWhereInput
  }

  export type PhotoListRelationFilter = {
    every?: PhotoWhereInput
    some?: PhotoWhereInput
    none?: PhotoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PersonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarriageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    deathDate?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    photoUrl?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    deathDate?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    photoUrl?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    deathDate?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    photoUrl?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PersonScalarRelationFilter = {
    is?: PersonWhereInput
    isNot?: PersonWhereInput
  }

  export type MarriageHusbandIdWifeIdCompoundUniqueInput = {
    husbandId: string
    wifeId: string
  }

  export type MarriageCountOrderByAggregateInput = {
    id?: SortOrder
    husbandId?: SortOrder
    wifeId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    place?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarriageMaxOrderByAggregateInput = {
    id?: SortOrder
    husbandId?: SortOrder
    wifeId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    place?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarriageMinOrderByAggregateInput = {
    id?: SortOrder
    husbandId?: SortOrder
    wifeId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    place?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhotoCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    personId?: SortOrder
    createdAt?: SortOrder
  }

  export type PhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    personId?: SortOrder
    createdAt?: SortOrder
  }

  export type PhotoMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    personId?: SortOrder
    createdAt?: SortOrder
  }

  export type PersonCreateNestedOneWithoutChildrenInput = {
    create?: XOR<PersonCreateWithoutChildrenInput, PersonUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: PersonCreateOrConnectWithoutChildrenInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonCreateNestedManyWithoutParentInput = {
    create?: XOR<PersonCreateWithoutParentInput, PersonUncheckedCreateWithoutParentInput> | PersonCreateWithoutParentInput[] | PersonUncheckedCreateWithoutParentInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutParentInput | PersonCreateOrConnectWithoutParentInput[]
    createMany?: PersonCreateManyParentInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type MarriageCreateNestedManyWithoutHusbandInput = {
    create?: XOR<MarriageCreateWithoutHusbandInput, MarriageUncheckedCreateWithoutHusbandInput> | MarriageCreateWithoutHusbandInput[] | MarriageUncheckedCreateWithoutHusbandInput[]
    connectOrCreate?: MarriageCreateOrConnectWithoutHusbandInput | MarriageCreateOrConnectWithoutHusbandInput[]
    createMany?: MarriageCreateManyHusbandInputEnvelope
    connect?: MarriageWhereUniqueInput | MarriageWhereUniqueInput[]
  }

  export type MarriageCreateNestedManyWithoutWifeInput = {
    create?: XOR<MarriageCreateWithoutWifeInput, MarriageUncheckedCreateWithoutWifeInput> | MarriageCreateWithoutWifeInput[] | MarriageUncheckedCreateWithoutWifeInput[]
    connectOrCreate?: MarriageCreateOrConnectWithoutWifeInput | MarriageCreateOrConnectWithoutWifeInput[]
    createMany?: MarriageCreateManyWifeInputEnvelope
    connect?: MarriageWhereUniqueInput | MarriageWhereUniqueInput[]
  }

  export type PhotoCreateNestedManyWithoutPersonInput = {
    create?: XOR<PhotoCreateWithoutPersonInput, PhotoUncheckedCreateWithoutPersonInput> | PhotoCreateWithoutPersonInput[] | PhotoUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutPersonInput | PhotoCreateOrConnectWithoutPersonInput[]
    createMany?: PhotoCreateManyPersonInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type PersonUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<PersonCreateWithoutParentInput, PersonUncheckedCreateWithoutParentInput> | PersonCreateWithoutParentInput[] | PersonUncheckedCreateWithoutParentInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutParentInput | PersonCreateOrConnectWithoutParentInput[]
    createMany?: PersonCreateManyParentInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type MarriageUncheckedCreateNestedManyWithoutHusbandInput = {
    create?: XOR<MarriageCreateWithoutHusbandInput, MarriageUncheckedCreateWithoutHusbandInput> | MarriageCreateWithoutHusbandInput[] | MarriageUncheckedCreateWithoutHusbandInput[]
    connectOrCreate?: MarriageCreateOrConnectWithoutHusbandInput | MarriageCreateOrConnectWithoutHusbandInput[]
    createMany?: MarriageCreateManyHusbandInputEnvelope
    connect?: MarriageWhereUniqueInput | MarriageWhereUniqueInput[]
  }

  export type MarriageUncheckedCreateNestedManyWithoutWifeInput = {
    create?: XOR<MarriageCreateWithoutWifeInput, MarriageUncheckedCreateWithoutWifeInput> | MarriageCreateWithoutWifeInput[] | MarriageUncheckedCreateWithoutWifeInput[]
    connectOrCreate?: MarriageCreateOrConnectWithoutWifeInput | MarriageCreateOrConnectWithoutWifeInput[]
    createMany?: MarriageCreateManyWifeInputEnvelope
    connect?: MarriageWhereUniqueInput | MarriageWhereUniqueInput[]
  }

  export type PhotoUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<PhotoCreateWithoutPersonInput, PhotoUncheckedCreateWithoutPersonInput> | PhotoCreateWithoutPersonInput[] | PhotoUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutPersonInput | PhotoCreateOrConnectWithoutPersonInput[]
    createMany?: PhotoCreateManyPersonInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PersonUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<PersonCreateWithoutChildrenInput, PersonUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: PersonCreateOrConnectWithoutChildrenInput
    upsert?: PersonUpsertWithoutChildrenInput
    disconnect?: PersonWhereInput | boolean
    delete?: PersonWhereInput | boolean
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutChildrenInput, PersonUpdateWithoutChildrenInput>, PersonUncheckedUpdateWithoutChildrenInput>
  }

  export type PersonUpdateManyWithoutParentNestedInput = {
    create?: XOR<PersonCreateWithoutParentInput, PersonUncheckedCreateWithoutParentInput> | PersonCreateWithoutParentInput[] | PersonUncheckedCreateWithoutParentInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutParentInput | PersonCreateOrConnectWithoutParentInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutParentInput | PersonUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: PersonCreateManyParentInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutParentInput | PersonUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutParentInput | PersonUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type MarriageUpdateManyWithoutHusbandNestedInput = {
    create?: XOR<MarriageCreateWithoutHusbandInput, MarriageUncheckedCreateWithoutHusbandInput> | MarriageCreateWithoutHusbandInput[] | MarriageUncheckedCreateWithoutHusbandInput[]
    connectOrCreate?: MarriageCreateOrConnectWithoutHusbandInput | MarriageCreateOrConnectWithoutHusbandInput[]
    upsert?: MarriageUpsertWithWhereUniqueWithoutHusbandInput | MarriageUpsertWithWhereUniqueWithoutHusbandInput[]
    createMany?: MarriageCreateManyHusbandInputEnvelope
    set?: MarriageWhereUniqueInput | MarriageWhereUniqueInput[]
    disconnect?: MarriageWhereUniqueInput | MarriageWhereUniqueInput[]
    delete?: MarriageWhereUniqueInput | MarriageWhereUniqueInput[]
    connect?: MarriageWhereUniqueInput | MarriageWhereUniqueInput[]
    update?: MarriageUpdateWithWhereUniqueWithoutHusbandInput | MarriageUpdateWithWhereUniqueWithoutHusbandInput[]
    updateMany?: MarriageUpdateManyWithWhereWithoutHusbandInput | MarriageUpdateManyWithWhereWithoutHusbandInput[]
    deleteMany?: MarriageScalarWhereInput | MarriageScalarWhereInput[]
  }

  export type MarriageUpdateManyWithoutWifeNestedInput = {
    create?: XOR<MarriageCreateWithoutWifeInput, MarriageUncheckedCreateWithoutWifeInput> | MarriageCreateWithoutWifeInput[] | MarriageUncheckedCreateWithoutWifeInput[]
    connectOrCreate?: MarriageCreateOrConnectWithoutWifeInput | MarriageCreateOrConnectWithoutWifeInput[]
    upsert?: MarriageUpsertWithWhereUniqueWithoutWifeInput | MarriageUpsertWithWhereUniqueWithoutWifeInput[]
    createMany?: MarriageCreateManyWifeInputEnvelope
    set?: MarriageWhereUniqueInput | MarriageWhereUniqueInput[]
    disconnect?: MarriageWhereUniqueInput | MarriageWhereUniqueInput[]
    delete?: MarriageWhereUniqueInput | MarriageWhereUniqueInput[]
    connect?: MarriageWhereUniqueInput | MarriageWhereUniqueInput[]
    update?: MarriageUpdateWithWhereUniqueWithoutWifeInput | MarriageUpdateWithWhereUniqueWithoutWifeInput[]
    updateMany?: MarriageUpdateManyWithWhereWithoutWifeInput | MarriageUpdateManyWithWhereWithoutWifeInput[]
    deleteMany?: MarriageScalarWhereInput | MarriageScalarWhereInput[]
  }

  export type PhotoUpdateManyWithoutPersonNestedInput = {
    create?: XOR<PhotoCreateWithoutPersonInput, PhotoUncheckedCreateWithoutPersonInput> | PhotoCreateWithoutPersonInput[] | PhotoUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutPersonInput | PhotoCreateOrConnectWithoutPersonInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutPersonInput | PhotoUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: PhotoCreateManyPersonInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutPersonInput | PhotoUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutPersonInput | PhotoUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type PersonUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<PersonCreateWithoutParentInput, PersonUncheckedCreateWithoutParentInput> | PersonCreateWithoutParentInput[] | PersonUncheckedCreateWithoutParentInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutParentInput | PersonCreateOrConnectWithoutParentInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutParentInput | PersonUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: PersonCreateManyParentInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutParentInput | PersonUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutParentInput | PersonUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type MarriageUncheckedUpdateManyWithoutHusbandNestedInput = {
    create?: XOR<MarriageCreateWithoutHusbandInput, MarriageUncheckedCreateWithoutHusbandInput> | MarriageCreateWithoutHusbandInput[] | MarriageUncheckedCreateWithoutHusbandInput[]
    connectOrCreate?: MarriageCreateOrConnectWithoutHusbandInput | MarriageCreateOrConnectWithoutHusbandInput[]
    upsert?: MarriageUpsertWithWhereUniqueWithoutHusbandInput | MarriageUpsertWithWhereUniqueWithoutHusbandInput[]
    createMany?: MarriageCreateManyHusbandInputEnvelope
    set?: MarriageWhereUniqueInput | MarriageWhereUniqueInput[]
    disconnect?: MarriageWhereUniqueInput | MarriageWhereUniqueInput[]
    delete?: MarriageWhereUniqueInput | MarriageWhereUniqueInput[]
    connect?: MarriageWhereUniqueInput | MarriageWhereUniqueInput[]
    update?: MarriageUpdateWithWhereUniqueWithoutHusbandInput | MarriageUpdateWithWhereUniqueWithoutHusbandInput[]
    updateMany?: MarriageUpdateManyWithWhereWithoutHusbandInput | MarriageUpdateManyWithWhereWithoutHusbandInput[]
    deleteMany?: MarriageScalarWhereInput | MarriageScalarWhereInput[]
  }

  export type MarriageUncheckedUpdateManyWithoutWifeNestedInput = {
    create?: XOR<MarriageCreateWithoutWifeInput, MarriageUncheckedCreateWithoutWifeInput> | MarriageCreateWithoutWifeInput[] | MarriageUncheckedCreateWithoutWifeInput[]
    connectOrCreate?: MarriageCreateOrConnectWithoutWifeInput | MarriageCreateOrConnectWithoutWifeInput[]
    upsert?: MarriageUpsertWithWhereUniqueWithoutWifeInput | MarriageUpsertWithWhereUniqueWithoutWifeInput[]
    createMany?: MarriageCreateManyWifeInputEnvelope
    set?: MarriageWhereUniqueInput | MarriageWhereUniqueInput[]
    disconnect?: MarriageWhereUniqueInput | MarriageWhereUniqueInput[]
    delete?: MarriageWhereUniqueInput | MarriageWhereUniqueInput[]
    connect?: MarriageWhereUniqueInput | MarriageWhereUniqueInput[]
    update?: MarriageUpdateWithWhereUniqueWithoutWifeInput | MarriageUpdateWithWhereUniqueWithoutWifeInput[]
    updateMany?: MarriageUpdateManyWithWhereWithoutWifeInput | MarriageUpdateManyWithWhereWithoutWifeInput[]
    deleteMany?: MarriageScalarWhereInput | MarriageScalarWhereInput[]
  }

  export type PhotoUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<PhotoCreateWithoutPersonInput, PhotoUncheckedCreateWithoutPersonInput> | PhotoCreateWithoutPersonInput[] | PhotoUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutPersonInput | PhotoCreateOrConnectWithoutPersonInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutPersonInput | PhotoUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: PhotoCreateManyPersonInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutPersonInput | PhotoUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutPersonInput | PhotoUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type PersonCreateNestedOneWithoutMarriagesInput = {
    create?: XOR<PersonCreateWithoutMarriagesInput, PersonUncheckedCreateWithoutMarriagesInput>
    connectOrCreate?: PersonCreateOrConnectWithoutMarriagesInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonCreateNestedOneWithoutMarriagesAsWifeInput = {
    create?: XOR<PersonCreateWithoutMarriagesAsWifeInput, PersonUncheckedCreateWithoutMarriagesAsWifeInput>
    connectOrCreate?: PersonCreateOrConnectWithoutMarriagesAsWifeInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonUpdateOneRequiredWithoutMarriagesNestedInput = {
    create?: XOR<PersonCreateWithoutMarriagesInput, PersonUncheckedCreateWithoutMarriagesInput>
    connectOrCreate?: PersonCreateOrConnectWithoutMarriagesInput
    upsert?: PersonUpsertWithoutMarriagesInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutMarriagesInput, PersonUpdateWithoutMarriagesInput>, PersonUncheckedUpdateWithoutMarriagesInput>
  }

  export type PersonUpdateOneRequiredWithoutMarriagesAsWifeNestedInput = {
    create?: XOR<PersonCreateWithoutMarriagesAsWifeInput, PersonUncheckedCreateWithoutMarriagesAsWifeInput>
    connectOrCreate?: PersonCreateOrConnectWithoutMarriagesAsWifeInput
    upsert?: PersonUpsertWithoutMarriagesAsWifeInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutMarriagesAsWifeInput, PersonUpdateWithoutMarriagesAsWifeInput>, PersonUncheckedUpdateWithoutMarriagesAsWifeInput>
  }

  export type PersonCreateNestedOneWithoutPhotosInput = {
    create?: XOR<PersonCreateWithoutPhotosInput, PersonUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: PersonCreateOrConnectWithoutPhotosInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<PersonCreateWithoutPhotosInput, PersonUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: PersonCreateOrConnectWithoutPhotosInput
    upsert?: PersonUpsertWithoutPhotosInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutPhotosInput, PersonUpdateWithoutPhotosInput>, PersonUncheckedUpdateWithoutPhotosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PersonCreateWithoutChildrenInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    gender?: string | null
    phone?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: PersonCreateNestedOneWithoutChildrenInput
    marriages?: MarriageCreateNestedManyWithoutHusbandInput
    marriagesAsWife?: MarriageCreateNestedManyWithoutWifeInput
    photos?: PhotoCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutChildrenInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    gender?: string | null
    phone?: string | null
    photoUrl?: string | null
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    marriages?: MarriageUncheckedCreateNestedManyWithoutHusbandInput
    marriagesAsWife?: MarriageUncheckedCreateNestedManyWithoutWifeInput
    photos?: PhotoUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutChildrenInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutChildrenInput, PersonUncheckedCreateWithoutChildrenInput>
  }

  export type PersonCreateWithoutParentInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    gender?: string | null
    phone?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: PersonCreateNestedManyWithoutParentInput
    marriages?: MarriageCreateNestedManyWithoutHusbandInput
    marriagesAsWife?: MarriageCreateNestedManyWithoutWifeInput
    photos?: PhotoCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutParentInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    gender?: string | null
    phone?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: PersonUncheckedCreateNestedManyWithoutParentInput
    marriages?: MarriageUncheckedCreateNestedManyWithoutHusbandInput
    marriagesAsWife?: MarriageUncheckedCreateNestedManyWithoutWifeInput
    photos?: PhotoUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutParentInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutParentInput, PersonUncheckedCreateWithoutParentInput>
  }

  export type PersonCreateManyParentInputEnvelope = {
    data: PersonCreateManyParentInput | PersonCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type MarriageCreateWithoutHusbandInput = {
    id?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    place?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wife: PersonCreateNestedOneWithoutMarriagesAsWifeInput
  }

  export type MarriageUncheckedCreateWithoutHusbandInput = {
    id?: string
    wifeId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    place?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarriageCreateOrConnectWithoutHusbandInput = {
    where: MarriageWhereUniqueInput
    create: XOR<MarriageCreateWithoutHusbandInput, MarriageUncheckedCreateWithoutHusbandInput>
  }

  export type MarriageCreateManyHusbandInputEnvelope = {
    data: MarriageCreateManyHusbandInput | MarriageCreateManyHusbandInput[]
    skipDuplicates?: boolean
  }

  export type MarriageCreateWithoutWifeInput = {
    id?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    place?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    husband: PersonCreateNestedOneWithoutMarriagesInput
  }

  export type MarriageUncheckedCreateWithoutWifeInput = {
    id?: string
    husbandId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    place?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarriageCreateOrConnectWithoutWifeInput = {
    where: MarriageWhereUniqueInput
    create: XOR<MarriageCreateWithoutWifeInput, MarriageUncheckedCreateWithoutWifeInput>
  }

  export type MarriageCreateManyWifeInputEnvelope = {
    data: MarriageCreateManyWifeInput | MarriageCreateManyWifeInput[]
    skipDuplicates?: boolean
  }

  export type PhotoCreateWithoutPersonInput = {
    id?: string
    url: string
    createdAt?: Date | string
  }

  export type PhotoUncheckedCreateWithoutPersonInput = {
    id?: string
    url: string
    createdAt?: Date | string
  }

  export type PhotoCreateOrConnectWithoutPersonInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutPersonInput, PhotoUncheckedCreateWithoutPersonInput>
  }

  export type PhotoCreateManyPersonInputEnvelope = {
    data: PhotoCreateManyPersonInput | PhotoCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type PersonUpsertWithoutChildrenInput = {
    update: XOR<PersonUpdateWithoutChildrenInput, PersonUncheckedUpdateWithoutChildrenInput>
    create: XOR<PersonCreateWithoutChildrenInput, PersonUncheckedCreateWithoutChildrenInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutChildrenInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutChildrenInput, PersonUncheckedUpdateWithoutChildrenInput>
  }

  export type PersonUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: PersonUpdateOneWithoutChildrenNestedInput
    marriages?: MarriageUpdateManyWithoutHusbandNestedInput
    marriagesAsWife?: MarriageUpdateManyWithoutWifeNestedInput
    photos?: PhotoUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marriages?: MarriageUncheckedUpdateManyWithoutHusbandNestedInput
    marriagesAsWife?: MarriageUncheckedUpdateManyWithoutWifeNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonUpsertWithWhereUniqueWithoutParentInput = {
    where: PersonWhereUniqueInput
    update: XOR<PersonUpdateWithoutParentInput, PersonUncheckedUpdateWithoutParentInput>
    create: XOR<PersonCreateWithoutParentInput, PersonUncheckedCreateWithoutParentInput>
  }

  export type PersonUpdateWithWhereUniqueWithoutParentInput = {
    where: PersonWhereUniqueInput
    data: XOR<PersonUpdateWithoutParentInput, PersonUncheckedUpdateWithoutParentInput>
  }

  export type PersonUpdateManyWithWhereWithoutParentInput = {
    where: PersonScalarWhereInput
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyWithoutParentInput>
  }

  export type PersonScalarWhereInput = {
    AND?: PersonScalarWhereInput | PersonScalarWhereInput[]
    OR?: PersonScalarWhereInput[]
    NOT?: PersonScalarWhereInput | PersonScalarWhereInput[]
    id?: StringFilter<"Person"> | string
    firstName?: StringFilter<"Person"> | string
    lastName?: StringFilter<"Person"> | string
    birthDate?: DateTimeNullableFilter<"Person"> | Date | string | null
    deathDate?: DateTimeNullableFilter<"Person"> | Date | string | null
    gender?: StringNullableFilter<"Person"> | string | null
    phone?: StringNullableFilter<"Person"> | string | null
    photoUrl?: StringNullableFilter<"Person"> | string | null
    parentId?: StringNullableFilter<"Person"> | string | null
    createdAt?: DateTimeFilter<"Person"> | Date | string
    updatedAt?: DateTimeFilter<"Person"> | Date | string
  }

  export type MarriageUpsertWithWhereUniqueWithoutHusbandInput = {
    where: MarriageWhereUniqueInput
    update: XOR<MarriageUpdateWithoutHusbandInput, MarriageUncheckedUpdateWithoutHusbandInput>
    create: XOR<MarriageCreateWithoutHusbandInput, MarriageUncheckedCreateWithoutHusbandInput>
  }

  export type MarriageUpdateWithWhereUniqueWithoutHusbandInput = {
    where: MarriageWhereUniqueInput
    data: XOR<MarriageUpdateWithoutHusbandInput, MarriageUncheckedUpdateWithoutHusbandInput>
  }

  export type MarriageUpdateManyWithWhereWithoutHusbandInput = {
    where: MarriageScalarWhereInput
    data: XOR<MarriageUpdateManyMutationInput, MarriageUncheckedUpdateManyWithoutHusbandInput>
  }

  export type MarriageScalarWhereInput = {
    AND?: MarriageScalarWhereInput | MarriageScalarWhereInput[]
    OR?: MarriageScalarWhereInput[]
    NOT?: MarriageScalarWhereInput | MarriageScalarWhereInput[]
    id?: StringFilter<"Marriage"> | string
    husbandId?: StringFilter<"Marriage"> | string
    wifeId?: StringFilter<"Marriage"> | string
    startDate?: DateTimeNullableFilter<"Marriage"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Marriage"> | Date | string | null
    place?: StringNullableFilter<"Marriage"> | string | null
    createdAt?: DateTimeFilter<"Marriage"> | Date | string
    updatedAt?: DateTimeFilter<"Marriage"> | Date | string
  }

  export type MarriageUpsertWithWhereUniqueWithoutWifeInput = {
    where: MarriageWhereUniqueInput
    update: XOR<MarriageUpdateWithoutWifeInput, MarriageUncheckedUpdateWithoutWifeInput>
    create: XOR<MarriageCreateWithoutWifeInput, MarriageUncheckedCreateWithoutWifeInput>
  }

  export type MarriageUpdateWithWhereUniqueWithoutWifeInput = {
    where: MarriageWhereUniqueInput
    data: XOR<MarriageUpdateWithoutWifeInput, MarriageUncheckedUpdateWithoutWifeInput>
  }

  export type MarriageUpdateManyWithWhereWithoutWifeInput = {
    where: MarriageScalarWhereInput
    data: XOR<MarriageUpdateManyMutationInput, MarriageUncheckedUpdateManyWithoutWifeInput>
  }

  export type PhotoUpsertWithWhereUniqueWithoutPersonInput = {
    where: PhotoWhereUniqueInput
    update: XOR<PhotoUpdateWithoutPersonInput, PhotoUncheckedUpdateWithoutPersonInput>
    create: XOR<PhotoCreateWithoutPersonInput, PhotoUncheckedCreateWithoutPersonInput>
  }

  export type PhotoUpdateWithWhereUniqueWithoutPersonInput = {
    where: PhotoWhereUniqueInput
    data: XOR<PhotoUpdateWithoutPersonInput, PhotoUncheckedUpdateWithoutPersonInput>
  }

  export type PhotoUpdateManyWithWhereWithoutPersonInput = {
    where: PhotoScalarWhereInput
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyWithoutPersonInput>
  }

  export type PhotoScalarWhereInput = {
    AND?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    OR?: PhotoScalarWhereInput[]
    NOT?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    id?: StringFilter<"Photo"> | string
    url?: StringFilter<"Photo"> | string
    personId?: StringFilter<"Photo"> | string
    createdAt?: DateTimeFilter<"Photo"> | Date | string
  }

  export type PersonCreateWithoutMarriagesInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    gender?: string | null
    phone?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: PersonCreateNestedOneWithoutChildrenInput
    children?: PersonCreateNestedManyWithoutParentInput
    marriagesAsWife?: MarriageCreateNestedManyWithoutWifeInput
    photos?: PhotoCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutMarriagesInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    gender?: string | null
    phone?: string | null
    photoUrl?: string | null
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: PersonUncheckedCreateNestedManyWithoutParentInput
    marriagesAsWife?: MarriageUncheckedCreateNestedManyWithoutWifeInput
    photos?: PhotoUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutMarriagesInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutMarriagesInput, PersonUncheckedCreateWithoutMarriagesInput>
  }

  export type PersonCreateWithoutMarriagesAsWifeInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    gender?: string | null
    phone?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: PersonCreateNestedOneWithoutChildrenInput
    children?: PersonCreateNestedManyWithoutParentInput
    marriages?: MarriageCreateNestedManyWithoutHusbandInput
    photos?: PhotoCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutMarriagesAsWifeInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    gender?: string | null
    phone?: string | null
    photoUrl?: string | null
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: PersonUncheckedCreateNestedManyWithoutParentInput
    marriages?: MarriageUncheckedCreateNestedManyWithoutHusbandInput
    photos?: PhotoUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutMarriagesAsWifeInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutMarriagesAsWifeInput, PersonUncheckedCreateWithoutMarriagesAsWifeInput>
  }

  export type PersonUpsertWithoutMarriagesInput = {
    update: XOR<PersonUpdateWithoutMarriagesInput, PersonUncheckedUpdateWithoutMarriagesInput>
    create: XOR<PersonCreateWithoutMarriagesInput, PersonUncheckedCreateWithoutMarriagesInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutMarriagesInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutMarriagesInput, PersonUncheckedUpdateWithoutMarriagesInput>
  }

  export type PersonUpdateWithoutMarriagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: PersonUpdateOneWithoutChildrenNestedInput
    children?: PersonUpdateManyWithoutParentNestedInput
    marriagesAsWife?: MarriageUpdateManyWithoutWifeNestedInput
    photos?: PhotoUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutMarriagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: PersonUncheckedUpdateManyWithoutParentNestedInput
    marriagesAsWife?: MarriageUncheckedUpdateManyWithoutWifeNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonUpsertWithoutMarriagesAsWifeInput = {
    update: XOR<PersonUpdateWithoutMarriagesAsWifeInput, PersonUncheckedUpdateWithoutMarriagesAsWifeInput>
    create: XOR<PersonCreateWithoutMarriagesAsWifeInput, PersonUncheckedCreateWithoutMarriagesAsWifeInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutMarriagesAsWifeInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutMarriagesAsWifeInput, PersonUncheckedUpdateWithoutMarriagesAsWifeInput>
  }

  export type PersonUpdateWithoutMarriagesAsWifeInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: PersonUpdateOneWithoutChildrenNestedInput
    children?: PersonUpdateManyWithoutParentNestedInput
    marriages?: MarriageUpdateManyWithoutHusbandNestedInput
    photos?: PhotoUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutMarriagesAsWifeInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: PersonUncheckedUpdateManyWithoutParentNestedInput
    marriages?: MarriageUncheckedUpdateManyWithoutHusbandNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateWithoutPhotosInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    gender?: string | null
    phone?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: PersonCreateNestedOneWithoutChildrenInput
    children?: PersonCreateNestedManyWithoutParentInput
    marriages?: MarriageCreateNestedManyWithoutHusbandInput
    marriagesAsWife?: MarriageCreateNestedManyWithoutWifeInput
  }

  export type PersonUncheckedCreateWithoutPhotosInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    gender?: string | null
    phone?: string | null
    photoUrl?: string | null
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: PersonUncheckedCreateNestedManyWithoutParentInput
    marriages?: MarriageUncheckedCreateNestedManyWithoutHusbandInput
    marriagesAsWife?: MarriageUncheckedCreateNestedManyWithoutWifeInput
  }

  export type PersonCreateOrConnectWithoutPhotosInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutPhotosInput, PersonUncheckedCreateWithoutPhotosInput>
  }

  export type PersonUpsertWithoutPhotosInput = {
    update: XOR<PersonUpdateWithoutPhotosInput, PersonUncheckedUpdateWithoutPhotosInput>
    create: XOR<PersonCreateWithoutPhotosInput, PersonUncheckedCreateWithoutPhotosInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutPhotosInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutPhotosInput, PersonUncheckedUpdateWithoutPhotosInput>
  }

  export type PersonUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: PersonUpdateOneWithoutChildrenNestedInput
    children?: PersonUpdateManyWithoutParentNestedInput
    marriages?: MarriageUpdateManyWithoutHusbandNestedInput
    marriagesAsWife?: MarriageUpdateManyWithoutWifeNestedInput
  }

  export type PersonUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: PersonUncheckedUpdateManyWithoutParentNestedInput
    marriages?: MarriageUncheckedUpdateManyWithoutHusbandNestedInput
    marriagesAsWife?: MarriageUncheckedUpdateManyWithoutWifeNestedInput
  }

  export type PersonCreateManyParentInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    gender?: string | null
    phone?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarriageCreateManyHusbandInput = {
    id?: string
    wifeId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    place?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarriageCreateManyWifeInput = {
    id?: string
    husbandId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    place?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoCreateManyPersonInput = {
    id?: string
    url: string
    createdAt?: Date | string
  }

  export type PersonUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: PersonUpdateManyWithoutParentNestedInput
    marriages?: MarriageUpdateManyWithoutHusbandNestedInput
    marriagesAsWife?: MarriageUpdateManyWithoutWifeNestedInput
    photos?: PhotoUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: PersonUncheckedUpdateManyWithoutParentNestedInput
    marriages?: MarriageUncheckedUpdateManyWithoutHusbandNestedInput
    marriagesAsWife?: MarriageUncheckedUpdateManyWithoutWifeNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarriageUpdateWithoutHusbandInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    place?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wife?: PersonUpdateOneRequiredWithoutMarriagesAsWifeNestedInput
  }

  export type MarriageUncheckedUpdateWithoutHusbandInput = {
    id?: StringFieldUpdateOperationsInput | string
    wifeId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    place?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarriageUncheckedUpdateManyWithoutHusbandInput = {
    id?: StringFieldUpdateOperationsInput | string
    wifeId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    place?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarriageUpdateWithoutWifeInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    place?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    husband?: PersonUpdateOneRequiredWithoutMarriagesNestedInput
  }

  export type MarriageUncheckedUpdateWithoutWifeInput = {
    id?: StringFieldUpdateOperationsInput | string
    husbandId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    place?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarriageUncheckedUpdateManyWithoutWifeInput = {
    id?: StringFieldUpdateOperationsInput | string
    husbandId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    place?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUncheckedUpdateManyWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
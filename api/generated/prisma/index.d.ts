
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TB_users
 * 
 */
export type TB_users = $Result.DefaultSelection<Prisma.$TB_usersPayload>
/**
 * Model TB_role
 * 
 */
export type TB_role = $Result.DefaultSelection<Prisma.$TB_rolePayload>
/**
 * Model TB_user_role
 * 
 */
export type TB_user_role = $Result.DefaultSelection<Prisma.$TB_user_rolePayload>
/**
 * Model TB_restriction
 * 
 */
export type TB_restriction = $Result.DefaultSelection<Prisma.$TB_restrictionPayload>
/**
 * Model TB_employees
 * 
 */
export type TB_employees = $Result.DefaultSelection<Prisma.$TB_employeesPayload>
/**
 * Model TB_memberships
 * 
 */
export type TB_memberships = $Result.DefaultSelection<Prisma.$TB_membershipsPayload>
/**
 * Model TB_client_membership
 * 
 */
export type TB_client_membership = $Result.DefaultSelection<Prisma.$TB_client_membershipPayload>
/**
 * Model TB_routines
 * 
 */
export type TB_routines = $Result.DefaultSelection<Prisma.$TB_routinesPayload>
/**
 * Model TB_exercises
 * 
 */
export type TB_exercises = $Result.DefaultSelection<Prisma.$TB_exercisesPayload>
/**
 * Model TB_routine_exercise
 * 
 */
export type TB_routine_exercise = $Result.DefaultSelection<Prisma.$TB_routine_exercisePayload>
/**
 * Model TB_reservations
 * 
 */
export type TB_reservations = $Result.DefaultSelection<Prisma.$TB_reservationsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const frequency: {
  diario: 'diario',
  semanal: 'semanal',
  quincenal: 'quincenal',
  mensual: 'mensual',
  semestral: 'semestral',
  anual: 'anual'
};

export type frequency = (typeof frequency)[keyof typeof frequency]


export const reservationStatus: {
  pendiente: 'pendiente',
  completada: 'completada',
  cancelada: 'cancelada',
  ausente: 'ausente'
};

export type reservationStatus = (typeof reservationStatus)[keyof typeof reservationStatus]

}

export type frequency = $Enums.frequency

export const frequency: typeof $Enums.frequency

export type reservationStatus = $Enums.reservationStatus

export const reservationStatus: typeof $Enums.reservationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TB_users
 * const tB_users = await prisma.tB_users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more TB_users
   * const tB_users = await prisma.tB_users.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.tB_users`: Exposes CRUD operations for the **TB_users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TB_users
    * const tB_users = await prisma.tB_users.findMany()
    * ```
    */
  get tB_users(): Prisma.TB_usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tB_role`: Exposes CRUD operations for the **TB_role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TB_roles
    * const tB_roles = await prisma.tB_role.findMany()
    * ```
    */
  get tB_role(): Prisma.TB_roleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tB_user_role`: Exposes CRUD operations for the **TB_user_role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TB_user_roles
    * const tB_user_roles = await prisma.tB_user_role.findMany()
    * ```
    */
  get tB_user_role(): Prisma.TB_user_roleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tB_restriction`: Exposes CRUD operations for the **TB_restriction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TB_restrictions
    * const tB_restrictions = await prisma.tB_restriction.findMany()
    * ```
    */
  get tB_restriction(): Prisma.TB_restrictionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tB_employees`: Exposes CRUD operations for the **TB_employees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TB_employees
    * const tB_employees = await prisma.tB_employees.findMany()
    * ```
    */
  get tB_employees(): Prisma.TB_employeesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tB_memberships`: Exposes CRUD operations for the **TB_memberships** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TB_memberships
    * const tB_memberships = await prisma.tB_memberships.findMany()
    * ```
    */
  get tB_memberships(): Prisma.TB_membershipsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tB_client_membership`: Exposes CRUD operations for the **TB_client_membership** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TB_client_memberships
    * const tB_client_memberships = await prisma.tB_client_membership.findMany()
    * ```
    */
  get tB_client_membership(): Prisma.TB_client_membershipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tB_routines`: Exposes CRUD operations for the **TB_routines** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TB_routines
    * const tB_routines = await prisma.tB_routines.findMany()
    * ```
    */
  get tB_routines(): Prisma.TB_routinesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tB_exercises`: Exposes CRUD operations for the **TB_exercises** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TB_exercises
    * const tB_exercises = await prisma.tB_exercises.findMany()
    * ```
    */
  get tB_exercises(): Prisma.TB_exercisesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tB_routine_exercise`: Exposes CRUD operations for the **TB_routine_exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TB_routine_exercises
    * const tB_routine_exercises = await prisma.tB_routine_exercise.findMany()
    * ```
    */
  get tB_routine_exercise(): Prisma.TB_routine_exerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tB_reservations`: Exposes CRUD operations for the **TB_reservations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TB_reservations
    * const tB_reservations = await prisma.tB_reservations.findMany()
    * ```
    */
  get tB_reservations(): Prisma.TB_reservationsDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    TB_users: 'TB_users',
    TB_role: 'TB_role',
    TB_user_role: 'TB_user_role',
    TB_restriction: 'TB_restriction',
    TB_employees: 'TB_employees',
    TB_memberships: 'TB_memberships',
    TB_client_membership: 'TB_client_membership',
    TB_routines: 'TB_routines',
    TB_exercises: 'TB_exercises',
    TB_routine_exercise: 'TB_routine_exercise',
    TB_reservations: 'TB_reservations'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tB_users" | "tB_role" | "tB_user_role" | "tB_restriction" | "tB_employees" | "tB_memberships" | "tB_client_membership" | "tB_routines" | "tB_exercises" | "tB_routine_exercise" | "tB_reservations"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TB_users: {
        payload: Prisma.$TB_usersPayload<ExtArgs>
        fields: Prisma.TB_usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TB_usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TB_usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_usersPayload>
          }
          findFirst: {
            args: Prisma.TB_usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TB_usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_usersPayload>
          }
          findMany: {
            args: Prisma.TB_usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_usersPayload>[]
          }
          create: {
            args: Prisma.TB_usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_usersPayload>
          }
          createMany: {
            args: Prisma.TB_usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TB_usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_usersPayload>[]
          }
          delete: {
            args: Prisma.TB_usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_usersPayload>
          }
          update: {
            args: Prisma.TB_usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_usersPayload>
          }
          deleteMany: {
            args: Prisma.TB_usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TB_usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TB_usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_usersPayload>[]
          }
          upsert: {
            args: Prisma.TB_usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_usersPayload>
          }
          aggregate: {
            args: Prisma.TB_usersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTB_users>
          }
          groupBy: {
            args: Prisma.TB_usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<TB_usersGroupByOutputType>[]
          }
          count: {
            args: Prisma.TB_usersCountArgs<ExtArgs>
            result: $Utils.Optional<TB_usersCountAggregateOutputType> | number
          }
        }
      }
      TB_role: {
        payload: Prisma.$TB_rolePayload<ExtArgs>
        fields: Prisma.TB_roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TB_roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TB_roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_rolePayload>
          }
          findFirst: {
            args: Prisma.TB_roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TB_roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_rolePayload>
          }
          findMany: {
            args: Prisma.TB_roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_rolePayload>[]
          }
          create: {
            args: Prisma.TB_roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_rolePayload>
          }
          createMany: {
            args: Prisma.TB_roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TB_roleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_rolePayload>[]
          }
          delete: {
            args: Prisma.TB_roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_rolePayload>
          }
          update: {
            args: Prisma.TB_roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_rolePayload>
          }
          deleteMany: {
            args: Prisma.TB_roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TB_roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TB_roleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_rolePayload>[]
          }
          upsert: {
            args: Prisma.TB_roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_rolePayload>
          }
          aggregate: {
            args: Prisma.TB_roleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTB_role>
          }
          groupBy: {
            args: Prisma.TB_roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<TB_roleGroupByOutputType>[]
          }
          count: {
            args: Prisma.TB_roleCountArgs<ExtArgs>
            result: $Utils.Optional<TB_roleCountAggregateOutputType> | number
          }
        }
      }
      TB_user_role: {
        payload: Prisma.$TB_user_rolePayload<ExtArgs>
        fields: Prisma.TB_user_roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TB_user_roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_user_rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TB_user_roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_user_rolePayload>
          }
          findFirst: {
            args: Prisma.TB_user_roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_user_rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TB_user_roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_user_rolePayload>
          }
          findMany: {
            args: Prisma.TB_user_roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_user_rolePayload>[]
          }
          create: {
            args: Prisma.TB_user_roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_user_rolePayload>
          }
          createMany: {
            args: Prisma.TB_user_roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TB_user_roleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_user_rolePayload>[]
          }
          delete: {
            args: Prisma.TB_user_roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_user_rolePayload>
          }
          update: {
            args: Prisma.TB_user_roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_user_rolePayload>
          }
          deleteMany: {
            args: Prisma.TB_user_roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TB_user_roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TB_user_roleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_user_rolePayload>[]
          }
          upsert: {
            args: Prisma.TB_user_roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_user_rolePayload>
          }
          aggregate: {
            args: Prisma.TB_user_roleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTB_user_role>
          }
          groupBy: {
            args: Prisma.TB_user_roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<TB_user_roleGroupByOutputType>[]
          }
          count: {
            args: Prisma.TB_user_roleCountArgs<ExtArgs>
            result: $Utils.Optional<TB_user_roleCountAggregateOutputType> | number
          }
        }
      }
      TB_restriction: {
        payload: Prisma.$TB_restrictionPayload<ExtArgs>
        fields: Prisma.TB_restrictionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TB_restrictionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_restrictionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TB_restrictionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_restrictionPayload>
          }
          findFirst: {
            args: Prisma.TB_restrictionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_restrictionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TB_restrictionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_restrictionPayload>
          }
          findMany: {
            args: Prisma.TB_restrictionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_restrictionPayload>[]
          }
          create: {
            args: Prisma.TB_restrictionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_restrictionPayload>
          }
          createMany: {
            args: Prisma.TB_restrictionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TB_restrictionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_restrictionPayload>[]
          }
          delete: {
            args: Prisma.TB_restrictionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_restrictionPayload>
          }
          update: {
            args: Prisma.TB_restrictionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_restrictionPayload>
          }
          deleteMany: {
            args: Prisma.TB_restrictionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TB_restrictionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TB_restrictionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_restrictionPayload>[]
          }
          upsert: {
            args: Prisma.TB_restrictionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_restrictionPayload>
          }
          aggregate: {
            args: Prisma.TB_restrictionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTB_restriction>
          }
          groupBy: {
            args: Prisma.TB_restrictionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TB_restrictionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TB_restrictionCountArgs<ExtArgs>
            result: $Utils.Optional<TB_restrictionCountAggregateOutputType> | number
          }
        }
      }
      TB_employees: {
        payload: Prisma.$TB_employeesPayload<ExtArgs>
        fields: Prisma.TB_employeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TB_employeesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_employeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TB_employeesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_employeesPayload>
          }
          findFirst: {
            args: Prisma.TB_employeesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_employeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TB_employeesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_employeesPayload>
          }
          findMany: {
            args: Prisma.TB_employeesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_employeesPayload>[]
          }
          create: {
            args: Prisma.TB_employeesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_employeesPayload>
          }
          createMany: {
            args: Prisma.TB_employeesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TB_employeesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_employeesPayload>[]
          }
          delete: {
            args: Prisma.TB_employeesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_employeesPayload>
          }
          update: {
            args: Prisma.TB_employeesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_employeesPayload>
          }
          deleteMany: {
            args: Prisma.TB_employeesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TB_employeesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TB_employeesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_employeesPayload>[]
          }
          upsert: {
            args: Prisma.TB_employeesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_employeesPayload>
          }
          aggregate: {
            args: Prisma.TB_employeesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTB_employees>
          }
          groupBy: {
            args: Prisma.TB_employeesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TB_employeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.TB_employeesCountArgs<ExtArgs>
            result: $Utils.Optional<TB_employeesCountAggregateOutputType> | number
          }
        }
      }
      TB_memberships: {
        payload: Prisma.$TB_membershipsPayload<ExtArgs>
        fields: Prisma.TB_membershipsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TB_membershipsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_membershipsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TB_membershipsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_membershipsPayload>
          }
          findFirst: {
            args: Prisma.TB_membershipsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_membershipsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TB_membershipsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_membershipsPayload>
          }
          findMany: {
            args: Prisma.TB_membershipsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_membershipsPayload>[]
          }
          create: {
            args: Prisma.TB_membershipsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_membershipsPayload>
          }
          createMany: {
            args: Prisma.TB_membershipsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TB_membershipsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_membershipsPayload>[]
          }
          delete: {
            args: Prisma.TB_membershipsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_membershipsPayload>
          }
          update: {
            args: Prisma.TB_membershipsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_membershipsPayload>
          }
          deleteMany: {
            args: Prisma.TB_membershipsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TB_membershipsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TB_membershipsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_membershipsPayload>[]
          }
          upsert: {
            args: Prisma.TB_membershipsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_membershipsPayload>
          }
          aggregate: {
            args: Prisma.TB_membershipsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTB_memberships>
          }
          groupBy: {
            args: Prisma.TB_membershipsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TB_membershipsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TB_membershipsCountArgs<ExtArgs>
            result: $Utils.Optional<TB_membershipsCountAggregateOutputType> | number
          }
        }
      }
      TB_client_membership: {
        payload: Prisma.$TB_client_membershipPayload<ExtArgs>
        fields: Prisma.TB_client_membershipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TB_client_membershipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_client_membershipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TB_client_membershipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_client_membershipPayload>
          }
          findFirst: {
            args: Prisma.TB_client_membershipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_client_membershipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TB_client_membershipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_client_membershipPayload>
          }
          findMany: {
            args: Prisma.TB_client_membershipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_client_membershipPayload>[]
          }
          create: {
            args: Prisma.TB_client_membershipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_client_membershipPayload>
          }
          createMany: {
            args: Prisma.TB_client_membershipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TB_client_membershipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_client_membershipPayload>[]
          }
          delete: {
            args: Prisma.TB_client_membershipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_client_membershipPayload>
          }
          update: {
            args: Prisma.TB_client_membershipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_client_membershipPayload>
          }
          deleteMany: {
            args: Prisma.TB_client_membershipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TB_client_membershipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TB_client_membershipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_client_membershipPayload>[]
          }
          upsert: {
            args: Prisma.TB_client_membershipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_client_membershipPayload>
          }
          aggregate: {
            args: Prisma.TB_client_membershipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTB_client_membership>
          }
          groupBy: {
            args: Prisma.TB_client_membershipGroupByArgs<ExtArgs>
            result: $Utils.Optional<TB_client_membershipGroupByOutputType>[]
          }
          count: {
            args: Prisma.TB_client_membershipCountArgs<ExtArgs>
            result: $Utils.Optional<TB_client_membershipCountAggregateOutputType> | number
          }
        }
      }
      TB_routines: {
        payload: Prisma.$TB_routinesPayload<ExtArgs>
        fields: Prisma.TB_routinesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TB_routinesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_routinesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TB_routinesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_routinesPayload>
          }
          findFirst: {
            args: Prisma.TB_routinesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_routinesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TB_routinesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_routinesPayload>
          }
          findMany: {
            args: Prisma.TB_routinesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_routinesPayload>[]
          }
          create: {
            args: Prisma.TB_routinesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_routinesPayload>
          }
          createMany: {
            args: Prisma.TB_routinesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TB_routinesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_routinesPayload>[]
          }
          delete: {
            args: Prisma.TB_routinesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_routinesPayload>
          }
          update: {
            args: Prisma.TB_routinesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_routinesPayload>
          }
          deleteMany: {
            args: Prisma.TB_routinesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TB_routinesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TB_routinesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_routinesPayload>[]
          }
          upsert: {
            args: Prisma.TB_routinesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_routinesPayload>
          }
          aggregate: {
            args: Prisma.TB_routinesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTB_routines>
          }
          groupBy: {
            args: Prisma.TB_routinesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TB_routinesGroupByOutputType>[]
          }
          count: {
            args: Prisma.TB_routinesCountArgs<ExtArgs>
            result: $Utils.Optional<TB_routinesCountAggregateOutputType> | number
          }
        }
      }
      TB_exercises: {
        payload: Prisma.$TB_exercisesPayload<ExtArgs>
        fields: Prisma.TB_exercisesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TB_exercisesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_exercisesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TB_exercisesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_exercisesPayload>
          }
          findFirst: {
            args: Prisma.TB_exercisesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_exercisesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TB_exercisesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_exercisesPayload>
          }
          findMany: {
            args: Prisma.TB_exercisesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_exercisesPayload>[]
          }
          create: {
            args: Prisma.TB_exercisesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_exercisesPayload>
          }
          createMany: {
            args: Prisma.TB_exercisesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TB_exercisesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_exercisesPayload>[]
          }
          delete: {
            args: Prisma.TB_exercisesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_exercisesPayload>
          }
          update: {
            args: Prisma.TB_exercisesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_exercisesPayload>
          }
          deleteMany: {
            args: Prisma.TB_exercisesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TB_exercisesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TB_exercisesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_exercisesPayload>[]
          }
          upsert: {
            args: Prisma.TB_exercisesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_exercisesPayload>
          }
          aggregate: {
            args: Prisma.TB_exercisesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTB_exercises>
          }
          groupBy: {
            args: Prisma.TB_exercisesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TB_exercisesGroupByOutputType>[]
          }
          count: {
            args: Prisma.TB_exercisesCountArgs<ExtArgs>
            result: $Utils.Optional<TB_exercisesCountAggregateOutputType> | number
          }
        }
      }
      TB_routine_exercise: {
        payload: Prisma.$TB_routine_exercisePayload<ExtArgs>
        fields: Prisma.TB_routine_exerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TB_routine_exerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_routine_exercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TB_routine_exerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_routine_exercisePayload>
          }
          findFirst: {
            args: Prisma.TB_routine_exerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_routine_exercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TB_routine_exerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_routine_exercisePayload>
          }
          findMany: {
            args: Prisma.TB_routine_exerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_routine_exercisePayload>[]
          }
          create: {
            args: Prisma.TB_routine_exerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_routine_exercisePayload>
          }
          createMany: {
            args: Prisma.TB_routine_exerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TB_routine_exerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_routine_exercisePayload>[]
          }
          delete: {
            args: Prisma.TB_routine_exerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_routine_exercisePayload>
          }
          update: {
            args: Prisma.TB_routine_exerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_routine_exercisePayload>
          }
          deleteMany: {
            args: Prisma.TB_routine_exerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TB_routine_exerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TB_routine_exerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_routine_exercisePayload>[]
          }
          upsert: {
            args: Prisma.TB_routine_exerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_routine_exercisePayload>
          }
          aggregate: {
            args: Prisma.TB_routine_exerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTB_routine_exercise>
          }
          groupBy: {
            args: Prisma.TB_routine_exerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<TB_routine_exerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.TB_routine_exerciseCountArgs<ExtArgs>
            result: $Utils.Optional<TB_routine_exerciseCountAggregateOutputType> | number
          }
        }
      }
      TB_reservations: {
        payload: Prisma.$TB_reservationsPayload<ExtArgs>
        fields: Prisma.TB_reservationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TB_reservationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_reservationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TB_reservationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_reservationsPayload>
          }
          findFirst: {
            args: Prisma.TB_reservationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_reservationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TB_reservationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_reservationsPayload>
          }
          findMany: {
            args: Prisma.TB_reservationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_reservationsPayload>[]
          }
          create: {
            args: Prisma.TB_reservationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_reservationsPayload>
          }
          createMany: {
            args: Prisma.TB_reservationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TB_reservationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_reservationsPayload>[]
          }
          delete: {
            args: Prisma.TB_reservationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_reservationsPayload>
          }
          update: {
            args: Prisma.TB_reservationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_reservationsPayload>
          }
          deleteMany: {
            args: Prisma.TB_reservationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TB_reservationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TB_reservationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_reservationsPayload>[]
          }
          upsert: {
            args: Prisma.TB_reservationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_reservationsPayload>
          }
          aggregate: {
            args: Prisma.TB_reservationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTB_reservations>
          }
          groupBy: {
            args: Prisma.TB_reservationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TB_reservationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TB_reservationsCountArgs<ExtArgs>
            result: $Utils.Optional<TB_reservationsCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    tB_users?: TB_usersOmit
    tB_role?: TB_roleOmit
    tB_user_role?: TB_user_roleOmit
    tB_restriction?: TB_restrictionOmit
    tB_employees?: TB_employeesOmit
    tB_memberships?: TB_membershipsOmit
    tB_client_membership?: TB_client_membershipOmit
    tB_routines?: TB_routinesOmit
    tB_exercises?: TB_exercisesOmit
    tB_routine_exercise?: TB_routine_exerciseOmit
    tB_reservations?: TB_reservationsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type TB_usersCountOutputType
   */

  export type TB_usersCountOutputType = {
    TB_user_role: number
    TB_restriction: number
  }

  export type TB_usersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_user_role?: boolean | TB_usersCountOutputTypeCountTB_user_roleArgs
    TB_restriction?: boolean | TB_usersCountOutputTypeCountTB_restrictionArgs
  }

  // Custom InputTypes
  /**
   * TB_usersCountOutputType without action
   */
  export type TB_usersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_usersCountOutputType
     */
    select?: TB_usersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TB_usersCountOutputType without action
   */
  export type TB_usersCountOutputTypeCountTB_user_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_user_roleWhereInput
  }

  /**
   * TB_usersCountOutputType without action
   */
  export type TB_usersCountOutputTypeCountTB_restrictionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_restrictionWhereInput
  }


  /**
   * Count Type TB_roleCountOutputType
   */

  export type TB_roleCountOutputType = {
    TB_user_role: number
  }

  export type TB_roleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_user_role?: boolean | TB_roleCountOutputTypeCountTB_user_roleArgs
  }

  // Custom InputTypes
  /**
   * TB_roleCountOutputType without action
   */
  export type TB_roleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_roleCountOutputType
     */
    select?: TB_roleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TB_roleCountOutputType without action
   */
  export type TB_roleCountOutputTypeCountTB_user_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_user_roleWhereInput
  }


  /**
   * Count Type TB_user_roleCountOutputType
   */

  export type TB_user_roleCountOutputType = {
    TB_employees: number
    TB_client_membership: number
  }

  export type TB_user_roleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_employees?: boolean | TB_user_roleCountOutputTypeCountTB_employeesArgs
    TB_client_membership?: boolean | TB_user_roleCountOutputTypeCountTB_client_membershipArgs
  }

  // Custom InputTypes
  /**
   * TB_user_roleCountOutputType without action
   */
  export type TB_user_roleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_user_roleCountOutputType
     */
    select?: TB_user_roleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TB_user_roleCountOutputType without action
   */
  export type TB_user_roleCountOutputTypeCountTB_employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_employeesWhereInput
  }

  /**
   * TB_user_roleCountOutputType without action
   */
  export type TB_user_roleCountOutputTypeCountTB_client_membershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_client_membershipWhereInput
  }


  /**
   * Count Type TB_membershipsCountOutputType
   */

  export type TB_membershipsCountOutputType = {
    TB_client_membership: number
  }

  export type TB_membershipsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_client_membership?: boolean | TB_membershipsCountOutputTypeCountTB_client_membershipArgs
  }

  // Custom InputTypes
  /**
   * TB_membershipsCountOutputType without action
   */
  export type TB_membershipsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_membershipsCountOutputType
     */
    select?: TB_membershipsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TB_membershipsCountOutputType without action
   */
  export type TB_membershipsCountOutputTypeCountTB_client_membershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_client_membershipWhereInput
  }


  /**
   * Count Type TB_client_membershipCountOutputType
   */

  export type TB_client_membershipCountOutputType = {
    TB_reservations: number
  }

  export type TB_client_membershipCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_reservations?: boolean | TB_client_membershipCountOutputTypeCountTB_reservationsArgs
  }

  // Custom InputTypes
  /**
   * TB_client_membershipCountOutputType without action
   */
  export type TB_client_membershipCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_client_membershipCountOutputType
     */
    select?: TB_client_membershipCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TB_client_membershipCountOutputType without action
   */
  export type TB_client_membershipCountOutputTypeCountTB_reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_reservationsWhereInput
  }


  /**
   * Count Type TB_routinesCountOutputType
   */

  export type TB_routinesCountOutputType = {
    TB_routine_exercise: number
    TB_reservations: number
  }

  export type TB_routinesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_routine_exercise?: boolean | TB_routinesCountOutputTypeCountTB_routine_exerciseArgs
    TB_reservations?: boolean | TB_routinesCountOutputTypeCountTB_reservationsArgs
  }

  // Custom InputTypes
  /**
   * TB_routinesCountOutputType without action
   */
  export type TB_routinesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routinesCountOutputType
     */
    select?: TB_routinesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TB_routinesCountOutputType without action
   */
  export type TB_routinesCountOutputTypeCountTB_routine_exerciseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_routine_exerciseWhereInput
  }

  /**
   * TB_routinesCountOutputType without action
   */
  export type TB_routinesCountOutputTypeCountTB_reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_reservationsWhereInput
  }


  /**
   * Count Type TB_exercisesCountOutputType
   */

  export type TB_exercisesCountOutputType = {
    TB_routine_exercise: number
  }

  export type TB_exercisesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_routine_exercise?: boolean | TB_exercisesCountOutputTypeCountTB_routine_exerciseArgs
  }

  // Custom InputTypes
  /**
   * TB_exercisesCountOutputType without action
   */
  export type TB_exercisesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_exercisesCountOutputType
     */
    select?: TB_exercisesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TB_exercisesCountOutputType without action
   */
  export type TB_exercisesCountOutputTypeCountTB_routine_exerciseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_routine_exerciseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TB_users
   */

  export type AggregateTB_users = {
    _count: TB_usersCountAggregateOutputType | null
    _avg: TB_usersAvgAggregateOutputType | null
    _sum: TB_usersSumAggregateOutputType | null
    _min: TB_usersMinAggregateOutputType | null
    _max: TB_usersMaxAggregateOutputType | null
  }

  export type TB_usersAvgAggregateOutputType = {
    id_user: number | null
  }

  export type TB_usersSumAggregateOutputType = {
    id_user: number | null
  }

  export type TB_usersMinAggregateOutputType = {
    id_user: number | null
    name: string | null
    lastname: string | null
    email: string | null
    password: string | null
    phone_number: string | null
    birthday: Date | null
  }

  export type TB_usersMaxAggregateOutputType = {
    id_user: number | null
    name: string | null
    lastname: string | null
    email: string | null
    password: string | null
    phone_number: string | null
    birthday: Date | null
  }

  export type TB_usersCountAggregateOutputType = {
    id_user: number
    name: number
    lastname: number
    email: number
    password: number
    phone_number: number
    birthday: number
    _all: number
  }


  export type TB_usersAvgAggregateInputType = {
    id_user?: true
  }

  export type TB_usersSumAggregateInputType = {
    id_user?: true
  }

  export type TB_usersMinAggregateInputType = {
    id_user?: true
    name?: true
    lastname?: true
    email?: true
    password?: true
    phone_number?: true
    birthday?: true
  }

  export type TB_usersMaxAggregateInputType = {
    id_user?: true
    name?: true
    lastname?: true
    email?: true
    password?: true
    phone_number?: true
    birthday?: true
  }

  export type TB_usersCountAggregateInputType = {
    id_user?: true
    name?: true
    lastname?: true
    email?: true
    password?: true
    phone_number?: true
    birthday?: true
    _all?: true
  }

  export type TB_usersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_users to aggregate.
     */
    where?: TB_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_users to fetch.
     */
    orderBy?: TB_usersOrderByWithRelationInput | TB_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TB_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TB_users
    **/
    _count?: true | TB_usersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TB_usersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TB_usersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TB_usersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TB_usersMaxAggregateInputType
  }

  export type GetTB_usersAggregateType<T extends TB_usersAggregateArgs> = {
        [P in keyof T & keyof AggregateTB_users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTB_users[P]>
      : GetScalarType<T[P], AggregateTB_users[P]>
  }




  export type TB_usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_usersWhereInput
    orderBy?: TB_usersOrderByWithAggregationInput | TB_usersOrderByWithAggregationInput[]
    by: TB_usersScalarFieldEnum[] | TB_usersScalarFieldEnum
    having?: TB_usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TB_usersCountAggregateInputType | true
    _avg?: TB_usersAvgAggregateInputType
    _sum?: TB_usersSumAggregateInputType
    _min?: TB_usersMinAggregateInputType
    _max?: TB_usersMaxAggregateInputType
  }

  export type TB_usersGroupByOutputType = {
    id_user: number
    name: string
    lastname: string
    email: string
    password: string
    phone_number: string
    birthday: Date
    _count: TB_usersCountAggregateOutputType | null
    _avg: TB_usersAvgAggregateOutputType | null
    _sum: TB_usersSumAggregateOutputType | null
    _min: TB_usersMinAggregateOutputType | null
    _max: TB_usersMaxAggregateOutputType | null
  }

  type GetTB_usersGroupByPayload<T extends TB_usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TB_usersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TB_usersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TB_usersGroupByOutputType[P]>
            : GetScalarType<T[P], TB_usersGroupByOutputType[P]>
        }
      >
    >


  export type TB_usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    name?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    birthday?: boolean
    TB_user_role?: boolean | TB_users$TB_user_roleArgs<ExtArgs>
    TB_restriction?: boolean | TB_users$TB_restrictionArgs<ExtArgs>
    _count?: boolean | TB_usersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_users"]>

  export type TB_usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    name?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    birthday?: boolean
  }, ExtArgs["result"]["tB_users"]>

  export type TB_usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    name?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    birthday?: boolean
  }, ExtArgs["result"]["tB_users"]>

  export type TB_usersSelectScalar = {
    id_user?: boolean
    name?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    birthday?: boolean
  }

  export type TB_usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user" | "name" | "lastname" | "email" | "password" | "phone_number" | "birthday", ExtArgs["result"]["tB_users"]>
  export type TB_usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_user_role?: boolean | TB_users$TB_user_roleArgs<ExtArgs>
    TB_restriction?: boolean | TB_users$TB_restrictionArgs<ExtArgs>
    _count?: boolean | TB_usersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TB_usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TB_usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TB_usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TB_users"
    objects: {
      TB_user_role: Prisma.$TB_user_rolePayload<ExtArgs>[]
      TB_restriction: Prisma.$TB_restrictionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user: number
      name: string
      lastname: string
      email: string
      password: string
      phone_number: string
      birthday: Date
    }, ExtArgs["result"]["tB_users"]>
    composites: {}
  }

  type TB_usersGetPayload<S extends boolean | null | undefined | TB_usersDefaultArgs> = $Result.GetResult<Prisma.$TB_usersPayload, S>

  type TB_usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TB_usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TB_usersCountAggregateInputType | true
    }

  export interface TB_usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TB_users'], meta: { name: 'TB_users' } }
    /**
     * Find zero or one TB_users that matches the filter.
     * @param {TB_usersFindUniqueArgs} args - Arguments to find a TB_users
     * @example
     * // Get one TB_users
     * const tB_users = await prisma.tB_users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TB_usersFindUniqueArgs>(args: SelectSubset<T, TB_usersFindUniqueArgs<ExtArgs>>): Prisma__TB_usersClient<$Result.GetResult<Prisma.$TB_usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TB_users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TB_usersFindUniqueOrThrowArgs} args - Arguments to find a TB_users
     * @example
     * // Get one TB_users
     * const tB_users = await prisma.tB_users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TB_usersFindUniqueOrThrowArgs>(args: SelectSubset<T, TB_usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TB_usersClient<$Result.GetResult<Prisma.$TB_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_usersFindFirstArgs} args - Arguments to find a TB_users
     * @example
     * // Get one TB_users
     * const tB_users = await prisma.tB_users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TB_usersFindFirstArgs>(args?: SelectSubset<T, TB_usersFindFirstArgs<ExtArgs>>): Prisma__TB_usersClient<$Result.GetResult<Prisma.$TB_usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_usersFindFirstOrThrowArgs} args - Arguments to find a TB_users
     * @example
     * // Get one TB_users
     * const tB_users = await prisma.tB_users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TB_usersFindFirstOrThrowArgs>(args?: SelectSubset<T, TB_usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__TB_usersClient<$Result.GetResult<Prisma.$TB_usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TB_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TB_users
     * const tB_users = await prisma.tB_users.findMany()
     * 
     * // Get first 10 TB_users
     * const tB_users = await prisma.tB_users.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const tB_usersWithId_userOnly = await prisma.tB_users.findMany({ select: { id_user: true } })
     * 
     */
    findMany<T extends TB_usersFindManyArgs>(args?: SelectSubset<T, TB_usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TB_users.
     * @param {TB_usersCreateArgs} args - Arguments to create a TB_users.
     * @example
     * // Create one TB_users
     * const TB_users = await prisma.tB_users.create({
     *   data: {
     *     // ... data to create a TB_users
     *   }
     * })
     * 
     */
    create<T extends TB_usersCreateArgs>(args: SelectSubset<T, TB_usersCreateArgs<ExtArgs>>): Prisma__TB_usersClient<$Result.GetResult<Prisma.$TB_usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TB_users.
     * @param {TB_usersCreateManyArgs} args - Arguments to create many TB_users.
     * @example
     * // Create many TB_users
     * const tB_users = await prisma.tB_users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TB_usersCreateManyArgs>(args?: SelectSubset<T, TB_usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TB_users and returns the data saved in the database.
     * @param {TB_usersCreateManyAndReturnArgs} args - Arguments to create many TB_users.
     * @example
     * // Create many TB_users
     * const tB_users = await prisma.tB_users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TB_users and only return the `id_user`
     * const tB_usersWithId_userOnly = await prisma.tB_users.createManyAndReturn({
     *   select: { id_user: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TB_usersCreateManyAndReturnArgs>(args?: SelectSubset<T, TB_usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TB_users.
     * @param {TB_usersDeleteArgs} args - Arguments to delete one TB_users.
     * @example
     * // Delete one TB_users
     * const TB_users = await prisma.tB_users.delete({
     *   where: {
     *     // ... filter to delete one TB_users
     *   }
     * })
     * 
     */
    delete<T extends TB_usersDeleteArgs>(args: SelectSubset<T, TB_usersDeleteArgs<ExtArgs>>): Prisma__TB_usersClient<$Result.GetResult<Prisma.$TB_usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TB_users.
     * @param {TB_usersUpdateArgs} args - Arguments to update one TB_users.
     * @example
     * // Update one TB_users
     * const tB_users = await prisma.tB_users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TB_usersUpdateArgs>(args: SelectSubset<T, TB_usersUpdateArgs<ExtArgs>>): Prisma__TB_usersClient<$Result.GetResult<Prisma.$TB_usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TB_users.
     * @param {TB_usersDeleteManyArgs} args - Arguments to filter TB_users to delete.
     * @example
     * // Delete a few TB_users
     * const { count } = await prisma.tB_users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TB_usersDeleteManyArgs>(args?: SelectSubset<T, TB_usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TB_users
     * const tB_users = await prisma.tB_users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TB_usersUpdateManyArgs>(args: SelectSubset<T, TB_usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_users and returns the data updated in the database.
     * @param {TB_usersUpdateManyAndReturnArgs} args - Arguments to update many TB_users.
     * @example
     * // Update many TB_users
     * const tB_users = await prisma.tB_users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TB_users and only return the `id_user`
     * const tB_usersWithId_userOnly = await prisma.tB_users.updateManyAndReturn({
     *   select: { id_user: true },
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
    updateManyAndReturn<T extends TB_usersUpdateManyAndReturnArgs>(args: SelectSubset<T, TB_usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TB_users.
     * @param {TB_usersUpsertArgs} args - Arguments to update or create a TB_users.
     * @example
     * // Update or create a TB_users
     * const tB_users = await prisma.tB_users.upsert({
     *   create: {
     *     // ... data to create a TB_users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TB_users we want to update
     *   }
     * })
     */
    upsert<T extends TB_usersUpsertArgs>(args: SelectSubset<T, TB_usersUpsertArgs<ExtArgs>>): Prisma__TB_usersClient<$Result.GetResult<Prisma.$TB_usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TB_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_usersCountArgs} args - Arguments to filter TB_users to count.
     * @example
     * // Count the number of TB_users
     * const count = await prisma.tB_users.count({
     *   where: {
     *     // ... the filter for the TB_users we want to count
     *   }
     * })
    **/
    count<T extends TB_usersCountArgs>(
      args?: Subset<T, TB_usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TB_usersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TB_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_usersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TB_usersAggregateArgs>(args: Subset<T, TB_usersAggregateArgs>): Prisma.PrismaPromise<GetTB_usersAggregateType<T>>

    /**
     * Group by TB_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_usersGroupByArgs} args - Group by arguments.
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
      T extends TB_usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TB_usersGroupByArgs['orderBy'] }
        : { orderBy?: TB_usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TB_usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTB_usersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TB_users model
   */
  readonly fields: TB_usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TB_users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TB_usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TB_user_role<T extends TB_users$TB_user_roleArgs<ExtArgs> = {}>(args?: Subset<T, TB_users$TB_user_roleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_user_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TB_restriction<T extends TB_users$TB_restrictionArgs<ExtArgs> = {}>(args?: Subset<T, TB_users$TB_restrictionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_restrictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TB_users model
   */
  interface TB_usersFieldRefs {
    readonly id_user: FieldRef<"TB_users", 'Int'>
    readonly name: FieldRef<"TB_users", 'String'>
    readonly lastname: FieldRef<"TB_users", 'String'>
    readonly email: FieldRef<"TB_users", 'String'>
    readonly password: FieldRef<"TB_users", 'String'>
    readonly phone_number: FieldRef<"TB_users", 'String'>
    readonly birthday: FieldRef<"TB_users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TB_users findUnique
   */
  export type TB_usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_users
     */
    select?: TB_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_users
     */
    omit?: TB_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_usersInclude<ExtArgs> | null
    /**
     * Filter, which TB_users to fetch.
     */
    where: TB_usersWhereUniqueInput
  }

  /**
   * TB_users findUniqueOrThrow
   */
  export type TB_usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_users
     */
    select?: TB_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_users
     */
    omit?: TB_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_usersInclude<ExtArgs> | null
    /**
     * Filter, which TB_users to fetch.
     */
    where: TB_usersWhereUniqueInput
  }

  /**
   * TB_users findFirst
   */
  export type TB_usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_users
     */
    select?: TB_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_users
     */
    omit?: TB_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_usersInclude<ExtArgs> | null
    /**
     * Filter, which TB_users to fetch.
     */
    where?: TB_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_users to fetch.
     */
    orderBy?: TB_usersOrderByWithRelationInput | TB_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_users.
     */
    cursor?: TB_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_users.
     */
    distinct?: TB_usersScalarFieldEnum | TB_usersScalarFieldEnum[]
  }

  /**
   * TB_users findFirstOrThrow
   */
  export type TB_usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_users
     */
    select?: TB_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_users
     */
    omit?: TB_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_usersInclude<ExtArgs> | null
    /**
     * Filter, which TB_users to fetch.
     */
    where?: TB_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_users to fetch.
     */
    orderBy?: TB_usersOrderByWithRelationInput | TB_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_users.
     */
    cursor?: TB_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_users.
     */
    distinct?: TB_usersScalarFieldEnum | TB_usersScalarFieldEnum[]
  }

  /**
   * TB_users findMany
   */
  export type TB_usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_users
     */
    select?: TB_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_users
     */
    omit?: TB_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_usersInclude<ExtArgs> | null
    /**
     * Filter, which TB_users to fetch.
     */
    where?: TB_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_users to fetch.
     */
    orderBy?: TB_usersOrderByWithRelationInput | TB_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TB_users.
     */
    cursor?: TB_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_users.
     */
    skip?: number
    distinct?: TB_usersScalarFieldEnum | TB_usersScalarFieldEnum[]
  }

  /**
   * TB_users create
   */
  export type TB_usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_users
     */
    select?: TB_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_users
     */
    omit?: TB_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_usersInclude<ExtArgs> | null
    /**
     * The data needed to create a TB_users.
     */
    data: XOR<TB_usersCreateInput, TB_usersUncheckedCreateInput>
  }

  /**
   * TB_users createMany
   */
  export type TB_usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TB_users.
     */
    data: TB_usersCreateManyInput | TB_usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_users createManyAndReturn
   */
  export type TB_usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_users
     */
    select?: TB_usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_users
     */
    omit?: TB_usersOmit<ExtArgs> | null
    /**
     * The data used to create many TB_users.
     */
    data: TB_usersCreateManyInput | TB_usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_users update
   */
  export type TB_usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_users
     */
    select?: TB_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_users
     */
    omit?: TB_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_usersInclude<ExtArgs> | null
    /**
     * The data needed to update a TB_users.
     */
    data: XOR<TB_usersUpdateInput, TB_usersUncheckedUpdateInput>
    /**
     * Choose, which TB_users to update.
     */
    where: TB_usersWhereUniqueInput
  }

  /**
   * TB_users updateMany
   */
  export type TB_usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TB_users.
     */
    data: XOR<TB_usersUpdateManyMutationInput, TB_usersUncheckedUpdateManyInput>
    /**
     * Filter which TB_users to update
     */
    where?: TB_usersWhereInput
    /**
     * Limit how many TB_users to update.
     */
    limit?: number
  }

  /**
   * TB_users updateManyAndReturn
   */
  export type TB_usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_users
     */
    select?: TB_usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_users
     */
    omit?: TB_usersOmit<ExtArgs> | null
    /**
     * The data used to update TB_users.
     */
    data: XOR<TB_usersUpdateManyMutationInput, TB_usersUncheckedUpdateManyInput>
    /**
     * Filter which TB_users to update
     */
    where?: TB_usersWhereInput
    /**
     * Limit how many TB_users to update.
     */
    limit?: number
  }

  /**
   * TB_users upsert
   */
  export type TB_usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_users
     */
    select?: TB_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_users
     */
    omit?: TB_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_usersInclude<ExtArgs> | null
    /**
     * The filter to search for the TB_users to update in case it exists.
     */
    where: TB_usersWhereUniqueInput
    /**
     * In case the TB_users found by the `where` argument doesn't exist, create a new TB_users with this data.
     */
    create: XOR<TB_usersCreateInput, TB_usersUncheckedCreateInput>
    /**
     * In case the TB_users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TB_usersUpdateInput, TB_usersUncheckedUpdateInput>
  }

  /**
   * TB_users delete
   */
  export type TB_usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_users
     */
    select?: TB_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_users
     */
    omit?: TB_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_usersInclude<ExtArgs> | null
    /**
     * Filter which TB_users to delete.
     */
    where: TB_usersWhereUniqueInput
  }

  /**
   * TB_users deleteMany
   */
  export type TB_usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_users to delete
     */
    where?: TB_usersWhereInput
    /**
     * Limit how many TB_users to delete.
     */
    limit?: number
  }

  /**
   * TB_users.TB_user_role
   */
  export type TB_users$TB_user_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_user_role
     */
    select?: TB_user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_user_role
     */
    omit?: TB_user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_user_roleInclude<ExtArgs> | null
    where?: TB_user_roleWhereInput
    orderBy?: TB_user_roleOrderByWithRelationInput | TB_user_roleOrderByWithRelationInput[]
    cursor?: TB_user_roleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TB_user_roleScalarFieldEnum | TB_user_roleScalarFieldEnum[]
  }

  /**
   * TB_users.TB_restriction
   */
  export type TB_users$TB_restrictionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_restriction
     */
    select?: TB_restrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_restriction
     */
    omit?: TB_restrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_restrictionInclude<ExtArgs> | null
    where?: TB_restrictionWhereInput
    orderBy?: TB_restrictionOrderByWithRelationInput | TB_restrictionOrderByWithRelationInput[]
    cursor?: TB_restrictionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TB_restrictionScalarFieldEnum | TB_restrictionScalarFieldEnum[]
  }

  /**
   * TB_users without action
   */
  export type TB_usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_users
     */
    select?: TB_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_users
     */
    omit?: TB_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_usersInclude<ExtArgs> | null
  }


  /**
   * Model TB_role
   */

  export type AggregateTB_role = {
    _count: TB_roleCountAggregateOutputType | null
    _avg: TB_roleAvgAggregateOutputType | null
    _sum: TB_roleSumAggregateOutputType | null
    _min: TB_roleMinAggregateOutputType | null
    _max: TB_roleMaxAggregateOutputType | null
  }

  export type TB_roleAvgAggregateOutputType = {
    id_role: number | null
  }

  export type TB_roleSumAggregateOutputType = {
    id_role: number | null
  }

  export type TB_roleMinAggregateOutputType = {
    id_role: number | null
    name: string | null
    description: string | null
  }

  export type TB_roleMaxAggregateOutputType = {
    id_role: number | null
    name: string | null
    description: string | null
  }

  export type TB_roleCountAggregateOutputType = {
    id_role: number
    name: number
    description: number
    _all: number
  }


  export type TB_roleAvgAggregateInputType = {
    id_role?: true
  }

  export type TB_roleSumAggregateInputType = {
    id_role?: true
  }

  export type TB_roleMinAggregateInputType = {
    id_role?: true
    name?: true
    description?: true
  }

  export type TB_roleMaxAggregateInputType = {
    id_role?: true
    name?: true
    description?: true
  }

  export type TB_roleCountAggregateInputType = {
    id_role?: true
    name?: true
    description?: true
    _all?: true
  }

  export type TB_roleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_role to aggregate.
     */
    where?: TB_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_roles to fetch.
     */
    orderBy?: TB_roleOrderByWithRelationInput | TB_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TB_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TB_roles
    **/
    _count?: true | TB_roleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TB_roleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TB_roleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TB_roleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TB_roleMaxAggregateInputType
  }

  export type GetTB_roleAggregateType<T extends TB_roleAggregateArgs> = {
        [P in keyof T & keyof AggregateTB_role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTB_role[P]>
      : GetScalarType<T[P], AggregateTB_role[P]>
  }




  export type TB_roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_roleWhereInput
    orderBy?: TB_roleOrderByWithAggregationInput | TB_roleOrderByWithAggregationInput[]
    by: TB_roleScalarFieldEnum[] | TB_roleScalarFieldEnum
    having?: TB_roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TB_roleCountAggregateInputType | true
    _avg?: TB_roleAvgAggregateInputType
    _sum?: TB_roleSumAggregateInputType
    _min?: TB_roleMinAggregateInputType
    _max?: TB_roleMaxAggregateInputType
  }

  export type TB_roleGroupByOutputType = {
    id_role: number
    name: string
    description: string
    _count: TB_roleCountAggregateOutputType | null
    _avg: TB_roleAvgAggregateOutputType | null
    _sum: TB_roleSumAggregateOutputType | null
    _min: TB_roleMinAggregateOutputType | null
    _max: TB_roleMaxAggregateOutputType | null
  }

  type GetTB_roleGroupByPayload<T extends TB_roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TB_roleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TB_roleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TB_roleGroupByOutputType[P]>
            : GetScalarType<T[P], TB_roleGroupByOutputType[P]>
        }
      >
    >


  export type TB_roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_role?: boolean
    name?: boolean
    description?: boolean
    TB_user_role?: boolean | TB_role$TB_user_roleArgs<ExtArgs>
    _count?: boolean | TB_roleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_role"]>

  export type TB_roleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_role?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["tB_role"]>

  export type TB_roleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_role?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["tB_role"]>

  export type TB_roleSelectScalar = {
    id_role?: boolean
    name?: boolean
    description?: boolean
  }

  export type TB_roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_role" | "name" | "description", ExtArgs["result"]["tB_role"]>
  export type TB_roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_user_role?: boolean | TB_role$TB_user_roleArgs<ExtArgs>
    _count?: boolean | TB_roleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TB_roleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TB_roleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TB_rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TB_role"
    objects: {
      TB_user_role: Prisma.$TB_user_rolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_role: number
      name: string
      description: string
    }, ExtArgs["result"]["tB_role"]>
    composites: {}
  }

  type TB_roleGetPayload<S extends boolean | null | undefined | TB_roleDefaultArgs> = $Result.GetResult<Prisma.$TB_rolePayload, S>

  type TB_roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TB_roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TB_roleCountAggregateInputType | true
    }

  export interface TB_roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TB_role'], meta: { name: 'TB_role' } }
    /**
     * Find zero or one TB_role that matches the filter.
     * @param {TB_roleFindUniqueArgs} args - Arguments to find a TB_role
     * @example
     * // Get one TB_role
     * const tB_role = await prisma.tB_role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TB_roleFindUniqueArgs>(args: SelectSubset<T, TB_roleFindUniqueArgs<ExtArgs>>): Prisma__TB_roleClient<$Result.GetResult<Prisma.$TB_rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TB_role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TB_roleFindUniqueOrThrowArgs} args - Arguments to find a TB_role
     * @example
     * // Get one TB_role
     * const tB_role = await prisma.tB_role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TB_roleFindUniqueOrThrowArgs>(args: SelectSubset<T, TB_roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TB_roleClient<$Result.GetResult<Prisma.$TB_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_roleFindFirstArgs} args - Arguments to find a TB_role
     * @example
     * // Get one TB_role
     * const tB_role = await prisma.tB_role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TB_roleFindFirstArgs>(args?: SelectSubset<T, TB_roleFindFirstArgs<ExtArgs>>): Prisma__TB_roleClient<$Result.GetResult<Prisma.$TB_rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_roleFindFirstOrThrowArgs} args - Arguments to find a TB_role
     * @example
     * // Get one TB_role
     * const tB_role = await prisma.tB_role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TB_roleFindFirstOrThrowArgs>(args?: SelectSubset<T, TB_roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__TB_roleClient<$Result.GetResult<Prisma.$TB_rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TB_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TB_roles
     * const tB_roles = await prisma.tB_role.findMany()
     * 
     * // Get first 10 TB_roles
     * const tB_roles = await prisma.tB_role.findMany({ take: 10 })
     * 
     * // Only select the `id_role`
     * const tB_roleWithId_roleOnly = await prisma.tB_role.findMany({ select: { id_role: true } })
     * 
     */
    findMany<T extends TB_roleFindManyArgs>(args?: SelectSubset<T, TB_roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TB_role.
     * @param {TB_roleCreateArgs} args - Arguments to create a TB_role.
     * @example
     * // Create one TB_role
     * const TB_role = await prisma.tB_role.create({
     *   data: {
     *     // ... data to create a TB_role
     *   }
     * })
     * 
     */
    create<T extends TB_roleCreateArgs>(args: SelectSubset<T, TB_roleCreateArgs<ExtArgs>>): Prisma__TB_roleClient<$Result.GetResult<Prisma.$TB_rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TB_roles.
     * @param {TB_roleCreateManyArgs} args - Arguments to create many TB_roles.
     * @example
     * // Create many TB_roles
     * const tB_role = await prisma.tB_role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TB_roleCreateManyArgs>(args?: SelectSubset<T, TB_roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TB_roles and returns the data saved in the database.
     * @param {TB_roleCreateManyAndReturnArgs} args - Arguments to create many TB_roles.
     * @example
     * // Create many TB_roles
     * const tB_role = await prisma.tB_role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TB_roles and only return the `id_role`
     * const tB_roleWithId_roleOnly = await prisma.tB_role.createManyAndReturn({
     *   select: { id_role: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TB_roleCreateManyAndReturnArgs>(args?: SelectSubset<T, TB_roleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_rolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TB_role.
     * @param {TB_roleDeleteArgs} args - Arguments to delete one TB_role.
     * @example
     * // Delete one TB_role
     * const TB_role = await prisma.tB_role.delete({
     *   where: {
     *     // ... filter to delete one TB_role
     *   }
     * })
     * 
     */
    delete<T extends TB_roleDeleteArgs>(args: SelectSubset<T, TB_roleDeleteArgs<ExtArgs>>): Prisma__TB_roleClient<$Result.GetResult<Prisma.$TB_rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TB_role.
     * @param {TB_roleUpdateArgs} args - Arguments to update one TB_role.
     * @example
     * // Update one TB_role
     * const tB_role = await prisma.tB_role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TB_roleUpdateArgs>(args: SelectSubset<T, TB_roleUpdateArgs<ExtArgs>>): Prisma__TB_roleClient<$Result.GetResult<Prisma.$TB_rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TB_roles.
     * @param {TB_roleDeleteManyArgs} args - Arguments to filter TB_roles to delete.
     * @example
     * // Delete a few TB_roles
     * const { count } = await prisma.tB_role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TB_roleDeleteManyArgs>(args?: SelectSubset<T, TB_roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TB_roles
     * const tB_role = await prisma.tB_role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TB_roleUpdateManyArgs>(args: SelectSubset<T, TB_roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_roles and returns the data updated in the database.
     * @param {TB_roleUpdateManyAndReturnArgs} args - Arguments to update many TB_roles.
     * @example
     * // Update many TB_roles
     * const tB_role = await prisma.tB_role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TB_roles and only return the `id_role`
     * const tB_roleWithId_roleOnly = await prisma.tB_role.updateManyAndReturn({
     *   select: { id_role: true },
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
    updateManyAndReturn<T extends TB_roleUpdateManyAndReturnArgs>(args: SelectSubset<T, TB_roleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_rolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TB_role.
     * @param {TB_roleUpsertArgs} args - Arguments to update or create a TB_role.
     * @example
     * // Update or create a TB_role
     * const tB_role = await prisma.tB_role.upsert({
     *   create: {
     *     // ... data to create a TB_role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TB_role we want to update
     *   }
     * })
     */
    upsert<T extends TB_roleUpsertArgs>(args: SelectSubset<T, TB_roleUpsertArgs<ExtArgs>>): Prisma__TB_roleClient<$Result.GetResult<Prisma.$TB_rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TB_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_roleCountArgs} args - Arguments to filter TB_roles to count.
     * @example
     * // Count the number of TB_roles
     * const count = await prisma.tB_role.count({
     *   where: {
     *     // ... the filter for the TB_roles we want to count
     *   }
     * })
    **/
    count<T extends TB_roleCountArgs>(
      args?: Subset<T, TB_roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TB_roleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TB_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_roleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TB_roleAggregateArgs>(args: Subset<T, TB_roleAggregateArgs>): Prisma.PrismaPromise<GetTB_roleAggregateType<T>>

    /**
     * Group by TB_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_roleGroupByArgs} args - Group by arguments.
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
      T extends TB_roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TB_roleGroupByArgs['orderBy'] }
        : { orderBy?: TB_roleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TB_roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTB_roleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TB_role model
   */
  readonly fields: TB_roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TB_role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TB_roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TB_user_role<T extends TB_role$TB_user_roleArgs<ExtArgs> = {}>(args?: Subset<T, TB_role$TB_user_roleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_user_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TB_role model
   */
  interface TB_roleFieldRefs {
    readonly id_role: FieldRef<"TB_role", 'Int'>
    readonly name: FieldRef<"TB_role", 'String'>
    readonly description: FieldRef<"TB_role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TB_role findUnique
   */
  export type TB_roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_role
     */
    select?: TB_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_role
     */
    omit?: TB_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_roleInclude<ExtArgs> | null
    /**
     * Filter, which TB_role to fetch.
     */
    where: TB_roleWhereUniqueInput
  }

  /**
   * TB_role findUniqueOrThrow
   */
  export type TB_roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_role
     */
    select?: TB_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_role
     */
    omit?: TB_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_roleInclude<ExtArgs> | null
    /**
     * Filter, which TB_role to fetch.
     */
    where: TB_roleWhereUniqueInput
  }

  /**
   * TB_role findFirst
   */
  export type TB_roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_role
     */
    select?: TB_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_role
     */
    omit?: TB_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_roleInclude<ExtArgs> | null
    /**
     * Filter, which TB_role to fetch.
     */
    where?: TB_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_roles to fetch.
     */
    orderBy?: TB_roleOrderByWithRelationInput | TB_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_roles.
     */
    cursor?: TB_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_roles.
     */
    distinct?: TB_roleScalarFieldEnum | TB_roleScalarFieldEnum[]
  }

  /**
   * TB_role findFirstOrThrow
   */
  export type TB_roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_role
     */
    select?: TB_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_role
     */
    omit?: TB_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_roleInclude<ExtArgs> | null
    /**
     * Filter, which TB_role to fetch.
     */
    where?: TB_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_roles to fetch.
     */
    orderBy?: TB_roleOrderByWithRelationInput | TB_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_roles.
     */
    cursor?: TB_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_roles.
     */
    distinct?: TB_roleScalarFieldEnum | TB_roleScalarFieldEnum[]
  }

  /**
   * TB_role findMany
   */
  export type TB_roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_role
     */
    select?: TB_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_role
     */
    omit?: TB_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_roleInclude<ExtArgs> | null
    /**
     * Filter, which TB_roles to fetch.
     */
    where?: TB_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_roles to fetch.
     */
    orderBy?: TB_roleOrderByWithRelationInput | TB_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TB_roles.
     */
    cursor?: TB_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_roles.
     */
    skip?: number
    distinct?: TB_roleScalarFieldEnum | TB_roleScalarFieldEnum[]
  }

  /**
   * TB_role create
   */
  export type TB_roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_role
     */
    select?: TB_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_role
     */
    omit?: TB_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_roleInclude<ExtArgs> | null
    /**
     * The data needed to create a TB_role.
     */
    data: XOR<TB_roleCreateInput, TB_roleUncheckedCreateInput>
  }

  /**
   * TB_role createMany
   */
  export type TB_roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TB_roles.
     */
    data: TB_roleCreateManyInput | TB_roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_role createManyAndReturn
   */
  export type TB_roleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_role
     */
    select?: TB_roleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_role
     */
    omit?: TB_roleOmit<ExtArgs> | null
    /**
     * The data used to create many TB_roles.
     */
    data: TB_roleCreateManyInput | TB_roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_role update
   */
  export type TB_roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_role
     */
    select?: TB_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_role
     */
    omit?: TB_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_roleInclude<ExtArgs> | null
    /**
     * The data needed to update a TB_role.
     */
    data: XOR<TB_roleUpdateInput, TB_roleUncheckedUpdateInput>
    /**
     * Choose, which TB_role to update.
     */
    where: TB_roleWhereUniqueInput
  }

  /**
   * TB_role updateMany
   */
  export type TB_roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TB_roles.
     */
    data: XOR<TB_roleUpdateManyMutationInput, TB_roleUncheckedUpdateManyInput>
    /**
     * Filter which TB_roles to update
     */
    where?: TB_roleWhereInput
    /**
     * Limit how many TB_roles to update.
     */
    limit?: number
  }

  /**
   * TB_role updateManyAndReturn
   */
  export type TB_roleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_role
     */
    select?: TB_roleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_role
     */
    omit?: TB_roleOmit<ExtArgs> | null
    /**
     * The data used to update TB_roles.
     */
    data: XOR<TB_roleUpdateManyMutationInput, TB_roleUncheckedUpdateManyInput>
    /**
     * Filter which TB_roles to update
     */
    where?: TB_roleWhereInput
    /**
     * Limit how many TB_roles to update.
     */
    limit?: number
  }

  /**
   * TB_role upsert
   */
  export type TB_roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_role
     */
    select?: TB_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_role
     */
    omit?: TB_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_roleInclude<ExtArgs> | null
    /**
     * The filter to search for the TB_role to update in case it exists.
     */
    where: TB_roleWhereUniqueInput
    /**
     * In case the TB_role found by the `where` argument doesn't exist, create a new TB_role with this data.
     */
    create: XOR<TB_roleCreateInput, TB_roleUncheckedCreateInput>
    /**
     * In case the TB_role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TB_roleUpdateInput, TB_roleUncheckedUpdateInput>
  }

  /**
   * TB_role delete
   */
  export type TB_roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_role
     */
    select?: TB_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_role
     */
    omit?: TB_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_roleInclude<ExtArgs> | null
    /**
     * Filter which TB_role to delete.
     */
    where: TB_roleWhereUniqueInput
  }

  /**
   * TB_role deleteMany
   */
  export type TB_roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_roles to delete
     */
    where?: TB_roleWhereInput
    /**
     * Limit how many TB_roles to delete.
     */
    limit?: number
  }

  /**
   * TB_role.TB_user_role
   */
  export type TB_role$TB_user_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_user_role
     */
    select?: TB_user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_user_role
     */
    omit?: TB_user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_user_roleInclude<ExtArgs> | null
    where?: TB_user_roleWhereInput
    orderBy?: TB_user_roleOrderByWithRelationInput | TB_user_roleOrderByWithRelationInput[]
    cursor?: TB_user_roleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TB_user_roleScalarFieldEnum | TB_user_roleScalarFieldEnum[]
  }

  /**
   * TB_role without action
   */
  export type TB_roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_role
     */
    select?: TB_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_role
     */
    omit?: TB_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_roleInclude<ExtArgs> | null
  }


  /**
   * Model TB_user_role
   */

  export type AggregateTB_user_role = {
    _count: TB_user_roleCountAggregateOutputType | null
    _avg: TB_user_roleAvgAggregateOutputType | null
    _sum: TB_user_roleSumAggregateOutputType | null
    _min: TB_user_roleMinAggregateOutputType | null
    _max: TB_user_roleMaxAggregateOutputType | null
  }

  export type TB_user_roleAvgAggregateOutputType = {
    id_user_role: number | null
    id_user: number | null
    id_role: number | null
  }

  export type TB_user_roleSumAggregateOutputType = {
    id_user_role: number | null
    id_user: number | null
    id_role: number | null
  }

  export type TB_user_roleMinAggregateOutputType = {
    id_user_role: number | null
    id_user: number | null
    id_role: number | null
  }

  export type TB_user_roleMaxAggregateOutputType = {
    id_user_role: number | null
    id_user: number | null
    id_role: number | null
  }

  export type TB_user_roleCountAggregateOutputType = {
    id_user_role: number
    id_user: number
    id_role: number
    _all: number
  }


  export type TB_user_roleAvgAggregateInputType = {
    id_user_role?: true
    id_user?: true
    id_role?: true
  }

  export type TB_user_roleSumAggregateInputType = {
    id_user_role?: true
    id_user?: true
    id_role?: true
  }

  export type TB_user_roleMinAggregateInputType = {
    id_user_role?: true
    id_user?: true
    id_role?: true
  }

  export type TB_user_roleMaxAggregateInputType = {
    id_user_role?: true
    id_user?: true
    id_role?: true
  }

  export type TB_user_roleCountAggregateInputType = {
    id_user_role?: true
    id_user?: true
    id_role?: true
    _all?: true
  }

  export type TB_user_roleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_user_role to aggregate.
     */
    where?: TB_user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_user_roles to fetch.
     */
    orderBy?: TB_user_roleOrderByWithRelationInput | TB_user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TB_user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TB_user_roles
    **/
    _count?: true | TB_user_roleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TB_user_roleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TB_user_roleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TB_user_roleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TB_user_roleMaxAggregateInputType
  }

  export type GetTB_user_roleAggregateType<T extends TB_user_roleAggregateArgs> = {
        [P in keyof T & keyof AggregateTB_user_role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTB_user_role[P]>
      : GetScalarType<T[P], AggregateTB_user_role[P]>
  }




  export type TB_user_roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_user_roleWhereInput
    orderBy?: TB_user_roleOrderByWithAggregationInput | TB_user_roleOrderByWithAggregationInput[]
    by: TB_user_roleScalarFieldEnum[] | TB_user_roleScalarFieldEnum
    having?: TB_user_roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TB_user_roleCountAggregateInputType | true
    _avg?: TB_user_roleAvgAggregateInputType
    _sum?: TB_user_roleSumAggregateInputType
    _min?: TB_user_roleMinAggregateInputType
    _max?: TB_user_roleMaxAggregateInputType
  }

  export type TB_user_roleGroupByOutputType = {
    id_user_role: number
    id_user: number
    id_role: number
    _count: TB_user_roleCountAggregateOutputType | null
    _avg: TB_user_roleAvgAggregateOutputType | null
    _sum: TB_user_roleSumAggregateOutputType | null
    _min: TB_user_roleMinAggregateOutputType | null
    _max: TB_user_roleMaxAggregateOutputType | null
  }

  type GetTB_user_roleGroupByPayload<T extends TB_user_roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TB_user_roleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TB_user_roleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TB_user_roleGroupByOutputType[P]>
            : GetScalarType<T[P], TB_user_roleGroupByOutputType[P]>
        }
      >
    >


  export type TB_user_roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user_role?: boolean
    id_user?: boolean
    id_role?: boolean
    TB_users?: boolean | TB_usersDefaultArgs<ExtArgs>
    TB_role?: boolean | TB_roleDefaultArgs<ExtArgs>
    TB_employees?: boolean | TB_user_role$TB_employeesArgs<ExtArgs>
    TB_client_membership?: boolean | TB_user_role$TB_client_membershipArgs<ExtArgs>
    _count?: boolean | TB_user_roleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_user_role"]>

  export type TB_user_roleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user_role?: boolean
    id_user?: boolean
    id_role?: boolean
    TB_users?: boolean | TB_usersDefaultArgs<ExtArgs>
    TB_role?: boolean | TB_roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_user_role"]>

  export type TB_user_roleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user_role?: boolean
    id_user?: boolean
    id_role?: boolean
    TB_users?: boolean | TB_usersDefaultArgs<ExtArgs>
    TB_role?: boolean | TB_roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_user_role"]>

  export type TB_user_roleSelectScalar = {
    id_user_role?: boolean
    id_user?: boolean
    id_role?: boolean
  }

  export type TB_user_roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user_role" | "id_user" | "id_role", ExtArgs["result"]["tB_user_role"]>
  export type TB_user_roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_users?: boolean | TB_usersDefaultArgs<ExtArgs>
    TB_role?: boolean | TB_roleDefaultArgs<ExtArgs>
    TB_employees?: boolean | TB_user_role$TB_employeesArgs<ExtArgs>
    TB_client_membership?: boolean | TB_user_role$TB_client_membershipArgs<ExtArgs>
    _count?: boolean | TB_user_roleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TB_user_roleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_users?: boolean | TB_usersDefaultArgs<ExtArgs>
    TB_role?: boolean | TB_roleDefaultArgs<ExtArgs>
  }
  export type TB_user_roleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_users?: boolean | TB_usersDefaultArgs<ExtArgs>
    TB_role?: boolean | TB_roleDefaultArgs<ExtArgs>
  }

  export type $TB_user_rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TB_user_role"
    objects: {
      TB_users: Prisma.$TB_usersPayload<ExtArgs>
      TB_role: Prisma.$TB_rolePayload<ExtArgs>
      TB_employees: Prisma.$TB_employeesPayload<ExtArgs>[]
      TB_client_membership: Prisma.$TB_client_membershipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user_role: number
      id_user: number
      id_role: number
    }, ExtArgs["result"]["tB_user_role"]>
    composites: {}
  }

  type TB_user_roleGetPayload<S extends boolean | null | undefined | TB_user_roleDefaultArgs> = $Result.GetResult<Prisma.$TB_user_rolePayload, S>

  type TB_user_roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TB_user_roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TB_user_roleCountAggregateInputType | true
    }

  export interface TB_user_roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TB_user_role'], meta: { name: 'TB_user_role' } }
    /**
     * Find zero or one TB_user_role that matches the filter.
     * @param {TB_user_roleFindUniqueArgs} args - Arguments to find a TB_user_role
     * @example
     * // Get one TB_user_role
     * const tB_user_role = await prisma.tB_user_role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TB_user_roleFindUniqueArgs>(args: SelectSubset<T, TB_user_roleFindUniqueArgs<ExtArgs>>): Prisma__TB_user_roleClient<$Result.GetResult<Prisma.$TB_user_rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TB_user_role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TB_user_roleFindUniqueOrThrowArgs} args - Arguments to find a TB_user_role
     * @example
     * // Get one TB_user_role
     * const tB_user_role = await prisma.tB_user_role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TB_user_roleFindUniqueOrThrowArgs>(args: SelectSubset<T, TB_user_roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TB_user_roleClient<$Result.GetResult<Prisma.$TB_user_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_user_role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_user_roleFindFirstArgs} args - Arguments to find a TB_user_role
     * @example
     * // Get one TB_user_role
     * const tB_user_role = await prisma.tB_user_role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TB_user_roleFindFirstArgs>(args?: SelectSubset<T, TB_user_roleFindFirstArgs<ExtArgs>>): Prisma__TB_user_roleClient<$Result.GetResult<Prisma.$TB_user_rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_user_role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_user_roleFindFirstOrThrowArgs} args - Arguments to find a TB_user_role
     * @example
     * // Get one TB_user_role
     * const tB_user_role = await prisma.tB_user_role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TB_user_roleFindFirstOrThrowArgs>(args?: SelectSubset<T, TB_user_roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__TB_user_roleClient<$Result.GetResult<Prisma.$TB_user_rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TB_user_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_user_roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TB_user_roles
     * const tB_user_roles = await prisma.tB_user_role.findMany()
     * 
     * // Get first 10 TB_user_roles
     * const tB_user_roles = await prisma.tB_user_role.findMany({ take: 10 })
     * 
     * // Only select the `id_user_role`
     * const tB_user_roleWithId_user_roleOnly = await prisma.tB_user_role.findMany({ select: { id_user_role: true } })
     * 
     */
    findMany<T extends TB_user_roleFindManyArgs>(args?: SelectSubset<T, TB_user_roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_user_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TB_user_role.
     * @param {TB_user_roleCreateArgs} args - Arguments to create a TB_user_role.
     * @example
     * // Create one TB_user_role
     * const TB_user_role = await prisma.tB_user_role.create({
     *   data: {
     *     // ... data to create a TB_user_role
     *   }
     * })
     * 
     */
    create<T extends TB_user_roleCreateArgs>(args: SelectSubset<T, TB_user_roleCreateArgs<ExtArgs>>): Prisma__TB_user_roleClient<$Result.GetResult<Prisma.$TB_user_rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TB_user_roles.
     * @param {TB_user_roleCreateManyArgs} args - Arguments to create many TB_user_roles.
     * @example
     * // Create many TB_user_roles
     * const tB_user_role = await prisma.tB_user_role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TB_user_roleCreateManyArgs>(args?: SelectSubset<T, TB_user_roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TB_user_roles and returns the data saved in the database.
     * @param {TB_user_roleCreateManyAndReturnArgs} args - Arguments to create many TB_user_roles.
     * @example
     * // Create many TB_user_roles
     * const tB_user_role = await prisma.tB_user_role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TB_user_roles and only return the `id_user_role`
     * const tB_user_roleWithId_user_roleOnly = await prisma.tB_user_role.createManyAndReturn({
     *   select: { id_user_role: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TB_user_roleCreateManyAndReturnArgs>(args?: SelectSubset<T, TB_user_roleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_user_rolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TB_user_role.
     * @param {TB_user_roleDeleteArgs} args - Arguments to delete one TB_user_role.
     * @example
     * // Delete one TB_user_role
     * const TB_user_role = await prisma.tB_user_role.delete({
     *   where: {
     *     // ... filter to delete one TB_user_role
     *   }
     * })
     * 
     */
    delete<T extends TB_user_roleDeleteArgs>(args: SelectSubset<T, TB_user_roleDeleteArgs<ExtArgs>>): Prisma__TB_user_roleClient<$Result.GetResult<Prisma.$TB_user_rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TB_user_role.
     * @param {TB_user_roleUpdateArgs} args - Arguments to update one TB_user_role.
     * @example
     * // Update one TB_user_role
     * const tB_user_role = await prisma.tB_user_role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TB_user_roleUpdateArgs>(args: SelectSubset<T, TB_user_roleUpdateArgs<ExtArgs>>): Prisma__TB_user_roleClient<$Result.GetResult<Prisma.$TB_user_rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TB_user_roles.
     * @param {TB_user_roleDeleteManyArgs} args - Arguments to filter TB_user_roles to delete.
     * @example
     * // Delete a few TB_user_roles
     * const { count } = await prisma.tB_user_role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TB_user_roleDeleteManyArgs>(args?: SelectSubset<T, TB_user_roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_user_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_user_roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TB_user_roles
     * const tB_user_role = await prisma.tB_user_role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TB_user_roleUpdateManyArgs>(args: SelectSubset<T, TB_user_roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_user_roles and returns the data updated in the database.
     * @param {TB_user_roleUpdateManyAndReturnArgs} args - Arguments to update many TB_user_roles.
     * @example
     * // Update many TB_user_roles
     * const tB_user_role = await prisma.tB_user_role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TB_user_roles and only return the `id_user_role`
     * const tB_user_roleWithId_user_roleOnly = await prisma.tB_user_role.updateManyAndReturn({
     *   select: { id_user_role: true },
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
    updateManyAndReturn<T extends TB_user_roleUpdateManyAndReturnArgs>(args: SelectSubset<T, TB_user_roleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_user_rolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TB_user_role.
     * @param {TB_user_roleUpsertArgs} args - Arguments to update or create a TB_user_role.
     * @example
     * // Update or create a TB_user_role
     * const tB_user_role = await prisma.tB_user_role.upsert({
     *   create: {
     *     // ... data to create a TB_user_role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TB_user_role we want to update
     *   }
     * })
     */
    upsert<T extends TB_user_roleUpsertArgs>(args: SelectSubset<T, TB_user_roleUpsertArgs<ExtArgs>>): Prisma__TB_user_roleClient<$Result.GetResult<Prisma.$TB_user_rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TB_user_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_user_roleCountArgs} args - Arguments to filter TB_user_roles to count.
     * @example
     * // Count the number of TB_user_roles
     * const count = await prisma.tB_user_role.count({
     *   where: {
     *     // ... the filter for the TB_user_roles we want to count
     *   }
     * })
    **/
    count<T extends TB_user_roleCountArgs>(
      args?: Subset<T, TB_user_roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TB_user_roleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TB_user_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_user_roleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TB_user_roleAggregateArgs>(args: Subset<T, TB_user_roleAggregateArgs>): Prisma.PrismaPromise<GetTB_user_roleAggregateType<T>>

    /**
     * Group by TB_user_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_user_roleGroupByArgs} args - Group by arguments.
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
      T extends TB_user_roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TB_user_roleGroupByArgs['orderBy'] }
        : { orderBy?: TB_user_roleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TB_user_roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTB_user_roleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TB_user_role model
   */
  readonly fields: TB_user_roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TB_user_role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TB_user_roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TB_users<T extends TB_usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TB_usersDefaultArgs<ExtArgs>>): Prisma__TB_usersClient<$Result.GetResult<Prisma.$TB_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    TB_role<T extends TB_roleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TB_roleDefaultArgs<ExtArgs>>): Prisma__TB_roleClient<$Result.GetResult<Prisma.$TB_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    TB_employees<T extends TB_user_role$TB_employeesArgs<ExtArgs> = {}>(args?: Subset<T, TB_user_role$TB_employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_employeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TB_client_membership<T extends TB_user_role$TB_client_membershipArgs<ExtArgs> = {}>(args?: Subset<T, TB_user_role$TB_client_membershipArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_client_membershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TB_user_role model
   */
  interface TB_user_roleFieldRefs {
    readonly id_user_role: FieldRef<"TB_user_role", 'Int'>
    readonly id_user: FieldRef<"TB_user_role", 'Int'>
    readonly id_role: FieldRef<"TB_user_role", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TB_user_role findUnique
   */
  export type TB_user_roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_user_role
     */
    select?: TB_user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_user_role
     */
    omit?: TB_user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_user_roleInclude<ExtArgs> | null
    /**
     * Filter, which TB_user_role to fetch.
     */
    where: TB_user_roleWhereUniqueInput
  }

  /**
   * TB_user_role findUniqueOrThrow
   */
  export type TB_user_roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_user_role
     */
    select?: TB_user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_user_role
     */
    omit?: TB_user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_user_roleInclude<ExtArgs> | null
    /**
     * Filter, which TB_user_role to fetch.
     */
    where: TB_user_roleWhereUniqueInput
  }

  /**
   * TB_user_role findFirst
   */
  export type TB_user_roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_user_role
     */
    select?: TB_user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_user_role
     */
    omit?: TB_user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_user_roleInclude<ExtArgs> | null
    /**
     * Filter, which TB_user_role to fetch.
     */
    where?: TB_user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_user_roles to fetch.
     */
    orderBy?: TB_user_roleOrderByWithRelationInput | TB_user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_user_roles.
     */
    cursor?: TB_user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_user_roles.
     */
    distinct?: TB_user_roleScalarFieldEnum | TB_user_roleScalarFieldEnum[]
  }

  /**
   * TB_user_role findFirstOrThrow
   */
  export type TB_user_roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_user_role
     */
    select?: TB_user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_user_role
     */
    omit?: TB_user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_user_roleInclude<ExtArgs> | null
    /**
     * Filter, which TB_user_role to fetch.
     */
    where?: TB_user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_user_roles to fetch.
     */
    orderBy?: TB_user_roleOrderByWithRelationInput | TB_user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_user_roles.
     */
    cursor?: TB_user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_user_roles.
     */
    distinct?: TB_user_roleScalarFieldEnum | TB_user_roleScalarFieldEnum[]
  }

  /**
   * TB_user_role findMany
   */
  export type TB_user_roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_user_role
     */
    select?: TB_user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_user_role
     */
    omit?: TB_user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_user_roleInclude<ExtArgs> | null
    /**
     * Filter, which TB_user_roles to fetch.
     */
    where?: TB_user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_user_roles to fetch.
     */
    orderBy?: TB_user_roleOrderByWithRelationInput | TB_user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TB_user_roles.
     */
    cursor?: TB_user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_user_roles.
     */
    skip?: number
    distinct?: TB_user_roleScalarFieldEnum | TB_user_roleScalarFieldEnum[]
  }

  /**
   * TB_user_role create
   */
  export type TB_user_roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_user_role
     */
    select?: TB_user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_user_role
     */
    omit?: TB_user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_user_roleInclude<ExtArgs> | null
    /**
     * The data needed to create a TB_user_role.
     */
    data: XOR<TB_user_roleCreateInput, TB_user_roleUncheckedCreateInput>
  }

  /**
   * TB_user_role createMany
   */
  export type TB_user_roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TB_user_roles.
     */
    data: TB_user_roleCreateManyInput | TB_user_roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_user_role createManyAndReturn
   */
  export type TB_user_roleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_user_role
     */
    select?: TB_user_roleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_user_role
     */
    omit?: TB_user_roleOmit<ExtArgs> | null
    /**
     * The data used to create many TB_user_roles.
     */
    data: TB_user_roleCreateManyInput | TB_user_roleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_user_roleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TB_user_role update
   */
  export type TB_user_roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_user_role
     */
    select?: TB_user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_user_role
     */
    omit?: TB_user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_user_roleInclude<ExtArgs> | null
    /**
     * The data needed to update a TB_user_role.
     */
    data: XOR<TB_user_roleUpdateInput, TB_user_roleUncheckedUpdateInput>
    /**
     * Choose, which TB_user_role to update.
     */
    where: TB_user_roleWhereUniqueInput
  }

  /**
   * TB_user_role updateMany
   */
  export type TB_user_roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TB_user_roles.
     */
    data: XOR<TB_user_roleUpdateManyMutationInput, TB_user_roleUncheckedUpdateManyInput>
    /**
     * Filter which TB_user_roles to update
     */
    where?: TB_user_roleWhereInput
    /**
     * Limit how many TB_user_roles to update.
     */
    limit?: number
  }

  /**
   * TB_user_role updateManyAndReturn
   */
  export type TB_user_roleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_user_role
     */
    select?: TB_user_roleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_user_role
     */
    omit?: TB_user_roleOmit<ExtArgs> | null
    /**
     * The data used to update TB_user_roles.
     */
    data: XOR<TB_user_roleUpdateManyMutationInput, TB_user_roleUncheckedUpdateManyInput>
    /**
     * Filter which TB_user_roles to update
     */
    where?: TB_user_roleWhereInput
    /**
     * Limit how many TB_user_roles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_user_roleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TB_user_role upsert
   */
  export type TB_user_roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_user_role
     */
    select?: TB_user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_user_role
     */
    omit?: TB_user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_user_roleInclude<ExtArgs> | null
    /**
     * The filter to search for the TB_user_role to update in case it exists.
     */
    where: TB_user_roleWhereUniqueInput
    /**
     * In case the TB_user_role found by the `where` argument doesn't exist, create a new TB_user_role with this data.
     */
    create: XOR<TB_user_roleCreateInput, TB_user_roleUncheckedCreateInput>
    /**
     * In case the TB_user_role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TB_user_roleUpdateInput, TB_user_roleUncheckedUpdateInput>
  }

  /**
   * TB_user_role delete
   */
  export type TB_user_roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_user_role
     */
    select?: TB_user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_user_role
     */
    omit?: TB_user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_user_roleInclude<ExtArgs> | null
    /**
     * Filter which TB_user_role to delete.
     */
    where: TB_user_roleWhereUniqueInput
  }

  /**
   * TB_user_role deleteMany
   */
  export type TB_user_roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_user_roles to delete
     */
    where?: TB_user_roleWhereInput
    /**
     * Limit how many TB_user_roles to delete.
     */
    limit?: number
  }

  /**
   * TB_user_role.TB_employees
   */
  export type TB_user_role$TB_employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_employees
     */
    select?: TB_employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_employees
     */
    omit?: TB_employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_employeesInclude<ExtArgs> | null
    where?: TB_employeesWhereInput
    orderBy?: TB_employeesOrderByWithRelationInput | TB_employeesOrderByWithRelationInput[]
    cursor?: TB_employeesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TB_employeesScalarFieldEnum | TB_employeesScalarFieldEnum[]
  }

  /**
   * TB_user_role.TB_client_membership
   */
  export type TB_user_role$TB_client_membershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_client_membership
     */
    select?: TB_client_membershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_client_membership
     */
    omit?: TB_client_membershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_client_membershipInclude<ExtArgs> | null
    where?: TB_client_membershipWhereInput
    orderBy?: TB_client_membershipOrderByWithRelationInput | TB_client_membershipOrderByWithRelationInput[]
    cursor?: TB_client_membershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TB_client_membershipScalarFieldEnum | TB_client_membershipScalarFieldEnum[]
  }

  /**
   * TB_user_role without action
   */
  export type TB_user_roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_user_role
     */
    select?: TB_user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_user_role
     */
    omit?: TB_user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_user_roleInclude<ExtArgs> | null
  }


  /**
   * Model TB_restriction
   */

  export type AggregateTB_restriction = {
    _count: TB_restrictionCountAggregateOutputType | null
    _avg: TB_restrictionAvgAggregateOutputType | null
    _sum: TB_restrictionSumAggregateOutputType | null
    _min: TB_restrictionMinAggregateOutputType | null
    _max: TB_restrictionMaxAggregateOutputType | null
  }

  export type TB_restrictionAvgAggregateOutputType = {
    id_restriction: number | null
    id_user: number | null
  }

  export type TB_restrictionSumAggregateOutputType = {
    id_restriction: number | null
    id_user: number | null
  }

  export type TB_restrictionMinAggregateOutputType = {
    id_restriction: number | null
    id_user: number | null
    description: string | null
  }

  export type TB_restrictionMaxAggregateOutputType = {
    id_restriction: number | null
    id_user: number | null
    description: string | null
  }

  export type TB_restrictionCountAggregateOutputType = {
    id_restriction: number
    id_user: number
    description: number
    _all: number
  }


  export type TB_restrictionAvgAggregateInputType = {
    id_restriction?: true
    id_user?: true
  }

  export type TB_restrictionSumAggregateInputType = {
    id_restriction?: true
    id_user?: true
  }

  export type TB_restrictionMinAggregateInputType = {
    id_restriction?: true
    id_user?: true
    description?: true
  }

  export type TB_restrictionMaxAggregateInputType = {
    id_restriction?: true
    id_user?: true
    description?: true
  }

  export type TB_restrictionCountAggregateInputType = {
    id_restriction?: true
    id_user?: true
    description?: true
    _all?: true
  }

  export type TB_restrictionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_restriction to aggregate.
     */
    where?: TB_restrictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_restrictions to fetch.
     */
    orderBy?: TB_restrictionOrderByWithRelationInput | TB_restrictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TB_restrictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_restrictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_restrictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TB_restrictions
    **/
    _count?: true | TB_restrictionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TB_restrictionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TB_restrictionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TB_restrictionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TB_restrictionMaxAggregateInputType
  }

  export type GetTB_restrictionAggregateType<T extends TB_restrictionAggregateArgs> = {
        [P in keyof T & keyof AggregateTB_restriction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTB_restriction[P]>
      : GetScalarType<T[P], AggregateTB_restriction[P]>
  }




  export type TB_restrictionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_restrictionWhereInput
    orderBy?: TB_restrictionOrderByWithAggregationInput | TB_restrictionOrderByWithAggregationInput[]
    by: TB_restrictionScalarFieldEnum[] | TB_restrictionScalarFieldEnum
    having?: TB_restrictionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TB_restrictionCountAggregateInputType | true
    _avg?: TB_restrictionAvgAggregateInputType
    _sum?: TB_restrictionSumAggregateInputType
    _min?: TB_restrictionMinAggregateInputType
    _max?: TB_restrictionMaxAggregateInputType
  }

  export type TB_restrictionGroupByOutputType = {
    id_restriction: number
    id_user: number
    description: string
    _count: TB_restrictionCountAggregateOutputType | null
    _avg: TB_restrictionAvgAggregateOutputType | null
    _sum: TB_restrictionSumAggregateOutputType | null
    _min: TB_restrictionMinAggregateOutputType | null
    _max: TB_restrictionMaxAggregateOutputType | null
  }

  type GetTB_restrictionGroupByPayload<T extends TB_restrictionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TB_restrictionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TB_restrictionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TB_restrictionGroupByOutputType[P]>
            : GetScalarType<T[P], TB_restrictionGroupByOutputType[P]>
        }
      >
    >


  export type TB_restrictionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_restriction?: boolean
    id_user?: boolean
    description?: boolean
    TB_users?: boolean | TB_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_restriction"]>

  export type TB_restrictionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_restriction?: boolean
    id_user?: boolean
    description?: boolean
    TB_users?: boolean | TB_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_restriction"]>

  export type TB_restrictionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_restriction?: boolean
    id_user?: boolean
    description?: boolean
    TB_users?: boolean | TB_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_restriction"]>

  export type TB_restrictionSelectScalar = {
    id_restriction?: boolean
    id_user?: boolean
    description?: boolean
  }

  export type TB_restrictionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_restriction" | "id_user" | "description", ExtArgs["result"]["tB_restriction"]>
  export type TB_restrictionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_users?: boolean | TB_usersDefaultArgs<ExtArgs>
  }
  export type TB_restrictionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_users?: boolean | TB_usersDefaultArgs<ExtArgs>
  }
  export type TB_restrictionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_users?: boolean | TB_usersDefaultArgs<ExtArgs>
  }

  export type $TB_restrictionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TB_restriction"
    objects: {
      TB_users: Prisma.$TB_usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_restriction: number
      id_user: number
      description: string
    }, ExtArgs["result"]["tB_restriction"]>
    composites: {}
  }

  type TB_restrictionGetPayload<S extends boolean | null | undefined | TB_restrictionDefaultArgs> = $Result.GetResult<Prisma.$TB_restrictionPayload, S>

  type TB_restrictionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TB_restrictionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TB_restrictionCountAggregateInputType | true
    }

  export interface TB_restrictionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TB_restriction'], meta: { name: 'TB_restriction' } }
    /**
     * Find zero or one TB_restriction that matches the filter.
     * @param {TB_restrictionFindUniqueArgs} args - Arguments to find a TB_restriction
     * @example
     * // Get one TB_restriction
     * const tB_restriction = await prisma.tB_restriction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TB_restrictionFindUniqueArgs>(args: SelectSubset<T, TB_restrictionFindUniqueArgs<ExtArgs>>): Prisma__TB_restrictionClient<$Result.GetResult<Prisma.$TB_restrictionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TB_restriction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TB_restrictionFindUniqueOrThrowArgs} args - Arguments to find a TB_restriction
     * @example
     * // Get one TB_restriction
     * const tB_restriction = await prisma.tB_restriction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TB_restrictionFindUniqueOrThrowArgs>(args: SelectSubset<T, TB_restrictionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TB_restrictionClient<$Result.GetResult<Prisma.$TB_restrictionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_restriction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_restrictionFindFirstArgs} args - Arguments to find a TB_restriction
     * @example
     * // Get one TB_restriction
     * const tB_restriction = await prisma.tB_restriction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TB_restrictionFindFirstArgs>(args?: SelectSubset<T, TB_restrictionFindFirstArgs<ExtArgs>>): Prisma__TB_restrictionClient<$Result.GetResult<Prisma.$TB_restrictionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_restriction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_restrictionFindFirstOrThrowArgs} args - Arguments to find a TB_restriction
     * @example
     * // Get one TB_restriction
     * const tB_restriction = await prisma.tB_restriction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TB_restrictionFindFirstOrThrowArgs>(args?: SelectSubset<T, TB_restrictionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TB_restrictionClient<$Result.GetResult<Prisma.$TB_restrictionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TB_restrictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_restrictionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TB_restrictions
     * const tB_restrictions = await prisma.tB_restriction.findMany()
     * 
     * // Get first 10 TB_restrictions
     * const tB_restrictions = await prisma.tB_restriction.findMany({ take: 10 })
     * 
     * // Only select the `id_restriction`
     * const tB_restrictionWithId_restrictionOnly = await prisma.tB_restriction.findMany({ select: { id_restriction: true } })
     * 
     */
    findMany<T extends TB_restrictionFindManyArgs>(args?: SelectSubset<T, TB_restrictionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_restrictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TB_restriction.
     * @param {TB_restrictionCreateArgs} args - Arguments to create a TB_restriction.
     * @example
     * // Create one TB_restriction
     * const TB_restriction = await prisma.tB_restriction.create({
     *   data: {
     *     // ... data to create a TB_restriction
     *   }
     * })
     * 
     */
    create<T extends TB_restrictionCreateArgs>(args: SelectSubset<T, TB_restrictionCreateArgs<ExtArgs>>): Prisma__TB_restrictionClient<$Result.GetResult<Prisma.$TB_restrictionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TB_restrictions.
     * @param {TB_restrictionCreateManyArgs} args - Arguments to create many TB_restrictions.
     * @example
     * // Create many TB_restrictions
     * const tB_restriction = await prisma.tB_restriction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TB_restrictionCreateManyArgs>(args?: SelectSubset<T, TB_restrictionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TB_restrictions and returns the data saved in the database.
     * @param {TB_restrictionCreateManyAndReturnArgs} args - Arguments to create many TB_restrictions.
     * @example
     * // Create many TB_restrictions
     * const tB_restriction = await prisma.tB_restriction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TB_restrictions and only return the `id_restriction`
     * const tB_restrictionWithId_restrictionOnly = await prisma.tB_restriction.createManyAndReturn({
     *   select: { id_restriction: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TB_restrictionCreateManyAndReturnArgs>(args?: SelectSubset<T, TB_restrictionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_restrictionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TB_restriction.
     * @param {TB_restrictionDeleteArgs} args - Arguments to delete one TB_restriction.
     * @example
     * // Delete one TB_restriction
     * const TB_restriction = await prisma.tB_restriction.delete({
     *   where: {
     *     // ... filter to delete one TB_restriction
     *   }
     * })
     * 
     */
    delete<T extends TB_restrictionDeleteArgs>(args: SelectSubset<T, TB_restrictionDeleteArgs<ExtArgs>>): Prisma__TB_restrictionClient<$Result.GetResult<Prisma.$TB_restrictionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TB_restriction.
     * @param {TB_restrictionUpdateArgs} args - Arguments to update one TB_restriction.
     * @example
     * // Update one TB_restriction
     * const tB_restriction = await prisma.tB_restriction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TB_restrictionUpdateArgs>(args: SelectSubset<T, TB_restrictionUpdateArgs<ExtArgs>>): Prisma__TB_restrictionClient<$Result.GetResult<Prisma.$TB_restrictionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TB_restrictions.
     * @param {TB_restrictionDeleteManyArgs} args - Arguments to filter TB_restrictions to delete.
     * @example
     * // Delete a few TB_restrictions
     * const { count } = await prisma.tB_restriction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TB_restrictionDeleteManyArgs>(args?: SelectSubset<T, TB_restrictionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_restrictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_restrictionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TB_restrictions
     * const tB_restriction = await prisma.tB_restriction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TB_restrictionUpdateManyArgs>(args: SelectSubset<T, TB_restrictionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_restrictions and returns the data updated in the database.
     * @param {TB_restrictionUpdateManyAndReturnArgs} args - Arguments to update many TB_restrictions.
     * @example
     * // Update many TB_restrictions
     * const tB_restriction = await prisma.tB_restriction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TB_restrictions and only return the `id_restriction`
     * const tB_restrictionWithId_restrictionOnly = await prisma.tB_restriction.updateManyAndReturn({
     *   select: { id_restriction: true },
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
    updateManyAndReturn<T extends TB_restrictionUpdateManyAndReturnArgs>(args: SelectSubset<T, TB_restrictionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_restrictionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TB_restriction.
     * @param {TB_restrictionUpsertArgs} args - Arguments to update or create a TB_restriction.
     * @example
     * // Update or create a TB_restriction
     * const tB_restriction = await prisma.tB_restriction.upsert({
     *   create: {
     *     // ... data to create a TB_restriction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TB_restriction we want to update
     *   }
     * })
     */
    upsert<T extends TB_restrictionUpsertArgs>(args: SelectSubset<T, TB_restrictionUpsertArgs<ExtArgs>>): Prisma__TB_restrictionClient<$Result.GetResult<Prisma.$TB_restrictionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TB_restrictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_restrictionCountArgs} args - Arguments to filter TB_restrictions to count.
     * @example
     * // Count the number of TB_restrictions
     * const count = await prisma.tB_restriction.count({
     *   where: {
     *     // ... the filter for the TB_restrictions we want to count
     *   }
     * })
    **/
    count<T extends TB_restrictionCountArgs>(
      args?: Subset<T, TB_restrictionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TB_restrictionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TB_restriction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_restrictionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TB_restrictionAggregateArgs>(args: Subset<T, TB_restrictionAggregateArgs>): Prisma.PrismaPromise<GetTB_restrictionAggregateType<T>>

    /**
     * Group by TB_restriction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_restrictionGroupByArgs} args - Group by arguments.
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
      T extends TB_restrictionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TB_restrictionGroupByArgs['orderBy'] }
        : { orderBy?: TB_restrictionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TB_restrictionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTB_restrictionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TB_restriction model
   */
  readonly fields: TB_restrictionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TB_restriction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TB_restrictionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TB_users<T extends TB_usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TB_usersDefaultArgs<ExtArgs>>): Prisma__TB_usersClient<$Result.GetResult<Prisma.$TB_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TB_restriction model
   */
  interface TB_restrictionFieldRefs {
    readonly id_restriction: FieldRef<"TB_restriction", 'Int'>
    readonly id_user: FieldRef<"TB_restriction", 'Int'>
    readonly description: FieldRef<"TB_restriction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TB_restriction findUnique
   */
  export type TB_restrictionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_restriction
     */
    select?: TB_restrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_restriction
     */
    omit?: TB_restrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_restrictionInclude<ExtArgs> | null
    /**
     * Filter, which TB_restriction to fetch.
     */
    where: TB_restrictionWhereUniqueInput
  }

  /**
   * TB_restriction findUniqueOrThrow
   */
  export type TB_restrictionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_restriction
     */
    select?: TB_restrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_restriction
     */
    omit?: TB_restrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_restrictionInclude<ExtArgs> | null
    /**
     * Filter, which TB_restriction to fetch.
     */
    where: TB_restrictionWhereUniqueInput
  }

  /**
   * TB_restriction findFirst
   */
  export type TB_restrictionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_restriction
     */
    select?: TB_restrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_restriction
     */
    omit?: TB_restrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_restrictionInclude<ExtArgs> | null
    /**
     * Filter, which TB_restriction to fetch.
     */
    where?: TB_restrictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_restrictions to fetch.
     */
    orderBy?: TB_restrictionOrderByWithRelationInput | TB_restrictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_restrictions.
     */
    cursor?: TB_restrictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_restrictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_restrictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_restrictions.
     */
    distinct?: TB_restrictionScalarFieldEnum | TB_restrictionScalarFieldEnum[]
  }

  /**
   * TB_restriction findFirstOrThrow
   */
  export type TB_restrictionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_restriction
     */
    select?: TB_restrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_restriction
     */
    omit?: TB_restrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_restrictionInclude<ExtArgs> | null
    /**
     * Filter, which TB_restriction to fetch.
     */
    where?: TB_restrictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_restrictions to fetch.
     */
    orderBy?: TB_restrictionOrderByWithRelationInput | TB_restrictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_restrictions.
     */
    cursor?: TB_restrictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_restrictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_restrictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_restrictions.
     */
    distinct?: TB_restrictionScalarFieldEnum | TB_restrictionScalarFieldEnum[]
  }

  /**
   * TB_restriction findMany
   */
  export type TB_restrictionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_restriction
     */
    select?: TB_restrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_restriction
     */
    omit?: TB_restrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_restrictionInclude<ExtArgs> | null
    /**
     * Filter, which TB_restrictions to fetch.
     */
    where?: TB_restrictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_restrictions to fetch.
     */
    orderBy?: TB_restrictionOrderByWithRelationInput | TB_restrictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TB_restrictions.
     */
    cursor?: TB_restrictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_restrictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_restrictions.
     */
    skip?: number
    distinct?: TB_restrictionScalarFieldEnum | TB_restrictionScalarFieldEnum[]
  }

  /**
   * TB_restriction create
   */
  export type TB_restrictionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_restriction
     */
    select?: TB_restrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_restriction
     */
    omit?: TB_restrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_restrictionInclude<ExtArgs> | null
    /**
     * The data needed to create a TB_restriction.
     */
    data: XOR<TB_restrictionCreateInput, TB_restrictionUncheckedCreateInput>
  }

  /**
   * TB_restriction createMany
   */
  export type TB_restrictionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TB_restrictions.
     */
    data: TB_restrictionCreateManyInput | TB_restrictionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_restriction createManyAndReturn
   */
  export type TB_restrictionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_restriction
     */
    select?: TB_restrictionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_restriction
     */
    omit?: TB_restrictionOmit<ExtArgs> | null
    /**
     * The data used to create many TB_restrictions.
     */
    data: TB_restrictionCreateManyInput | TB_restrictionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_restrictionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TB_restriction update
   */
  export type TB_restrictionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_restriction
     */
    select?: TB_restrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_restriction
     */
    omit?: TB_restrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_restrictionInclude<ExtArgs> | null
    /**
     * The data needed to update a TB_restriction.
     */
    data: XOR<TB_restrictionUpdateInput, TB_restrictionUncheckedUpdateInput>
    /**
     * Choose, which TB_restriction to update.
     */
    where: TB_restrictionWhereUniqueInput
  }

  /**
   * TB_restriction updateMany
   */
  export type TB_restrictionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TB_restrictions.
     */
    data: XOR<TB_restrictionUpdateManyMutationInput, TB_restrictionUncheckedUpdateManyInput>
    /**
     * Filter which TB_restrictions to update
     */
    where?: TB_restrictionWhereInput
    /**
     * Limit how many TB_restrictions to update.
     */
    limit?: number
  }

  /**
   * TB_restriction updateManyAndReturn
   */
  export type TB_restrictionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_restriction
     */
    select?: TB_restrictionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_restriction
     */
    omit?: TB_restrictionOmit<ExtArgs> | null
    /**
     * The data used to update TB_restrictions.
     */
    data: XOR<TB_restrictionUpdateManyMutationInput, TB_restrictionUncheckedUpdateManyInput>
    /**
     * Filter which TB_restrictions to update
     */
    where?: TB_restrictionWhereInput
    /**
     * Limit how many TB_restrictions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_restrictionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TB_restriction upsert
   */
  export type TB_restrictionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_restriction
     */
    select?: TB_restrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_restriction
     */
    omit?: TB_restrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_restrictionInclude<ExtArgs> | null
    /**
     * The filter to search for the TB_restriction to update in case it exists.
     */
    where: TB_restrictionWhereUniqueInput
    /**
     * In case the TB_restriction found by the `where` argument doesn't exist, create a new TB_restriction with this data.
     */
    create: XOR<TB_restrictionCreateInput, TB_restrictionUncheckedCreateInput>
    /**
     * In case the TB_restriction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TB_restrictionUpdateInput, TB_restrictionUncheckedUpdateInput>
  }

  /**
   * TB_restriction delete
   */
  export type TB_restrictionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_restriction
     */
    select?: TB_restrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_restriction
     */
    omit?: TB_restrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_restrictionInclude<ExtArgs> | null
    /**
     * Filter which TB_restriction to delete.
     */
    where: TB_restrictionWhereUniqueInput
  }

  /**
   * TB_restriction deleteMany
   */
  export type TB_restrictionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_restrictions to delete
     */
    where?: TB_restrictionWhereInput
    /**
     * Limit how many TB_restrictions to delete.
     */
    limit?: number
  }

  /**
   * TB_restriction without action
   */
  export type TB_restrictionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_restriction
     */
    select?: TB_restrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_restriction
     */
    omit?: TB_restrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_restrictionInclude<ExtArgs> | null
  }


  /**
   * Model TB_employees
   */

  export type AggregateTB_employees = {
    _count: TB_employeesCountAggregateOutputType | null
    _avg: TB_employeesAvgAggregateOutputType | null
    _sum: TB_employeesSumAggregateOutputType | null
    _min: TB_employeesMinAggregateOutputType | null
    _max: TB_employeesMaxAggregateOutputType | null
  }

  export type TB_employeesAvgAggregateOutputType = {
    id: number | null
    id_user_role: number | null
  }

  export type TB_employeesSumAggregateOutputType = {
    id: number | null
    id_user_role: number | null
  }

  export type TB_employeesMinAggregateOutputType = {
    id: number | null
    id_user_role: number | null
    bio: string | null
    specialization: string | null
    date_entry: Date | null
  }

  export type TB_employeesMaxAggregateOutputType = {
    id: number | null
    id_user_role: number | null
    bio: string | null
    specialization: string | null
    date_entry: Date | null
  }

  export type TB_employeesCountAggregateOutputType = {
    id: number
    id_user_role: number
    bio: number
    specialization: number
    date_entry: number
    _all: number
  }


  export type TB_employeesAvgAggregateInputType = {
    id?: true
    id_user_role?: true
  }

  export type TB_employeesSumAggregateInputType = {
    id?: true
    id_user_role?: true
  }

  export type TB_employeesMinAggregateInputType = {
    id?: true
    id_user_role?: true
    bio?: true
    specialization?: true
    date_entry?: true
  }

  export type TB_employeesMaxAggregateInputType = {
    id?: true
    id_user_role?: true
    bio?: true
    specialization?: true
    date_entry?: true
  }

  export type TB_employeesCountAggregateInputType = {
    id?: true
    id_user_role?: true
    bio?: true
    specialization?: true
    date_entry?: true
    _all?: true
  }

  export type TB_employeesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_employees to aggregate.
     */
    where?: TB_employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_employees to fetch.
     */
    orderBy?: TB_employeesOrderByWithRelationInput | TB_employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TB_employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TB_employees
    **/
    _count?: true | TB_employeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TB_employeesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TB_employeesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TB_employeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TB_employeesMaxAggregateInputType
  }

  export type GetTB_employeesAggregateType<T extends TB_employeesAggregateArgs> = {
        [P in keyof T & keyof AggregateTB_employees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTB_employees[P]>
      : GetScalarType<T[P], AggregateTB_employees[P]>
  }




  export type TB_employeesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_employeesWhereInput
    orderBy?: TB_employeesOrderByWithAggregationInput | TB_employeesOrderByWithAggregationInput[]
    by: TB_employeesScalarFieldEnum[] | TB_employeesScalarFieldEnum
    having?: TB_employeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TB_employeesCountAggregateInputType | true
    _avg?: TB_employeesAvgAggregateInputType
    _sum?: TB_employeesSumAggregateInputType
    _min?: TB_employeesMinAggregateInputType
    _max?: TB_employeesMaxAggregateInputType
  }

  export type TB_employeesGroupByOutputType = {
    id: number
    id_user_role: number
    bio: string
    specialization: string
    date_entry: Date
    _count: TB_employeesCountAggregateOutputType | null
    _avg: TB_employeesAvgAggregateOutputType | null
    _sum: TB_employeesSumAggregateOutputType | null
    _min: TB_employeesMinAggregateOutputType | null
    _max: TB_employeesMaxAggregateOutputType | null
  }

  type GetTB_employeesGroupByPayload<T extends TB_employeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TB_employeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TB_employeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TB_employeesGroupByOutputType[P]>
            : GetScalarType<T[P], TB_employeesGroupByOutputType[P]>
        }
      >
    >


  export type TB_employeesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user_role?: boolean
    bio?: boolean
    specialization?: boolean
    date_entry?: boolean
    TB_user_role?: boolean | TB_user_roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_employees"]>

  export type TB_employeesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user_role?: boolean
    bio?: boolean
    specialization?: boolean
    date_entry?: boolean
    TB_user_role?: boolean | TB_user_roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_employees"]>

  export type TB_employeesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user_role?: boolean
    bio?: boolean
    specialization?: boolean
    date_entry?: boolean
    TB_user_role?: boolean | TB_user_roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_employees"]>

  export type TB_employeesSelectScalar = {
    id?: boolean
    id_user_role?: boolean
    bio?: boolean
    specialization?: boolean
    date_entry?: boolean
  }

  export type TB_employeesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_user_role" | "bio" | "specialization" | "date_entry", ExtArgs["result"]["tB_employees"]>
  export type TB_employeesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_user_role?: boolean | TB_user_roleDefaultArgs<ExtArgs>
  }
  export type TB_employeesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_user_role?: boolean | TB_user_roleDefaultArgs<ExtArgs>
  }
  export type TB_employeesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_user_role?: boolean | TB_user_roleDefaultArgs<ExtArgs>
  }

  export type $TB_employeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TB_employees"
    objects: {
      TB_user_role: Prisma.$TB_user_rolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_user_role: number
      bio: string
      specialization: string
      date_entry: Date
    }, ExtArgs["result"]["tB_employees"]>
    composites: {}
  }

  type TB_employeesGetPayload<S extends boolean | null | undefined | TB_employeesDefaultArgs> = $Result.GetResult<Prisma.$TB_employeesPayload, S>

  type TB_employeesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TB_employeesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TB_employeesCountAggregateInputType | true
    }

  export interface TB_employeesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TB_employees'], meta: { name: 'TB_employees' } }
    /**
     * Find zero or one TB_employees that matches the filter.
     * @param {TB_employeesFindUniqueArgs} args - Arguments to find a TB_employees
     * @example
     * // Get one TB_employees
     * const tB_employees = await prisma.tB_employees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TB_employeesFindUniqueArgs>(args: SelectSubset<T, TB_employeesFindUniqueArgs<ExtArgs>>): Prisma__TB_employeesClient<$Result.GetResult<Prisma.$TB_employeesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TB_employees that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TB_employeesFindUniqueOrThrowArgs} args - Arguments to find a TB_employees
     * @example
     * // Get one TB_employees
     * const tB_employees = await prisma.tB_employees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TB_employeesFindUniqueOrThrowArgs>(args: SelectSubset<T, TB_employeesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TB_employeesClient<$Result.GetResult<Prisma.$TB_employeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_employeesFindFirstArgs} args - Arguments to find a TB_employees
     * @example
     * // Get one TB_employees
     * const tB_employees = await prisma.tB_employees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TB_employeesFindFirstArgs>(args?: SelectSubset<T, TB_employeesFindFirstArgs<ExtArgs>>): Prisma__TB_employeesClient<$Result.GetResult<Prisma.$TB_employeesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_employees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_employeesFindFirstOrThrowArgs} args - Arguments to find a TB_employees
     * @example
     * // Get one TB_employees
     * const tB_employees = await prisma.tB_employees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TB_employeesFindFirstOrThrowArgs>(args?: SelectSubset<T, TB_employeesFindFirstOrThrowArgs<ExtArgs>>): Prisma__TB_employeesClient<$Result.GetResult<Prisma.$TB_employeesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TB_employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_employeesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TB_employees
     * const tB_employees = await prisma.tB_employees.findMany()
     * 
     * // Get first 10 TB_employees
     * const tB_employees = await prisma.tB_employees.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tB_employeesWithIdOnly = await prisma.tB_employees.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TB_employeesFindManyArgs>(args?: SelectSubset<T, TB_employeesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_employeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TB_employees.
     * @param {TB_employeesCreateArgs} args - Arguments to create a TB_employees.
     * @example
     * // Create one TB_employees
     * const TB_employees = await prisma.tB_employees.create({
     *   data: {
     *     // ... data to create a TB_employees
     *   }
     * })
     * 
     */
    create<T extends TB_employeesCreateArgs>(args: SelectSubset<T, TB_employeesCreateArgs<ExtArgs>>): Prisma__TB_employeesClient<$Result.GetResult<Prisma.$TB_employeesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TB_employees.
     * @param {TB_employeesCreateManyArgs} args - Arguments to create many TB_employees.
     * @example
     * // Create many TB_employees
     * const tB_employees = await prisma.tB_employees.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TB_employeesCreateManyArgs>(args?: SelectSubset<T, TB_employeesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TB_employees and returns the data saved in the database.
     * @param {TB_employeesCreateManyAndReturnArgs} args - Arguments to create many TB_employees.
     * @example
     * // Create many TB_employees
     * const tB_employees = await prisma.tB_employees.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TB_employees and only return the `id`
     * const tB_employeesWithIdOnly = await prisma.tB_employees.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TB_employeesCreateManyAndReturnArgs>(args?: SelectSubset<T, TB_employeesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_employeesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TB_employees.
     * @param {TB_employeesDeleteArgs} args - Arguments to delete one TB_employees.
     * @example
     * // Delete one TB_employees
     * const TB_employees = await prisma.tB_employees.delete({
     *   where: {
     *     // ... filter to delete one TB_employees
     *   }
     * })
     * 
     */
    delete<T extends TB_employeesDeleteArgs>(args: SelectSubset<T, TB_employeesDeleteArgs<ExtArgs>>): Prisma__TB_employeesClient<$Result.GetResult<Prisma.$TB_employeesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TB_employees.
     * @param {TB_employeesUpdateArgs} args - Arguments to update one TB_employees.
     * @example
     * // Update one TB_employees
     * const tB_employees = await prisma.tB_employees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TB_employeesUpdateArgs>(args: SelectSubset<T, TB_employeesUpdateArgs<ExtArgs>>): Prisma__TB_employeesClient<$Result.GetResult<Prisma.$TB_employeesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TB_employees.
     * @param {TB_employeesDeleteManyArgs} args - Arguments to filter TB_employees to delete.
     * @example
     * // Delete a few TB_employees
     * const { count } = await prisma.tB_employees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TB_employeesDeleteManyArgs>(args?: SelectSubset<T, TB_employeesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_employeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TB_employees
     * const tB_employees = await prisma.tB_employees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TB_employeesUpdateManyArgs>(args: SelectSubset<T, TB_employeesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_employees and returns the data updated in the database.
     * @param {TB_employeesUpdateManyAndReturnArgs} args - Arguments to update many TB_employees.
     * @example
     * // Update many TB_employees
     * const tB_employees = await prisma.tB_employees.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TB_employees and only return the `id`
     * const tB_employeesWithIdOnly = await prisma.tB_employees.updateManyAndReturn({
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
    updateManyAndReturn<T extends TB_employeesUpdateManyAndReturnArgs>(args: SelectSubset<T, TB_employeesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_employeesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TB_employees.
     * @param {TB_employeesUpsertArgs} args - Arguments to update or create a TB_employees.
     * @example
     * // Update or create a TB_employees
     * const tB_employees = await prisma.tB_employees.upsert({
     *   create: {
     *     // ... data to create a TB_employees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TB_employees we want to update
     *   }
     * })
     */
    upsert<T extends TB_employeesUpsertArgs>(args: SelectSubset<T, TB_employeesUpsertArgs<ExtArgs>>): Prisma__TB_employeesClient<$Result.GetResult<Prisma.$TB_employeesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TB_employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_employeesCountArgs} args - Arguments to filter TB_employees to count.
     * @example
     * // Count the number of TB_employees
     * const count = await prisma.tB_employees.count({
     *   where: {
     *     // ... the filter for the TB_employees we want to count
     *   }
     * })
    **/
    count<T extends TB_employeesCountArgs>(
      args?: Subset<T, TB_employeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TB_employeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TB_employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_employeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TB_employeesAggregateArgs>(args: Subset<T, TB_employeesAggregateArgs>): Prisma.PrismaPromise<GetTB_employeesAggregateType<T>>

    /**
     * Group by TB_employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_employeesGroupByArgs} args - Group by arguments.
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
      T extends TB_employeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TB_employeesGroupByArgs['orderBy'] }
        : { orderBy?: TB_employeesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TB_employeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTB_employeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TB_employees model
   */
  readonly fields: TB_employeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TB_employees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TB_employeesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TB_user_role<T extends TB_user_roleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TB_user_roleDefaultArgs<ExtArgs>>): Prisma__TB_user_roleClient<$Result.GetResult<Prisma.$TB_user_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TB_employees model
   */
  interface TB_employeesFieldRefs {
    readonly id: FieldRef<"TB_employees", 'Int'>
    readonly id_user_role: FieldRef<"TB_employees", 'Int'>
    readonly bio: FieldRef<"TB_employees", 'String'>
    readonly specialization: FieldRef<"TB_employees", 'String'>
    readonly date_entry: FieldRef<"TB_employees", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TB_employees findUnique
   */
  export type TB_employeesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_employees
     */
    select?: TB_employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_employees
     */
    omit?: TB_employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_employeesInclude<ExtArgs> | null
    /**
     * Filter, which TB_employees to fetch.
     */
    where: TB_employeesWhereUniqueInput
  }

  /**
   * TB_employees findUniqueOrThrow
   */
  export type TB_employeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_employees
     */
    select?: TB_employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_employees
     */
    omit?: TB_employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_employeesInclude<ExtArgs> | null
    /**
     * Filter, which TB_employees to fetch.
     */
    where: TB_employeesWhereUniqueInput
  }

  /**
   * TB_employees findFirst
   */
  export type TB_employeesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_employees
     */
    select?: TB_employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_employees
     */
    omit?: TB_employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_employeesInclude<ExtArgs> | null
    /**
     * Filter, which TB_employees to fetch.
     */
    where?: TB_employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_employees to fetch.
     */
    orderBy?: TB_employeesOrderByWithRelationInput | TB_employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_employees.
     */
    cursor?: TB_employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_employees.
     */
    distinct?: TB_employeesScalarFieldEnum | TB_employeesScalarFieldEnum[]
  }

  /**
   * TB_employees findFirstOrThrow
   */
  export type TB_employeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_employees
     */
    select?: TB_employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_employees
     */
    omit?: TB_employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_employeesInclude<ExtArgs> | null
    /**
     * Filter, which TB_employees to fetch.
     */
    where?: TB_employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_employees to fetch.
     */
    orderBy?: TB_employeesOrderByWithRelationInput | TB_employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_employees.
     */
    cursor?: TB_employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_employees.
     */
    distinct?: TB_employeesScalarFieldEnum | TB_employeesScalarFieldEnum[]
  }

  /**
   * TB_employees findMany
   */
  export type TB_employeesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_employees
     */
    select?: TB_employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_employees
     */
    omit?: TB_employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_employeesInclude<ExtArgs> | null
    /**
     * Filter, which TB_employees to fetch.
     */
    where?: TB_employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_employees to fetch.
     */
    orderBy?: TB_employeesOrderByWithRelationInput | TB_employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TB_employees.
     */
    cursor?: TB_employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_employees.
     */
    skip?: number
    distinct?: TB_employeesScalarFieldEnum | TB_employeesScalarFieldEnum[]
  }

  /**
   * TB_employees create
   */
  export type TB_employeesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_employees
     */
    select?: TB_employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_employees
     */
    omit?: TB_employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_employeesInclude<ExtArgs> | null
    /**
     * The data needed to create a TB_employees.
     */
    data: XOR<TB_employeesCreateInput, TB_employeesUncheckedCreateInput>
  }

  /**
   * TB_employees createMany
   */
  export type TB_employeesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TB_employees.
     */
    data: TB_employeesCreateManyInput | TB_employeesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_employees createManyAndReturn
   */
  export type TB_employeesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_employees
     */
    select?: TB_employeesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_employees
     */
    omit?: TB_employeesOmit<ExtArgs> | null
    /**
     * The data used to create many TB_employees.
     */
    data: TB_employeesCreateManyInput | TB_employeesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_employeesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TB_employees update
   */
  export type TB_employeesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_employees
     */
    select?: TB_employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_employees
     */
    omit?: TB_employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_employeesInclude<ExtArgs> | null
    /**
     * The data needed to update a TB_employees.
     */
    data: XOR<TB_employeesUpdateInput, TB_employeesUncheckedUpdateInput>
    /**
     * Choose, which TB_employees to update.
     */
    where: TB_employeesWhereUniqueInput
  }

  /**
   * TB_employees updateMany
   */
  export type TB_employeesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TB_employees.
     */
    data: XOR<TB_employeesUpdateManyMutationInput, TB_employeesUncheckedUpdateManyInput>
    /**
     * Filter which TB_employees to update
     */
    where?: TB_employeesWhereInput
    /**
     * Limit how many TB_employees to update.
     */
    limit?: number
  }

  /**
   * TB_employees updateManyAndReturn
   */
  export type TB_employeesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_employees
     */
    select?: TB_employeesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_employees
     */
    omit?: TB_employeesOmit<ExtArgs> | null
    /**
     * The data used to update TB_employees.
     */
    data: XOR<TB_employeesUpdateManyMutationInput, TB_employeesUncheckedUpdateManyInput>
    /**
     * Filter which TB_employees to update
     */
    where?: TB_employeesWhereInput
    /**
     * Limit how many TB_employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_employeesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TB_employees upsert
   */
  export type TB_employeesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_employees
     */
    select?: TB_employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_employees
     */
    omit?: TB_employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_employeesInclude<ExtArgs> | null
    /**
     * The filter to search for the TB_employees to update in case it exists.
     */
    where: TB_employeesWhereUniqueInput
    /**
     * In case the TB_employees found by the `where` argument doesn't exist, create a new TB_employees with this data.
     */
    create: XOR<TB_employeesCreateInput, TB_employeesUncheckedCreateInput>
    /**
     * In case the TB_employees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TB_employeesUpdateInput, TB_employeesUncheckedUpdateInput>
  }

  /**
   * TB_employees delete
   */
  export type TB_employeesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_employees
     */
    select?: TB_employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_employees
     */
    omit?: TB_employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_employeesInclude<ExtArgs> | null
    /**
     * Filter which TB_employees to delete.
     */
    where: TB_employeesWhereUniqueInput
  }

  /**
   * TB_employees deleteMany
   */
  export type TB_employeesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_employees to delete
     */
    where?: TB_employeesWhereInput
    /**
     * Limit how many TB_employees to delete.
     */
    limit?: number
  }

  /**
   * TB_employees without action
   */
  export type TB_employeesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_employees
     */
    select?: TB_employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_employees
     */
    omit?: TB_employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_employeesInclude<ExtArgs> | null
  }


  /**
   * Model TB_memberships
   */

  export type AggregateTB_memberships = {
    _count: TB_membershipsCountAggregateOutputType | null
    _avg: TB_membershipsAvgAggregateOutputType | null
    _sum: TB_membershipsSumAggregateOutputType | null
    _min: TB_membershipsMinAggregateOutputType | null
    _max: TB_membershipsMaxAggregateOutputType | null
  }

  export type TB_membershipsAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type TB_membershipsSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type TB_membershipsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: number | null
    paymentFrequency: $Enums.frequency | null
  }

  export type TB_membershipsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: number | null
    paymentFrequency: $Enums.frequency | null
  }

  export type TB_membershipsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    paymentFrequency: number
    _all: number
  }


  export type TB_membershipsAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type TB_membershipsSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type TB_membershipsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    paymentFrequency?: true
  }

  export type TB_membershipsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    paymentFrequency?: true
  }

  export type TB_membershipsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    paymentFrequency?: true
    _all?: true
  }

  export type TB_membershipsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_memberships to aggregate.
     */
    where?: TB_membershipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_memberships to fetch.
     */
    orderBy?: TB_membershipsOrderByWithRelationInput | TB_membershipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TB_membershipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TB_memberships
    **/
    _count?: true | TB_membershipsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TB_membershipsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TB_membershipsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TB_membershipsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TB_membershipsMaxAggregateInputType
  }

  export type GetTB_membershipsAggregateType<T extends TB_membershipsAggregateArgs> = {
        [P in keyof T & keyof AggregateTB_memberships]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTB_memberships[P]>
      : GetScalarType<T[P], AggregateTB_memberships[P]>
  }




  export type TB_membershipsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_membershipsWhereInput
    orderBy?: TB_membershipsOrderByWithAggregationInput | TB_membershipsOrderByWithAggregationInput[]
    by: TB_membershipsScalarFieldEnum[] | TB_membershipsScalarFieldEnum
    having?: TB_membershipsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TB_membershipsCountAggregateInputType | true
    _avg?: TB_membershipsAvgAggregateInputType
    _sum?: TB_membershipsSumAggregateInputType
    _min?: TB_membershipsMinAggregateInputType
    _max?: TB_membershipsMaxAggregateInputType
  }

  export type TB_membershipsGroupByOutputType = {
    id: number
    name: string
    description: string
    price: number
    paymentFrequency: $Enums.frequency
    _count: TB_membershipsCountAggregateOutputType | null
    _avg: TB_membershipsAvgAggregateOutputType | null
    _sum: TB_membershipsSumAggregateOutputType | null
    _min: TB_membershipsMinAggregateOutputType | null
    _max: TB_membershipsMaxAggregateOutputType | null
  }

  type GetTB_membershipsGroupByPayload<T extends TB_membershipsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TB_membershipsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TB_membershipsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TB_membershipsGroupByOutputType[P]>
            : GetScalarType<T[P], TB_membershipsGroupByOutputType[P]>
        }
      >
    >


  export type TB_membershipsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    paymentFrequency?: boolean
    TB_client_membership?: boolean | TB_memberships$TB_client_membershipArgs<ExtArgs>
    _count?: boolean | TB_membershipsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_memberships"]>

  export type TB_membershipsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    paymentFrequency?: boolean
  }, ExtArgs["result"]["tB_memberships"]>

  export type TB_membershipsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    paymentFrequency?: boolean
  }, ExtArgs["result"]["tB_memberships"]>

  export type TB_membershipsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    paymentFrequency?: boolean
  }

  export type TB_membershipsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "paymentFrequency", ExtArgs["result"]["tB_memberships"]>
  export type TB_membershipsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_client_membership?: boolean | TB_memberships$TB_client_membershipArgs<ExtArgs>
    _count?: boolean | TB_membershipsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TB_membershipsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TB_membershipsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TB_membershipsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TB_memberships"
    objects: {
      TB_client_membership: Prisma.$TB_client_membershipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      price: number
      paymentFrequency: $Enums.frequency
    }, ExtArgs["result"]["tB_memberships"]>
    composites: {}
  }

  type TB_membershipsGetPayload<S extends boolean | null | undefined | TB_membershipsDefaultArgs> = $Result.GetResult<Prisma.$TB_membershipsPayload, S>

  type TB_membershipsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TB_membershipsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TB_membershipsCountAggregateInputType | true
    }

  export interface TB_membershipsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TB_memberships'], meta: { name: 'TB_memberships' } }
    /**
     * Find zero or one TB_memberships that matches the filter.
     * @param {TB_membershipsFindUniqueArgs} args - Arguments to find a TB_memberships
     * @example
     * // Get one TB_memberships
     * const tB_memberships = await prisma.tB_memberships.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TB_membershipsFindUniqueArgs>(args: SelectSubset<T, TB_membershipsFindUniqueArgs<ExtArgs>>): Prisma__TB_membershipsClient<$Result.GetResult<Prisma.$TB_membershipsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TB_memberships that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TB_membershipsFindUniqueOrThrowArgs} args - Arguments to find a TB_memberships
     * @example
     * // Get one TB_memberships
     * const tB_memberships = await prisma.tB_memberships.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TB_membershipsFindUniqueOrThrowArgs>(args: SelectSubset<T, TB_membershipsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TB_membershipsClient<$Result.GetResult<Prisma.$TB_membershipsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_memberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_membershipsFindFirstArgs} args - Arguments to find a TB_memberships
     * @example
     * // Get one TB_memberships
     * const tB_memberships = await prisma.tB_memberships.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TB_membershipsFindFirstArgs>(args?: SelectSubset<T, TB_membershipsFindFirstArgs<ExtArgs>>): Prisma__TB_membershipsClient<$Result.GetResult<Prisma.$TB_membershipsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_memberships that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_membershipsFindFirstOrThrowArgs} args - Arguments to find a TB_memberships
     * @example
     * // Get one TB_memberships
     * const tB_memberships = await prisma.tB_memberships.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TB_membershipsFindFirstOrThrowArgs>(args?: SelectSubset<T, TB_membershipsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TB_membershipsClient<$Result.GetResult<Prisma.$TB_membershipsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TB_memberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_membershipsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TB_memberships
     * const tB_memberships = await prisma.tB_memberships.findMany()
     * 
     * // Get first 10 TB_memberships
     * const tB_memberships = await prisma.tB_memberships.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tB_membershipsWithIdOnly = await prisma.tB_memberships.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TB_membershipsFindManyArgs>(args?: SelectSubset<T, TB_membershipsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_membershipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TB_memberships.
     * @param {TB_membershipsCreateArgs} args - Arguments to create a TB_memberships.
     * @example
     * // Create one TB_memberships
     * const TB_memberships = await prisma.tB_memberships.create({
     *   data: {
     *     // ... data to create a TB_memberships
     *   }
     * })
     * 
     */
    create<T extends TB_membershipsCreateArgs>(args: SelectSubset<T, TB_membershipsCreateArgs<ExtArgs>>): Prisma__TB_membershipsClient<$Result.GetResult<Prisma.$TB_membershipsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TB_memberships.
     * @param {TB_membershipsCreateManyArgs} args - Arguments to create many TB_memberships.
     * @example
     * // Create many TB_memberships
     * const tB_memberships = await prisma.tB_memberships.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TB_membershipsCreateManyArgs>(args?: SelectSubset<T, TB_membershipsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TB_memberships and returns the data saved in the database.
     * @param {TB_membershipsCreateManyAndReturnArgs} args - Arguments to create many TB_memberships.
     * @example
     * // Create many TB_memberships
     * const tB_memberships = await prisma.tB_memberships.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TB_memberships and only return the `id`
     * const tB_membershipsWithIdOnly = await prisma.tB_memberships.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TB_membershipsCreateManyAndReturnArgs>(args?: SelectSubset<T, TB_membershipsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_membershipsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TB_memberships.
     * @param {TB_membershipsDeleteArgs} args - Arguments to delete one TB_memberships.
     * @example
     * // Delete one TB_memberships
     * const TB_memberships = await prisma.tB_memberships.delete({
     *   where: {
     *     // ... filter to delete one TB_memberships
     *   }
     * })
     * 
     */
    delete<T extends TB_membershipsDeleteArgs>(args: SelectSubset<T, TB_membershipsDeleteArgs<ExtArgs>>): Prisma__TB_membershipsClient<$Result.GetResult<Prisma.$TB_membershipsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TB_memberships.
     * @param {TB_membershipsUpdateArgs} args - Arguments to update one TB_memberships.
     * @example
     * // Update one TB_memberships
     * const tB_memberships = await prisma.tB_memberships.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TB_membershipsUpdateArgs>(args: SelectSubset<T, TB_membershipsUpdateArgs<ExtArgs>>): Prisma__TB_membershipsClient<$Result.GetResult<Prisma.$TB_membershipsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TB_memberships.
     * @param {TB_membershipsDeleteManyArgs} args - Arguments to filter TB_memberships to delete.
     * @example
     * // Delete a few TB_memberships
     * const { count } = await prisma.tB_memberships.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TB_membershipsDeleteManyArgs>(args?: SelectSubset<T, TB_membershipsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_membershipsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TB_memberships
     * const tB_memberships = await prisma.tB_memberships.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TB_membershipsUpdateManyArgs>(args: SelectSubset<T, TB_membershipsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_memberships and returns the data updated in the database.
     * @param {TB_membershipsUpdateManyAndReturnArgs} args - Arguments to update many TB_memberships.
     * @example
     * // Update many TB_memberships
     * const tB_memberships = await prisma.tB_memberships.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TB_memberships and only return the `id`
     * const tB_membershipsWithIdOnly = await prisma.tB_memberships.updateManyAndReturn({
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
    updateManyAndReturn<T extends TB_membershipsUpdateManyAndReturnArgs>(args: SelectSubset<T, TB_membershipsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_membershipsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TB_memberships.
     * @param {TB_membershipsUpsertArgs} args - Arguments to update or create a TB_memberships.
     * @example
     * // Update or create a TB_memberships
     * const tB_memberships = await prisma.tB_memberships.upsert({
     *   create: {
     *     // ... data to create a TB_memberships
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TB_memberships we want to update
     *   }
     * })
     */
    upsert<T extends TB_membershipsUpsertArgs>(args: SelectSubset<T, TB_membershipsUpsertArgs<ExtArgs>>): Prisma__TB_membershipsClient<$Result.GetResult<Prisma.$TB_membershipsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TB_memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_membershipsCountArgs} args - Arguments to filter TB_memberships to count.
     * @example
     * // Count the number of TB_memberships
     * const count = await prisma.tB_memberships.count({
     *   where: {
     *     // ... the filter for the TB_memberships we want to count
     *   }
     * })
    **/
    count<T extends TB_membershipsCountArgs>(
      args?: Subset<T, TB_membershipsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TB_membershipsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TB_memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_membershipsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TB_membershipsAggregateArgs>(args: Subset<T, TB_membershipsAggregateArgs>): Prisma.PrismaPromise<GetTB_membershipsAggregateType<T>>

    /**
     * Group by TB_memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_membershipsGroupByArgs} args - Group by arguments.
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
      T extends TB_membershipsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TB_membershipsGroupByArgs['orderBy'] }
        : { orderBy?: TB_membershipsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TB_membershipsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTB_membershipsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TB_memberships model
   */
  readonly fields: TB_membershipsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TB_memberships.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TB_membershipsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TB_client_membership<T extends TB_memberships$TB_client_membershipArgs<ExtArgs> = {}>(args?: Subset<T, TB_memberships$TB_client_membershipArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_client_membershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TB_memberships model
   */
  interface TB_membershipsFieldRefs {
    readonly id: FieldRef<"TB_memberships", 'Int'>
    readonly name: FieldRef<"TB_memberships", 'String'>
    readonly description: FieldRef<"TB_memberships", 'String'>
    readonly price: FieldRef<"TB_memberships", 'Float'>
    readonly paymentFrequency: FieldRef<"TB_memberships", 'frequency'>
  }
    

  // Custom InputTypes
  /**
   * TB_memberships findUnique
   */
  export type TB_membershipsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_memberships
     */
    select?: TB_membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_memberships
     */
    omit?: TB_membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_membershipsInclude<ExtArgs> | null
    /**
     * Filter, which TB_memberships to fetch.
     */
    where: TB_membershipsWhereUniqueInput
  }

  /**
   * TB_memberships findUniqueOrThrow
   */
  export type TB_membershipsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_memberships
     */
    select?: TB_membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_memberships
     */
    omit?: TB_membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_membershipsInclude<ExtArgs> | null
    /**
     * Filter, which TB_memberships to fetch.
     */
    where: TB_membershipsWhereUniqueInput
  }

  /**
   * TB_memberships findFirst
   */
  export type TB_membershipsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_memberships
     */
    select?: TB_membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_memberships
     */
    omit?: TB_membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_membershipsInclude<ExtArgs> | null
    /**
     * Filter, which TB_memberships to fetch.
     */
    where?: TB_membershipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_memberships to fetch.
     */
    orderBy?: TB_membershipsOrderByWithRelationInput | TB_membershipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_memberships.
     */
    cursor?: TB_membershipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_memberships.
     */
    distinct?: TB_membershipsScalarFieldEnum | TB_membershipsScalarFieldEnum[]
  }

  /**
   * TB_memberships findFirstOrThrow
   */
  export type TB_membershipsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_memberships
     */
    select?: TB_membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_memberships
     */
    omit?: TB_membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_membershipsInclude<ExtArgs> | null
    /**
     * Filter, which TB_memberships to fetch.
     */
    where?: TB_membershipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_memberships to fetch.
     */
    orderBy?: TB_membershipsOrderByWithRelationInput | TB_membershipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_memberships.
     */
    cursor?: TB_membershipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_memberships.
     */
    distinct?: TB_membershipsScalarFieldEnum | TB_membershipsScalarFieldEnum[]
  }

  /**
   * TB_memberships findMany
   */
  export type TB_membershipsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_memberships
     */
    select?: TB_membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_memberships
     */
    omit?: TB_membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_membershipsInclude<ExtArgs> | null
    /**
     * Filter, which TB_memberships to fetch.
     */
    where?: TB_membershipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_memberships to fetch.
     */
    orderBy?: TB_membershipsOrderByWithRelationInput | TB_membershipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TB_memberships.
     */
    cursor?: TB_membershipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_memberships.
     */
    skip?: number
    distinct?: TB_membershipsScalarFieldEnum | TB_membershipsScalarFieldEnum[]
  }

  /**
   * TB_memberships create
   */
  export type TB_membershipsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_memberships
     */
    select?: TB_membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_memberships
     */
    omit?: TB_membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_membershipsInclude<ExtArgs> | null
    /**
     * The data needed to create a TB_memberships.
     */
    data: XOR<TB_membershipsCreateInput, TB_membershipsUncheckedCreateInput>
  }

  /**
   * TB_memberships createMany
   */
  export type TB_membershipsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TB_memberships.
     */
    data: TB_membershipsCreateManyInput | TB_membershipsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_memberships createManyAndReturn
   */
  export type TB_membershipsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_memberships
     */
    select?: TB_membershipsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_memberships
     */
    omit?: TB_membershipsOmit<ExtArgs> | null
    /**
     * The data used to create many TB_memberships.
     */
    data: TB_membershipsCreateManyInput | TB_membershipsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_memberships update
   */
  export type TB_membershipsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_memberships
     */
    select?: TB_membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_memberships
     */
    omit?: TB_membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_membershipsInclude<ExtArgs> | null
    /**
     * The data needed to update a TB_memberships.
     */
    data: XOR<TB_membershipsUpdateInput, TB_membershipsUncheckedUpdateInput>
    /**
     * Choose, which TB_memberships to update.
     */
    where: TB_membershipsWhereUniqueInput
  }

  /**
   * TB_memberships updateMany
   */
  export type TB_membershipsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TB_memberships.
     */
    data: XOR<TB_membershipsUpdateManyMutationInput, TB_membershipsUncheckedUpdateManyInput>
    /**
     * Filter which TB_memberships to update
     */
    where?: TB_membershipsWhereInput
    /**
     * Limit how many TB_memberships to update.
     */
    limit?: number
  }

  /**
   * TB_memberships updateManyAndReturn
   */
  export type TB_membershipsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_memberships
     */
    select?: TB_membershipsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_memberships
     */
    omit?: TB_membershipsOmit<ExtArgs> | null
    /**
     * The data used to update TB_memberships.
     */
    data: XOR<TB_membershipsUpdateManyMutationInput, TB_membershipsUncheckedUpdateManyInput>
    /**
     * Filter which TB_memberships to update
     */
    where?: TB_membershipsWhereInput
    /**
     * Limit how many TB_memberships to update.
     */
    limit?: number
  }

  /**
   * TB_memberships upsert
   */
  export type TB_membershipsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_memberships
     */
    select?: TB_membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_memberships
     */
    omit?: TB_membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_membershipsInclude<ExtArgs> | null
    /**
     * The filter to search for the TB_memberships to update in case it exists.
     */
    where: TB_membershipsWhereUniqueInput
    /**
     * In case the TB_memberships found by the `where` argument doesn't exist, create a new TB_memberships with this data.
     */
    create: XOR<TB_membershipsCreateInput, TB_membershipsUncheckedCreateInput>
    /**
     * In case the TB_memberships was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TB_membershipsUpdateInput, TB_membershipsUncheckedUpdateInput>
  }

  /**
   * TB_memberships delete
   */
  export type TB_membershipsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_memberships
     */
    select?: TB_membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_memberships
     */
    omit?: TB_membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_membershipsInclude<ExtArgs> | null
    /**
     * Filter which TB_memberships to delete.
     */
    where: TB_membershipsWhereUniqueInput
  }

  /**
   * TB_memberships deleteMany
   */
  export type TB_membershipsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_memberships to delete
     */
    where?: TB_membershipsWhereInput
    /**
     * Limit how many TB_memberships to delete.
     */
    limit?: number
  }

  /**
   * TB_memberships.TB_client_membership
   */
  export type TB_memberships$TB_client_membershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_client_membership
     */
    select?: TB_client_membershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_client_membership
     */
    omit?: TB_client_membershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_client_membershipInclude<ExtArgs> | null
    where?: TB_client_membershipWhereInput
    orderBy?: TB_client_membershipOrderByWithRelationInput | TB_client_membershipOrderByWithRelationInput[]
    cursor?: TB_client_membershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TB_client_membershipScalarFieldEnum | TB_client_membershipScalarFieldEnum[]
  }

  /**
   * TB_memberships without action
   */
  export type TB_membershipsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_memberships
     */
    select?: TB_membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_memberships
     */
    omit?: TB_membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_membershipsInclude<ExtArgs> | null
  }


  /**
   * Model TB_client_membership
   */

  export type AggregateTB_client_membership = {
    _count: TB_client_membershipCountAggregateOutputType | null
    _avg: TB_client_membershipAvgAggregateOutputType | null
    _sum: TB_client_membershipSumAggregateOutputType | null
    _min: TB_client_membershipMinAggregateOutputType | null
    _max: TB_client_membershipMaxAggregateOutputType | null
  }

  export type TB_client_membershipAvgAggregateOutputType = {
    id: number | null
    id_user_role: number | null
    id_membership: number | null
  }

  export type TB_client_membershipSumAggregateOutputType = {
    id: number | null
    id_user_role: number | null
    id_membership: number | null
  }

  export type TB_client_membershipMinAggregateOutputType = {
    id: number | null
    id_user_role: number | null
    id_membership: number | null
    start_date: Date | null
    end_date: Date | null
  }

  export type TB_client_membershipMaxAggregateOutputType = {
    id: number | null
    id_user_role: number | null
    id_membership: number | null
    start_date: Date | null
    end_date: Date | null
  }

  export type TB_client_membershipCountAggregateOutputType = {
    id: number
    id_user_role: number
    id_membership: number
    start_date: number
    end_date: number
    _all: number
  }


  export type TB_client_membershipAvgAggregateInputType = {
    id?: true
    id_user_role?: true
    id_membership?: true
  }

  export type TB_client_membershipSumAggregateInputType = {
    id?: true
    id_user_role?: true
    id_membership?: true
  }

  export type TB_client_membershipMinAggregateInputType = {
    id?: true
    id_user_role?: true
    id_membership?: true
    start_date?: true
    end_date?: true
  }

  export type TB_client_membershipMaxAggregateInputType = {
    id?: true
    id_user_role?: true
    id_membership?: true
    start_date?: true
    end_date?: true
  }

  export type TB_client_membershipCountAggregateInputType = {
    id?: true
    id_user_role?: true
    id_membership?: true
    start_date?: true
    end_date?: true
    _all?: true
  }

  export type TB_client_membershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_client_membership to aggregate.
     */
    where?: TB_client_membershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_client_memberships to fetch.
     */
    orderBy?: TB_client_membershipOrderByWithRelationInput | TB_client_membershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TB_client_membershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_client_memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_client_memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TB_client_memberships
    **/
    _count?: true | TB_client_membershipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TB_client_membershipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TB_client_membershipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TB_client_membershipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TB_client_membershipMaxAggregateInputType
  }

  export type GetTB_client_membershipAggregateType<T extends TB_client_membershipAggregateArgs> = {
        [P in keyof T & keyof AggregateTB_client_membership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTB_client_membership[P]>
      : GetScalarType<T[P], AggregateTB_client_membership[P]>
  }




  export type TB_client_membershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_client_membershipWhereInput
    orderBy?: TB_client_membershipOrderByWithAggregationInput | TB_client_membershipOrderByWithAggregationInput[]
    by: TB_client_membershipScalarFieldEnum[] | TB_client_membershipScalarFieldEnum
    having?: TB_client_membershipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TB_client_membershipCountAggregateInputType | true
    _avg?: TB_client_membershipAvgAggregateInputType
    _sum?: TB_client_membershipSumAggregateInputType
    _min?: TB_client_membershipMinAggregateInputType
    _max?: TB_client_membershipMaxAggregateInputType
  }

  export type TB_client_membershipGroupByOutputType = {
    id: number
    id_user_role: number
    id_membership: number
    start_date: Date
    end_date: Date
    _count: TB_client_membershipCountAggregateOutputType | null
    _avg: TB_client_membershipAvgAggregateOutputType | null
    _sum: TB_client_membershipSumAggregateOutputType | null
    _min: TB_client_membershipMinAggregateOutputType | null
    _max: TB_client_membershipMaxAggregateOutputType | null
  }

  type GetTB_client_membershipGroupByPayload<T extends TB_client_membershipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TB_client_membershipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TB_client_membershipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TB_client_membershipGroupByOutputType[P]>
            : GetScalarType<T[P], TB_client_membershipGroupByOutputType[P]>
        }
      >
    >


  export type TB_client_membershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user_role?: boolean
    id_membership?: boolean
    start_date?: boolean
    end_date?: boolean
    TB_user_role?: boolean | TB_user_roleDefaultArgs<ExtArgs>
    TB_memberships?: boolean | TB_membershipsDefaultArgs<ExtArgs>
    TB_reservations?: boolean | TB_client_membership$TB_reservationsArgs<ExtArgs>
    _count?: boolean | TB_client_membershipCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_client_membership"]>

  export type TB_client_membershipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user_role?: boolean
    id_membership?: boolean
    start_date?: boolean
    end_date?: boolean
    TB_user_role?: boolean | TB_user_roleDefaultArgs<ExtArgs>
    TB_memberships?: boolean | TB_membershipsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_client_membership"]>

  export type TB_client_membershipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user_role?: boolean
    id_membership?: boolean
    start_date?: boolean
    end_date?: boolean
    TB_user_role?: boolean | TB_user_roleDefaultArgs<ExtArgs>
    TB_memberships?: boolean | TB_membershipsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_client_membership"]>

  export type TB_client_membershipSelectScalar = {
    id?: boolean
    id_user_role?: boolean
    id_membership?: boolean
    start_date?: boolean
    end_date?: boolean
  }

  export type TB_client_membershipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_user_role" | "id_membership" | "start_date" | "end_date", ExtArgs["result"]["tB_client_membership"]>
  export type TB_client_membershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_user_role?: boolean | TB_user_roleDefaultArgs<ExtArgs>
    TB_memberships?: boolean | TB_membershipsDefaultArgs<ExtArgs>
    TB_reservations?: boolean | TB_client_membership$TB_reservationsArgs<ExtArgs>
    _count?: boolean | TB_client_membershipCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TB_client_membershipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_user_role?: boolean | TB_user_roleDefaultArgs<ExtArgs>
    TB_memberships?: boolean | TB_membershipsDefaultArgs<ExtArgs>
  }
  export type TB_client_membershipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_user_role?: boolean | TB_user_roleDefaultArgs<ExtArgs>
    TB_memberships?: boolean | TB_membershipsDefaultArgs<ExtArgs>
  }

  export type $TB_client_membershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TB_client_membership"
    objects: {
      TB_user_role: Prisma.$TB_user_rolePayload<ExtArgs>
      TB_memberships: Prisma.$TB_membershipsPayload<ExtArgs>
      TB_reservations: Prisma.$TB_reservationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_user_role: number
      id_membership: number
      start_date: Date
      end_date: Date
    }, ExtArgs["result"]["tB_client_membership"]>
    composites: {}
  }

  type TB_client_membershipGetPayload<S extends boolean | null | undefined | TB_client_membershipDefaultArgs> = $Result.GetResult<Prisma.$TB_client_membershipPayload, S>

  type TB_client_membershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TB_client_membershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TB_client_membershipCountAggregateInputType | true
    }

  export interface TB_client_membershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TB_client_membership'], meta: { name: 'TB_client_membership' } }
    /**
     * Find zero or one TB_client_membership that matches the filter.
     * @param {TB_client_membershipFindUniqueArgs} args - Arguments to find a TB_client_membership
     * @example
     * // Get one TB_client_membership
     * const tB_client_membership = await prisma.tB_client_membership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TB_client_membershipFindUniqueArgs>(args: SelectSubset<T, TB_client_membershipFindUniqueArgs<ExtArgs>>): Prisma__TB_client_membershipClient<$Result.GetResult<Prisma.$TB_client_membershipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TB_client_membership that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TB_client_membershipFindUniqueOrThrowArgs} args - Arguments to find a TB_client_membership
     * @example
     * // Get one TB_client_membership
     * const tB_client_membership = await prisma.tB_client_membership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TB_client_membershipFindUniqueOrThrowArgs>(args: SelectSubset<T, TB_client_membershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TB_client_membershipClient<$Result.GetResult<Prisma.$TB_client_membershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_client_membership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_client_membershipFindFirstArgs} args - Arguments to find a TB_client_membership
     * @example
     * // Get one TB_client_membership
     * const tB_client_membership = await prisma.tB_client_membership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TB_client_membershipFindFirstArgs>(args?: SelectSubset<T, TB_client_membershipFindFirstArgs<ExtArgs>>): Prisma__TB_client_membershipClient<$Result.GetResult<Prisma.$TB_client_membershipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_client_membership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_client_membershipFindFirstOrThrowArgs} args - Arguments to find a TB_client_membership
     * @example
     * // Get one TB_client_membership
     * const tB_client_membership = await prisma.tB_client_membership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TB_client_membershipFindFirstOrThrowArgs>(args?: SelectSubset<T, TB_client_membershipFindFirstOrThrowArgs<ExtArgs>>): Prisma__TB_client_membershipClient<$Result.GetResult<Prisma.$TB_client_membershipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TB_client_memberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_client_membershipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TB_client_memberships
     * const tB_client_memberships = await prisma.tB_client_membership.findMany()
     * 
     * // Get first 10 TB_client_memberships
     * const tB_client_memberships = await prisma.tB_client_membership.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tB_client_membershipWithIdOnly = await prisma.tB_client_membership.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TB_client_membershipFindManyArgs>(args?: SelectSubset<T, TB_client_membershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_client_membershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TB_client_membership.
     * @param {TB_client_membershipCreateArgs} args - Arguments to create a TB_client_membership.
     * @example
     * // Create one TB_client_membership
     * const TB_client_membership = await prisma.tB_client_membership.create({
     *   data: {
     *     // ... data to create a TB_client_membership
     *   }
     * })
     * 
     */
    create<T extends TB_client_membershipCreateArgs>(args: SelectSubset<T, TB_client_membershipCreateArgs<ExtArgs>>): Prisma__TB_client_membershipClient<$Result.GetResult<Prisma.$TB_client_membershipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TB_client_memberships.
     * @param {TB_client_membershipCreateManyArgs} args - Arguments to create many TB_client_memberships.
     * @example
     * // Create many TB_client_memberships
     * const tB_client_membership = await prisma.tB_client_membership.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TB_client_membershipCreateManyArgs>(args?: SelectSubset<T, TB_client_membershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TB_client_memberships and returns the data saved in the database.
     * @param {TB_client_membershipCreateManyAndReturnArgs} args - Arguments to create many TB_client_memberships.
     * @example
     * // Create many TB_client_memberships
     * const tB_client_membership = await prisma.tB_client_membership.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TB_client_memberships and only return the `id`
     * const tB_client_membershipWithIdOnly = await prisma.tB_client_membership.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TB_client_membershipCreateManyAndReturnArgs>(args?: SelectSubset<T, TB_client_membershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_client_membershipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TB_client_membership.
     * @param {TB_client_membershipDeleteArgs} args - Arguments to delete one TB_client_membership.
     * @example
     * // Delete one TB_client_membership
     * const TB_client_membership = await prisma.tB_client_membership.delete({
     *   where: {
     *     // ... filter to delete one TB_client_membership
     *   }
     * })
     * 
     */
    delete<T extends TB_client_membershipDeleteArgs>(args: SelectSubset<T, TB_client_membershipDeleteArgs<ExtArgs>>): Prisma__TB_client_membershipClient<$Result.GetResult<Prisma.$TB_client_membershipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TB_client_membership.
     * @param {TB_client_membershipUpdateArgs} args - Arguments to update one TB_client_membership.
     * @example
     * // Update one TB_client_membership
     * const tB_client_membership = await prisma.tB_client_membership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TB_client_membershipUpdateArgs>(args: SelectSubset<T, TB_client_membershipUpdateArgs<ExtArgs>>): Prisma__TB_client_membershipClient<$Result.GetResult<Prisma.$TB_client_membershipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TB_client_memberships.
     * @param {TB_client_membershipDeleteManyArgs} args - Arguments to filter TB_client_memberships to delete.
     * @example
     * // Delete a few TB_client_memberships
     * const { count } = await prisma.tB_client_membership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TB_client_membershipDeleteManyArgs>(args?: SelectSubset<T, TB_client_membershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_client_memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_client_membershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TB_client_memberships
     * const tB_client_membership = await prisma.tB_client_membership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TB_client_membershipUpdateManyArgs>(args: SelectSubset<T, TB_client_membershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_client_memberships and returns the data updated in the database.
     * @param {TB_client_membershipUpdateManyAndReturnArgs} args - Arguments to update many TB_client_memberships.
     * @example
     * // Update many TB_client_memberships
     * const tB_client_membership = await prisma.tB_client_membership.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TB_client_memberships and only return the `id`
     * const tB_client_membershipWithIdOnly = await prisma.tB_client_membership.updateManyAndReturn({
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
    updateManyAndReturn<T extends TB_client_membershipUpdateManyAndReturnArgs>(args: SelectSubset<T, TB_client_membershipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_client_membershipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TB_client_membership.
     * @param {TB_client_membershipUpsertArgs} args - Arguments to update or create a TB_client_membership.
     * @example
     * // Update or create a TB_client_membership
     * const tB_client_membership = await prisma.tB_client_membership.upsert({
     *   create: {
     *     // ... data to create a TB_client_membership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TB_client_membership we want to update
     *   }
     * })
     */
    upsert<T extends TB_client_membershipUpsertArgs>(args: SelectSubset<T, TB_client_membershipUpsertArgs<ExtArgs>>): Prisma__TB_client_membershipClient<$Result.GetResult<Prisma.$TB_client_membershipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TB_client_memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_client_membershipCountArgs} args - Arguments to filter TB_client_memberships to count.
     * @example
     * // Count the number of TB_client_memberships
     * const count = await prisma.tB_client_membership.count({
     *   where: {
     *     // ... the filter for the TB_client_memberships we want to count
     *   }
     * })
    **/
    count<T extends TB_client_membershipCountArgs>(
      args?: Subset<T, TB_client_membershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TB_client_membershipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TB_client_membership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_client_membershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TB_client_membershipAggregateArgs>(args: Subset<T, TB_client_membershipAggregateArgs>): Prisma.PrismaPromise<GetTB_client_membershipAggregateType<T>>

    /**
     * Group by TB_client_membership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_client_membershipGroupByArgs} args - Group by arguments.
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
      T extends TB_client_membershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TB_client_membershipGroupByArgs['orderBy'] }
        : { orderBy?: TB_client_membershipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TB_client_membershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTB_client_membershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TB_client_membership model
   */
  readonly fields: TB_client_membershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TB_client_membership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TB_client_membershipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TB_user_role<T extends TB_user_roleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TB_user_roleDefaultArgs<ExtArgs>>): Prisma__TB_user_roleClient<$Result.GetResult<Prisma.$TB_user_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    TB_memberships<T extends TB_membershipsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TB_membershipsDefaultArgs<ExtArgs>>): Prisma__TB_membershipsClient<$Result.GetResult<Prisma.$TB_membershipsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    TB_reservations<T extends TB_client_membership$TB_reservationsArgs<ExtArgs> = {}>(args?: Subset<T, TB_client_membership$TB_reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_reservationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TB_client_membership model
   */
  interface TB_client_membershipFieldRefs {
    readonly id: FieldRef<"TB_client_membership", 'Int'>
    readonly id_user_role: FieldRef<"TB_client_membership", 'Int'>
    readonly id_membership: FieldRef<"TB_client_membership", 'Int'>
    readonly start_date: FieldRef<"TB_client_membership", 'DateTime'>
    readonly end_date: FieldRef<"TB_client_membership", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TB_client_membership findUnique
   */
  export type TB_client_membershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_client_membership
     */
    select?: TB_client_membershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_client_membership
     */
    omit?: TB_client_membershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_client_membershipInclude<ExtArgs> | null
    /**
     * Filter, which TB_client_membership to fetch.
     */
    where: TB_client_membershipWhereUniqueInput
  }

  /**
   * TB_client_membership findUniqueOrThrow
   */
  export type TB_client_membershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_client_membership
     */
    select?: TB_client_membershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_client_membership
     */
    omit?: TB_client_membershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_client_membershipInclude<ExtArgs> | null
    /**
     * Filter, which TB_client_membership to fetch.
     */
    where: TB_client_membershipWhereUniqueInput
  }

  /**
   * TB_client_membership findFirst
   */
  export type TB_client_membershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_client_membership
     */
    select?: TB_client_membershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_client_membership
     */
    omit?: TB_client_membershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_client_membershipInclude<ExtArgs> | null
    /**
     * Filter, which TB_client_membership to fetch.
     */
    where?: TB_client_membershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_client_memberships to fetch.
     */
    orderBy?: TB_client_membershipOrderByWithRelationInput | TB_client_membershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_client_memberships.
     */
    cursor?: TB_client_membershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_client_memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_client_memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_client_memberships.
     */
    distinct?: TB_client_membershipScalarFieldEnum | TB_client_membershipScalarFieldEnum[]
  }

  /**
   * TB_client_membership findFirstOrThrow
   */
  export type TB_client_membershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_client_membership
     */
    select?: TB_client_membershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_client_membership
     */
    omit?: TB_client_membershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_client_membershipInclude<ExtArgs> | null
    /**
     * Filter, which TB_client_membership to fetch.
     */
    where?: TB_client_membershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_client_memberships to fetch.
     */
    orderBy?: TB_client_membershipOrderByWithRelationInput | TB_client_membershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_client_memberships.
     */
    cursor?: TB_client_membershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_client_memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_client_memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_client_memberships.
     */
    distinct?: TB_client_membershipScalarFieldEnum | TB_client_membershipScalarFieldEnum[]
  }

  /**
   * TB_client_membership findMany
   */
  export type TB_client_membershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_client_membership
     */
    select?: TB_client_membershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_client_membership
     */
    omit?: TB_client_membershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_client_membershipInclude<ExtArgs> | null
    /**
     * Filter, which TB_client_memberships to fetch.
     */
    where?: TB_client_membershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_client_memberships to fetch.
     */
    orderBy?: TB_client_membershipOrderByWithRelationInput | TB_client_membershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TB_client_memberships.
     */
    cursor?: TB_client_membershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_client_memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_client_memberships.
     */
    skip?: number
    distinct?: TB_client_membershipScalarFieldEnum | TB_client_membershipScalarFieldEnum[]
  }

  /**
   * TB_client_membership create
   */
  export type TB_client_membershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_client_membership
     */
    select?: TB_client_membershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_client_membership
     */
    omit?: TB_client_membershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_client_membershipInclude<ExtArgs> | null
    /**
     * The data needed to create a TB_client_membership.
     */
    data: XOR<TB_client_membershipCreateInput, TB_client_membershipUncheckedCreateInput>
  }

  /**
   * TB_client_membership createMany
   */
  export type TB_client_membershipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TB_client_memberships.
     */
    data: TB_client_membershipCreateManyInput | TB_client_membershipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_client_membership createManyAndReturn
   */
  export type TB_client_membershipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_client_membership
     */
    select?: TB_client_membershipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_client_membership
     */
    omit?: TB_client_membershipOmit<ExtArgs> | null
    /**
     * The data used to create many TB_client_memberships.
     */
    data: TB_client_membershipCreateManyInput | TB_client_membershipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_client_membershipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TB_client_membership update
   */
  export type TB_client_membershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_client_membership
     */
    select?: TB_client_membershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_client_membership
     */
    omit?: TB_client_membershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_client_membershipInclude<ExtArgs> | null
    /**
     * The data needed to update a TB_client_membership.
     */
    data: XOR<TB_client_membershipUpdateInput, TB_client_membershipUncheckedUpdateInput>
    /**
     * Choose, which TB_client_membership to update.
     */
    where: TB_client_membershipWhereUniqueInput
  }

  /**
   * TB_client_membership updateMany
   */
  export type TB_client_membershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TB_client_memberships.
     */
    data: XOR<TB_client_membershipUpdateManyMutationInput, TB_client_membershipUncheckedUpdateManyInput>
    /**
     * Filter which TB_client_memberships to update
     */
    where?: TB_client_membershipWhereInput
    /**
     * Limit how many TB_client_memberships to update.
     */
    limit?: number
  }

  /**
   * TB_client_membership updateManyAndReturn
   */
  export type TB_client_membershipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_client_membership
     */
    select?: TB_client_membershipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_client_membership
     */
    omit?: TB_client_membershipOmit<ExtArgs> | null
    /**
     * The data used to update TB_client_memberships.
     */
    data: XOR<TB_client_membershipUpdateManyMutationInput, TB_client_membershipUncheckedUpdateManyInput>
    /**
     * Filter which TB_client_memberships to update
     */
    where?: TB_client_membershipWhereInput
    /**
     * Limit how many TB_client_memberships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_client_membershipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TB_client_membership upsert
   */
  export type TB_client_membershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_client_membership
     */
    select?: TB_client_membershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_client_membership
     */
    omit?: TB_client_membershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_client_membershipInclude<ExtArgs> | null
    /**
     * The filter to search for the TB_client_membership to update in case it exists.
     */
    where: TB_client_membershipWhereUniqueInput
    /**
     * In case the TB_client_membership found by the `where` argument doesn't exist, create a new TB_client_membership with this data.
     */
    create: XOR<TB_client_membershipCreateInput, TB_client_membershipUncheckedCreateInput>
    /**
     * In case the TB_client_membership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TB_client_membershipUpdateInput, TB_client_membershipUncheckedUpdateInput>
  }

  /**
   * TB_client_membership delete
   */
  export type TB_client_membershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_client_membership
     */
    select?: TB_client_membershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_client_membership
     */
    omit?: TB_client_membershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_client_membershipInclude<ExtArgs> | null
    /**
     * Filter which TB_client_membership to delete.
     */
    where: TB_client_membershipWhereUniqueInput
  }

  /**
   * TB_client_membership deleteMany
   */
  export type TB_client_membershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_client_memberships to delete
     */
    where?: TB_client_membershipWhereInput
    /**
     * Limit how many TB_client_memberships to delete.
     */
    limit?: number
  }

  /**
   * TB_client_membership.TB_reservations
   */
  export type TB_client_membership$TB_reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_reservations
     */
    select?: TB_reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_reservations
     */
    omit?: TB_reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_reservationsInclude<ExtArgs> | null
    where?: TB_reservationsWhereInput
    orderBy?: TB_reservationsOrderByWithRelationInput | TB_reservationsOrderByWithRelationInput[]
    cursor?: TB_reservationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TB_reservationsScalarFieldEnum | TB_reservationsScalarFieldEnum[]
  }

  /**
   * TB_client_membership without action
   */
  export type TB_client_membershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_client_membership
     */
    select?: TB_client_membershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_client_membership
     */
    omit?: TB_client_membershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_client_membershipInclude<ExtArgs> | null
  }


  /**
   * Model TB_routines
   */

  export type AggregateTB_routines = {
    _count: TB_routinesCountAggregateOutputType | null
    _avg: TB_routinesAvgAggregateOutputType | null
    _sum: TB_routinesSumAggregateOutputType | null
    _min: TB_routinesMinAggregateOutputType | null
    _max: TB_routinesMaxAggregateOutputType | null
  }

  export type TB_routinesAvgAggregateOutputType = {
    id: number | null
    estimatedDuration: number | null
    capacity: number | null
  }

  export type TB_routinesSumAggregateOutputType = {
    id: number | null
    estimatedDuration: number | null
    capacity: number | null
  }

  export type TB_routinesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    estimatedDuration: number | null
    capacity: number | null
  }

  export type TB_routinesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    estimatedDuration: number | null
    capacity: number | null
  }

  export type TB_routinesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    estimatedDuration: number
    capacity: number
    _all: number
  }


  export type TB_routinesAvgAggregateInputType = {
    id?: true
    estimatedDuration?: true
    capacity?: true
  }

  export type TB_routinesSumAggregateInputType = {
    id?: true
    estimatedDuration?: true
    capacity?: true
  }

  export type TB_routinesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    estimatedDuration?: true
    capacity?: true
  }

  export type TB_routinesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    estimatedDuration?: true
    capacity?: true
  }

  export type TB_routinesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    estimatedDuration?: true
    capacity?: true
    _all?: true
  }

  export type TB_routinesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_routines to aggregate.
     */
    where?: TB_routinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_routines to fetch.
     */
    orderBy?: TB_routinesOrderByWithRelationInput | TB_routinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TB_routinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TB_routines
    **/
    _count?: true | TB_routinesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TB_routinesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TB_routinesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TB_routinesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TB_routinesMaxAggregateInputType
  }

  export type GetTB_routinesAggregateType<T extends TB_routinesAggregateArgs> = {
        [P in keyof T & keyof AggregateTB_routines]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTB_routines[P]>
      : GetScalarType<T[P], AggregateTB_routines[P]>
  }




  export type TB_routinesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_routinesWhereInput
    orderBy?: TB_routinesOrderByWithAggregationInput | TB_routinesOrderByWithAggregationInput[]
    by: TB_routinesScalarFieldEnum[] | TB_routinesScalarFieldEnum
    having?: TB_routinesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TB_routinesCountAggregateInputType | true
    _avg?: TB_routinesAvgAggregateInputType
    _sum?: TB_routinesSumAggregateInputType
    _min?: TB_routinesMinAggregateInputType
    _max?: TB_routinesMaxAggregateInputType
  }

  export type TB_routinesGroupByOutputType = {
    id: number
    name: string
    description: string
    estimatedDuration: number
    capacity: number
    _count: TB_routinesCountAggregateOutputType | null
    _avg: TB_routinesAvgAggregateOutputType | null
    _sum: TB_routinesSumAggregateOutputType | null
    _min: TB_routinesMinAggregateOutputType | null
    _max: TB_routinesMaxAggregateOutputType | null
  }

  type GetTB_routinesGroupByPayload<T extends TB_routinesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TB_routinesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TB_routinesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TB_routinesGroupByOutputType[P]>
            : GetScalarType<T[P], TB_routinesGroupByOutputType[P]>
        }
      >
    >


  export type TB_routinesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    estimatedDuration?: boolean
    capacity?: boolean
    TB_routine_exercise?: boolean | TB_routines$TB_routine_exerciseArgs<ExtArgs>
    TB_reservations?: boolean | TB_routines$TB_reservationsArgs<ExtArgs>
    _count?: boolean | TB_routinesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_routines"]>

  export type TB_routinesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    estimatedDuration?: boolean
    capacity?: boolean
  }, ExtArgs["result"]["tB_routines"]>

  export type TB_routinesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    estimatedDuration?: boolean
    capacity?: boolean
  }, ExtArgs["result"]["tB_routines"]>

  export type TB_routinesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    estimatedDuration?: boolean
    capacity?: boolean
  }

  export type TB_routinesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "estimatedDuration" | "capacity", ExtArgs["result"]["tB_routines"]>
  export type TB_routinesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_routine_exercise?: boolean | TB_routines$TB_routine_exerciseArgs<ExtArgs>
    TB_reservations?: boolean | TB_routines$TB_reservationsArgs<ExtArgs>
    _count?: boolean | TB_routinesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TB_routinesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TB_routinesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TB_routinesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TB_routines"
    objects: {
      TB_routine_exercise: Prisma.$TB_routine_exercisePayload<ExtArgs>[]
      TB_reservations: Prisma.$TB_reservationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      estimatedDuration: number
      capacity: number
    }, ExtArgs["result"]["tB_routines"]>
    composites: {}
  }

  type TB_routinesGetPayload<S extends boolean | null | undefined | TB_routinesDefaultArgs> = $Result.GetResult<Prisma.$TB_routinesPayload, S>

  type TB_routinesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TB_routinesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TB_routinesCountAggregateInputType | true
    }

  export interface TB_routinesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TB_routines'], meta: { name: 'TB_routines' } }
    /**
     * Find zero or one TB_routines that matches the filter.
     * @param {TB_routinesFindUniqueArgs} args - Arguments to find a TB_routines
     * @example
     * // Get one TB_routines
     * const tB_routines = await prisma.tB_routines.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TB_routinesFindUniqueArgs>(args: SelectSubset<T, TB_routinesFindUniqueArgs<ExtArgs>>): Prisma__TB_routinesClient<$Result.GetResult<Prisma.$TB_routinesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TB_routines that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TB_routinesFindUniqueOrThrowArgs} args - Arguments to find a TB_routines
     * @example
     * // Get one TB_routines
     * const tB_routines = await prisma.tB_routines.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TB_routinesFindUniqueOrThrowArgs>(args: SelectSubset<T, TB_routinesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TB_routinesClient<$Result.GetResult<Prisma.$TB_routinesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_routines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_routinesFindFirstArgs} args - Arguments to find a TB_routines
     * @example
     * // Get one TB_routines
     * const tB_routines = await prisma.tB_routines.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TB_routinesFindFirstArgs>(args?: SelectSubset<T, TB_routinesFindFirstArgs<ExtArgs>>): Prisma__TB_routinesClient<$Result.GetResult<Prisma.$TB_routinesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_routines that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_routinesFindFirstOrThrowArgs} args - Arguments to find a TB_routines
     * @example
     * // Get one TB_routines
     * const tB_routines = await prisma.tB_routines.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TB_routinesFindFirstOrThrowArgs>(args?: SelectSubset<T, TB_routinesFindFirstOrThrowArgs<ExtArgs>>): Prisma__TB_routinesClient<$Result.GetResult<Prisma.$TB_routinesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TB_routines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_routinesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TB_routines
     * const tB_routines = await prisma.tB_routines.findMany()
     * 
     * // Get first 10 TB_routines
     * const tB_routines = await prisma.tB_routines.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tB_routinesWithIdOnly = await prisma.tB_routines.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TB_routinesFindManyArgs>(args?: SelectSubset<T, TB_routinesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_routinesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TB_routines.
     * @param {TB_routinesCreateArgs} args - Arguments to create a TB_routines.
     * @example
     * // Create one TB_routines
     * const TB_routines = await prisma.tB_routines.create({
     *   data: {
     *     // ... data to create a TB_routines
     *   }
     * })
     * 
     */
    create<T extends TB_routinesCreateArgs>(args: SelectSubset<T, TB_routinesCreateArgs<ExtArgs>>): Prisma__TB_routinesClient<$Result.GetResult<Prisma.$TB_routinesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TB_routines.
     * @param {TB_routinesCreateManyArgs} args - Arguments to create many TB_routines.
     * @example
     * // Create many TB_routines
     * const tB_routines = await prisma.tB_routines.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TB_routinesCreateManyArgs>(args?: SelectSubset<T, TB_routinesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TB_routines and returns the data saved in the database.
     * @param {TB_routinesCreateManyAndReturnArgs} args - Arguments to create many TB_routines.
     * @example
     * // Create many TB_routines
     * const tB_routines = await prisma.tB_routines.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TB_routines and only return the `id`
     * const tB_routinesWithIdOnly = await prisma.tB_routines.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TB_routinesCreateManyAndReturnArgs>(args?: SelectSubset<T, TB_routinesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_routinesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TB_routines.
     * @param {TB_routinesDeleteArgs} args - Arguments to delete one TB_routines.
     * @example
     * // Delete one TB_routines
     * const TB_routines = await prisma.tB_routines.delete({
     *   where: {
     *     // ... filter to delete one TB_routines
     *   }
     * })
     * 
     */
    delete<T extends TB_routinesDeleteArgs>(args: SelectSubset<T, TB_routinesDeleteArgs<ExtArgs>>): Prisma__TB_routinesClient<$Result.GetResult<Prisma.$TB_routinesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TB_routines.
     * @param {TB_routinesUpdateArgs} args - Arguments to update one TB_routines.
     * @example
     * // Update one TB_routines
     * const tB_routines = await prisma.tB_routines.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TB_routinesUpdateArgs>(args: SelectSubset<T, TB_routinesUpdateArgs<ExtArgs>>): Prisma__TB_routinesClient<$Result.GetResult<Prisma.$TB_routinesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TB_routines.
     * @param {TB_routinesDeleteManyArgs} args - Arguments to filter TB_routines to delete.
     * @example
     * // Delete a few TB_routines
     * const { count } = await prisma.tB_routines.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TB_routinesDeleteManyArgs>(args?: SelectSubset<T, TB_routinesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_routines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_routinesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TB_routines
     * const tB_routines = await prisma.tB_routines.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TB_routinesUpdateManyArgs>(args: SelectSubset<T, TB_routinesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_routines and returns the data updated in the database.
     * @param {TB_routinesUpdateManyAndReturnArgs} args - Arguments to update many TB_routines.
     * @example
     * // Update many TB_routines
     * const tB_routines = await prisma.tB_routines.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TB_routines and only return the `id`
     * const tB_routinesWithIdOnly = await prisma.tB_routines.updateManyAndReturn({
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
    updateManyAndReturn<T extends TB_routinesUpdateManyAndReturnArgs>(args: SelectSubset<T, TB_routinesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_routinesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TB_routines.
     * @param {TB_routinesUpsertArgs} args - Arguments to update or create a TB_routines.
     * @example
     * // Update or create a TB_routines
     * const tB_routines = await prisma.tB_routines.upsert({
     *   create: {
     *     // ... data to create a TB_routines
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TB_routines we want to update
     *   }
     * })
     */
    upsert<T extends TB_routinesUpsertArgs>(args: SelectSubset<T, TB_routinesUpsertArgs<ExtArgs>>): Prisma__TB_routinesClient<$Result.GetResult<Prisma.$TB_routinesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TB_routines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_routinesCountArgs} args - Arguments to filter TB_routines to count.
     * @example
     * // Count the number of TB_routines
     * const count = await prisma.tB_routines.count({
     *   where: {
     *     // ... the filter for the TB_routines we want to count
     *   }
     * })
    **/
    count<T extends TB_routinesCountArgs>(
      args?: Subset<T, TB_routinesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TB_routinesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TB_routines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_routinesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TB_routinesAggregateArgs>(args: Subset<T, TB_routinesAggregateArgs>): Prisma.PrismaPromise<GetTB_routinesAggregateType<T>>

    /**
     * Group by TB_routines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_routinesGroupByArgs} args - Group by arguments.
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
      T extends TB_routinesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TB_routinesGroupByArgs['orderBy'] }
        : { orderBy?: TB_routinesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TB_routinesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTB_routinesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TB_routines model
   */
  readonly fields: TB_routinesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TB_routines.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TB_routinesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TB_routine_exercise<T extends TB_routines$TB_routine_exerciseArgs<ExtArgs> = {}>(args?: Subset<T, TB_routines$TB_routine_exerciseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_routine_exercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TB_reservations<T extends TB_routines$TB_reservationsArgs<ExtArgs> = {}>(args?: Subset<T, TB_routines$TB_reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_reservationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TB_routines model
   */
  interface TB_routinesFieldRefs {
    readonly id: FieldRef<"TB_routines", 'Int'>
    readonly name: FieldRef<"TB_routines", 'String'>
    readonly description: FieldRef<"TB_routines", 'String'>
    readonly estimatedDuration: FieldRef<"TB_routines", 'Int'>
    readonly capacity: FieldRef<"TB_routines", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TB_routines findUnique
   */
  export type TB_routinesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routines
     */
    select?: TB_routinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routines
     */
    omit?: TB_routinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_routinesInclude<ExtArgs> | null
    /**
     * Filter, which TB_routines to fetch.
     */
    where: TB_routinesWhereUniqueInput
  }

  /**
   * TB_routines findUniqueOrThrow
   */
  export type TB_routinesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routines
     */
    select?: TB_routinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routines
     */
    omit?: TB_routinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_routinesInclude<ExtArgs> | null
    /**
     * Filter, which TB_routines to fetch.
     */
    where: TB_routinesWhereUniqueInput
  }

  /**
   * TB_routines findFirst
   */
  export type TB_routinesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routines
     */
    select?: TB_routinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routines
     */
    omit?: TB_routinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_routinesInclude<ExtArgs> | null
    /**
     * Filter, which TB_routines to fetch.
     */
    where?: TB_routinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_routines to fetch.
     */
    orderBy?: TB_routinesOrderByWithRelationInput | TB_routinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_routines.
     */
    cursor?: TB_routinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_routines.
     */
    distinct?: TB_routinesScalarFieldEnum | TB_routinesScalarFieldEnum[]
  }

  /**
   * TB_routines findFirstOrThrow
   */
  export type TB_routinesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routines
     */
    select?: TB_routinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routines
     */
    omit?: TB_routinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_routinesInclude<ExtArgs> | null
    /**
     * Filter, which TB_routines to fetch.
     */
    where?: TB_routinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_routines to fetch.
     */
    orderBy?: TB_routinesOrderByWithRelationInput | TB_routinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_routines.
     */
    cursor?: TB_routinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_routines.
     */
    distinct?: TB_routinesScalarFieldEnum | TB_routinesScalarFieldEnum[]
  }

  /**
   * TB_routines findMany
   */
  export type TB_routinesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routines
     */
    select?: TB_routinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routines
     */
    omit?: TB_routinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_routinesInclude<ExtArgs> | null
    /**
     * Filter, which TB_routines to fetch.
     */
    where?: TB_routinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_routines to fetch.
     */
    orderBy?: TB_routinesOrderByWithRelationInput | TB_routinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TB_routines.
     */
    cursor?: TB_routinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_routines.
     */
    skip?: number
    distinct?: TB_routinesScalarFieldEnum | TB_routinesScalarFieldEnum[]
  }

  /**
   * TB_routines create
   */
  export type TB_routinesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routines
     */
    select?: TB_routinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routines
     */
    omit?: TB_routinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_routinesInclude<ExtArgs> | null
    /**
     * The data needed to create a TB_routines.
     */
    data: XOR<TB_routinesCreateInput, TB_routinesUncheckedCreateInput>
  }

  /**
   * TB_routines createMany
   */
  export type TB_routinesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TB_routines.
     */
    data: TB_routinesCreateManyInput | TB_routinesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_routines createManyAndReturn
   */
  export type TB_routinesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routines
     */
    select?: TB_routinesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routines
     */
    omit?: TB_routinesOmit<ExtArgs> | null
    /**
     * The data used to create many TB_routines.
     */
    data: TB_routinesCreateManyInput | TB_routinesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_routines update
   */
  export type TB_routinesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routines
     */
    select?: TB_routinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routines
     */
    omit?: TB_routinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_routinesInclude<ExtArgs> | null
    /**
     * The data needed to update a TB_routines.
     */
    data: XOR<TB_routinesUpdateInput, TB_routinesUncheckedUpdateInput>
    /**
     * Choose, which TB_routines to update.
     */
    where: TB_routinesWhereUniqueInput
  }

  /**
   * TB_routines updateMany
   */
  export type TB_routinesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TB_routines.
     */
    data: XOR<TB_routinesUpdateManyMutationInput, TB_routinesUncheckedUpdateManyInput>
    /**
     * Filter which TB_routines to update
     */
    where?: TB_routinesWhereInput
    /**
     * Limit how many TB_routines to update.
     */
    limit?: number
  }

  /**
   * TB_routines updateManyAndReturn
   */
  export type TB_routinesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routines
     */
    select?: TB_routinesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routines
     */
    omit?: TB_routinesOmit<ExtArgs> | null
    /**
     * The data used to update TB_routines.
     */
    data: XOR<TB_routinesUpdateManyMutationInput, TB_routinesUncheckedUpdateManyInput>
    /**
     * Filter which TB_routines to update
     */
    where?: TB_routinesWhereInput
    /**
     * Limit how many TB_routines to update.
     */
    limit?: number
  }

  /**
   * TB_routines upsert
   */
  export type TB_routinesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routines
     */
    select?: TB_routinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routines
     */
    omit?: TB_routinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_routinesInclude<ExtArgs> | null
    /**
     * The filter to search for the TB_routines to update in case it exists.
     */
    where: TB_routinesWhereUniqueInput
    /**
     * In case the TB_routines found by the `where` argument doesn't exist, create a new TB_routines with this data.
     */
    create: XOR<TB_routinesCreateInput, TB_routinesUncheckedCreateInput>
    /**
     * In case the TB_routines was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TB_routinesUpdateInput, TB_routinesUncheckedUpdateInput>
  }

  /**
   * TB_routines delete
   */
  export type TB_routinesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routines
     */
    select?: TB_routinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routines
     */
    omit?: TB_routinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_routinesInclude<ExtArgs> | null
    /**
     * Filter which TB_routines to delete.
     */
    where: TB_routinesWhereUniqueInput
  }

  /**
   * TB_routines deleteMany
   */
  export type TB_routinesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_routines to delete
     */
    where?: TB_routinesWhereInput
    /**
     * Limit how many TB_routines to delete.
     */
    limit?: number
  }

  /**
   * TB_routines.TB_routine_exercise
   */
  export type TB_routines$TB_routine_exerciseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routine_exercise
     */
    select?: TB_routine_exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routine_exercise
     */
    omit?: TB_routine_exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_routine_exerciseInclude<ExtArgs> | null
    where?: TB_routine_exerciseWhereInput
    orderBy?: TB_routine_exerciseOrderByWithRelationInput | TB_routine_exerciseOrderByWithRelationInput[]
    cursor?: TB_routine_exerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TB_routine_exerciseScalarFieldEnum | TB_routine_exerciseScalarFieldEnum[]
  }

  /**
   * TB_routines.TB_reservations
   */
  export type TB_routines$TB_reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_reservations
     */
    select?: TB_reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_reservations
     */
    omit?: TB_reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_reservationsInclude<ExtArgs> | null
    where?: TB_reservationsWhereInput
    orderBy?: TB_reservationsOrderByWithRelationInput | TB_reservationsOrderByWithRelationInput[]
    cursor?: TB_reservationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TB_reservationsScalarFieldEnum | TB_reservationsScalarFieldEnum[]
  }

  /**
   * TB_routines without action
   */
  export type TB_routinesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routines
     */
    select?: TB_routinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routines
     */
    omit?: TB_routinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_routinesInclude<ExtArgs> | null
  }


  /**
   * Model TB_exercises
   */

  export type AggregateTB_exercises = {
    _count: TB_exercisesCountAggregateOutputType | null
    _avg: TB_exercisesAvgAggregateOutputType | null
    _sum: TB_exercisesSumAggregateOutputType | null
    _min: TB_exercisesMinAggregateOutputType | null
    _max: TB_exercisesMaxAggregateOutputType | null
  }

  export type TB_exercisesAvgAggregateOutputType = {
    id: number | null
  }

  export type TB_exercisesSumAggregateOutputType = {
    id: number | null
  }

  export type TB_exercisesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    muscle_group: string | null
  }

  export type TB_exercisesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    muscle_group: string | null
  }

  export type TB_exercisesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    muscle_group: number
    _all: number
  }


  export type TB_exercisesAvgAggregateInputType = {
    id?: true
  }

  export type TB_exercisesSumAggregateInputType = {
    id?: true
  }

  export type TB_exercisesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    muscle_group?: true
  }

  export type TB_exercisesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    muscle_group?: true
  }

  export type TB_exercisesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    muscle_group?: true
    _all?: true
  }

  export type TB_exercisesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_exercises to aggregate.
     */
    where?: TB_exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_exercises to fetch.
     */
    orderBy?: TB_exercisesOrderByWithRelationInput | TB_exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TB_exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TB_exercises
    **/
    _count?: true | TB_exercisesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TB_exercisesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TB_exercisesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TB_exercisesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TB_exercisesMaxAggregateInputType
  }

  export type GetTB_exercisesAggregateType<T extends TB_exercisesAggregateArgs> = {
        [P in keyof T & keyof AggregateTB_exercises]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTB_exercises[P]>
      : GetScalarType<T[P], AggregateTB_exercises[P]>
  }




  export type TB_exercisesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_exercisesWhereInput
    orderBy?: TB_exercisesOrderByWithAggregationInput | TB_exercisesOrderByWithAggregationInput[]
    by: TB_exercisesScalarFieldEnum[] | TB_exercisesScalarFieldEnum
    having?: TB_exercisesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TB_exercisesCountAggregateInputType | true
    _avg?: TB_exercisesAvgAggregateInputType
    _sum?: TB_exercisesSumAggregateInputType
    _min?: TB_exercisesMinAggregateInputType
    _max?: TB_exercisesMaxAggregateInputType
  }

  export type TB_exercisesGroupByOutputType = {
    id: number
    name: string
    description: string
    muscle_group: string
    _count: TB_exercisesCountAggregateOutputType | null
    _avg: TB_exercisesAvgAggregateOutputType | null
    _sum: TB_exercisesSumAggregateOutputType | null
    _min: TB_exercisesMinAggregateOutputType | null
    _max: TB_exercisesMaxAggregateOutputType | null
  }

  type GetTB_exercisesGroupByPayload<T extends TB_exercisesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TB_exercisesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TB_exercisesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TB_exercisesGroupByOutputType[P]>
            : GetScalarType<T[P], TB_exercisesGroupByOutputType[P]>
        }
      >
    >


  export type TB_exercisesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    muscle_group?: boolean
    TB_routine_exercise?: boolean | TB_exercises$TB_routine_exerciseArgs<ExtArgs>
    _count?: boolean | TB_exercisesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_exercises"]>

  export type TB_exercisesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    muscle_group?: boolean
  }, ExtArgs["result"]["tB_exercises"]>

  export type TB_exercisesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    muscle_group?: boolean
  }, ExtArgs["result"]["tB_exercises"]>

  export type TB_exercisesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    muscle_group?: boolean
  }

  export type TB_exercisesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "muscle_group", ExtArgs["result"]["tB_exercises"]>
  export type TB_exercisesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_routine_exercise?: boolean | TB_exercises$TB_routine_exerciseArgs<ExtArgs>
    _count?: boolean | TB_exercisesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TB_exercisesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TB_exercisesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TB_exercisesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TB_exercises"
    objects: {
      TB_routine_exercise: Prisma.$TB_routine_exercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      muscle_group: string
    }, ExtArgs["result"]["tB_exercises"]>
    composites: {}
  }

  type TB_exercisesGetPayload<S extends boolean | null | undefined | TB_exercisesDefaultArgs> = $Result.GetResult<Prisma.$TB_exercisesPayload, S>

  type TB_exercisesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TB_exercisesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TB_exercisesCountAggregateInputType | true
    }

  export interface TB_exercisesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TB_exercises'], meta: { name: 'TB_exercises' } }
    /**
     * Find zero or one TB_exercises that matches the filter.
     * @param {TB_exercisesFindUniqueArgs} args - Arguments to find a TB_exercises
     * @example
     * // Get one TB_exercises
     * const tB_exercises = await prisma.tB_exercises.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TB_exercisesFindUniqueArgs>(args: SelectSubset<T, TB_exercisesFindUniqueArgs<ExtArgs>>): Prisma__TB_exercisesClient<$Result.GetResult<Prisma.$TB_exercisesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TB_exercises that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TB_exercisesFindUniqueOrThrowArgs} args - Arguments to find a TB_exercises
     * @example
     * // Get one TB_exercises
     * const tB_exercises = await prisma.tB_exercises.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TB_exercisesFindUniqueOrThrowArgs>(args: SelectSubset<T, TB_exercisesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TB_exercisesClient<$Result.GetResult<Prisma.$TB_exercisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_exercisesFindFirstArgs} args - Arguments to find a TB_exercises
     * @example
     * // Get one TB_exercises
     * const tB_exercises = await prisma.tB_exercises.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TB_exercisesFindFirstArgs>(args?: SelectSubset<T, TB_exercisesFindFirstArgs<ExtArgs>>): Prisma__TB_exercisesClient<$Result.GetResult<Prisma.$TB_exercisesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_exercises that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_exercisesFindFirstOrThrowArgs} args - Arguments to find a TB_exercises
     * @example
     * // Get one TB_exercises
     * const tB_exercises = await prisma.tB_exercises.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TB_exercisesFindFirstOrThrowArgs>(args?: SelectSubset<T, TB_exercisesFindFirstOrThrowArgs<ExtArgs>>): Prisma__TB_exercisesClient<$Result.GetResult<Prisma.$TB_exercisesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TB_exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_exercisesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TB_exercises
     * const tB_exercises = await prisma.tB_exercises.findMany()
     * 
     * // Get first 10 TB_exercises
     * const tB_exercises = await prisma.tB_exercises.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tB_exercisesWithIdOnly = await prisma.tB_exercises.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TB_exercisesFindManyArgs>(args?: SelectSubset<T, TB_exercisesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_exercisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TB_exercises.
     * @param {TB_exercisesCreateArgs} args - Arguments to create a TB_exercises.
     * @example
     * // Create one TB_exercises
     * const TB_exercises = await prisma.tB_exercises.create({
     *   data: {
     *     // ... data to create a TB_exercises
     *   }
     * })
     * 
     */
    create<T extends TB_exercisesCreateArgs>(args: SelectSubset<T, TB_exercisesCreateArgs<ExtArgs>>): Prisma__TB_exercisesClient<$Result.GetResult<Prisma.$TB_exercisesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TB_exercises.
     * @param {TB_exercisesCreateManyArgs} args - Arguments to create many TB_exercises.
     * @example
     * // Create many TB_exercises
     * const tB_exercises = await prisma.tB_exercises.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TB_exercisesCreateManyArgs>(args?: SelectSubset<T, TB_exercisesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TB_exercises and returns the data saved in the database.
     * @param {TB_exercisesCreateManyAndReturnArgs} args - Arguments to create many TB_exercises.
     * @example
     * // Create many TB_exercises
     * const tB_exercises = await prisma.tB_exercises.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TB_exercises and only return the `id`
     * const tB_exercisesWithIdOnly = await prisma.tB_exercises.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TB_exercisesCreateManyAndReturnArgs>(args?: SelectSubset<T, TB_exercisesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_exercisesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TB_exercises.
     * @param {TB_exercisesDeleteArgs} args - Arguments to delete one TB_exercises.
     * @example
     * // Delete one TB_exercises
     * const TB_exercises = await prisma.tB_exercises.delete({
     *   where: {
     *     // ... filter to delete one TB_exercises
     *   }
     * })
     * 
     */
    delete<T extends TB_exercisesDeleteArgs>(args: SelectSubset<T, TB_exercisesDeleteArgs<ExtArgs>>): Prisma__TB_exercisesClient<$Result.GetResult<Prisma.$TB_exercisesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TB_exercises.
     * @param {TB_exercisesUpdateArgs} args - Arguments to update one TB_exercises.
     * @example
     * // Update one TB_exercises
     * const tB_exercises = await prisma.tB_exercises.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TB_exercisesUpdateArgs>(args: SelectSubset<T, TB_exercisesUpdateArgs<ExtArgs>>): Prisma__TB_exercisesClient<$Result.GetResult<Prisma.$TB_exercisesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TB_exercises.
     * @param {TB_exercisesDeleteManyArgs} args - Arguments to filter TB_exercises to delete.
     * @example
     * // Delete a few TB_exercises
     * const { count } = await prisma.tB_exercises.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TB_exercisesDeleteManyArgs>(args?: SelectSubset<T, TB_exercisesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_exercisesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TB_exercises
     * const tB_exercises = await prisma.tB_exercises.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TB_exercisesUpdateManyArgs>(args: SelectSubset<T, TB_exercisesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_exercises and returns the data updated in the database.
     * @param {TB_exercisesUpdateManyAndReturnArgs} args - Arguments to update many TB_exercises.
     * @example
     * // Update many TB_exercises
     * const tB_exercises = await prisma.tB_exercises.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TB_exercises and only return the `id`
     * const tB_exercisesWithIdOnly = await prisma.tB_exercises.updateManyAndReturn({
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
    updateManyAndReturn<T extends TB_exercisesUpdateManyAndReturnArgs>(args: SelectSubset<T, TB_exercisesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_exercisesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TB_exercises.
     * @param {TB_exercisesUpsertArgs} args - Arguments to update or create a TB_exercises.
     * @example
     * // Update or create a TB_exercises
     * const tB_exercises = await prisma.tB_exercises.upsert({
     *   create: {
     *     // ... data to create a TB_exercises
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TB_exercises we want to update
     *   }
     * })
     */
    upsert<T extends TB_exercisesUpsertArgs>(args: SelectSubset<T, TB_exercisesUpsertArgs<ExtArgs>>): Prisma__TB_exercisesClient<$Result.GetResult<Prisma.$TB_exercisesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TB_exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_exercisesCountArgs} args - Arguments to filter TB_exercises to count.
     * @example
     * // Count the number of TB_exercises
     * const count = await prisma.tB_exercises.count({
     *   where: {
     *     // ... the filter for the TB_exercises we want to count
     *   }
     * })
    **/
    count<T extends TB_exercisesCountArgs>(
      args?: Subset<T, TB_exercisesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TB_exercisesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TB_exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_exercisesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TB_exercisesAggregateArgs>(args: Subset<T, TB_exercisesAggregateArgs>): Prisma.PrismaPromise<GetTB_exercisesAggregateType<T>>

    /**
     * Group by TB_exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_exercisesGroupByArgs} args - Group by arguments.
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
      T extends TB_exercisesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TB_exercisesGroupByArgs['orderBy'] }
        : { orderBy?: TB_exercisesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TB_exercisesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTB_exercisesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TB_exercises model
   */
  readonly fields: TB_exercisesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TB_exercises.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TB_exercisesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TB_routine_exercise<T extends TB_exercises$TB_routine_exerciseArgs<ExtArgs> = {}>(args?: Subset<T, TB_exercises$TB_routine_exerciseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_routine_exercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TB_exercises model
   */
  interface TB_exercisesFieldRefs {
    readonly id: FieldRef<"TB_exercises", 'Int'>
    readonly name: FieldRef<"TB_exercises", 'String'>
    readonly description: FieldRef<"TB_exercises", 'String'>
    readonly muscle_group: FieldRef<"TB_exercises", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TB_exercises findUnique
   */
  export type TB_exercisesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_exercises
     */
    select?: TB_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_exercises
     */
    omit?: TB_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_exercisesInclude<ExtArgs> | null
    /**
     * Filter, which TB_exercises to fetch.
     */
    where: TB_exercisesWhereUniqueInput
  }

  /**
   * TB_exercises findUniqueOrThrow
   */
  export type TB_exercisesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_exercises
     */
    select?: TB_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_exercises
     */
    omit?: TB_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_exercisesInclude<ExtArgs> | null
    /**
     * Filter, which TB_exercises to fetch.
     */
    where: TB_exercisesWhereUniqueInput
  }

  /**
   * TB_exercises findFirst
   */
  export type TB_exercisesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_exercises
     */
    select?: TB_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_exercises
     */
    omit?: TB_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_exercisesInclude<ExtArgs> | null
    /**
     * Filter, which TB_exercises to fetch.
     */
    where?: TB_exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_exercises to fetch.
     */
    orderBy?: TB_exercisesOrderByWithRelationInput | TB_exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_exercises.
     */
    cursor?: TB_exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_exercises.
     */
    distinct?: TB_exercisesScalarFieldEnum | TB_exercisesScalarFieldEnum[]
  }

  /**
   * TB_exercises findFirstOrThrow
   */
  export type TB_exercisesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_exercises
     */
    select?: TB_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_exercises
     */
    omit?: TB_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_exercisesInclude<ExtArgs> | null
    /**
     * Filter, which TB_exercises to fetch.
     */
    where?: TB_exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_exercises to fetch.
     */
    orderBy?: TB_exercisesOrderByWithRelationInput | TB_exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_exercises.
     */
    cursor?: TB_exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_exercises.
     */
    distinct?: TB_exercisesScalarFieldEnum | TB_exercisesScalarFieldEnum[]
  }

  /**
   * TB_exercises findMany
   */
  export type TB_exercisesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_exercises
     */
    select?: TB_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_exercises
     */
    omit?: TB_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_exercisesInclude<ExtArgs> | null
    /**
     * Filter, which TB_exercises to fetch.
     */
    where?: TB_exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_exercises to fetch.
     */
    orderBy?: TB_exercisesOrderByWithRelationInput | TB_exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TB_exercises.
     */
    cursor?: TB_exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_exercises.
     */
    skip?: number
    distinct?: TB_exercisesScalarFieldEnum | TB_exercisesScalarFieldEnum[]
  }

  /**
   * TB_exercises create
   */
  export type TB_exercisesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_exercises
     */
    select?: TB_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_exercises
     */
    omit?: TB_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_exercisesInclude<ExtArgs> | null
    /**
     * The data needed to create a TB_exercises.
     */
    data: XOR<TB_exercisesCreateInput, TB_exercisesUncheckedCreateInput>
  }

  /**
   * TB_exercises createMany
   */
  export type TB_exercisesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TB_exercises.
     */
    data: TB_exercisesCreateManyInput | TB_exercisesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_exercises createManyAndReturn
   */
  export type TB_exercisesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_exercises
     */
    select?: TB_exercisesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_exercises
     */
    omit?: TB_exercisesOmit<ExtArgs> | null
    /**
     * The data used to create many TB_exercises.
     */
    data: TB_exercisesCreateManyInput | TB_exercisesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_exercises update
   */
  export type TB_exercisesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_exercises
     */
    select?: TB_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_exercises
     */
    omit?: TB_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_exercisesInclude<ExtArgs> | null
    /**
     * The data needed to update a TB_exercises.
     */
    data: XOR<TB_exercisesUpdateInput, TB_exercisesUncheckedUpdateInput>
    /**
     * Choose, which TB_exercises to update.
     */
    where: TB_exercisesWhereUniqueInput
  }

  /**
   * TB_exercises updateMany
   */
  export type TB_exercisesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TB_exercises.
     */
    data: XOR<TB_exercisesUpdateManyMutationInput, TB_exercisesUncheckedUpdateManyInput>
    /**
     * Filter which TB_exercises to update
     */
    where?: TB_exercisesWhereInput
    /**
     * Limit how many TB_exercises to update.
     */
    limit?: number
  }

  /**
   * TB_exercises updateManyAndReturn
   */
  export type TB_exercisesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_exercises
     */
    select?: TB_exercisesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_exercises
     */
    omit?: TB_exercisesOmit<ExtArgs> | null
    /**
     * The data used to update TB_exercises.
     */
    data: XOR<TB_exercisesUpdateManyMutationInput, TB_exercisesUncheckedUpdateManyInput>
    /**
     * Filter which TB_exercises to update
     */
    where?: TB_exercisesWhereInput
    /**
     * Limit how many TB_exercises to update.
     */
    limit?: number
  }

  /**
   * TB_exercises upsert
   */
  export type TB_exercisesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_exercises
     */
    select?: TB_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_exercises
     */
    omit?: TB_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_exercisesInclude<ExtArgs> | null
    /**
     * The filter to search for the TB_exercises to update in case it exists.
     */
    where: TB_exercisesWhereUniqueInput
    /**
     * In case the TB_exercises found by the `where` argument doesn't exist, create a new TB_exercises with this data.
     */
    create: XOR<TB_exercisesCreateInput, TB_exercisesUncheckedCreateInput>
    /**
     * In case the TB_exercises was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TB_exercisesUpdateInput, TB_exercisesUncheckedUpdateInput>
  }

  /**
   * TB_exercises delete
   */
  export type TB_exercisesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_exercises
     */
    select?: TB_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_exercises
     */
    omit?: TB_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_exercisesInclude<ExtArgs> | null
    /**
     * Filter which TB_exercises to delete.
     */
    where: TB_exercisesWhereUniqueInput
  }

  /**
   * TB_exercises deleteMany
   */
  export type TB_exercisesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_exercises to delete
     */
    where?: TB_exercisesWhereInput
    /**
     * Limit how many TB_exercises to delete.
     */
    limit?: number
  }

  /**
   * TB_exercises.TB_routine_exercise
   */
  export type TB_exercises$TB_routine_exerciseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routine_exercise
     */
    select?: TB_routine_exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routine_exercise
     */
    omit?: TB_routine_exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_routine_exerciseInclude<ExtArgs> | null
    where?: TB_routine_exerciseWhereInput
    orderBy?: TB_routine_exerciseOrderByWithRelationInput | TB_routine_exerciseOrderByWithRelationInput[]
    cursor?: TB_routine_exerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TB_routine_exerciseScalarFieldEnum | TB_routine_exerciseScalarFieldEnum[]
  }

  /**
   * TB_exercises without action
   */
  export type TB_exercisesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_exercises
     */
    select?: TB_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_exercises
     */
    omit?: TB_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_exercisesInclude<ExtArgs> | null
  }


  /**
   * Model TB_routine_exercise
   */

  export type AggregateTB_routine_exercise = {
    _count: TB_routine_exerciseCountAggregateOutputType | null
    _avg: TB_routine_exerciseAvgAggregateOutputType | null
    _sum: TB_routine_exerciseSumAggregateOutputType | null
    _min: TB_routine_exerciseMinAggregateOutputType | null
    _max: TB_routine_exerciseMaxAggregateOutputType | null
  }

  export type TB_routine_exerciseAvgAggregateOutputType = {
    id: number | null
    id_routine: number | null
    id_exercise: number | null
  }

  export type TB_routine_exerciseSumAggregateOutputType = {
    id: number | null
    id_routine: number | null
    id_exercise: number | null
  }

  export type TB_routine_exerciseMinAggregateOutputType = {
    id: number | null
    id_routine: number | null
    id_exercise: number | null
  }

  export type TB_routine_exerciseMaxAggregateOutputType = {
    id: number | null
    id_routine: number | null
    id_exercise: number | null
  }

  export type TB_routine_exerciseCountAggregateOutputType = {
    id: number
    id_routine: number
    id_exercise: number
    _all: number
  }


  export type TB_routine_exerciseAvgAggregateInputType = {
    id?: true
    id_routine?: true
    id_exercise?: true
  }

  export type TB_routine_exerciseSumAggregateInputType = {
    id?: true
    id_routine?: true
    id_exercise?: true
  }

  export type TB_routine_exerciseMinAggregateInputType = {
    id?: true
    id_routine?: true
    id_exercise?: true
  }

  export type TB_routine_exerciseMaxAggregateInputType = {
    id?: true
    id_routine?: true
    id_exercise?: true
  }

  export type TB_routine_exerciseCountAggregateInputType = {
    id?: true
    id_routine?: true
    id_exercise?: true
    _all?: true
  }

  export type TB_routine_exerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_routine_exercise to aggregate.
     */
    where?: TB_routine_exerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_routine_exercises to fetch.
     */
    orderBy?: TB_routine_exerciseOrderByWithRelationInput | TB_routine_exerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TB_routine_exerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_routine_exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_routine_exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TB_routine_exercises
    **/
    _count?: true | TB_routine_exerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TB_routine_exerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TB_routine_exerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TB_routine_exerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TB_routine_exerciseMaxAggregateInputType
  }

  export type GetTB_routine_exerciseAggregateType<T extends TB_routine_exerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateTB_routine_exercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTB_routine_exercise[P]>
      : GetScalarType<T[P], AggregateTB_routine_exercise[P]>
  }




  export type TB_routine_exerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_routine_exerciseWhereInput
    orderBy?: TB_routine_exerciseOrderByWithAggregationInput | TB_routine_exerciseOrderByWithAggregationInput[]
    by: TB_routine_exerciseScalarFieldEnum[] | TB_routine_exerciseScalarFieldEnum
    having?: TB_routine_exerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TB_routine_exerciseCountAggregateInputType | true
    _avg?: TB_routine_exerciseAvgAggregateInputType
    _sum?: TB_routine_exerciseSumAggregateInputType
    _min?: TB_routine_exerciseMinAggregateInputType
    _max?: TB_routine_exerciseMaxAggregateInputType
  }

  export type TB_routine_exerciseGroupByOutputType = {
    id: number
    id_routine: number
    id_exercise: number
    _count: TB_routine_exerciseCountAggregateOutputType | null
    _avg: TB_routine_exerciseAvgAggregateOutputType | null
    _sum: TB_routine_exerciseSumAggregateOutputType | null
    _min: TB_routine_exerciseMinAggregateOutputType | null
    _max: TB_routine_exerciseMaxAggregateOutputType | null
  }

  type GetTB_routine_exerciseGroupByPayload<T extends TB_routine_exerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TB_routine_exerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TB_routine_exerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TB_routine_exerciseGroupByOutputType[P]>
            : GetScalarType<T[P], TB_routine_exerciseGroupByOutputType[P]>
        }
      >
    >


  export type TB_routine_exerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_routine?: boolean
    id_exercise?: boolean
    TB_routines?: boolean | TB_routinesDefaultArgs<ExtArgs>
    TB_exercises?: boolean | TB_exercisesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_routine_exercise"]>

  export type TB_routine_exerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_routine?: boolean
    id_exercise?: boolean
    TB_routines?: boolean | TB_routinesDefaultArgs<ExtArgs>
    TB_exercises?: boolean | TB_exercisesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_routine_exercise"]>

  export type TB_routine_exerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_routine?: boolean
    id_exercise?: boolean
    TB_routines?: boolean | TB_routinesDefaultArgs<ExtArgs>
    TB_exercises?: boolean | TB_exercisesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_routine_exercise"]>

  export type TB_routine_exerciseSelectScalar = {
    id?: boolean
    id_routine?: boolean
    id_exercise?: boolean
  }

  export type TB_routine_exerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_routine" | "id_exercise", ExtArgs["result"]["tB_routine_exercise"]>
  export type TB_routine_exerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_routines?: boolean | TB_routinesDefaultArgs<ExtArgs>
    TB_exercises?: boolean | TB_exercisesDefaultArgs<ExtArgs>
  }
  export type TB_routine_exerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_routines?: boolean | TB_routinesDefaultArgs<ExtArgs>
    TB_exercises?: boolean | TB_exercisesDefaultArgs<ExtArgs>
  }
  export type TB_routine_exerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_routines?: boolean | TB_routinesDefaultArgs<ExtArgs>
    TB_exercises?: boolean | TB_exercisesDefaultArgs<ExtArgs>
  }

  export type $TB_routine_exercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TB_routine_exercise"
    objects: {
      TB_routines: Prisma.$TB_routinesPayload<ExtArgs>
      TB_exercises: Prisma.$TB_exercisesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_routine: number
      id_exercise: number
    }, ExtArgs["result"]["tB_routine_exercise"]>
    composites: {}
  }

  type TB_routine_exerciseGetPayload<S extends boolean | null | undefined | TB_routine_exerciseDefaultArgs> = $Result.GetResult<Prisma.$TB_routine_exercisePayload, S>

  type TB_routine_exerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TB_routine_exerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TB_routine_exerciseCountAggregateInputType | true
    }

  export interface TB_routine_exerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TB_routine_exercise'], meta: { name: 'TB_routine_exercise' } }
    /**
     * Find zero or one TB_routine_exercise that matches the filter.
     * @param {TB_routine_exerciseFindUniqueArgs} args - Arguments to find a TB_routine_exercise
     * @example
     * // Get one TB_routine_exercise
     * const tB_routine_exercise = await prisma.tB_routine_exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TB_routine_exerciseFindUniqueArgs>(args: SelectSubset<T, TB_routine_exerciseFindUniqueArgs<ExtArgs>>): Prisma__TB_routine_exerciseClient<$Result.GetResult<Prisma.$TB_routine_exercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TB_routine_exercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TB_routine_exerciseFindUniqueOrThrowArgs} args - Arguments to find a TB_routine_exercise
     * @example
     * // Get one TB_routine_exercise
     * const tB_routine_exercise = await prisma.tB_routine_exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TB_routine_exerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, TB_routine_exerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TB_routine_exerciseClient<$Result.GetResult<Prisma.$TB_routine_exercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_routine_exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_routine_exerciseFindFirstArgs} args - Arguments to find a TB_routine_exercise
     * @example
     * // Get one TB_routine_exercise
     * const tB_routine_exercise = await prisma.tB_routine_exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TB_routine_exerciseFindFirstArgs>(args?: SelectSubset<T, TB_routine_exerciseFindFirstArgs<ExtArgs>>): Prisma__TB_routine_exerciseClient<$Result.GetResult<Prisma.$TB_routine_exercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_routine_exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_routine_exerciseFindFirstOrThrowArgs} args - Arguments to find a TB_routine_exercise
     * @example
     * // Get one TB_routine_exercise
     * const tB_routine_exercise = await prisma.tB_routine_exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TB_routine_exerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, TB_routine_exerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__TB_routine_exerciseClient<$Result.GetResult<Prisma.$TB_routine_exercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TB_routine_exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_routine_exerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TB_routine_exercises
     * const tB_routine_exercises = await prisma.tB_routine_exercise.findMany()
     * 
     * // Get first 10 TB_routine_exercises
     * const tB_routine_exercises = await prisma.tB_routine_exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tB_routine_exerciseWithIdOnly = await prisma.tB_routine_exercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TB_routine_exerciseFindManyArgs>(args?: SelectSubset<T, TB_routine_exerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_routine_exercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TB_routine_exercise.
     * @param {TB_routine_exerciseCreateArgs} args - Arguments to create a TB_routine_exercise.
     * @example
     * // Create one TB_routine_exercise
     * const TB_routine_exercise = await prisma.tB_routine_exercise.create({
     *   data: {
     *     // ... data to create a TB_routine_exercise
     *   }
     * })
     * 
     */
    create<T extends TB_routine_exerciseCreateArgs>(args: SelectSubset<T, TB_routine_exerciseCreateArgs<ExtArgs>>): Prisma__TB_routine_exerciseClient<$Result.GetResult<Prisma.$TB_routine_exercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TB_routine_exercises.
     * @param {TB_routine_exerciseCreateManyArgs} args - Arguments to create many TB_routine_exercises.
     * @example
     * // Create many TB_routine_exercises
     * const tB_routine_exercise = await prisma.tB_routine_exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TB_routine_exerciseCreateManyArgs>(args?: SelectSubset<T, TB_routine_exerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TB_routine_exercises and returns the data saved in the database.
     * @param {TB_routine_exerciseCreateManyAndReturnArgs} args - Arguments to create many TB_routine_exercises.
     * @example
     * // Create many TB_routine_exercises
     * const tB_routine_exercise = await prisma.tB_routine_exercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TB_routine_exercises and only return the `id`
     * const tB_routine_exerciseWithIdOnly = await prisma.tB_routine_exercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TB_routine_exerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, TB_routine_exerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_routine_exercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TB_routine_exercise.
     * @param {TB_routine_exerciseDeleteArgs} args - Arguments to delete one TB_routine_exercise.
     * @example
     * // Delete one TB_routine_exercise
     * const TB_routine_exercise = await prisma.tB_routine_exercise.delete({
     *   where: {
     *     // ... filter to delete one TB_routine_exercise
     *   }
     * })
     * 
     */
    delete<T extends TB_routine_exerciseDeleteArgs>(args: SelectSubset<T, TB_routine_exerciseDeleteArgs<ExtArgs>>): Prisma__TB_routine_exerciseClient<$Result.GetResult<Prisma.$TB_routine_exercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TB_routine_exercise.
     * @param {TB_routine_exerciseUpdateArgs} args - Arguments to update one TB_routine_exercise.
     * @example
     * // Update one TB_routine_exercise
     * const tB_routine_exercise = await prisma.tB_routine_exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TB_routine_exerciseUpdateArgs>(args: SelectSubset<T, TB_routine_exerciseUpdateArgs<ExtArgs>>): Prisma__TB_routine_exerciseClient<$Result.GetResult<Prisma.$TB_routine_exercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TB_routine_exercises.
     * @param {TB_routine_exerciseDeleteManyArgs} args - Arguments to filter TB_routine_exercises to delete.
     * @example
     * // Delete a few TB_routine_exercises
     * const { count } = await prisma.tB_routine_exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TB_routine_exerciseDeleteManyArgs>(args?: SelectSubset<T, TB_routine_exerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_routine_exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_routine_exerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TB_routine_exercises
     * const tB_routine_exercise = await prisma.tB_routine_exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TB_routine_exerciseUpdateManyArgs>(args: SelectSubset<T, TB_routine_exerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_routine_exercises and returns the data updated in the database.
     * @param {TB_routine_exerciseUpdateManyAndReturnArgs} args - Arguments to update many TB_routine_exercises.
     * @example
     * // Update many TB_routine_exercises
     * const tB_routine_exercise = await prisma.tB_routine_exercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TB_routine_exercises and only return the `id`
     * const tB_routine_exerciseWithIdOnly = await prisma.tB_routine_exercise.updateManyAndReturn({
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
    updateManyAndReturn<T extends TB_routine_exerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, TB_routine_exerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_routine_exercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TB_routine_exercise.
     * @param {TB_routine_exerciseUpsertArgs} args - Arguments to update or create a TB_routine_exercise.
     * @example
     * // Update or create a TB_routine_exercise
     * const tB_routine_exercise = await prisma.tB_routine_exercise.upsert({
     *   create: {
     *     // ... data to create a TB_routine_exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TB_routine_exercise we want to update
     *   }
     * })
     */
    upsert<T extends TB_routine_exerciseUpsertArgs>(args: SelectSubset<T, TB_routine_exerciseUpsertArgs<ExtArgs>>): Prisma__TB_routine_exerciseClient<$Result.GetResult<Prisma.$TB_routine_exercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TB_routine_exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_routine_exerciseCountArgs} args - Arguments to filter TB_routine_exercises to count.
     * @example
     * // Count the number of TB_routine_exercises
     * const count = await prisma.tB_routine_exercise.count({
     *   where: {
     *     // ... the filter for the TB_routine_exercises we want to count
     *   }
     * })
    **/
    count<T extends TB_routine_exerciseCountArgs>(
      args?: Subset<T, TB_routine_exerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TB_routine_exerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TB_routine_exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_routine_exerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TB_routine_exerciseAggregateArgs>(args: Subset<T, TB_routine_exerciseAggregateArgs>): Prisma.PrismaPromise<GetTB_routine_exerciseAggregateType<T>>

    /**
     * Group by TB_routine_exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_routine_exerciseGroupByArgs} args - Group by arguments.
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
      T extends TB_routine_exerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TB_routine_exerciseGroupByArgs['orderBy'] }
        : { orderBy?: TB_routine_exerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TB_routine_exerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTB_routine_exerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TB_routine_exercise model
   */
  readonly fields: TB_routine_exerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TB_routine_exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TB_routine_exerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TB_routines<T extends TB_routinesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TB_routinesDefaultArgs<ExtArgs>>): Prisma__TB_routinesClient<$Result.GetResult<Prisma.$TB_routinesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    TB_exercises<T extends TB_exercisesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TB_exercisesDefaultArgs<ExtArgs>>): Prisma__TB_exercisesClient<$Result.GetResult<Prisma.$TB_exercisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TB_routine_exercise model
   */
  interface TB_routine_exerciseFieldRefs {
    readonly id: FieldRef<"TB_routine_exercise", 'Int'>
    readonly id_routine: FieldRef<"TB_routine_exercise", 'Int'>
    readonly id_exercise: FieldRef<"TB_routine_exercise", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TB_routine_exercise findUnique
   */
  export type TB_routine_exerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routine_exercise
     */
    select?: TB_routine_exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routine_exercise
     */
    omit?: TB_routine_exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_routine_exerciseInclude<ExtArgs> | null
    /**
     * Filter, which TB_routine_exercise to fetch.
     */
    where: TB_routine_exerciseWhereUniqueInput
  }

  /**
   * TB_routine_exercise findUniqueOrThrow
   */
  export type TB_routine_exerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routine_exercise
     */
    select?: TB_routine_exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routine_exercise
     */
    omit?: TB_routine_exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_routine_exerciseInclude<ExtArgs> | null
    /**
     * Filter, which TB_routine_exercise to fetch.
     */
    where: TB_routine_exerciseWhereUniqueInput
  }

  /**
   * TB_routine_exercise findFirst
   */
  export type TB_routine_exerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routine_exercise
     */
    select?: TB_routine_exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routine_exercise
     */
    omit?: TB_routine_exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_routine_exerciseInclude<ExtArgs> | null
    /**
     * Filter, which TB_routine_exercise to fetch.
     */
    where?: TB_routine_exerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_routine_exercises to fetch.
     */
    orderBy?: TB_routine_exerciseOrderByWithRelationInput | TB_routine_exerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_routine_exercises.
     */
    cursor?: TB_routine_exerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_routine_exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_routine_exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_routine_exercises.
     */
    distinct?: TB_routine_exerciseScalarFieldEnum | TB_routine_exerciseScalarFieldEnum[]
  }

  /**
   * TB_routine_exercise findFirstOrThrow
   */
  export type TB_routine_exerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routine_exercise
     */
    select?: TB_routine_exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routine_exercise
     */
    omit?: TB_routine_exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_routine_exerciseInclude<ExtArgs> | null
    /**
     * Filter, which TB_routine_exercise to fetch.
     */
    where?: TB_routine_exerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_routine_exercises to fetch.
     */
    orderBy?: TB_routine_exerciseOrderByWithRelationInput | TB_routine_exerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_routine_exercises.
     */
    cursor?: TB_routine_exerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_routine_exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_routine_exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_routine_exercises.
     */
    distinct?: TB_routine_exerciseScalarFieldEnum | TB_routine_exerciseScalarFieldEnum[]
  }

  /**
   * TB_routine_exercise findMany
   */
  export type TB_routine_exerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routine_exercise
     */
    select?: TB_routine_exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routine_exercise
     */
    omit?: TB_routine_exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_routine_exerciseInclude<ExtArgs> | null
    /**
     * Filter, which TB_routine_exercises to fetch.
     */
    where?: TB_routine_exerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_routine_exercises to fetch.
     */
    orderBy?: TB_routine_exerciseOrderByWithRelationInput | TB_routine_exerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TB_routine_exercises.
     */
    cursor?: TB_routine_exerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_routine_exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_routine_exercises.
     */
    skip?: number
    distinct?: TB_routine_exerciseScalarFieldEnum | TB_routine_exerciseScalarFieldEnum[]
  }

  /**
   * TB_routine_exercise create
   */
  export type TB_routine_exerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routine_exercise
     */
    select?: TB_routine_exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routine_exercise
     */
    omit?: TB_routine_exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_routine_exerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a TB_routine_exercise.
     */
    data: XOR<TB_routine_exerciseCreateInput, TB_routine_exerciseUncheckedCreateInput>
  }

  /**
   * TB_routine_exercise createMany
   */
  export type TB_routine_exerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TB_routine_exercises.
     */
    data: TB_routine_exerciseCreateManyInput | TB_routine_exerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_routine_exercise createManyAndReturn
   */
  export type TB_routine_exerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routine_exercise
     */
    select?: TB_routine_exerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routine_exercise
     */
    omit?: TB_routine_exerciseOmit<ExtArgs> | null
    /**
     * The data used to create many TB_routine_exercises.
     */
    data: TB_routine_exerciseCreateManyInput | TB_routine_exerciseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_routine_exerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TB_routine_exercise update
   */
  export type TB_routine_exerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routine_exercise
     */
    select?: TB_routine_exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routine_exercise
     */
    omit?: TB_routine_exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_routine_exerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a TB_routine_exercise.
     */
    data: XOR<TB_routine_exerciseUpdateInput, TB_routine_exerciseUncheckedUpdateInput>
    /**
     * Choose, which TB_routine_exercise to update.
     */
    where: TB_routine_exerciseWhereUniqueInput
  }

  /**
   * TB_routine_exercise updateMany
   */
  export type TB_routine_exerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TB_routine_exercises.
     */
    data: XOR<TB_routine_exerciseUpdateManyMutationInput, TB_routine_exerciseUncheckedUpdateManyInput>
    /**
     * Filter which TB_routine_exercises to update
     */
    where?: TB_routine_exerciseWhereInput
    /**
     * Limit how many TB_routine_exercises to update.
     */
    limit?: number
  }

  /**
   * TB_routine_exercise updateManyAndReturn
   */
  export type TB_routine_exerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routine_exercise
     */
    select?: TB_routine_exerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routine_exercise
     */
    omit?: TB_routine_exerciseOmit<ExtArgs> | null
    /**
     * The data used to update TB_routine_exercises.
     */
    data: XOR<TB_routine_exerciseUpdateManyMutationInput, TB_routine_exerciseUncheckedUpdateManyInput>
    /**
     * Filter which TB_routine_exercises to update
     */
    where?: TB_routine_exerciseWhereInput
    /**
     * Limit how many TB_routine_exercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_routine_exerciseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TB_routine_exercise upsert
   */
  export type TB_routine_exerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routine_exercise
     */
    select?: TB_routine_exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routine_exercise
     */
    omit?: TB_routine_exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_routine_exerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the TB_routine_exercise to update in case it exists.
     */
    where: TB_routine_exerciseWhereUniqueInput
    /**
     * In case the TB_routine_exercise found by the `where` argument doesn't exist, create a new TB_routine_exercise with this data.
     */
    create: XOR<TB_routine_exerciseCreateInput, TB_routine_exerciseUncheckedCreateInput>
    /**
     * In case the TB_routine_exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TB_routine_exerciseUpdateInput, TB_routine_exerciseUncheckedUpdateInput>
  }

  /**
   * TB_routine_exercise delete
   */
  export type TB_routine_exerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routine_exercise
     */
    select?: TB_routine_exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routine_exercise
     */
    omit?: TB_routine_exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_routine_exerciseInclude<ExtArgs> | null
    /**
     * Filter which TB_routine_exercise to delete.
     */
    where: TB_routine_exerciseWhereUniqueInput
  }

  /**
   * TB_routine_exercise deleteMany
   */
  export type TB_routine_exerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_routine_exercises to delete
     */
    where?: TB_routine_exerciseWhereInput
    /**
     * Limit how many TB_routine_exercises to delete.
     */
    limit?: number
  }

  /**
   * TB_routine_exercise without action
   */
  export type TB_routine_exerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_routine_exercise
     */
    select?: TB_routine_exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_routine_exercise
     */
    omit?: TB_routine_exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_routine_exerciseInclude<ExtArgs> | null
  }


  /**
   * Model TB_reservations
   */

  export type AggregateTB_reservations = {
    _count: TB_reservationsCountAggregateOutputType | null
    _avg: TB_reservationsAvgAggregateOutputType | null
    _sum: TB_reservationsSumAggregateOutputType | null
    _min: TB_reservationsMinAggregateOutputType | null
    _max: TB_reservationsMaxAggregateOutputType | null
  }

  export type TB_reservationsAvgAggregateOutputType = {
    id: number | null
    id_client_membership: number | null
    id_routine: number | null
  }

  export type TB_reservationsSumAggregateOutputType = {
    id: number | null
    id_client_membership: number | null
    id_routine: number | null
  }

  export type TB_reservationsMinAggregateOutputType = {
    id: number | null
    id_client_membership: number | null
    id_routine: number | null
    start_time: Date | null
    status: $Enums.reservationStatus | null
  }

  export type TB_reservationsMaxAggregateOutputType = {
    id: number | null
    id_client_membership: number | null
    id_routine: number | null
    start_time: Date | null
    status: $Enums.reservationStatus | null
  }

  export type TB_reservationsCountAggregateOutputType = {
    id: number
    id_client_membership: number
    id_routine: number
    start_time: number
    status: number
    _all: number
  }


  export type TB_reservationsAvgAggregateInputType = {
    id?: true
    id_client_membership?: true
    id_routine?: true
  }

  export type TB_reservationsSumAggregateInputType = {
    id?: true
    id_client_membership?: true
    id_routine?: true
  }

  export type TB_reservationsMinAggregateInputType = {
    id?: true
    id_client_membership?: true
    id_routine?: true
    start_time?: true
    status?: true
  }

  export type TB_reservationsMaxAggregateInputType = {
    id?: true
    id_client_membership?: true
    id_routine?: true
    start_time?: true
    status?: true
  }

  export type TB_reservationsCountAggregateInputType = {
    id?: true
    id_client_membership?: true
    id_routine?: true
    start_time?: true
    status?: true
    _all?: true
  }

  export type TB_reservationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_reservations to aggregate.
     */
    where?: TB_reservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_reservations to fetch.
     */
    orderBy?: TB_reservationsOrderByWithRelationInput | TB_reservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TB_reservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TB_reservations
    **/
    _count?: true | TB_reservationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TB_reservationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TB_reservationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TB_reservationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TB_reservationsMaxAggregateInputType
  }

  export type GetTB_reservationsAggregateType<T extends TB_reservationsAggregateArgs> = {
        [P in keyof T & keyof AggregateTB_reservations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTB_reservations[P]>
      : GetScalarType<T[P], AggregateTB_reservations[P]>
  }




  export type TB_reservationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_reservationsWhereInput
    orderBy?: TB_reservationsOrderByWithAggregationInput | TB_reservationsOrderByWithAggregationInput[]
    by: TB_reservationsScalarFieldEnum[] | TB_reservationsScalarFieldEnum
    having?: TB_reservationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TB_reservationsCountAggregateInputType | true
    _avg?: TB_reservationsAvgAggregateInputType
    _sum?: TB_reservationsSumAggregateInputType
    _min?: TB_reservationsMinAggregateInputType
    _max?: TB_reservationsMaxAggregateInputType
  }

  export type TB_reservationsGroupByOutputType = {
    id: number
    id_client_membership: number
    id_routine: number
    start_time: Date
    status: $Enums.reservationStatus
    _count: TB_reservationsCountAggregateOutputType | null
    _avg: TB_reservationsAvgAggregateOutputType | null
    _sum: TB_reservationsSumAggregateOutputType | null
    _min: TB_reservationsMinAggregateOutputType | null
    _max: TB_reservationsMaxAggregateOutputType | null
  }

  type GetTB_reservationsGroupByPayload<T extends TB_reservationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TB_reservationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TB_reservationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TB_reservationsGroupByOutputType[P]>
            : GetScalarType<T[P], TB_reservationsGroupByOutputType[P]>
        }
      >
    >


  export type TB_reservationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_client_membership?: boolean
    id_routine?: boolean
    start_time?: boolean
    status?: boolean
    TB_client_membership?: boolean | TB_client_membershipDefaultArgs<ExtArgs>
    TB_routines?: boolean | TB_routinesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_reservations"]>

  export type TB_reservationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_client_membership?: boolean
    id_routine?: boolean
    start_time?: boolean
    status?: boolean
    TB_client_membership?: boolean | TB_client_membershipDefaultArgs<ExtArgs>
    TB_routines?: boolean | TB_routinesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_reservations"]>

  export type TB_reservationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_client_membership?: boolean
    id_routine?: boolean
    start_time?: boolean
    status?: boolean
    TB_client_membership?: boolean | TB_client_membershipDefaultArgs<ExtArgs>
    TB_routines?: boolean | TB_routinesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_reservations"]>

  export type TB_reservationsSelectScalar = {
    id?: boolean
    id_client_membership?: boolean
    id_routine?: boolean
    start_time?: boolean
    status?: boolean
  }

  export type TB_reservationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_client_membership" | "id_routine" | "start_time" | "status", ExtArgs["result"]["tB_reservations"]>
  export type TB_reservationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_client_membership?: boolean | TB_client_membershipDefaultArgs<ExtArgs>
    TB_routines?: boolean | TB_routinesDefaultArgs<ExtArgs>
  }
  export type TB_reservationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_client_membership?: boolean | TB_client_membershipDefaultArgs<ExtArgs>
    TB_routines?: boolean | TB_routinesDefaultArgs<ExtArgs>
  }
  export type TB_reservationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_client_membership?: boolean | TB_client_membershipDefaultArgs<ExtArgs>
    TB_routines?: boolean | TB_routinesDefaultArgs<ExtArgs>
  }

  export type $TB_reservationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TB_reservations"
    objects: {
      TB_client_membership: Prisma.$TB_client_membershipPayload<ExtArgs>
      TB_routines: Prisma.$TB_routinesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_client_membership: number
      id_routine: number
      start_time: Date
      status: $Enums.reservationStatus
    }, ExtArgs["result"]["tB_reservations"]>
    composites: {}
  }

  type TB_reservationsGetPayload<S extends boolean | null | undefined | TB_reservationsDefaultArgs> = $Result.GetResult<Prisma.$TB_reservationsPayload, S>

  type TB_reservationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TB_reservationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TB_reservationsCountAggregateInputType | true
    }

  export interface TB_reservationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TB_reservations'], meta: { name: 'TB_reservations' } }
    /**
     * Find zero or one TB_reservations that matches the filter.
     * @param {TB_reservationsFindUniqueArgs} args - Arguments to find a TB_reservations
     * @example
     * // Get one TB_reservations
     * const tB_reservations = await prisma.tB_reservations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TB_reservationsFindUniqueArgs>(args: SelectSubset<T, TB_reservationsFindUniqueArgs<ExtArgs>>): Prisma__TB_reservationsClient<$Result.GetResult<Prisma.$TB_reservationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TB_reservations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TB_reservationsFindUniqueOrThrowArgs} args - Arguments to find a TB_reservations
     * @example
     * // Get one TB_reservations
     * const tB_reservations = await prisma.tB_reservations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TB_reservationsFindUniqueOrThrowArgs>(args: SelectSubset<T, TB_reservationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TB_reservationsClient<$Result.GetResult<Prisma.$TB_reservationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_reservationsFindFirstArgs} args - Arguments to find a TB_reservations
     * @example
     * // Get one TB_reservations
     * const tB_reservations = await prisma.tB_reservations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TB_reservationsFindFirstArgs>(args?: SelectSubset<T, TB_reservationsFindFirstArgs<ExtArgs>>): Prisma__TB_reservationsClient<$Result.GetResult<Prisma.$TB_reservationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_reservations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_reservationsFindFirstOrThrowArgs} args - Arguments to find a TB_reservations
     * @example
     * // Get one TB_reservations
     * const tB_reservations = await prisma.tB_reservations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TB_reservationsFindFirstOrThrowArgs>(args?: SelectSubset<T, TB_reservationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TB_reservationsClient<$Result.GetResult<Prisma.$TB_reservationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TB_reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_reservationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TB_reservations
     * const tB_reservations = await prisma.tB_reservations.findMany()
     * 
     * // Get first 10 TB_reservations
     * const tB_reservations = await prisma.tB_reservations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tB_reservationsWithIdOnly = await prisma.tB_reservations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TB_reservationsFindManyArgs>(args?: SelectSubset<T, TB_reservationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_reservationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TB_reservations.
     * @param {TB_reservationsCreateArgs} args - Arguments to create a TB_reservations.
     * @example
     * // Create one TB_reservations
     * const TB_reservations = await prisma.tB_reservations.create({
     *   data: {
     *     // ... data to create a TB_reservations
     *   }
     * })
     * 
     */
    create<T extends TB_reservationsCreateArgs>(args: SelectSubset<T, TB_reservationsCreateArgs<ExtArgs>>): Prisma__TB_reservationsClient<$Result.GetResult<Prisma.$TB_reservationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TB_reservations.
     * @param {TB_reservationsCreateManyArgs} args - Arguments to create many TB_reservations.
     * @example
     * // Create many TB_reservations
     * const tB_reservations = await prisma.tB_reservations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TB_reservationsCreateManyArgs>(args?: SelectSubset<T, TB_reservationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TB_reservations and returns the data saved in the database.
     * @param {TB_reservationsCreateManyAndReturnArgs} args - Arguments to create many TB_reservations.
     * @example
     * // Create many TB_reservations
     * const tB_reservations = await prisma.tB_reservations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TB_reservations and only return the `id`
     * const tB_reservationsWithIdOnly = await prisma.tB_reservations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TB_reservationsCreateManyAndReturnArgs>(args?: SelectSubset<T, TB_reservationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_reservationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TB_reservations.
     * @param {TB_reservationsDeleteArgs} args - Arguments to delete one TB_reservations.
     * @example
     * // Delete one TB_reservations
     * const TB_reservations = await prisma.tB_reservations.delete({
     *   where: {
     *     // ... filter to delete one TB_reservations
     *   }
     * })
     * 
     */
    delete<T extends TB_reservationsDeleteArgs>(args: SelectSubset<T, TB_reservationsDeleteArgs<ExtArgs>>): Prisma__TB_reservationsClient<$Result.GetResult<Prisma.$TB_reservationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TB_reservations.
     * @param {TB_reservationsUpdateArgs} args - Arguments to update one TB_reservations.
     * @example
     * // Update one TB_reservations
     * const tB_reservations = await prisma.tB_reservations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TB_reservationsUpdateArgs>(args: SelectSubset<T, TB_reservationsUpdateArgs<ExtArgs>>): Prisma__TB_reservationsClient<$Result.GetResult<Prisma.$TB_reservationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TB_reservations.
     * @param {TB_reservationsDeleteManyArgs} args - Arguments to filter TB_reservations to delete.
     * @example
     * // Delete a few TB_reservations
     * const { count } = await prisma.tB_reservations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TB_reservationsDeleteManyArgs>(args?: SelectSubset<T, TB_reservationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_reservationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TB_reservations
     * const tB_reservations = await prisma.tB_reservations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TB_reservationsUpdateManyArgs>(args: SelectSubset<T, TB_reservationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_reservations and returns the data updated in the database.
     * @param {TB_reservationsUpdateManyAndReturnArgs} args - Arguments to update many TB_reservations.
     * @example
     * // Update many TB_reservations
     * const tB_reservations = await prisma.tB_reservations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TB_reservations and only return the `id`
     * const tB_reservationsWithIdOnly = await prisma.tB_reservations.updateManyAndReturn({
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
    updateManyAndReturn<T extends TB_reservationsUpdateManyAndReturnArgs>(args: SelectSubset<T, TB_reservationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_reservationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TB_reservations.
     * @param {TB_reservationsUpsertArgs} args - Arguments to update or create a TB_reservations.
     * @example
     * // Update or create a TB_reservations
     * const tB_reservations = await prisma.tB_reservations.upsert({
     *   create: {
     *     // ... data to create a TB_reservations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TB_reservations we want to update
     *   }
     * })
     */
    upsert<T extends TB_reservationsUpsertArgs>(args: SelectSubset<T, TB_reservationsUpsertArgs<ExtArgs>>): Prisma__TB_reservationsClient<$Result.GetResult<Prisma.$TB_reservationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TB_reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_reservationsCountArgs} args - Arguments to filter TB_reservations to count.
     * @example
     * // Count the number of TB_reservations
     * const count = await prisma.tB_reservations.count({
     *   where: {
     *     // ... the filter for the TB_reservations we want to count
     *   }
     * })
    **/
    count<T extends TB_reservationsCountArgs>(
      args?: Subset<T, TB_reservationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TB_reservationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TB_reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_reservationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TB_reservationsAggregateArgs>(args: Subset<T, TB_reservationsAggregateArgs>): Prisma.PrismaPromise<GetTB_reservationsAggregateType<T>>

    /**
     * Group by TB_reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_reservationsGroupByArgs} args - Group by arguments.
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
      T extends TB_reservationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TB_reservationsGroupByArgs['orderBy'] }
        : { orderBy?: TB_reservationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TB_reservationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTB_reservationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TB_reservations model
   */
  readonly fields: TB_reservationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TB_reservations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TB_reservationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TB_client_membership<T extends TB_client_membershipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TB_client_membershipDefaultArgs<ExtArgs>>): Prisma__TB_client_membershipClient<$Result.GetResult<Prisma.$TB_client_membershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    TB_routines<T extends TB_routinesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TB_routinesDefaultArgs<ExtArgs>>): Prisma__TB_routinesClient<$Result.GetResult<Prisma.$TB_routinesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TB_reservations model
   */
  interface TB_reservationsFieldRefs {
    readonly id: FieldRef<"TB_reservations", 'Int'>
    readonly id_client_membership: FieldRef<"TB_reservations", 'Int'>
    readonly id_routine: FieldRef<"TB_reservations", 'Int'>
    readonly start_time: FieldRef<"TB_reservations", 'DateTime'>
    readonly status: FieldRef<"TB_reservations", 'reservationStatus'>
  }
    

  // Custom InputTypes
  /**
   * TB_reservations findUnique
   */
  export type TB_reservationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_reservations
     */
    select?: TB_reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_reservations
     */
    omit?: TB_reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_reservationsInclude<ExtArgs> | null
    /**
     * Filter, which TB_reservations to fetch.
     */
    where: TB_reservationsWhereUniqueInput
  }

  /**
   * TB_reservations findUniqueOrThrow
   */
  export type TB_reservationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_reservations
     */
    select?: TB_reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_reservations
     */
    omit?: TB_reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_reservationsInclude<ExtArgs> | null
    /**
     * Filter, which TB_reservations to fetch.
     */
    where: TB_reservationsWhereUniqueInput
  }

  /**
   * TB_reservations findFirst
   */
  export type TB_reservationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_reservations
     */
    select?: TB_reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_reservations
     */
    omit?: TB_reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_reservationsInclude<ExtArgs> | null
    /**
     * Filter, which TB_reservations to fetch.
     */
    where?: TB_reservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_reservations to fetch.
     */
    orderBy?: TB_reservationsOrderByWithRelationInput | TB_reservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_reservations.
     */
    cursor?: TB_reservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_reservations.
     */
    distinct?: TB_reservationsScalarFieldEnum | TB_reservationsScalarFieldEnum[]
  }

  /**
   * TB_reservations findFirstOrThrow
   */
  export type TB_reservationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_reservations
     */
    select?: TB_reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_reservations
     */
    omit?: TB_reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_reservationsInclude<ExtArgs> | null
    /**
     * Filter, which TB_reservations to fetch.
     */
    where?: TB_reservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_reservations to fetch.
     */
    orderBy?: TB_reservationsOrderByWithRelationInput | TB_reservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_reservations.
     */
    cursor?: TB_reservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_reservations.
     */
    distinct?: TB_reservationsScalarFieldEnum | TB_reservationsScalarFieldEnum[]
  }

  /**
   * TB_reservations findMany
   */
  export type TB_reservationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_reservations
     */
    select?: TB_reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_reservations
     */
    omit?: TB_reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_reservationsInclude<ExtArgs> | null
    /**
     * Filter, which TB_reservations to fetch.
     */
    where?: TB_reservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_reservations to fetch.
     */
    orderBy?: TB_reservationsOrderByWithRelationInput | TB_reservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TB_reservations.
     */
    cursor?: TB_reservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_reservations.
     */
    skip?: number
    distinct?: TB_reservationsScalarFieldEnum | TB_reservationsScalarFieldEnum[]
  }

  /**
   * TB_reservations create
   */
  export type TB_reservationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_reservations
     */
    select?: TB_reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_reservations
     */
    omit?: TB_reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_reservationsInclude<ExtArgs> | null
    /**
     * The data needed to create a TB_reservations.
     */
    data: XOR<TB_reservationsCreateInput, TB_reservationsUncheckedCreateInput>
  }

  /**
   * TB_reservations createMany
   */
  export type TB_reservationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TB_reservations.
     */
    data: TB_reservationsCreateManyInput | TB_reservationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_reservations createManyAndReturn
   */
  export type TB_reservationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_reservations
     */
    select?: TB_reservationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_reservations
     */
    omit?: TB_reservationsOmit<ExtArgs> | null
    /**
     * The data used to create many TB_reservations.
     */
    data: TB_reservationsCreateManyInput | TB_reservationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_reservationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TB_reservations update
   */
  export type TB_reservationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_reservations
     */
    select?: TB_reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_reservations
     */
    omit?: TB_reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_reservationsInclude<ExtArgs> | null
    /**
     * The data needed to update a TB_reservations.
     */
    data: XOR<TB_reservationsUpdateInput, TB_reservationsUncheckedUpdateInput>
    /**
     * Choose, which TB_reservations to update.
     */
    where: TB_reservationsWhereUniqueInput
  }

  /**
   * TB_reservations updateMany
   */
  export type TB_reservationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TB_reservations.
     */
    data: XOR<TB_reservationsUpdateManyMutationInput, TB_reservationsUncheckedUpdateManyInput>
    /**
     * Filter which TB_reservations to update
     */
    where?: TB_reservationsWhereInput
    /**
     * Limit how many TB_reservations to update.
     */
    limit?: number
  }

  /**
   * TB_reservations updateManyAndReturn
   */
  export type TB_reservationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_reservations
     */
    select?: TB_reservationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_reservations
     */
    omit?: TB_reservationsOmit<ExtArgs> | null
    /**
     * The data used to update TB_reservations.
     */
    data: XOR<TB_reservationsUpdateManyMutationInput, TB_reservationsUncheckedUpdateManyInput>
    /**
     * Filter which TB_reservations to update
     */
    where?: TB_reservationsWhereInput
    /**
     * Limit how many TB_reservations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_reservationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TB_reservations upsert
   */
  export type TB_reservationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_reservations
     */
    select?: TB_reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_reservations
     */
    omit?: TB_reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_reservationsInclude<ExtArgs> | null
    /**
     * The filter to search for the TB_reservations to update in case it exists.
     */
    where: TB_reservationsWhereUniqueInput
    /**
     * In case the TB_reservations found by the `where` argument doesn't exist, create a new TB_reservations with this data.
     */
    create: XOR<TB_reservationsCreateInput, TB_reservationsUncheckedCreateInput>
    /**
     * In case the TB_reservations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TB_reservationsUpdateInput, TB_reservationsUncheckedUpdateInput>
  }

  /**
   * TB_reservations delete
   */
  export type TB_reservationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_reservations
     */
    select?: TB_reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_reservations
     */
    omit?: TB_reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_reservationsInclude<ExtArgs> | null
    /**
     * Filter which TB_reservations to delete.
     */
    where: TB_reservationsWhereUniqueInput
  }

  /**
   * TB_reservations deleteMany
   */
  export type TB_reservationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_reservations to delete
     */
    where?: TB_reservationsWhereInput
    /**
     * Limit how many TB_reservations to delete.
     */
    limit?: number
  }

  /**
   * TB_reservations without action
   */
  export type TB_reservationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_reservations
     */
    select?: TB_reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_reservations
     */
    omit?: TB_reservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_reservationsInclude<ExtArgs> | null
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


  export const TB_usersScalarFieldEnum: {
    id_user: 'id_user',
    name: 'name',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    phone_number: 'phone_number',
    birthday: 'birthday'
  };

  export type TB_usersScalarFieldEnum = (typeof TB_usersScalarFieldEnum)[keyof typeof TB_usersScalarFieldEnum]


  export const TB_roleScalarFieldEnum: {
    id_role: 'id_role',
    name: 'name',
    description: 'description'
  };

  export type TB_roleScalarFieldEnum = (typeof TB_roleScalarFieldEnum)[keyof typeof TB_roleScalarFieldEnum]


  export const TB_user_roleScalarFieldEnum: {
    id_user_role: 'id_user_role',
    id_user: 'id_user',
    id_role: 'id_role'
  };

  export type TB_user_roleScalarFieldEnum = (typeof TB_user_roleScalarFieldEnum)[keyof typeof TB_user_roleScalarFieldEnum]


  export const TB_restrictionScalarFieldEnum: {
    id_restriction: 'id_restriction',
    id_user: 'id_user',
    description: 'description'
  };

  export type TB_restrictionScalarFieldEnum = (typeof TB_restrictionScalarFieldEnum)[keyof typeof TB_restrictionScalarFieldEnum]


  export const TB_employeesScalarFieldEnum: {
    id: 'id',
    id_user_role: 'id_user_role',
    bio: 'bio',
    specialization: 'specialization',
    date_entry: 'date_entry'
  };

  export type TB_employeesScalarFieldEnum = (typeof TB_employeesScalarFieldEnum)[keyof typeof TB_employeesScalarFieldEnum]


  export const TB_membershipsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    paymentFrequency: 'paymentFrequency'
  };

  export type TB_membershipsScalarFieldEnum = (typeof TB_membershipsScalarFieldEnum)[keyof typeof TB_membershipsScalarFieldEnum]


  export const TB_client_membershipScalarFieldEnum: {
    id: 'id',
    id_user_role: 'id_user_role',
    id_membership: 'id_membership',
    start_date: 'start_date',
    end_date: 'end_date'
  };

  export type TB_client_membershipScalarFieldEnum = (typeof TB_client_membershipScalarFieldEnum)[keyof typeof TB_client_membershipScalarFieldEnum]


  export const TB_routinesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    estimatedDuration: 'estimatedDuration',
    capacity: 'capacity'
  };

  export type TB_routinesScalarFieldEnum = (typeof TB_routinesScalarFieldEnum)[keyof typeof TB_routinesScalarFieldEnum]


  export const TB_exercisesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    muscle_group: 'muscle_group'
  };

  export type TB_exercisesScalarFieldEnum = (typeof TB_exercisesScalarFieldEnum)[keyof typeof TB_exercisesScalarFieldEnum]


  export const TB_routine_exerciseScalarFieldEnum: {
    id: 'id',
    id_routine: 'id_routine',
    id_exercise: 'id_exercise'
  };

  export type TB_routine_exerciseScalarFieldEnum = (typeof TB_routine_exerciseScalarFieldEnum)[keyof typeof TB_routine_exerciseScalarFieldEnum]


  export const TB_reservationsScalarFieldEnum: {
    id: 'id',
    id_client_membership: 'id_client_membership',
    id_routine: 'id_routine',
    start_time: 'start_time',
    status: 'status'
  };

  export type TB_reservationsScalarFieldEnum = (typeof TB_reservationsScalarFieldEnum)[keyof typeof TB_reservationsScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'frequency'
   */
  export type EnumfrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'frequency'>
    


  /**
   * Reference to a field of type 'frequency[]'
   */
  export type ListEnumfrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'frequency[]'>
    


  /**
   * Reference to a field of type 'reservationStatus'
   */
  export type EnumreservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'reservationStatus'>
    


  /**
   * Reference to a field of type 'reservationStatus[]'
   */
  export type ListEnumreservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'reservationStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type TB_usersWhereInput = {
    AND?: TB_usersWhereInput | TB_usersWhereInput[]
    OR?: TB_usersWhereInput[]
    NOT?: TB_usersWhereInput | TB_usersWhereInput[]
    id_user?: IntFilter<"TB_users"> | number
    name?: StringFilter<"TB_users"> | string
    lastname?: StringFilter<"TB_users"> | string
    email?: StringFilter<"TB_users"> | string
    password?: StringFilter<"TB_users"> | string
    phone_number?: StringFilter<"TB_users"> | string
    birthday?: DateTimeFilter<"TB_users"> | Date | string
    TB_user_role?: TB_user_roleListRelationFilter
    TB_restriction?: TB_restrictionListRelationFilter
  }

  export type TB_usersOrderByWithRelationInput = {
    id_user?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    birthday?: SortOrder
    TB_user_role?: TB_user_roleOrderByRelationAggregateInput
    TB_restriction?: TB_restrictionOrderByRelationAggregateInput
  }

  export type TB_usersWhereUniqueInput = Prisma.AtLeast<{
    id_user?: number
    email?: string
    AND?: TB_usersWhereInput | TB_usersWhereInput[]
    OR?: TB_usersWhereInput[]
    NOT?: TB_usersWhereInput | TB_usersWhereInput[]
    name?: StringFilter<"TB_users"> | string
    lastname?: StringFilter<"TB_users"> | string
    password?: StringFilter<"TB_users"> | string
    phone_number?: StringFilter<"TB_users"> | string
    birthday?: DateTimeFilter<"TB_users"> | Date | string
    TB_user_role?: TB_user_roleListRelationFilter
    TB_restriction?: TB_restrictionListRelationFilter
  }, "id_user" | "email">

  export type TB_usersOrderByWithAggregationInput = {
    id_user?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    birthday?: SortOrder
    _count?: TB_usersCountOrderByAggregateInput
    _avg?: TB_usersAvgOrderByAggregateInput
    _max?: TB_usersMaxOrderByAggregateInput
    _min?: TB_usersMinOrderByAggregateInput
    _sum?: TB_usersSumOrderByAggregateInput
  }

  export type TB_usersScalarWhereWithAggregatesInput = {
    AND?: TB_usersScalarWhereWithAggregatesInput | TB_usersScalarWhereWithAggregatesInput[]
    OR?: TB_usersScalarWhereWithAggregatesInput[]
    NOT?: TB_usersScalarWhereWithAggregatesInput | TB_usersScalarWhereWithAggregatesInput[]
    id_user?: IntWithAggregatesFilter<"TB_users"> | number
    name?: StringWithAggregatesFilter<"TB_users"> | string
    lastname?: StringWithAggregatesFilter<"TB_users"> | string
    email?: StringWithAggregatesFilter<"TB_users"> | string
    password?: StringWithAggregatesFilter<"TB_users"> | string
    phone_number?: StringWithAggregatesFilter<"TB_users"> | string
    birthday?: DateTimeWithAggregatesFilter<"TB_users"> | Date | string
  }

  export type TB_roleWhereInput = {
    AND?: TB_roleWhereInput | TB_roleWhereInput[]
    OR?: TB_roleWhereInput[]
    NOT?: TB_roleWhereInput | TB_roleWhereInput[]
    id_role?: IntFilter<"TB_role"> | number
    name?: StringFilter<"TB_role"> | string
    description?: StringFilter<"TB_role"> | string
    TB_user_role?: TB_user_roleListRelationFilter
  }

  export type TB_roleOrderByWithRelationInput = {
    id_role?: SortOrder
    name?: SortOrder
    description?: SortOrder
    TB_user_role?: TB_user_roleOrderByRelationAggregateInput
  }

  export type TB_roleWhereUniqueInput = Prisma.AtLeast<{
    id_role?: number
    name?: string
    AND?: TB_roleWhereInput | TB_roleWhereInput[]
    OR?: TB_roleWhereInput[]
    NOT?: TB_roleWhereInput | TB_roleWhereInput[]
    description?: StringFilter<"TB_role"> | string
    TB_user_role?: TB_user_roleListRelationFilter
  }, "id_role" | "name">

  export type TB_roleOrderByWithAggregationInput = {
    id_role?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: TB_roleCountOrderByAggregateInput
    _avg?: TB_roleAvgOrderByAggregateInput
    _max?: TB_roleMaxOrderByAggregateInput
    _min?: TB_roleMinOrderByAggregateInput
    _sum?: TB_roleSumOrderByAggregateInput
  }

  export type TB_roleScalarWhereWithAggregatesInput = {
    AND?: TB_roleScalarWhereWithAggregatesInput | TB_roleScalarWhereWithAggregatesInput[]
    OR?: TB_roleScalarWhereWithAggregatesInput[]
    NOT?: TB_roleScalarWhereWithAggregatesInput | TB_roleScalarWhereWithAggregatesInput[]
    id_role?: IntWithAggregatesFilter<"TB_role"> | number
    name?: StringWithAggregatesFilter<"TB_role"> | string
    description?: StringWithAggregatesFilter<"TB_role"> | string
  }

  export type TB_user_roleWhereInput = {
    AND?: TB_user_roleWhereInput | TB_user_roleWhereInput[]
    OR?: TB_user_roleWhereInput[]
    NOT?: TB_user_roleWhereInput | TB_user_roleWhereInput[]
    id_user_role?: IntFilter<"TB_user_role"> | number
    id_user?: IntFilter<"TB_user_role"> | number
    id_role?: IntFilter<"TB_user_role"> | number
    TB_users?: XOR<TB_usersScalarRelationFilter, TB_usersWhereInput>
    TB_role?: XOR<TB_roleScalarRelationFilter, TB_roleWhereInput>
    TB_employees?: TB_employeesListRelationFilter
    TB_client_membership?: TB_client_membershipListRelationFilter
  }

  export type TB_user_roleOrderByWithRelationInput = {
    id_user_role?: SortOrder
    id_user?: SortOrder
    id_role?: SortOrder
    TB_users?: TB_usersOrderByWithRelationInput
    TB_role?: TB_roleOrderByWithRelationInput
    TB_employees?: TB_employeesOrderByRelationAggregateInput
    TB_client_membership?: TB_client_membershipOrderByRelationAggregateInput
  }

  export type TB_user_roleWhereUniqueInput = Prisma.AtLeast<{
    id_user_role?: number
    AND?: TB_user_roleWhereInput | TB_user_roleWhereInput[]
    OR?: TB_user_roleWhereInput[]
    NOT?: TB_user_roleWhereInput | TB_user_roleWhereInput[]
    id_user?: IntFilter<"TB_user_role"> | number
    id_role?: IntFilter<"TB_user_role"> | number
    TB_users?: XOR<TB_usersScalarRelationFilter, TB_usersWhereInput>
    TB_role?: XOR<TB_roleScalarRelationFilter, TB_roleWhereInput>
    TB_employees?: TB_employeesListRelationFilter
    TB_client_membership?: TB_client_membershipListRelationFilter
  }, "id_user_role">

  export type TB_user_roleOrderByWithAggregationInput = {
    id_user_role?: SortOrder
    id_user?: SortOrder
    id_role?: SortOrder
    _count?: TB_user_roleCountOrderByAggregateInput
    _avg?: TB_user_roleAvgOrderByAggregateInput
    _max?: TB_user_roleMaxOrderByAggregateInput
    _min?: TB_user_roleMinOrderByAggregateInput
    _sum?: TB_user_roleSumOrderByAggregateInput
  }

  export type TB_user_roleScalarWhereWithAggregatesInput = {
    AND?: TB_user_roleScalarWhereWithAggregatesInput | TB_user_roleScalarWhereWithAggregatesInput[]
    OR?: TB_user_roleScalarWhereWithAggregatesInput[]
    NOT?: TB_user_roleScalarWhereWithAggregatesInput | TB_user_roleScalarWhereWithAggregatesInput[]
    id_user_role?: IntWithAggregatesFilter<"TB_user_role"> | number
    id_user?: IntWithAggregatesFilter<"TB_user_role"> | number
    id_role?: IntWithAggregatesFilter<"TB_user_role"> | number
  }

  export type TB_restrictionWhereInput = {
    AND?: TB_restrictionWhereInput | TB_restrictionWhereInput[]
    OR?: TB_restrictionWhereInput[]
    NOT?: TB_restrictionWhereInput | TB_restrictionWhereInput[]
    id_restriction?: IntFilter<"TB_restriction"> | number
    id_user?: IntFilter<"TB_restriction"> | number
    description?: StringFilter<"TB_restriction"> | string
    TB_users?: XOR<TB_usersScalarRelationFilter, TB_usersWhereInput>
  }

  export type TB_restrictionOrderByWithRelationInput = {
    id_restriction?: SortOrder
    id_user?: SortOrder
    description?: SortOrder
    TB_users?: TB_usersOrderByWithRelationInput
  }

  export type TB_restrictionWhereUniqueInput = Prisma.AtLeast<{
    id_restriction?: number
    id_user?: number
    AND?: TB_restrictionWhereInput | TB_restrictionWhereInput[]
    OR?: TB_restrictionWhereInput[]
    NOT?: TB_restrictionWhereInput | TB_restrictionWhereInput[]
    description?: StringFilter<"TB_restriction"> | string
    TB_users?: XOR<TB_usersScalarRelationFilter, TB_usersWhereInput>
  }, "id_restriction" | "id_user">

  export type TB_restrictionOrderByWithAggregationInput = {
    id_restriction?: SortOrder
    id_user?: SortOrder
    description?: SortOrder
    _count?: TB_restrictionCountOrderByAggregateInput
    _avg?: TB_restrictionAvgOrderByAggregateInput
    _max?: TB_restrictionMaxOrderByAggregateInput
    _min?: TB_restrictionMinOrderByAggregateInput
    _sum?: TB_restrictionSumOrderByAggregateInput
  }

  export type TB_restrictionScalarWhereWithAggregatesInput = {
    AND?: TB_restrictionScalarWhereWithAggregatesInput | TB_restrictionScalarWhereWithAggregatesInput[]
    OR?: TB_restrictionScalarWhereWithAggregatesInput[]
    NOT?: TB_restrictionScalarWhereWithAggregatesInput | TB_restrictionScalarWhereWithAggregatesInput[]
    id_restriction?: IntWithAggregatesFilter<"TB_restriction"> | number
    id_user?: IntWithAggregatesFilter<"TB_restriction"> | number
    description?: StringWithAggregatesFilter<"TB_restriction"> | string
  }

  export type TB_employeesWhereInput = {
    AND?: TB_employeesWhereInput | TB_employeesWhereInput[]
    OR?: TB_employeesWhereInput[]
    NOT?: TB_employeesWhereInput | TB_employeesWhereInput[]
    id?: IntFilter<"TB_employees"> | number
    id_user_role?: IntFilter<"TB_employees"> | number
    bio?: StringFilter<"TB_employees"> | string
    specialization?: StringFilter<"TB_employees"> | string
    date_entry?: DateTimeFilter<"TB_employees"> | Date | string
    TB_user_role?: XOR<TB_user_roleScalarRelationFilter, TB_user_roleWhereInput>
  }

  export type TB_employeesOrderByWithRelationInput = {
    id?: SortOrder
    id_user_role?: SortOrder
    bio?: SortOrder
    specialization?: SortOrder
    date_entry?: SortOrder
    TB_user_role?: TB_user_roleOrderByWithRelationInput
  }

  export type TB_employeesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_user_role?: number
    AND?: TB_employeesWhereInput | TB_employeesWhereInput[]
    OR?: TB_employeesWhereInput[]
    NOT?: TB_employeesWhereInput | TB_employeesWhereInput[]
    bio?: StringFilter<"TB_employees"> | string
    specialization?: StringFilter<"TB_employees"> | string
    date_entry?: DateTimeFilter<"TB_employees"> | Date | string
    TB_user_role?: XOR<TB_user_roleScalarRelationFilter, TB_user_roleWhereInput>
  }, "id" | "id_user_role">

  export type TB_employeesOrderByWithAggregationInput = {
    id?: SortOrder
    id_user_role?: SortOrder
    bio?: SortOrder
    specialization?: SortOrder
    date_entry?: SortOrder
    _count?: TB_employeesCountOrderByAggregateInput
    _avg?: TB_employeesAvgOrderByAggregateInput
    _max?: TB_employeesMaxOrderByAggregateInput
    _min?: TB_employeesMinOrderByAggregateInput
    _sum?: TB_employeesSumOrderByAggregateInput
  }

  export type TB_employeesScalarWhereWithAggregatesInput = {
    AND?: TB_employeesScalarWhereWithAggregatesInput | TB_employeesScalarWhereWithAggregatesInput[]
    OR?: TB_employeesScalarWhereWithAggregatesInput[]
    NOT?: TB_employeesScalarWhereWithAggregatesInput | TB_employeesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TB_employees"> | number
    id_user_role?: IntWithAggregatesFilter<"TB_employees"> | number
    bio?: StringWithAggregatesFilter<"TB_employees"> | string
    specialization?: StringWithAggregatesFilter<"TB_employees"> | string
    date_entry?: DateTimeWithAggregatesFilter<"TB_employees"> | Date | string
  }

  export type TB_membershipsWhereInput = {
    AND?: TB_membershipsWhereInput | TB_membershipsWhereInput[]
    OR?: TB_membershipsWhereInput[]
    NOT?: TB_membershipsWhereInput | TB_membershipsWhereInput[]
    id?: IntFilter<"TB_memberships"> | number
    name?: StringFilter<"TB_memberships"> | string
    description?: StringFilter<"TB_memberships"> | string
    price?: FloatFilter<"TB_memberships"> | number
    paymentFrequency?: EnumfrequencyFilter<"TB_memberships"> | $Enums.frequency
    TB_client_membership?: TB_client_membershipListRelationFilter
  }

  export type TB_membershipsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    paymentFrequency?: SortOrder
    TB_client_membership?: TB_client_membershipOrderByRelationAggregateInput
  }

  export type TB_membershipsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TB_membershipsWhereInput | TB_membershipsWhereInput[]
    OR?: TB_membershipsWhereInput[]
    NOT?: TB_membershipsWhereInput | TB_membershipsWhereInput[]
    description?: StringFilter<"TB_memberships"> | string
    price?: FloatFilter<"TB_memberships"> | number
    paymentFrequency?: EnumfrequencyFilter<"TB_memberships"> | $Enums.frequency
    TB_client_membership?: TB_client_membershipListRelationFilter
  }, "id" | "name">

  export type TB_membershipsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    paymentFrequency?: SortOrder
    _count?: TB_membershipsCountOrderByAggregateInput
    _avg?: TB_membershipsAvgOrderByAggregateInput
    _max?: TB_membershipsMaxOrderByAggregateInput
    _min?: TB_membershipsMinOrderByAggregateInput
    _sum?: TB_membershipsSumOrderByAggregateInput
  }

  export type TB_membershipsScalarWhereWithAggregatesInput = {
    AND?: TB_membershipsScalarWhereWithAggregatesInput | TB_membershipsScalarWhereWithAggregatesInput[]
    OR?: TB_membershipsScalarWhereWithAggregatesInput[]
    NOT?: TB_membershipsScalarWhereWithAggregatesInput | TB_membershipsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TB_memberships"> | number
    name?: StringWithAggregatesFilter<"TB_memberships"> | string
    description?: StringWithAggregatesFilter<"TB_memberships"> | string
    price?: FloatWithAggregatesFilter<"TB_memberships"> | number
    paymentFrequency?: EnumfrequencyWithAggregatesFilter<"TB_memberships"> | $Enums.frequency
  }

  export type TB_client_membershipWhereInput = {
    AND?: TB_client_membershipWhereInput | TB_client_membershipWhereInput[]
    OR?: TB_client_membershipWhereInput[]
    NOT?: TB_client_membershipWhereInput | TB_client_membershipWhereInput[]
    id?: IntFilter<"TB_client_membership"> | number
    id_user_role?: IntFilter<"TB_client_membership"> | number
    id_membership?: IntFilter<"TB_client_membership"> | number
    start_date?: DateTimeFilter<"TB_client_membership"> | Date | string
    end_date?: DateTimeFilter<"TB_client_membership"> | Date | string
    TB_user_role?: XOR<TB_user_roleScalarRelationFilter, TB_user_roleWhereInput>
    TB_memberships?: XOR<TB_membershipsScalarRelationFilter, TB_membershipsWhereInput>
    TB_reservations?: TB_reservationsListRelationFilter
  }

  export type TB_client_membershipOrderByWithRelationInput = {
    id?: SortOrder
    id_user_role?: SortOrder
    id_membership?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    TB_user_role?: TB_user_roleOrderByWithRelationInput
    TB_memberships?: TB_membershipsOrderByWithRelationInput
    TB_reservations?: TB_reservationsOrderByRelationAggregateInput
  }

  export type TB_client_membershipWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TB_client_membershipWhereInput | TB_client_membershipWhereInput[]
    OR?: TB_client_membershipWhereInput[]
    NOT?: TB_client_membershipWhereInput | TB_client_membershipWhereInput[]
    id_user_role?: IntFilter<"TB_client_membership"> | number
    id_membership?: IntFilter<"TB_client_membership"> | number
    start_date?: DateTimeFilter<"TB_client_membership"> | Date | string
    end_date?: DateTimeFilter<"TB_client_membership"> | Date | string
    TB_user_role?: XOR<TB_user_roleScalarRelationFilter, TB_user_roleWhereInput>
    TB_memberships?: XOR<TB_membershipsScalarRelationFilter, TB_membershipsWhereInput>
    TB_reservations?: TB_reservationsListRelationFilter
  }, "id">

  export type TB_client_membershipOrderByWithAggregationInput = {
    id?: SortOrder
    id_user_role?: SortOrder
    id_membership?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    _count?: TB_client_membershipCountOrderByAggregateInput
    _avg?: TB_client_membershipAvgOrderByAggregateInput
    _max?: TB_client_membershipMaxOrderByAggregateInput
    _min?: TB_client_membershipMinOrderByAggregateInput
    _sum?: TB_client_membershipSumOrderByAggregateInput
  }

  export type TB_client_membershipScalarWhereWithAggregatesInput = {
    AND?: TB_client_membershipScalarWhereWithAggregatesInput | TB_client_membershipScalarWhereWithAggregatesInput[]
    OR?: TB_client_membershipScalarWhereWithAggregatesInput[]
    NOT?: TB_client_membershipScalarWhereWithAggregatesInput | TB_client_membershipScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TB_client_membership"> | number
    id_user_role?: IntWithAggregatesFilter<"TB_client_membership"> | number
    id_membership?: IntWithAggregatesFilter<"TB_client_membership"> | number
    start_date?: DateTimeWithAggregatesFilter<"TB_client_membership"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"TB_client_membership"> | Date | string
  }

  export type TB_routinesWhereInput = {
    AND?: TB_routinesWhereInput | TB_routinesWhereInput[]
    OR?: TB_routinesWhereInput[]
    NOT?: TB_routinesWhereInput | TB_routinesWhereInput[]
    id?: IntFilter<"TB_routines"> | number
    name?: StringFilter<"TB_routines"> | string
    description?: StringFilter<"TB_routines"> | string
    estimatedDuration?: IntFilter<"TB_routines"> | number
    capacity?: IntFilter<"TB_routines"> | number
    TB_routine_exercise?: TB_routine_exerciseListRelationFilter
    TB_reservations?: TB_reservationsListRelationFilter
  }

  export type TB_routinesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    estimatedDuration?: SortOrder
    capacity?: SortOrder
    TB_routine_exercise?: TB_routine_exerciseOrderByRelationAggregateInput
    TB_reservations?: TB_reservationsOrderByRelationAggregateInput
  }

  export type TB_routinesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TB_routinesWhereInput | TB_routinesWhereInput[]
    OR?: TB_routinesWhereInput[]
    NOT?: TB_routinesWhereInput | TB_routinesWhereInput[]
    description?: StringFilter<"TB_routines"> | string
    estimatedDuration?: IntFilter<"TB_routines"> | number
    capacity?: IntFilter<"TB_routines"> | number
    TB_routine_exercise?: TB_routine_exerciseListRelationFilter
    TB_reservations?: TB_reservationsListRelationFilter
  }, "id" | "name">

  export type TB_routinesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    estimatedDuration?: SortOrder
    capacity?: SortOrder
    _count?: TB_routinesCountOrderByAggregateInput
    _avg?: TB_routinesAvgOrderByAggregateInput
    _max?: TB_routinesMaxOrderByAggregateInput
    _min?: TB_routinesMinOrderByAggregateInput
    _sum?: TB_routinesSumOrderByAggregateInput
  }

  export type TB_routinesScalarWhereWithAggregatesInput = {
    AND?: TB_routinesScalarWhereWithAggregatesInput | TB_routinesScalarWhereWithAggregatesInput[]
    OR?: TB_routinesScalarWhereWithAggregatesInput[]
    NOT?: TB_routinesScalarWhereWithAggregatesInput | TB_routinesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TB_routines"> | number
    name?: StringWithAggregatesFilter<"TB_routines"> | string
    description?: StringWithAggregatesFilter<"TB_routines"> | string
    estimatedDuration?: IntWithAggregatesFilter<"TB_routines"> | number
    capacity?: IntWithAggregatesFilter<"TB_routines"> | number
  }

  export type TB_exercisesWhereInput = {
    AND?: TB_exercisesWhereInput | TB_exercisesWhereInput[]
    OR?: TB_exercisesWhereInput[]
    NOT?: TB_exercisesWhereInput | TB_exercisesWhereInput[]
    id?: IntFilter<"TB_exercises"> | number
    name?: StringFilter<"TB_exercises"> | string
    description?: StringFilter<"TB_exercises"> | string
    muscle_group?: StringFilter<"TB_exercises"> | string
    TB_routine_exercise?: TB_routine_exerciseListRelationFilter
  }

  export type TB_exercisesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    muscle_group?: SortOrder
    TB_routine_exercise?: TB_routine_exerciseOrderByRelationAggregateInput
  }

  export type TB_exercisesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TB_exercisesWhereInput | TB_exercisesWhereInput[]
    OR?: TB_exercisesWhereInput[]
    NOT?: TB_exercisesWhereInput | TB_exercisesWhereInput[]
    description?: StringFilter<"TB_exercises"> | string
    muscle_group?: StringFilter<"TB_exercises"> | string
    TB_routine_exercise?: TB_routine_exerciseListRelationFilter
  }, "id" | "name">

  export type TB_exercisesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    muscle_group?: SortOrder
    _count?: TB_exercisesCountOrderByAggregateInput
    _avg?: TB_exercisesAvgOrderByAggregateInput
    _max?: TB_exercisesMaxOrderByAggregateInput
    _min?: TB_exercisesMinOrderByAggregateInput
    _sum?: TB_exercisesSumOrderByAggregateInput
  }

  export type TB_exercisesScalarWhereWithAggregatesInput = {
    AND?: TB_exercisesScalarWhereWithAggregatesInput | TB_exercisesScalarWhereWithAggregatesInput[]
    OR?: TB_exercisesScalarWhereWithAggregatesInput[]
    NOT?: TB_exercisesScalarWhereWithAggregatesInput | TB_exercisesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TB_exercises"> | number
    name?: StringWithAggregatesFilter<"TB_exercises"> | string
    description?: StringWithAggregatesFilter<"TB_exercises"> | string
    muscle_group?: StringWithAggregatesFilter<"TB_exercises"> | string
  }

  export type TB_routine_exerciseWhereInput = {
    AND?: TB_routine_exerciseWhereInput | TB_routine_exerciseWhereInput[]
    OR?: TB_routine_exerciseWhereInput[]
    NOT?: TB_routine_exerciseWhereInput | TB_routine_exerciseWhereInput[]
    id?: IntFilter<"TB_routine_exercise"> | number
    id_routine?: IntFilter<"TB_routine_exercise"> | number
    id_exercise?: IntFilter<"TB_routine_exercise"> | number
    TB_routines?: XOR<TB_routinesScalarRelationFilter, TB_routinesWhereInput>
    TB_exercises?: XOR<TB_exercisesScalarRelationFilter, TB_exercisesWhereInput>
  }

  export type TB_routine_exerciseOrderByWithRelationInput = {
    id?: SortOrder
    id_routine?: SortOrder
    id_exercise?: SortOrder
    TB_routines?: TB_routinesOrderByWithRelationInput
    TB_exercises?: TB_exercisesOrderByWithRelationInput
  }

  export type TB_routine_exerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TB_routine_exerciseWhereInput | TB_routine_exerciseWhereInput[]
    OR?: TB_routine_exerciseWhereInput[]
    NOT?: TB_routine_exerciseWhereInput | TB_routine_exerciseWhereInput[]
    id_routine?: IntFilter<"TB_routine_exercise"> | number
    id_exercise?: IntFilter<"TB_routine_exercise"> | number
    TB_routines?: XOR<TB_routinesScalarRelationFilter, TB_routinesWhereInput>
    TB_exercises?: XOR<TB_exercisesScalarRelationFilter, TB_exercisesWhereInput>
  }, "id">

  export type TB_routine_exerciseOrderByWithAggregationInput = {
    id?: SortOrder
    id_routine?: SortOrder
    id_exercise?: SortOrder
    _count?: TB_routine_exerciseCountOrderByAggregateInput
    _avg?: TB_routine_exerciseAvgOrderByAggregateInput
    _max?: TB_routine_exerciseMaxOrderByAggregateInput
    _min?: TB_routine_exerciseMinOrderByAggregateInput
    _sum?: TB_routine_exerciseSumOrderByAggregateInput
  }

  export type TB_routine_exerciseScalarWhereWithAggregatesInput = {
    AND?: TB_routine_exerciseScalarWhereWithAggregatesInput | TB_routine_exerciseScalarWhereWithAggregatesInput[]
    OR?: TB_routine_exerciseScalarWhereWithAggregatesInput[]
    NOT?: TB_routine_exerciseScalarWhereWithAggregatesInput | TB_routine_exerciseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TB_routine_exercise"> | number
    id_routine?: IntWithAggregatesFilter<"TB_routine_exercise"> | number
    id_exercise?: IntWithAggregatesFilter<"TB_routine_exercise"> | number
  }

  export type TB_reservationsWhereInput = {
    AND?: TB_reservationsWhereInput | TB_reservationsWhereInput[]
    OR?: TB_reservationsWhereInput[]
    NOT?: TB_reservationsWhereInput | TB_reservationsWhereInput[]
    id?: IntFilter<"TB_reservations"> | number
    id_client_membership?: IntFilter<"TB_reservations"> | number
    id_routine?: IntFilter<"TB_reservations"> | number
    start_time?: DateTimeFilter<"TB_reservations"> | Date | string
    status?: EnumreservationStatusFilter<"TB_reservations"> | $Enums.reservationStatus
    TB_client_membership?: XOR<TB_client_membershipScalarRelationFilter, TB_client_membershipWhereInput>
    TB_routines?: XOR<TB_routinesScalarRelationFilter, TB_routinesWhereInput>
  }

  export type TB_reservationsOrderByWithRelationInput = {
    id?: SortOrder
    id_client_membership?: SortOrder
    id_routine?: SortOrder
    start_time?: SortOrder
    status?: SortOrder
    TB_client_membership?: TB_client_membershipOrderByWithRelationInput
    TB_routines?: TB_routinesOrderByWithRelationInput
  }

  export type TB_reservationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TB_reservationsWhereInput | TB_reservationsWhereInput[]
    OR?: TB_reservationsWhereInput[]
    NOT?: TB_reservationsWhereInput | TB_reservationsWhereInput[]
    id_client_membership?: IntFilter<"TB_reservations"> | number
    id_routine?: IntFilter<"TB_reservations"> | number
    start_time?: DateTimeFilter<"TB_reservations"> | Date | string
    status?: EnumreservationStatusFilter<"TB_reservations"> | $Enums.reservationStatus
    TB_client_membership?: XOR<TB_client_membershipScalarRelationFilter, TB_client_membershipWhereInput>
    TB_routines?: XOR<TB_routinesScalarRelationFilter, TB_routinesWhereInput>
  }, "id">

  export type TB_reservationsOrderByWithAggregationInput = {
    id?: SortOrder
    id_client_membership?: SortOrder
    id_routine?: SortOrder
    start_time?: SortOrder
    status?: SortOrder
    _count?: TB_reservationsCountOrderByAggregateInput
    _avg?: TB_reservationsAvgOrderByAggregateInput
    _max?: TB_reservationsMaxOrderByAggregateInput
    _min?: TB_reservationsMinOrderByAggregateInput
    _sum?: TB_reservationsSumOrderByAggregateInput
  }

  export type TB_reservationsScalarWhereWithAggregatesInput = {
    AND?: TB_reservationsScalarWhereWithAggregatesInput | TB_reservationsScalarWhereWithAggregatesInput[]
    OR?: TB_reservationsScalarWhereWithAggregatesInput[]
    NOT?: TB_reservationsScalarWhereWithAggregatesInput | TB_reservationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TB_reservations"> | number
    id_client_membership?: IntWithAggregatesFilter<"TB_reservations"> | number
    id_routine?: IntWithAggregatesFilter<"TB_reservations"> | number
    start_time?: DateTimeWithAggregatesFilter<"TB_reservations"> | Date | string
    status?: EnumreservationStatusWithAggregatesFilter<"TB_reservations"> | $Enums.reservationStatus
  }

  export type TB_usersCreateInput = {
    name: string
    lastname: string
    email: string
    password: string
    phone_number: string
    birthday: Date | string
    TB_user_role?: TB_user_roleCreateNestedManyWithoutTB_usersInput
    TB_restriction?: TB_restrictionCreateNestedManyWithoutTB_usersInput
  }

  export type TB_usersUncheckedCreateInput = {
    id_user?: number
    name: string
    lastname: string
    email: string
    password: string
    phone_number: string
    birthday: Date | string
    TB_user_role?: TB_user_roleUncheckedCreateNestedManyWithoutTB_usersInput
    TB_restriction?: TB_restrictionUncheckedCreateNestedManyWithoutTB_usersInput
  }

  export type TB_usersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    TB_user_role?: TB_user_roleUpdateManyWithoutTB_usersNestedInput
    TB_restriction?: TB_restrictionUpdateManyWithoutTB_usersNestedInput
  }

  export type TB_usersUncheckedUpdateInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    TB_user_role?: TB_user_roleUncheckedUpdateManyWithoutTB_usersNestedInput
    TB_restriction?: TB_restrictionUncheckedUpdateManyWithoutTB_usersNestedInput
  }

  export type TB_usersCreateManyInput = {
    id_user?: number
    name: string
    lastname: string
    email: string
    password: string
    phone_number: string
    birthday: Date | string
  }

  export type TB_usersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TB_usersUncheckedUpdateManyInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TB_roleCreateInput = {
    name: string
    description: string
    TB_user_role?: TB_user_roleCreateNestedManyWithoutTB_roleInput
  }

  export type TB_roleUncheckedCreateInput = {
    id_role?: number
    name: string
    description: string
    TB_user_role?: TB_user_roleUncheckedCreateNestedManyWithoutTB_roleInput
  }

  export type TB_roleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    TB_user_role?: TB_user_roleUpdateManyWithoutTB_roleNestedInput
  }

  export type TB_roleUncheckedUpdateInput = {
    id_role?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    TB_user_role?: TB_user_roleUncheckedUpdateManyWithoutTB_roleNestedInput
  }

  export type TB_roleCreateManyInput = {
    id_role?: number
    name: string
    description: string
  }

  export type TB_roleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TB_roleUncheckedUpdateManyInput = {
    id_role?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TB_user_roleCreateInput = {
    TB_users: TB_usersCreateNestedOneWithoutTB_user_roleInput
    TB_role: TB_roleCreateNestedOneWithoutTB_user_roleInput
    TB_employees?: TB_employeesCreateNestedManyWithoutTB_user_roleInput
    TB_client_membership?: TB_client_membershipCreateNestedManyWithoutTB_user_roleInput
  }

  export type TB_user_roleUncheckedCreateInput = {
    id_user_role?: number
    id_user: number
    id_role: number
    TB_employees?: TB_employeesUncheckedCreateNestedManyWithoutTB_user_roleInput
    TB_client_membership?: TB_client_membershipUncheckedCreateNestedManyWithoutTB_user_roleInput
  }

  export type TB_user_roleUpdateInput = {
    TB_users?: TB_usersUpdateOneRequiredWithoutTB_user_roleNestedInput
    TB_role?: TB_roleUpdateOneRequiredWithoutTB_user_roleNestedInput
    TB_employees?: TB_employeesUpdateManyWithoutTB_user_roleNestedInput
    TB_client_membership?: TB_client_membershipUpdateManyWithoutTB_user_roleNestedInput
  }

  export type TB_user_roleUncheckedUpdateInput = {
    id_user_role?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    id_role?: IntFieldUpdateOperationsInput | number
    TB_employees?: TB_employeesUncheckedUpdateManyWithoutTB_user_roleNestedInput
    TB_client_membership?: TB_client_membershipUncheckedUpdateManyWithoutTB_user_roleNestedInput
  }

  export type TB_user_roleCreateManyInput = {
    id_user_role?: number
    id_user: number
    id_role: number
  }

  export type TB_user_roleUpdateManyMutationInput = {

  }

  export type TB_user_roleUncheckedUpdateManyInput = {
    id_user_role?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    id_role?: IntFieldUpdateOperationsInput | number
  }

  export type TB_restrictionCreateInput = {
    description: string
    TB_users: TB_usersCreateNestedOneWithoutTB_restrictionInput
  }

  export type TB_restrictionUncheckedCreateInput = {
    id_restriction?: number
    id_user: number
    description: string
  }

  export type TB_restrictionUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    TB_users?: TB_usersUpdateOneRequiredWithoutTB_restrictionNestedInput
  }

  export type TB_restrictionUncheckedUpdateInput = {
    id_restriction?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TB_restrictionCreateManyInput = {
    id_restriction?: number
    id_user: number
    description: string
  }

  export type TB_restrictionUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TB_restrictionUncheckedUpdateManyInput = {
    id_restriction?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TB_employeesCreateInput = {
    bio: string
    specialization: string
    date_entry: Date | string
    TB_user_role: TB_user_roleCreateNestedOneWithoutTB_employeesInput
  }

  export type TB_employeesUncheckedCreateInput = {
    id?: number
    id_user_role: number
    bio: string
    specialization: string
    date_entry: Date | string
  }

  export type TB_employeesUpdateInput = {
    bio?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    date_entry?: DateTimeFieldUpdateOperationsInput | Date | string
    TB_user_role?: TB_user_roleUpdateOneRequiredWithoutTB_employeesNestedInput
  }

  export type TB_employeesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user_role?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    date_entry?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TB_employeesCreateManyInput = {
    id?: number
    id_user_role: number
    bio: string
    specialization: string
    date_entry: Date | string
  }

  export type TB_employeesUpdateManyMutationInput = {
    bio?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    date_entry?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TB_employeesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user_role?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    date_entry?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TB_membershipsCreateInput = {
    name: string
    description: string
    price: number
    paymentFrequency: $Enums.frequency
    TB_client_membership?: TB_client_membershipCreateNestedManyWithoutTB_membershipsInput
  }

  export type TB_membershipsUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    price: number
    paymentFrequency: $Enums.frequency
    TB_client_membership?: TB_client_membershipUncheckedCreateNestedManyWithoutTB_membershipsInput
  }

  export type TB_membershipsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    paymentFrequency?: EnumfrequencyFieldUpdateOperationsInput | $Enums.frequency
    TB_client_membership?: TB_client_membershipUpdateManyWithoutTB_membershipsNestedInput
  }

  export type TB_membershipsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    paymentFrequency?: EnumfrequencyFieldUpdateOperationsInput | $Enums.frequency
    TB_client_membership?: TB_client_membershipUncheckedUpdateManyWithoutTB_membershipsNestedInput
  }

  export type TB_membershipsCreateManyInput = {
    id?: number
    name: string
    description: string
    price: number
    paymentFrequency: $Enums.frequency
  }

  export type TB_membershipsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    paymentFrequency?: EnumfrequencyFieldUpdateOperationsInput | $Enums.frequency
  }

  export type TB_membershipsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    paymentFrequency?: EnumfrequencyFieldUpdateOperationsInput | $Enums.frequency
  }

  export type TB_client_membershipCreateInput = {
    start_date: Date | string
    end_date: Date | string
    TB_user_role: TB_user_roleCreateNestedOneWithoutTB_client_membershipInput
    TB_memberships: TB_membershipsCreateNestedOneWithoutTB_client_membershipInput
    TB_reservations?: TB_reservationsCreateNestedManyWithoutTB_client_membershipInput
  }

  export type TB_client_membershipUncheckedCreateInput = {
    id?: number
    id_user_role: number
    id_membership: number
    start_date: Date | string
    end_date: Date | string
    TB_reservations?: TB_reservationsUncheckedCreateNestedManyWithoutTB_client_membershipInput
  }

  export type TB_client_membershipUpdateInput = {
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    TB_user_role?: TB_user_roleUpdateOneRequiredWithoutTB_client_membershipNestedInput
    TB_memberships?: TB_membershipsUpdateOneRequiredWithoutTB_client_membershipNestedInput
    TB_reservations?: TB_reservationsUpdateManyWithoutTB_client_membershipNestedInput
  }

  export type TB_client_membershipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user_role?: IntFieldUpdateOperationsInput | number
    id_membership?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    TB_reservations?: TB_reservationsUncheckedUpdateManyWithoutTB_client_membershipNestedInput
  }

  export type TB_client_membershipCreateManyInput = {
    id?: number
    id_user_role: number
    id_membership: number
    start_date: Date | string
    end_date: Date | string
  }

  export type TB_client_membershipUpdateManyMutationInput = {
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TB_client_membershipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user_role?: IntFieldUpdateOperationsInput | number
    id_membership?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TB_routinesCreateInput = {
    name: string
    description: string
    estimatedDuration: number
    capacity?: number
    TB_routine_exercise?: TB_routine_exerciseCreateNestedManyWithoutTB_routinesInput
    TB_reservations?: TB_reservationsCreateNestedManyWithoutTB_routinesInput
  }

  export type TB_routinesUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    estimatedDuration: number
    capacity?: number
    TB_routine_exercise?: TB_routine_exerciseUncheckedCreateNestedManyWithoutTB_routinesInput
    TB_reservations?: TB_reservationsUncheckedCreateNestedManyWithoutTB_routinesInput
  }

  export type TB_routinesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    TB_routine_exercise?: TB_routine_exerciseUpdateManyWithoutTB_routinesNestedInput
    TB_reservations?: TB_reservationsUpdateManyWithoutTB_routinesNestedInput
  }

  export type TB_routinesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    TB_routine_exercise?: TB_routine_exerciseUncheckedUpdateManyWithoutTB_routinesNestedInput
    TB_reservations?: TB_reservationsUncheckedUpdateManyWithoutTB_routinesNestedInput
  }

  export type TB_routinesCreateManyInput = {
    id?: number
    name: string
    description: string
    estimatedDuration: number
    capacity?: number
  }

  export type TB_routinesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type TB_routinesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type TB_exercisesCreateInput = {
    name: string
    description: string
    muscle_group: string
    TB_routine_exercise?: TB_routine_exerciseCreateNestedManyWithoutTB_exercisesInput
  }

  export type TB_exercisesUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    muscle_group: string
    TB_routine_exercise?: TB_routine_exerciseUncheckedCreateNestedManyWithoutTB_exercisesInput
  }

  export type TB_exercisesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    muscle_group?: StringFieldUpdateOperationsInput | string
    TB_routine_exercise?: TB_routine_exerciseUpdateManyWithoutTB_exercisesNestedInput
  }

  export type TB_exercisesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    muscle_group?: StringFieldUpdateOperationsInput | string
    TB_routine_exercise?: TB_routine_exerciseUncheckedUpdateManyWithoutTB_exercisesNestedInput
  }

  export type TB_exercisesCreateManyInput = {
    id?: number
    name: string
    description: string
    muscle_group: string
  }

  export type TB_exercisesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    muscle_group?: StringFieldUpdateOperationsInput | string
  }

  export type TB_exercisesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    muscle_group?: StringFieldUpdateOperationsInput | string
  }

  export type TB_routine_exerciseCreateInput = {
    TB_routines: TB_routinesCreateNestedOneWithoutTB_routine_exerciseInput
    TB_exercises: TB_exercisesCreateNestedOneWithoutTB_routine_exerciseInput
  }

  export type TB_routine_exerciseUncheckedCreateInput = {
    id?: number
    id_routine: number
    id_exercise: number
  }

  export type TB_routine_exerciseUpdateInput = {
    TB_routines?: TB_routinesUpdateOneRequiredWithoutTB_routine_exerciseNestedInput
    TB_exercises?: TB_exercisesUpdateOneRequiredWithoutTB_routine_exerciseNestedInput
  }

  export type TB_routine_exerciseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_routine?: IntFieldUpdateOperationsInput | number
    id_exercise?: IntFieldUpdateOperationsInput | number
  }

  export type TB_routine_exerciseCreateManyInput = {
    id?: number
    id_routine: number
    id_exercise: number
  }

  export type TB_routine_exerciseUpdateManyMutationInput = {

  }

  export type TB_routine_exerciseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_routine?: IntFieldUpdateOperationsInput | number
    id_exercise?: IntFieldUpdateOperationsInput | number
  }

  export type TB_reservationsCreateInput = {
    start_time: Date | string
    status: $Enums.reservationStatus
    TB_client_membership: TB_client_membershipCreateNestedOneWithoutTB_reservationsInput
    TB_routines: TB_routinesCreateNestedOneWithoutTB_reservationsInput
  }

  export type TB_reservationsUncheckedCreateInput = {
    id?: number
    id_client_membership: number
    id_routine: number
    start_time: Date | string
    status: $Enums.reservationStatus
  }

  export type TB_reservationsUpdateInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumreservationStatusFieldUpdateOperationsInput | $Enums.reservationStatus
    TB_client_membership?: TB_client_membershipUpdateOneRequiredWithoutTB_reservationsNestedInput
    TB_routines?: TB_routinesUpdateOneRequiredWithoutTB_reservationsNestedInput
  }

  export type TB_reservationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_client_membership?: IntFieldUpdateOperationsInput | number
    id_routine?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumreservationStatusFieldUpdateOperationsInput | $Enums.reservationStatus
  }

  export type TB_reservationsCreateManyInput = {
    id?: number
    id_client_membership: number
    id_routine: number
    start_time: Date | string
    status: $Enums.reservationStatus
  }

  export type TB_reservationsUpdateManyMutationInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumreservationStatusFieldUpdateOperationsInput | $Enums.reservationStatus
  }

  export type TB_reservationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_client_membership?: IntFieldUpdateOperationsInput | number
    id_routine?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumreservationStatusFieldUpdateOperationsInput | $Enums.reservationStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type TB_user_roleListRelationFilter = {
    every?: TB_user_roleWhereInput
    some?: TB_user_roleWhereInput
    none?: TB_user_roleWhereInput
  }

  export type TB_restrictionListRelationFilter = {
    every?: TB_restrictionWhereInput
    some?: TB_restrictionWhereInput
    none?: TB_restrictionWhereInput
  }

  export type TB_user_roleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TB_restrictionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TB_usersCountOrderByAggregateInput = {
    id_user?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    birthday?: SortOrder
  }

  export type TB_usersAvgOrderByAggregateInput = {
    id_user?: SortOrder
  }

  export type TB_usersMaxOrderByAggregateInput = {
    id_user?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    birthday?: SortOrder
  }

  export type TB_usersMinOrderByAggregateInput = {
    id_user?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    birthday?: SortOrder
  }

  export type TB_usersSumOrderByAggregateInput = {
    id_user?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type TB_roleCountOrderByAggregateInput = {
    id_role?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TB_roleAvgOrderByAggregateInput = {
    id_role?: SortOrder
  }

  export type TB_roleMaxOrderByAggregateInput = {
    id_role?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TB_roleMinOrderByAggregateInput = {
    id_role?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TB_roleSumOrderByAggregateInput = {
    id_role?: SortOrder
  }

  export type TB_usersScalarRelationFilter = {
    is?: TB_usersWhereInput
    isNot?: TB_usersWhereInput
  }

  export type TB_roleScalarRelationFilter = {
    is?: TB_roleWhereInput
    isNot?: TB_roleWhereInput
  }

  export type TB_employeesListRelationFilter = {
    every?: TB_employeesWhereInput
    some?: TB_employeesWhereInput
    none?: TB_employeesWhereInput
  }

  export type TB_client_membershipListRelationFilter = {
    every?: TB_client_membershipWhereInput
    some?: TB_client_membershipWhereInput
    none?: TB_client_membershipWhereInput
  }

  export type TB_employeesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TB_client_membershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TB_user_roleCountOrderByAggregateInput = {
    id_user_role?: SortOrder
    id_user?: SortOrder
    id_role?: SortOrder
  }

  export type TB_user_roleAvgOrderByAggregateInput = {
    id_user_role?: SortOrder
    id_user?: SortOrder
    id_role?: SortOrder
  }

  export type TB_user_roleMaxOrderByAggregateInput = {
    id_user_role?: SortOrder
    id_user?: SortOrder
    id_role?: SortOrder
  }

  export type TB_user_roleMinOrderByAggregateInput = {
    id_user_role?: SortOrder
    id_user?: SortOrder
    id_role?: SortOrder
  }

  export type TB_user_roleSumOrderByAggregateInput = {
    id_user_role?: SortOrder
    id_user?: SortOrder
    id_role?: SortOrder
  }

  export type TB_restrictionCountOrderByAggregateInput = {
    id_restriction?: SortOrder
    id_user?: SortOrder
    description?: SortOrder
  }

  export type TB_restrictionAvgOrderByAggregateInput = {
    id_restriction?: SortOrder
    id_user?: SortOrder
  }

  export type TB_restrictionMaxOrderByAggregateInput = {
    id_restriction?: SortOrder
    id_user?: SortOrder
    description?: SortOrder
  }

  export type TB_restrictionMinOrderByAggregateInput = {
    id_restriction?: SortOrder
    id_user?: SortOrder
    description?: SortOrder
  }

  export type TB_restrictionSumOrderByAggregateInput = {
    id_restriction?: SortOrder
    id_user?: SortOrder
  }

  export type TB_user_roleScalarRelationFilter = {
    is?: TB_user_roleWhereInput
    isNot?: TB_user_roleWhereInput
  }

  export type TB_employeesCountOrderByAggregateInput = {
    id?: SortOrder
    id_user_role?: SortOrder
    bio?: SortOrder
    specialization?: SortOrder
    date_entry?: SortOrder
  }

  export type TB_employeesAvgOrderByAggregateInput = {
    id?: SortOrder
    id_user_role?: SortOrder
  }

  export type TB_employeesMaxOrderByAggregateInput = {
    id?: SortOrder
    id_user_role?: SortOrder
    bio?: SortOrder
    specialization?: SortOrder
    date_entry?: SortOrder
  }

  export type TB_employeesMinOrderByAggregateInput = {
    id?: SortOrder
    id_user_role?: SortOrder
    bio?: SortOrder
    specialization?: SortOrder
    date_entry?: SortOrder
  }

  export type TB_employeesSumOrderByAggregateInput = {
    id?: SortOrder
    id_user_role?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumfrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.frequency | EnumfrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.frequency[] | ListEnumfrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.frequency[] | ListEnumfrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumfrequencyFilter<$PrismaModel> | $Enums.frequency
  }

  export type TB_membershipsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    paymentFrequency?: SortOrder
  }

  export type TB_membershipsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type TB_membershipsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    paymentFrequency?: SortOrder
  }

  export type TB_membershipsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    paymentFrequency?: SortOrder
  }

  export type TB_membershipsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumfrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.frequency | EnumfrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.frequency[] | ListEnumfrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.frequency[] | ListEnumfrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumfrequencyWithAggregatesFilter<$PrismaModel> | $Enums.frequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumfrequencyFilter<$PrismaModel>
    _max?: NestedEnumfrequencyFilter<$PrismaModel>
  }

  export type TB_membershipsScalarRelationFilter = {
    is?: TB_membershipsWhereInput
    isNot?: TB_membershipsWhereInput
  }

  export type TB_reservationsListRelationFilter = {
    every?: TB_reservationsWhereInput
    some?: TB_reservationsWhereInput
    none?: TB_reservationsWhereInput
  }

  export type TB_reservationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TB_client_membershipCountOrderByAggregateInput = {
    id?: SortOrder
    id_user_role?: SortOrder
    id_membership?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type TB_client_membershipAvgOrderByAggregateInput = {
    id?: SortOrder
    id_user_role?: SortOrder
    id_membership?: SortOrder
  }

  export type TB_client_membershipMaxOrderByAggregateInput = {
    id?: SortOrder
    id_user_role?: SortOrder
    id_membership?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type TB_client_membershipMinOrderByAggregateInput = {
    id?: SortOrder
    id_user_role?: SortOrder
    id_membership?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type TB_client_membershipSumOrderByAggregateInput = {
    id?: SortOrder
    id_user_role?: SortOrder
    id_membership?: SortOrder
  }

  export type TB_routine_exerciseListRelationFilter = {
    every?: TB_routine_exerciseWhereInput
    some?: TB_routine_exerciseWhereInput
    none?: TB_routine_exerciseWhereInput
  }

  export type TB_routine_exerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TB_routinesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    estimatedDuration?: SortOrder
    capacity?: SortOrder
  }

  export type TB_routinesAvgOrderByAggregateInput = {
    id?: SortOrder
    estimatedDuration?: SortOrder
    capacity?: SortOrder
  }

  export type TB_routinesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    estimatedDuration?: SortOrder
    capacity?: SortOrder
  }

  export type TB_routinesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    estimatedDuration?: SortOrder
    capacity?: SortOrder
  }

  export type TB_routinesSumOrderByAggregateInput = {
    id?: SortOrder
    estimatedDuration?: SortOrder
    capacity?: SortOrder
  }

  export type TB_exercisesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    muscle_group?: SortOrder
  }

  export type TB_exercisesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TB_exercisesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    muscle_group?: SortOrder
  }

  export type TB_exercisesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    muscle_group?: SortOrder
  }

  export type TB_exercisesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TB_routinesScalarRelationFilter = {
    is?: TB_routinesWhereInput
    isNot?: TB_routinesWhereInput
  }

  export type TB_exercisesScalarRelationFilter = {
    is?: TB_exercisesWhereInput
    isNot?: TB_exercisesWhereInput
  }

  export type TB_routine_exerciseCountOrderByAggregateInput = {
    id?: SortOrder
    id_routine?: SortOrder
    id_exercise?: SortOrder
  }

  export type TB_routine_exerciseAvgOrderByAggregateInput = {
    id?: SortOrder
    id_routine?: SortOrder
    id_exercise?: SortOrder
  }

  export type TB_routine_exerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    id_routine?: SortOrder
    id_exercise?: SortOrder
  }

  export type TB_routine_exerciseMinOrderByAggregateInput = {
    id?: SortOrder
    id_routine?: SortOrder
    id_exercise?: SortOrder
  }

  export type TB_routine_exerciseSumOrderByAggregateInput = {
    id?: SortOrder
    id_routine?: SortOrder
    id_exercise?: SortOrder
  }

  export type EnumreservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.reservationStatus | EnumreservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.reservationStatus[] | ListEnumreservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.reservationStatus[] | ListEnumreservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumreservationStatusFilter<$PrismaModel> | $Enums.reservationStatus
  }

  export type TB_client_membershipScalarRelationFilter = {
    is?: TB_client_membershipWhereInput
    isNot?: TB_client_membershipWhereInput
  }

  export type TB_reservationsCountOrderByAggregateInput = {
    id?: SortOrder
    id_client_membership?: SortOrder
    id_routine?: SortOrder
    start_time?: SortOrder
    status?: SortOrder
  }

  export type TB_reservationsAvgOrderByAggregateInput = {
    id?: SortOrder
    id_client_membership?: SortOrder
    id_routine?: SortOrder
  }

  export type TB_reservationsMaxOrderByAggregateInput = {
    id?: SortOrder
    id_client_membership?: SortOrder
    id_routine?: SortOrder
    start_time?: SortOrder
    status?: SortOrder
  }

  export type TB_reservationsMinOrderByAggregateInput = {
    id?: SortOrder
    id_client_membership?: SortOrder
    id_routine?: SortOrder
    start_time?: SortOrder
    status?: SortOrder
  }

  export type TB_reservationsSumOrderByAggregateInput = {
    id?: SortOrder
    id_client_membership?: SortOrder
    id_routine?: SortOrder
  }

  export type EnumreservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.reservationStatus | EnumreservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.reservationStatus[] | ListEnumreservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.reservationStatus[] | ListEnumreservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumreservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.reservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumreservationStatusFilter<$PrismaModel>
    _max?: NestedEnumreservationStatusFilter<$PrismaModel>
  }

  export type TB_user_roleCreateNestedManyWithoutTB_usersInput = {
    create?: XOR<TB_user_roleCreateWithoutTB_usersInput, TB_user_roleUncheckedCreateWithoutTB_usersInput> | TB_user_roleCreateWithoutTB_usersInput[] | TB_user_roleUncheckedCreateWithoutTB_usersInput[]
    connectOrCreate?: TB_user_roleCreateOrConnectWithoutTB_usersInput | TB_user_roleCreateOrConnectWithoutTB_usersInput[]
    createMany?: TB_user_roleCreateManyTB_usersInputEnvelope
    connect?: TB_user_roleWhereUniqueInput | TB_user_roleWhereUniqueInput[]
  }

  export type TB_restrictionCreateNestedManyWithoutTB_usersInput = {
    create?: XOR<TB_restrictionCreateWithoutTB_usersInput, TB_restrictionUncheckedCreateWithoutTB_usersInput> | TB_restrictionCreateWithoutTB_usersInput[] | TB_restrictionUncheckedCreateWithoutTB_usersInput[]
    connectOrCreate?: TB_restrictionCreateOrConnectWithoutTB_usersInput | TB_restrictionCreateOrConnectWithoutTB_usersInput[]
    createMany?: TB_restrictionCreateManyTB_usersInputEnvelope
    connect?: TB_restrictionWhereUniqueInput | TB_restrictionWhereUniqueInput[]
  }

  export type TB_user_roleUncheckedCreateNestedManyWithoutTB_usersInput = {
    create?: XOR<TB_user_roleCreateWithoutTB_usersInput, TB_user_roleUncheckedCreateWithoutTB_usersInput> | TB_user_roleCreateWithoutTB_usersInput[] | TB_user_roleUncheckedCreateWithoutTB_usersInput[]
    connectOrCreate?: TB_user_roleCreateOrConnectWithoutTB_usersInput | TB_user_roleCreateOrConnectWithoutTB_usersInput[]
    createMany?: TB_user_roleCreateManyTB_usersInputEnvelope
    connect?: TB_user_roleWhereUniqueInput | TB_user_roleWhereUniqueInput[]
  }

  export type TB_restrictionUncheckedCreateNestedManyWithoutTB_usersInput = {
    create?: XOR<TB_restrictionCreateWithoutTB_usersInput, TB_restrictionUncheckedCreateWithoutTB_usersInput> | TB_restrictionCreateWithoutTB_usersInput[] | TB_restrictionUncheckedCreateWithoutTB_usersInput[]
    connectOrCreate?: TB_restrictionCreateOrConnectWithoutTB_usersInput | TB_restrictionCreateOrConnectWithoutTB_usersInput[]
    createMany?: TB_restrictionCreateManyTB_usersInputEnvelope
    connect?: TB_restrictionWhereUniqueInput | TB_restrictionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TB_user_roleUpdateManyWithoutTB_usersNestedInput = {
    create?: XOR<TB_user_roleCreateWithoutTB_usersInput, TB_user_roleUncheckedCreateWithoutTB_usersInput> | TB_user_roleCreateWithoutTB_usersInput[] | TB_user_roleUncheckedCreateWithoutTB_usersInput[]
    connectOrCreate?: TB_user_roleCreateOrConnectWithoutTB_usersInput | TB_user_roleCreateOrConnectWithoutTB_usersInput[]
    upsert?: TB_user_roleUpsertWithWhereUniqueWithoutTB_usersInput | TB_user_roleUpsertWithWhereUniqueWithoutTB_usersInput[]
    createMany?: TB_user_roleCreateManyTB_usersInputEnvelope
    set?: TB_user_roleWhereUniqueInput | TB_user_roleWhereUniqueInput[]
    disconnect?: TB_user_roleWhereUniqueInput | TB_user_roleWhereUniqueInput[]
    delete?: TB_user_roleWhereUniqueInput | TB_user_roleWhereUniqueInput[]
    connect?: TB_user_roleWhereUniqueInput | TB_user_roleWhereUniqueInput[]
    update?: TB_user_roleUpdateWithWhereUniqueWithoutTB_usersInput | TB_user_roleUpdateWithWhereUniqueWithoutTB_usersInput[]
    updateMany?: TB_user_roleUpdateManyWithWhereWithoutTB_usersInput | TB_user_roleUpdateManyWithWhereWithoutTB_usersInput[]
    deleteMany?: TB_user_roleScalarWhereInput | TB_user_roleScalarWhereInput[]
  }

  export type TB_restrictionUpdateManyWithoutTB_usersNestedInput = {
    create?: XOR<TB_restrictionCreateWithoutTB_usersInput, TB_restrictionUncheckedCreateWithoutTB_usersInput> | TB_restrictionCreateWithoutTB_usersInput[] | TB_restrictionUncheckedCreateWithoutTB_usersInput[]
    connectOrCreate?: TB_restrictionCreateOrConnectWithoutTB_usersInput | TB_restrictionCreateOrConnectWithoutTB_usersInput[]
    upsert?: TB_restrictionUpsertWithWhereUniqueWithoutTB_usersInput | TB_restrictionUpsertWithWhereUniqueWithoutTB_usersInput[]
    createMany?: TB_restrictionCreateManyTB_usersInputEnvelope
    set?: TB_restrictionWhereUniqueInput | TB_restrictionWhereUniqueInput[]
    disconnect?: TB_restrictionWhereUniqueInput | TB_restrictionWhereUniqueInput[]
    delete?: TB_restrictionWhereUniqueInput | TB_restrictionWhereUniqueInput[]
    connect?: TB_restrictionWhereUniqueInput | TB_restrictionWhereUniqueInput[]
    update?: TB_restrictionUpdateWithWhereUniqueWithoutTB_usersInput | TB_restrictionUpdateWithWhereUniqueWithoutTB_usersInput[]
    updateMany?: TB_restrictionUpdateManyWithWhereWithoutTB_usersInput | TB_restrictionUpdateManyWithWhereWithoutTB_usersInput[]
    deleteMany?: TB_restrictionScalarWhereInput | TB_restrictionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TB_user_roleUncheckedUpdateManyWithoutTB_usersNestedInput = {
    create?: XOR<TB_user_roleCreateWithoutTB_usersInput, TB_user_roleUncheckedCreateWithoutTB_usersInput> | TB_user_roleCreateWithoutTB_usersInput[] | TB_user_roleUncheckedCreateWithoutTB_usersInput[]
    connectOrCreate?: TB_user_roleCreateOrConnectWithoutTB_usersInput | TB_user_roleCreateOrConnectWithoutTB_usersInput[]
    upsert?: TB_user_roleUpsertWithWhereUniqueWithoutTB_usersInput | TB_user_roleUpsertWithWhereUniqueWithoutTB_usersInput[]
    createMany?: TB_user_roleCreateManyTB_usersInputEnvelope
    set?: TB_user_roleWhereUniqueInput | TB_user_roleWhereUniqueInput[]
    disconnect?: TB_user_roleWhereUniqueInput | TB_user_roleWhereUniqueInput[]
    delete?: TB_user_roleWhereUniqueInput | TB_user_roleWhereUniqueInput[]
    connect?: TB_user_roleWhereUniqueInput | TB_user_roleWhereUniqueInput[]
    update?: TB_user_roleUpdateWithWhereUniqueWithoutTB_usersInput | TB_user_roleUpdateWithWhereUniqueWithoutTB_usersInput[]
    updateMany?: TB_user_roleUpdateManyWithWhereWithoutTB_usersInput | TB_user_roleUpdateManyWithWhereWithoutTB_usersInput[]
    deleteMany?: TB_user_roleScalarWhereInput | TB_user_roleScalarWhereInput[]
  }

  export type TB_restrictionUncheckedUpdateManyWithoutTB_usersNestedInput = {
    create?: XOR<TB_restrictionCreateWithoutTB_usersInput, TB_restrictionUncheckedCreateWithoutTB_usersInput> | TB_restrictionCreateWithoutTB_usersInput[] | TB_restrictionUncheckedCreateWithoutTB_usersInput[]
    connectOrCreate?: TB_restrictionCreateOrConnectWithoutTB_usersInput | TB_restrictionCreateOrConnectWithoutTB_usersInput[]
    upsert?: TB_restrictionUpsertWithWhereUniqueWithoutTB_usersInput | TB_restrictionUpsertWithWhereUniqueWithoutTB_usersInput[]
    createMany?: TB_restrictionCreateManyTB_usersInputEnvelope
    set?: TB_restrictionWhereUniqueInput | TB_restrictionWhereUniqueInput[]
    disconnect?: TB_restrictionWhereUniqueInput | TB_restrictionWhereUniqueInput[]
    delete?: TB_restrictionWhereUniqueInput | TB_restrictionWhereUniqueInput[]
    connect?: TB_restrictionWhereUniqueInput | TB_restrictionWhereUniqueInput[]
    update?: TB_restrictionUpdateWithWhereUniqueWithoutTB_usersInput | TB_restrictionUpdateWithWhereUniqueWithoutTB_usersInput[]
    updateMany?: TB_restrictionUpdateManyWithWhereWithoutTB_usersInput | TB_restrictionUpdateManyWithWhereWithoutTB_usersInput[]
    deleteMany?: TB_restrictionScalarWhereInput | TB_restrictionScalarWhereInput[]
  }

  export type TB_user_roleCreateNestedManyWithoutTB_roleInput = {
    create?: XOR<TB_user_roleCreateWithoutTB_roleInput, TB_user_roleUncheckedCreateWithoutTB_roleInput> | TB_user_roleCreateWithoutTB_roleInput[] | TB_user_roleUncheckedCreateWithoutTB_roleInput[]
    connectOrCreate?: TB_user_roleCreateOrConnectWithoutTB_roleInput | TB_user_roleCreateOrConnectWithoutTB_roleInput[]
    createMany?: TB_user_roleCreateManyTB_roleInputEnvelope
    connect?: TB_user_roleWhereUniqueInput | TB_user_roleWhereUniqueInput[]
  }

  export type TB_user_roleUncheckedCreateNestedManyWithoutTB_roleInput = {
    create?: XOR<TB_user_roleCreateWithoutTB_roleInput, TB_user_roleUncheckedCreateWithoutTB_roleInput> | TB_user_roleCreateWithoutTB_roleInput[] | TB_user_roleUncheckedCreateWithoutTB_roleInput[]
    connectOrCreate?: TB_user_roleCreateOrConnectWithoutTB_roleInput | TB_user_roleCreateOrConnectWithoutTB_roleInput[]
    createMany?: TB_user_roleCreateManyTB_roleInputEnvelope
    connect?: TB_user_roleWhereUniqueInput | TB_user_roleWhereUniqueInput[]
  }

  export type TB_user_roleUpdateManyWithoutTB_roleNestedInput = {
    create?: XOR<TB_user_roleCreateWithoutTB_roleInput, TB_user_roleUncheckedCreateWithoutTB_roleInput> | TB_user_roleCreateWithoutTB_roleInput[] | TB_user_roleUncheckedCreateWithoutTB_roleInput[]
    connectOrCreate?: TB_user_roleCreateOrConnectWithoutTB_roleInput | TB_user_roleCreateOrConnectWithoutTB_roleInput[]
    upsert?: TB_user_roleUpsertWithWhereUniqueWithoutTB_roleInput | TB_user_roleUpsertWithWhereUniqueWithoutTB_roleInput[]
    createMany?: TB_user_roleCreateManyTB_roleInputEnvelope
    set?: TB_user_roleWhereUniqueInput | TB_user_roleWhereUniqueInput[]
    disconnect?: TB_user_roleWhereUniqueInput | TB_user_roleWhereUniqueInput[]
    delete?: TB_user_roleWhereUniqueInput | TB_user_roleWhereUniqueInput[]
    connect?: TB_user_roleWhereUniqueInput | TB_user_roleWhereUniqueInput[]
    update?: TB_user_roleUpdateWithWhereUniqueWithoutTB_roleInput | TB_user_roleUpdateWithWhereUniqueWithoutTB_roleInput[]
    updateMany?: TB_user_roleUpdateManyWithWhereWithoutTB_roleInput | TB_user_roleUpdateManyWithWhereWithoutTB_roleInput[]
    deleteMany?: TB_user_roleScalarWhereInput | TB_user_roleScalarWhereInput[]
  }

  export type TB_user_roleUncheckedUpdateManyWithoutTB_roleNestedInput = {
    create?: XOR<TB_user_roleCreateWithoutTB_roleInput, TB_user_roleUncheckedCreateWithoutTB_roleInput> | TB_user_roleCreateWithoutTB_roleInput[] | TB_user_roleUncheckedCreateWithoutTB_roleInput[]
    connectOrCreate?: TB_user_roleCreateOrConnectWithoutTB_roleInput | TB_user_roleCreateOrConnectWithoutTB_roleInput[]
    upsert?: TB_user_roleUpsertWithWhereUniqueWithoutTB_roleInput | TB_user_roleUpsertWithWhereUniqueWithoutTB_roleInput[]
    createMany?: TB_user_roleCreateManyTB_roleInputEnvelope
    set?: TB_user_roleWhereUniqueInput | TB_user_roleWhereUniqueInput[]
    disconnect?: TB_user_roleWhereUniqueInput | TB_user_roleWhereUniqueInput[]
    delete?: TB_user_roleWhereUniqueInput | TB_user_roleWhereUniqueInput[]
    connect?: TB_user_roleWhereUniqueInput | TB_user_roleWhereUniqueInput[]
    update?: TB_user_roleUpdateWithWhereUniqueWithoutTB_roleInput | TB_user_roleUpdateWithWhereUniqueWithoutTB_roleInput[]
    updateMany?: TB_user_roleUpdateManyWithWhereWithoutTB_roleInput | TB_user_roleUpdateManyWithWhereWithoutTB_roleInput[]
    deleteMany?: TB_user_roleScalarWhereInput | TB_user_roleScalarWhereInput[]
  }

  export type TB_usersCreateNestedOneWithoutTB_user_roleInput = {
    create?: XOR<TB_usersCreateWithoutTB_user_roleInput, TB_usersUncheckedCreateWithoutTB_user_roleInput>
    connectOrCreate?: TB_usersCreateOrConnectWithoutTB_user_roleInput
    connect?: TB_usersWhereUniqueInput
  }

  export type TB_roleCreateNestedOneWithoutTB_user_roleInput = {
    create?: XOR<TB_roleCreateWithoutTB_user_roleInput, TB_roleUncheckedCreateWithoutTB_user_roleInput>
    connectOrCreate?: TB_roleCreateOrConnectWithoutTB_user_roleInput
    connect?: TB_roleWhereUniqueInput
  }

  export type TB_employeesCreateNestedManyWithoutTB_user_roleInput = {
    create?: XOR<TB_employeesCreateWithoutTB_user_roleInput, TB_employeesUncheckedCreateWithoutTB_user_roleInput> | TB_employeesCreateWithoutTB_user_roleInput[] | TB_employeesUncheckedCreateWithoutTB_user_roleInput[]
    connectOrCreate?: TB_employeesCreateOrConnectWithoutTB_user_roleInput | TB_employeesCreateOrConnectWithoutTB_user_roleInput[]
    createMany?: TB_employeesCreateManyTB_user_roleInputEnvelope
    connect?: TB_employeesWhereUniqueInput | TB_employeesWhereUniqueInput[]
  }

  export type TB_client_membershipCreateNestedManyWithoutTB_user_roleInput = {
    create?: XOR<TB_client_membershipCreateWithoutTB_user_roleInput, TB_client_membershipUncheckedCreateWithoutTB_user_roleInput> | TB_client_membershipCreateWithoutTB_user_roleInput[] | TB_client_membershipUncheckedCreateWithoutTB_user_roleInput[]
    connectOrCreate?: TB_client_membershipCreateOrConnectWithoutTB_user_roleInput | TB_client_membershipCreateOrConnectWithoutTB_user_roleInput[]
    createMany?: TB_client_membershipCreateManyTB_user_roleInputEnvelope
    connect?: TB_client_membershipWhereUniqueInput | TB_client_membershipWhereUniqueInput[]
  }

  export type TB_employeesUncheckedCreateNestedManyWithoutTB_user_roleInput = {
    create?: XOR<TB_employeesCreateWithoutTB_user_roleInput, TB_employeesUncheckedCreateWithoutTB_user_roleInput> | TB_employeesCreateWithoutTB_user_roleInput[] | TB_employeesUncheckedCreateWithoutTB_user_roleInput[]
    connectOrCreate?: TB_employeesCreateOrConnectWithoutTB_user_roleInput | TB_employeesCreateOrConnectWithoutTB_user_roleInput[]
    createMany?: TB_employeesCreateManyTB_user_roleInputEnvelope
    connect?: TB_employeesWhereUniqueInput | TB_employeesWhereUniqueInput[]
  }

  export type TB_client_membershipUncheckedCreateNestedManyWithoutTB_user_roleInput = {
    create?: XOR<TB_client_membershipCreateWithoutTB_user_roleInput, TB_client_membershipUncheckedCreateWithoutTB_user_roleInput> | TB_client_membershipCreateWithoutTB_user_roleInput[] | TB_client_membershipUncheckedCreateWithoutTB_user_roleInput[]
    connectOrCreate?: TB_client_membershipCreateOrConnectWithoutTB_user_roleInput | TB_client_membershipCreateOrConnectWithoutTB_user_roleInput[]
    createMany?: TB_client_membershipCreateManyTB_user_roleInputEnvelope
    connect?: TB_client_membershipWhereUniqueInput | TB_client_membershipWhereUniqueInput[]
  }

  export type TB_usersUpdateOneRequiredWithoutTB_user_roleNestedInput = {
    create?: XOR<TB_usersCreateWithoutTB_user_roleInput, TB_usersUncheckedCreateWithoutTB_user_roleInput>
    connectOrCreate?: TB_usersCreateOrConnectWithoutTB_user_roleInput
    upsert?: TB_usersUpsertWithoutTB_user_roleInput
    connect?: TB_usersWhereUniqueInput
    update?: XOR<XOR<TB_usersUpdateToOneWithWhereWithoutTB_user_roleInput, TB_usersUpdateWithoutTB_user_roleInput>, TB_usersUncheckedUpdateWithoutTB_user_roleInput>
  }

  export type TB_roleUpdateOneRequiredWithoutTB_user_roleNestedInput = {
    create?: XOR<TB_roleCreateWithoutTB_user_roleInput, TB_roleUncheckedCreateWithoutTB_user_roleInput>
    connectOrCreate?: TB_roleCreateOrConnectWithoutTB_user_roleInput
    upsert?: TB_roleUpsertWithoutTB_user_roleInput
    connect?: TB_roleWhereUniqueInput
    update?: XOR<XOR<TB_roleUpdateToOneWithWhereWithoutTB_user_roleInput, TB_roleUpdateWithoutTB_user_roleInput>, TB_roleUncheckedUpdateWithoutTB_user_roleInput>
  }

  export type TB_employeesUpdateManyWithoutTB_user_roleNestedInput = {
    create?: XOR<TB_employeesCreateWithoutTB_user_roleInput, TB_employeesUncheckedCreateWithoutTB_user_roleInput> | TB_employeesCreateWithoutTB_user_roleInput[] | TB_employeesUncheckedCreateWithoutTB_user_roleInput[]
    connectOrCreate?: TB_employeesCreateOrConnectWithoutTB_user_roleInput | TB_employeesCreateOrConnectWithoutTB_user_roleInput[]
    upsert?: TB_employeesUpsertWithWhereUniqueWithoutTB_user_roleInput | TB_employeesUpsertWithWhereUniqueWithoutTB_user_roleInput[]
    createMany?: TB_employeesCreateManyTB_user_roleInputEnvelope
    set?: TB_employeesWhereUniqueInput | TB_employeesWhereUniqueInput[]
    disconnect?: TB_employeesWhereUniqueInput | TB_employeesWhereUniqueInput[]
    delete?: TB_employeesWhereUniqueInput | TB_employeesWhereUniqueInput[]
    connect?: TB_employeesWhereUniqueInput | TB_employeesWhereUniqueInput[]
    update?: TB_employeesUpdateWithWhereUniqueWithoutTB_user_roleInput | TB_employeesUpdateWithWhereUniqueWithoutTB_user_roleInput[]
    updateMany?: TB_employeesUpdateManyWithWhereWithoutTB_user_roleInput | TB_employeesUpdateManyWithWhereWithoutTB_user_roleInput[]
    deleteMany?: TB_employeesScalarWhereInput | TB_employeesScalarWhereInput[]
  }

  export type TB_client_membershipUpdateManyWithoutTB_user_roleNestedInput = {
    create?: XOR<TB_client_membershipCreateWithoutTB_user_roleInput, TB_client_membershipUncheckedCreateWithoutTB_user_roleInput> | TB_client_membershipCreateWithoutTB_user_roleInput[] | TB_client_membershipUncheckedCreateWithoutTB_user_roleInput[]
    connectOrCreate?: TB_client_membershipCreateOrConnectWithoutTB_user_roleInput | TB_client_membershipCreateOrConnectWithoutTB_user_roleInput[]
    upsert?: TB_client_membershipUpsertWithWhereUniqueWithoutTB_user_roleInput | TB_client_membershipUpsertWithWhereUniqueWithoutTB_user_roleInput[]
    createMany?: TB_client_membershipCreateManyTB_user_roleInputEnvelope
    set?: TB_client_membershipWhereUniqueInput | TB_client_membershipWhereUniqueInput[]
    disconnect?: TB_client_membershipWhereUniqueInput | TB_client_membershipWhereUniqueInput[]
    delete?: TB_client_membershipWhereUniqueInput | TB_client_membershipWhereUniqueInput[]
    connect?: TB_client_membershipWhereUniqueInput | TB_client_membershipWhereUniqueInput[]
    update?: TB_client_membershipUpdateWithWhereUniqueWithoutTB_user_roleInput | TB_client_membershipUpdateWithWhereUniqueWithoutTB_user_roleInput[]
    updateMany?: TB_client_membershipUpdateManyWithWhereWithoutTB_user_roleInput | TB_client_membershipUpdateManyWithWhereWithoutTB_user_roleInput[]
    deleteMany?: TB_client_membershipScalarWhereInput | TB_client_membershipScalarWhereInput[]
  }

  export type TB_employeesUncheckedUpdateManyWithoutTB_user_roleNestedInput = {
    create?: XOR<TB_employeesCreateWithoutTB_user_roleInput, TB_employeesUncheckedCreateWithoutTB_user_roleInput> | TB_employeesCreateWithoutTB_user_roleInput[] | TB_employeesUncheckedCreateWithoutTB_user_roleInput[]
    connectOrCreate?: TB_employeesCreateOrConnectWithoutTB_user_roleInput | TB_employeesCreateOrConnectWithoutTB_user_roleInput[]
    upsert?: TB_employeesUpsertWithWhereUniqueWithoutTB_user_roleInput | TB_employeesUpsertWithWhereUniqueWithoutTB_user_roleInput[]
    createMany?: TB_employeesCreateManyTB_user_roleInputEnvelope
    set?: TB_employeesWhereUniqueInput | TB_employeesWhereUniqueInput[]
    disconnect?: TB_employeesWhereUniqueInput | TB_employeesWhereUniqueInput[]
    delete?: TB_employeesWhereUniqueInput | TB_employeesWhereUniqueInput[]
    connect?: TB_employeesWhereUniqueInput | TB_employeesWhereUniqueInput[]
    update?: TB_employeesUpdateWithWhereUniqueWithoutTB_user_roleInput | TB_employeesUpdateWithWhereUniqueWithoutTB_user_roleInput[]
    updateMany?: TB_employeesUpdateManyWithWhereWithoutTB_user_roleInput | TB_employeesUpdateManyWithWhereWithoutTB_user_roleInput[]
    deleteMany?: TB_employeesScalarWhereInput | TB_employeesScalarWhereInput[]
  }

  export type TB_client_membershipUncheckedUpdateManyWithoutTB_user_roleNestedInput = {
    create?: XOR<TB_client_membershipCreateWithoutTB_user_roleInput, TB_client_membershipUncheckedCreateWithoutTB_user_roleInput> | TB_client_membershipCreateWithoutTB_user_roleInput[] | TB_client_membershipUncheckedCreateWithoutTB_user_roleInput[]
    connectOrCreate?: TB_client_membershipCreateOrConnectWithoutTB_user_roleInput | TB_client_membershipCreateOrConnectWithoutTB_user_roleInput[]
    upsert?: TB_client_membershipUpsertWithWhereUniqueWithoutTB_user_roleInput | TB_client_membershipUpsertWithWhereUniqueWithoutTB_user_roleInput[]
    createMany?: TB_client_membershipCreateManyTB_user_roleInputEnvelope
    set?: TB_client_membershipWhereUniqueInput | TB_client_membershipWhereUniqueInput[]
    disconnect?: TB_client_membershipWhereUniqueInput | TB_client_membershipWhereUniqueInput[]
    delete?: TB_client_membershipWhereUniqueInput | TB_client_membershipWhereUniqueInput[]
    connect?: TB_client_membershipWhereUniqueInput | TB_client_membershipWhereUniqueInput[]
    update?: TB_client_membershipUpdateWithWhereUniqueWithoutTB_user_roleInput | TB_client_membershipUpdateWithWhereUniqueWithoutTB_user_roleInput[]
    updateMany?: TB_client_membershipUpdateManyWithWhereWithoutTB_user_roleInput | TB_client_membershipUpdateManyWithWhereWithoutTB_user_roleInput[]
    deleteMany?: TB_client_membershipScalarWhereInput | TB_client_membershipScalarWhereInput[]
  }

  export type TB_usersCreateNestedOneWithoutTB_restrictionInput = {
    create?: XOR<TB_usersCreateWithoutTB_restrictionInput, TB_usersUncheckedCreateWithoutTB_restrictionInput>
    connectOrCreate?: TB_usersCreateOrConnectWithoutTB_restrictionInput
    connect?: TB_usersWhereUniqueInput
  }

  export type TB_usersUpdateOneRequiredWithoutTB_restrictionNestedInput = {
    create?: XOR<TB_usersCreateWithoutTB_restrictionInput, TB_usersUncheckedCreateWithoutTB_restrictionInput>
    connectOrCreate?: TB_usersCreateOrConnectWithoutTB_restrictionInput
    upsert?: TB_usersUpsertWithoutTB_restrictionInput
    connect?: TB_usersWhereUniqueInput
    update?: XOR<XOR<TB_usersUpdateToOneWithWhereWithoutTB_restrictionInput, TB_usersUpdateWithoutTB_restrictionInput>, TB_usersUncheckedUpdateWithoutTB_restrictionInput>
  }

  export type TB_user_roleCreateNestedOneWithoutTB_employeesInput = {
    create?: XOR<TB_user_roleCreateWithoutTB_employeesInput, TB_user_roleUncheckedCreateWithoutTB_employeesInput>
    connectOrCreate?: TB_user_roleCreateOrConnectWithoutTB_employeesInput
    connect?: TB_user_roleWhereUniqueInput
  }

  export type TB_user_roleUpdateOneRequiredWithoutTB_employeesNestedInput = {
    create?: XOR<TB_user_roleCreateWithoutTB_employeesInput, TB_user_roleUncheckedCreateWithoutTB_employeesInput>
    connectOrCreate?: TB_user_roleCreateOrConnectWithoutTB_employeesInput
    upsert?: TB_user_roleUpsertWithoutTB_employeesInput
    connect?: TB_user_roleWhereUniqueInput
    update?: XOR<XOR<TB_user_roleUpdateToOneWithWhereWithoutTB_employeesInput, TB_user_roleUpdateWithoutTB_employeesInput>, TB_user_roleUncheckedUpdateWithoutTB_employeesInput>
  }

  export type TB_client_membershipCreateNestedManyWithoutTB_membershipsInput = {
    create?: XOR<TB_client_membershipCreateWithoutTB_membershipsInput, TB_client_membershipUncheckedCreateWithoutTB_membershipsInput> | TB_client_membershipCreateWithoutTB_membershipsInput[] | TB_client_membershipUncheckedCreateWithoutTB_membershipsInput[]
    connectOrCreate?: TB_client_membershipCreateOrConnectWithoutTB_membershipsInput | TB_client_membershipCreateOrConnectWithoutTB_membershipsInput[]
    createMany?: TB_client_membershipCreateManyTB_membershipsInputEnvelope
    connect?: TB_client_membershipWhereUniqueInput | TB_client_membershipWhereUniqueInput[]
  }

  export type TB_client_membershipUncheckedCreateNestedManyWithoutTB_membershipsInput = {
    create?: XOR<TB_client_membershipCreateWithoutTB_membershipsInput, TB_client_membershipUncheckedCreateWithoutTB_membershipsInput> | TB_client_membershipCreateWithoutTB_membershipsInput[] | TB_client_membershipUncheckedCreateWithoutTB_membershipsInput[]
    connectOrCreate?: TB_client_membershipCreateOrConnectWithoutTB_membershipsInput | TB_client_membershipCreateOrConnectWithoutTB_membershipsInput[]
    createMany?: TB_client_membershipCreateManyTB_membershipsInputEnvelope
    connect?: TB_client_membershipWhereUniqueInput | TB_client_membershipWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumfrequencyFieldUpdateOperationsInput = {
    set?: $Enums.frequency
  }

  export type TB_client_membershipUpdateManyWithoutTB_membershipsNestedInput = {
    create?: XOR<TB_client_membershipCreateWithoutTB_membershipsInput, TB_client_membershipUncheckedCreateWithoutTB_membershipsInput> | TB_client_membershipCreateWithoutTB_membershipsInput[] | TB_client_membershipUncheckedCreateWithoutTB_membershipsInput[]
    connectOrCreate?: TB_client_membershipCreateOrConnectWithoutTB_membershipsInput | TB_client_membershipCreateOrConnectWithoutTB_membershipsInput[]
    upsert?: TB_client_membershipUpsertWithWhereUniqueWithoutTB_membershipsInput | TB_client_membershipUpsertWithWhereUniqueWithoutTB_membershipsInput[]
    createMany?: TB_client_membershipCreateManyTB_membershipsInputEnvelope
    set?: TB_client_membershipWhereUniqueInput | TB_client_membershipWhereUniqueInput[]
    disconnect?: TB_client_membershipWhereUniqueInput | TB_client_membershipWhereUniqueInput[]
    delete?: TB_client_membershipWhereUniqueInput | TB_client_membershipWhereUniqueInput[]
    connect?: TB_client_membershipWhereUniqueInput | TB_client_membershipWhereUniqueInput[]
    update?: TB_client_membershipUpdateWithWhereUniqueWithoutTB_membershipsInput | TB_client_membershipUpdateWithWhereUniqueWithoutTB_membershipsInput[]
    updateMany?: TB_client_membershipUpdateManyWithWhereWithoutTB_membershipsInput | TB_client_membershipUpdateManyWithWhereWithoutTB_membershipsInput[]
    deleteMany?: TB_client_membershipScalarWhereInput | TB_client_membershipScalarWhereInput[]
  }

  export type TB_client_membershipUncheckedUpdateManyWithoutTB_membershipsNestedInput = {
    create?: XOR<TB_client_membershipCreateWithoutTB_membershipsInput, TB_client_membershipUncheckedCreateWithoutTB_membershipsInput> | TB_client_membershipCreateWithoutTB_membershipsInput[] | TB_client_membershipUncheckedCreateWithoutTB_membershipsInput[]
    connectOrCreate?: TB_client_membershipCreateOrConnectWithoutTB_membershipsInput | TB_client_membershipCreateOrConnectWithoutTB_membershipsInput[]
    upsert?: TB_client_membershipUpsertWithWhereUniqueWithoutTB_membershipsInput | TB_client_membershipUpsertWithWhereUniqueWithoutTB_membershipsInput[]
    createMany?: TB_client_membershipCreateManyTB_membershipsInputEnvelope
    set?: TB_client_membershipWhereUniqueInput | TB_client_membershipWhereUniqueInput[]
    disconnect?: TB_client_membershipWhereUniqueInput | TB_client_membershipWhereUniqueInput[]
    delete?: TB_client_membershipWhereUniqueInput | TB_client_membershipWhereUniqueInput[]
    connect?: TB_client_membershipWhereUniqueInput | TB_client_membershipWhereUniqueInput[]
    update?: TB_client_membershipUpdateWithWhereUniqueWithoutTB_membershipsInput | TB_client_membershipUpdateWithWhereUniqueWithoutTB_membershipsInput[]
    updateMany?: TB_client_membershipUpdateManyWithWhereWithoutTB_membershipsInput | TB_client_membershipUpdateManyWithWhereWithoutTB_membershipsInput[]
    deleteMany?: TB_client_membershipScalarWhereInput | TB_client_membershipScalarWhereInput[]
  }

  export type TB_user_roleCreateNestedOneWithoutTB_client_membershipInput = {
    create?: XOR<TB_user_roleCreateWithoutTB_client_membershipInput, TB_user_roleUncheckedCreateWithoutTB_client_membershipInput>
    connectOrCreate?: TB_user_roleCreateOrConnectWithoutTB_client_membershipInput
    connect?: TB_user_roleWhereUniqueInput
  }

  export type TB_membershipsCreateNestedOneWithoutTB_client_membershipInput = {
    create?: XOR<TB_membershipsCreateWithoutTB_client_membershipInput, TB_membershipsUncheckedCreateWithoutTB_client_membershipInput>
    connectOrCreate?: TB_membershipsCreateOrConnectWithoutTB_client_membershipInput
    connect?: TB_membershipsWhereUniqueInput
  }

  export type TB_reservationsCreateNestedManyWithoutTB_client_membershipInput = {
    create?: XOR<TB_reservationsCreateWithoutTB_client_membershipInput, TB_reservationsUncheckedCreateWithoutTB_client_membershipInput> | TB_reservationsCreateWithoutTB_client_membershipInput[] | TB_reservationsUncheckedCreateWithoutTB_client_membershipInput[]
    connectOrCreate?: TB_reservationsCreateOrConnectWithoutTB_client_membershipInput | TB_reservationsCreateOrConnectWithoutTB_client_membershipInput[]
    createMany?: TB_reservationsCreateManyTB_client_membershipInputEnvelope
    connect?: TB_reservationsWhereUniqueInput | TB_reservationsWhereUniqueInput[]
  }

  export type TB_reservationsUncheckedCreateNestedManyWithoutTB_client_membershipInput = {
    create?: XOR<TB_reservationsCreateWithoutTB_client_membershipInput, TB_reservationsUncheckedCreateWithoutTB_client_membershipInput> | TB_reservationsCreateWithoutTB_client_membershipInput[] | TB_reservationsUncheckedCreateWithoutTB_client_membershipInput[]
    connectOrCreate?: TB_reservationsCreateOrConnectWithoutTB_client_membershipInput | TB_reservationsCreateOrConnectWithoutTB_client_membershipInput[]
    createMany?: TB_reservationsCreateManyTB_client_membershipInputEnvelope
    connect?: TB_reservationsWhereUniqueInput | TB_reservationsWhereUniqueInput[]
  }

  export type TB_user_roleUpdateOneRequiredWithoutTB_client_membershipNestedInput = {
    create?: XOR<TB_user_roleCreateWithoutTB_client_membershipInput, TB_user_roleUncheckedCreateWithoutTB_client_membershipInput>
    connectOrCreate?: TB_user_roleCreateOrConnectWithoutTB_client_membershipInput
    upsert?: TB_user_roleUpsertWithoutTB_client_membershipInput
    connect?: TB_user_roleWhereUniqueInput
    update?: XOR<XOR<TB_user_roleUpdateToOneWithWhereWithoutTB_client_membershipInput, TB_user_roleUpdateWithoutTB_client_membershipInput>, TB_user_roleUncheckedUpdateWithoutTB_client_membershipInput>
  }

  export type TB_membershipsUpdateOneRequiredWithoutTB_client_membershipNestedInput = {
    create?: XOR<TB_membershipsCreateWithoutTB_client_membershipInput, TB_membershipsUncheckedCreateWithoutTB_client_membershipInput>
    connectOrCreate?: TB_membershipsCreateOrConnectWithoutTB_client_membershipInput
    upsert?: TB_membershipsUpsertWithoutTB_client_membershipInput
    connect?: TB_membershipsWhereUniqueInput
    update?: XOR<XOR<TB_membershipsUpdateToOneWithWhereWithoutTB_client_membershipInput, TB_membershipsUpdateWithoutTB_client_membershipInput>, TB_membershipsUncheckedUpdateWithoutTB_client_membershipInput>
  }

  export type TB_reservationsUpdateManyWithoutTB_client_membershipNestedInput = {
    create?: XOR<TB_reservationsCreateWithoutTB_client_membershipInput, TB_reservationsUncheckedCreateWithoutTB_client_membershipInput> | TB_reservationsCreateWithoutTB_client_membershipInput[] | TB_reservationsUncheckedCreateWithoutTB_client_membershipInput[]
    connectOrCreate?: TB_reservationsCreateOrConnectWithoutTB_client_membershipInput | TB_reservationsCreateOrConnectWithoutTB_client_membershipInput[]
    upsert?: TB_reservationsUpsertWithWhereUniqueWithoutTB_client_membershipInput | TB_reservationsUpsertWithWhereUniqueWithoutTB_client_membershipInput[]
    createMany?: TB_reservationsCreateManyTB_client_membershipInputEnvelope
    set?: TB_reservationsWhereUniqueInput | TB_reservationsWhereUniqueInput[]
    disconnect?: TB_reservationsWhereUniqueInput | TB_reservationsWhereUniqueInput[]
    delete?: TB_reservationsWhereUniqueInput | TB_reservationsWhereUniqueInput[]
    connect?: TB_reservationsWhereUniqueInput | TB_reservationsWhereUniqueInput[]
    update?: TB_reservationsUpdateWithWhereUniqueWithoutTB_client_membershipInput | TB_reservationsUpdateWithWhereUniqueWithoutTB_client_membershipInput[]
    updateMany?: TB_reservationsUpdateManyWithWhereWithoutTB_client_membershipInput | TB_reservationsUpdateManyWithWhereWithoutTB_client_membershipInput[]
    deleteMany?: TB_reservationsScalarWhereInput | TB_reservationsScalarWhereInput[]
  }

  export type TB_reservationsUncheckedUpdateManyWithoutTB_client_membershipNestedInput = {
    create?: XOR<TB_reservationsCreateWithoutTB_client_membershipInput, TB_reservationsUncheckedCreateWithoutTB_client_membershipInput> | TB_reservationsCreateWithoutTB_client_membershipInput[] | TB_reservationsUncheckedCreateWithoutTB_client_membershipInput[]
    connectOrCreate?: TB_reservationsCreateOrConnectWithoutTB_client_membershipInput | TB_reservationsCreateOrConnectWithoutTB_client_membershipInput[]
    upsert?: TB_reservationsUpsertWithWhereUniqueWithoutTB_client_membershipInput | TB_reservationsUpsertWithWhereUniqueWithoutTB_client_membershipInput[]
    createMany?: TB_reservationsCreateManyTB_client_membershipInputEnvelope
    set?: TB_reservationsWhereUniqueInput | TB_reservationsWhereUniqueInput[]
    disconnect?: TB_reservationsWhereUniqueInput | TB_reservationsWhereUniqueInput[]
    delete?: TB_reservationsWhereUniqueInput | TB_reservationsWhereUniqueInput[]
    connect?: TB_reservationsWhereUniqueInput | TB_reservationsWhereUniqueInput[]
    update?: TB_reservationsUpdateWithWhereUniqueWithoutTB_client_membershipInput | TB_reservationsUpdateWithWhereUniqueWithoutTB_client_membershipInput[]
    updateMany?: TB_reservationsUpdateManyWithWhereWithoutTB_client_membershipInput | TB_reservationsUpdateManyWithWhereWithoutTB_client_membershipInput[]
    deleteMany?: TB_reservationsScalarWhereInput | TB_reservationsScalarWhereInput[]
  }

  export type TB_routine_exerciseCreateNestedManyWithoutTB_routinesInput = {
    create?: XOR<TB_routine_exerciseCreateWithoutTB_routinesInput, TB_routine_exerciseUncheckedCreateWithoutTB_routinesInput> | TB_routine_exerciseCreateWithoutTB_routinesInput[] | TB_routine_exerciseUncheckedCreateWithoutTB_routinesInput[]
    connectOrCreate?: TB_routine_exerciseCreateOrConnectWithoutTB_routinesInput | TB_routine_exerciseCreateOrConnectWithoutTB_routinesInput[]
    createMany?: TB_routine_exerciseCreateManyTB_routinesInputEnvelope
    connect?: TB_routine_exerciseWhereUniqueInput | TB_routine_exerciseWhereUniqueInput[]
  }

  export type TB_reservationsCreateNestedManyWithoutTB_routinesInput = {
    create?: XOR<TB_reservationsCreateWithoutTB_routinesInput, TB_reservationsUncheckedCreateWithoutTB_routinesInput> | TB_reservationsCreateWithoutTB_routinesInput[] | TB_reservationsUncheckedCreateWithoutTB_routinesInput[]
    connectOrCreate?: TB_reservationsCreateOrConnectWithoutTB_routinesInput | TB_reservationsCreateOrConnectWithoutTB_routinesInput[]
    createMany?: TB_reservationsCreateManyTB_routinesInputEnvelope
    connect?: TB_reservationsWhereUniqueInput | TB_reservationsWhereUniqueInput[]
  }

  export type TB_routine_exerciseUncheckedCreateNestedManyWithoutTB_routinesInput = {
    create?: XOR<TB_routine_exerciseCreateWithoutTB_routinesInput, TB_routine_exerciseUncheckedCreateWithoutTB_routinesInput> | TB_routine_exerciseCreateWithoutTB_routinesInput[] | TB_routine_exerciseUncheckedCreateWithoutTB_routinesInput[]
    connectOrCreate?: TB_routine_exerciseCreateOrConnectWithoutTB_routinesInput | TB_routine_exerciseCreateOrConnectWithoutTB_routinesInput[]
    createMany?: TB_routine_exerciseCreateManyTB_routinesInputEnvelope
    connect?: TB_routine_exerciseWhereUniqueInput | TB_routine_exerciseWhereUniqueInput[]
  }

  export type TB_reservationsUncheckedCreateNestedManyWithoutTB_routinesInput = {
    create?: XOR<TB_reservationsCreateWithoutTB_routinesInput, TB_reservationsUncheckedCreateWithoutTB_routinesInput> | TB_reservationsCreateWithoutTB_routinesInput[] | TB_reservationsUncheckedCreateWithoutTB_routinesInput[]
    connectOrCreate?: TB_reservationsCreateOrConnectWithoutTB_routinesInput | TB_reservationsCreateOrConnectWithoutTB_routinesInput[]
    createMany?: TB_reservationsCreateManyTB_routinesInputEnvelope
    connect?: TB_reservationsWhereUniqueInput | TB_reservationsWhereUniqueInput[]
  }

  export type TB_routine_exerciseUpdateManyWithoutTB_routinesNestedInput = {
    create?: XOR<TB_routine_exerciseCreateWithoutTB_routinesInput, TB_routine_exerciseUncheckedCreateWithoutTB_routinesInput> | TB_routine_exerciseCreateWithoutTB_routinesInput[] | TB_routine_exerciseUncheckedCreateWithoutTB_routinesInput[]
    connectOrCreate?: TB_routine_exerciseCreateOrConnectWithoutTB_routinesInput | TB_routine_exerciseCreateOrConnectWithoutTB_routinesInput[]
    upsert?: TB_routine_exerciseUpsertWithWhereUniqueWithoutTB_routinesInput | TB_routine_exerciseUpsertWithWhereUniqueWithoutTB_routinesInput[]
    createMany?: TB_routine_exerciseCreateManyTB_routinesInputEnvelope
    set?: TB_routine_exerciseWhereUniqueInput | TB_routine_exerciseWhereUniqueInput[]
    disconnect?: TB_routine_exerciseWhereUniqueInput | TB_routine_exerciseWhereUniqueInput[]
    delete?: TB_routine_exerciseWhereUniqueInput | TB_routine_exerciseWhereUniqueInput[]
    connect?: TB_routine_exerciseWhereUniqueInput | TB_routine_exerciseWhereUniqueInput[]
    update?: TB_routine_exerciseUpdateWithWhereUniqueWithoutTB_routinesInput | TB_routine_exerciseUpdateWithWhereUniqueWithoutTB_routinesInput[]
    updateMany?: TB_routine_exerciseUpdateManyWithWhereWithoutTB_routinesInput | TB_routine_exerciseUpdateManyWithWhereWithoutTB_routinesInput[]
    deleteMany?: TB_routine_exerciseScalarWhereInput | TB_routine_exerciseScalarWhereInput[]
  }

  export type TB_reservationsUpdateManyWithoutTB_routinesNestedInput = {
    create?: XOR<TB_reservationsCreateWithoutTB_routinesInput, TB_reservationsUncheckedCreateWithoutTB_routinesInput> | TB_reservationsCreateWithoutTB_routinesInput[] | TB_reservationsUncheckedCreateWithoutTB_routinesInput[]
    connectOrCreate?: TB_reservationsCreateOrConnectWithoutTB_routinesInput | TB_reservationsCreateOrConnectWithoutTB_routinesInput[]
    upsert?: TB_reservationsUpsertWithWhereUniqueWithoutTB_routinesInput | TB_reservationsUpsertWithWhereUniqueWithoutTB_routinesInput[]
    createMany?: TB_reservationsCreateManyTB_routinesInputEnvelope
    set?: TB_reservationsWhereUniqueInput | TB_reservationsWhereUniqueInput[]
    disconnect?: TB_reservationsWhereUniqueInput | TB_reservationsWhereUniqueInput[]
    delete?: TB_reservationsWhereUniqueInput | TB_reservationsWhereUniqueInput[]
    connect?: TB_reservationsWhereUniqueInput | TB_reservationsWhereUniqueInput[]
    update?: TB_reservationsUpdateWithWhereUniqueWithoutTB_routinesInput | TB_reservationsUpdateWithWhereUniqueWithoutTB_routinesInput[]
    updateMany?: TB_reservationsUpdateManyWithWhereWithoutTB_routinesInput | TB_reservationsUpdateManyWithWhereWithoutTB_routinesInput[]
    deleteMany?: TB_reservationsScalarWhereInput | TB_reservationsScalarWhereInput[]
  }

  export type TB_routine_exerciseUncheckedUpdateManyWithoutTB_routinesNestedInput = {
    create?: XOR<TB_routine_exerciseCreateWithoutTB_routinesInput, TB_routine_exerciseUncheckedCreateWithoutTB_routinesInput> | TB_routine_exerciseCreateWithoutTB_routinesInput[] | TB_routine_exerciseUncheckedCreateWithoutTB_routinesInput[]
    connectOrCreate?: TB_routine_exerciseCreateOrConnectWithoutTB_routinesInput | TB_routine_exerciseCreateOrConnectWithoutTB_routinesInput[]
    upsert?: TB_routine_exerciseUpsertWithWhereUniqueWithoutTB_routinesInput | TB_routine_exerciseUpsertWithWhereUniqueWithoutTB_routinesInput[]
    createMany?: TB_routine_exerciseCreateManyTB_routinesInputEnvelope
    set?: TB_routine_exerciseWhereUniqueInput | TB_routine_exerciseWhereUniqueInput[]
    disconnect?: TB_routine_exerciseWhereUniqueInput | TB_routine_exerciseWhereUniqueInput[]
    delete?: TB_routine_exerciseWhereUniqueInput | TB_routine_exerciseWhereUniqueInput[]
    connect?: TB_routine_exerciseWhereUniqueInput | TB_routine_exerciseWhereUniqueInput[]
    update?: TB_routine_exerciseUpdateWithWhereUniqueWithoutTB_routinesInput | TB_routine_exerciseUpdateWithWhereUniqueWithoutTB_routinesInput[]
    updateMany?: TB_routine_exerciseUpdateManyWithWhereWithoutTB_routinesInput | TB_routine_exerciseUpdateManyWithWhereWithoutTB_routinesInput[]
    deleteMany?: TB_routine_exerciseScalarWhereInput | TB_routine_exerciseScalarWhereInput[]
  }

  export type TB_reservationsUncheckedUpdateManyWithoutTB_routinesNestedInput = {
    create?: XOR<TB_reservationsCreateWithoutTB_routinesInput, TB_reservationsUncheckedCreateWithoutTB_routinesInput> | TB_reservationsCreateWithoutTB_routinesInput[] | TB_reservationsUncheckedCreateWithoutTB_routinesInput[]
    connectOrCreate?: TB_reservationsCreateOrConnectWithoutTB_routinesInput | TB_reservationsCreateOrConnectWithoutTB_routinesInput[]
    upsert?: TB_reservationsUpsertWithWhereUniqueWithoutTB_routinesInput | TB_reservationsUpsertWithWhereUniqueWithoutTB_routinesInput[]
    createMany?: TB_reservationsCreateManyTB_routinesInputEnvelope
    set?: TB_reservationsWhereUniqueInput | TB_reservationsWhereUniqueInput[]
    disconnect?: TB_reservationsWhereUniqueInput | TB_reservationsWhereUniqueInput[]
    delete?: TB_reservationsWhereUniqueInput | TB_reservationsWhereUniqueInput[]
    connect?: TB_reservationsWhereUniqueInput | TB_reservationsWhereUniqueInput[]
    update?: TB_reservationsUpdateWithWhereUniqueWithoutTB_routinesInput | TB_reservationsUpdateWithWhereUniqueWithoutTB_routinesInput[]
    updateMany?: TB_reservationsUpdateManyWithWhereWithoutTB_routinesInput | TB_reservationsUpdateManyWithWhereWithoutTB_routinesInput[]
    deleteMany?: TB_reservationsScalarWhereInput | TB_reservationsScalarWhereInput[]
  }

  export type TB_routine_exerciseCreateNestedManyWithoutTB_exercisesInput = {
    create?: XOR<TB_routine_exerciseCreateWithoutTB_exercisesInput, TB_routine_exerciseUncheckedCreateWithoutTB_exercisesInput> | TB_routine_exerciseCreateWithoutTB_exercisesInput[] | TB_routine_exerciseUncheckedCreateWithoutTB_exercisesInput[]
    connectOrCreate?: TB_routine_exerciseCreateOrConnectWithoutTB_exercisesInput | TB_routine_exerciseCreateOrConnectWithoutTB_exercisesInput[]
    createMany?: TB_routine_exerciseCreateManyTB_exercisesInputEnvelope
    connect?: TB_routine_exerciseWhereUniqueInput | TB_routine_exerciseWhereUniqueInput[]
  }

  export type TB_routine_exerciseUncheckedCreateNestedManyWithoutTB_exercisesInput = {
    create?: XOR<TB_routine_exerciseCreateWithoutTB_exercisesInput, TB_routine_exerciseUncheckedCreateWithoutTB_exercisesInput> | TB_routine_exerciseCreateWithoutTB_exercisesInput[] | TB_routine_exerciseUncheckedCreateWithoutTB_exercisesInput[]
    connectOrCreate?: TB_routine_exerciseCreateOrConnectWithoutTB_exercisesInput | TB_routine_exerciseCreateOrConnectWithoutTB_exercisesInput[]
    createMany?: TB_routine_exerciseCreateManyTB_exercisesInputEnvelope
    connect?: TB_routine_exerciseWhereUniqueInput | TB_routine_exerciseWhereUniqueInput[]
  }

  export type TB_routine_exerciseUpdateManyWithoutTB_exercisesNestedInput = {
    create?: XOR<TB_routine_exerciseCreateWithoutTB_exercisesInput, TB_routine_exerciseUncheckedCreateWithoutTB_exercisesInput> | TB_routine_exerciseCreateWithoutTB_exercisesInput[] | TB_routine_exerciseUncheckedCreateWithoutTB_exercisesInput[]
    connectOrCreate?: TB_routine_exerciseCreateOrConnectWithoutTB_exercisesInput | TB_routine_exerciseCreateOrConnectWithoutTB_exercisesInput[]
    upsert?: TB_routine_exerciseUpsertWithWhereUniqueWithoutTB_exercisesInput | TB_routine_exerciseUpsertWithWhereUniqueWithoutTB_exercisesInput[]
    createMany?: TB_routine_exerciseCreateManyTB_exercisesInputEnvelope
    set?: TB_routine_exerciseWhereUniqueInput | TB_routine_exerciseWhereUniqueInput[]
    disconnect?: TB_routine_exerciseWhereUniqueInput | TB_routine_exerciseWhereUniqueInput[]
    delete?: TB_routine_exerciseWhereUniqueInput | TB_routine_exerciseWhereUniqueInput[]
    connect?: TB_routine_exerciseWhereUniqueInput | TB_routine_exerciseWhereUniqueInput[]
    update?: TB_routine_exerciseUpdateWithWhereUniqueWithoutTB_exercisesInput | TB_routine_exerciseUpdateWithWhereUniqueWithoutTB_exercisesInput[]
    updateMany?: TB_routine_exerciseUpdateManyWithWhereWithoutTB_exercisesInput | TB_routine_exerciseUpdateManyWithWhereWithoutTB_exercisesInput[]
    deleteMany?: TB_routine_exerciseScalarWhereInput | TB_routine_exerciseScalarWhereInput[]
  }

  export type TB_routine_exerciseUncheckedUpdateManyWithoutTB_exercisesNestedInput = {
    create?: XOR<TB_routine_exerciseCreateWithoutTB_exercisesInput, TB_routine_exerciseUncheckedCreateWithoutTB_exercisesInput> | TB_routine_exerciseCreateWithoutTB_exercisesInput[] | TB_routine_exerciseUncheckedCreateWithoutTB_exercisesInput[]
    connectOrCreate?: TB_routine_exerciseCreateOrConnectWithoutTB_exercisesInput | TB_routine_exerciseCreateOrConnectWithoutTB_exercisesInput[]
    upsert?: TB_routine_exerciseUpsertWithWhereUniqueWithoutTB_exercisesInput | TB_routine_exerciseUpsertWithWhereUniqueWithoutTB_exercisesInput[]
    createMany?: TB_routine_exerciseCreateManyTB_exercisesInputEnvelope
    set?: TB_routine_exerciseWhereUniqueInput | TB_routine_exerciseWhereUniqueInput[]
    disconnect?: TB_routine_exerciseWhereUniqueInput | TB_routine_exerciseWhereUniqueInput[]
    delete?: TB_routine_exerciseWhereUniqueInput | TB_routine_exerciseWhereUniqueInput[]
    connect?: TB_routine_exerciseWhereUniqueInput | TB_routine_exerciseWhereUniqueInput[]
    update?: TB_routine_exerciseUpdateWithWhereUniqueWithoutTB_exercisesInput | TB_routine_exerciseUpdateWithWhereUniqueWithoutTB_exercisesInput[]
    updateMany?: TB_routine_exerciseUpdateManyWithWhereWithoutTB_exercisesInput | TB_routine_exerciseUpdateManyWithWhereWithoutTB_exercisesInput[]
    deleteMany?: TB_routine_exerciseScalarWhereInput | TB_routine_exerciseScalarWhereInput[]
  }

  export type TB_routinesCreateNestedOneWithoutTB_routine_exerciseInput = {
    create?: XOR<TB_routinesCreateWithoutTB_routine_exerciseInput, TB_routinesUncheckedCreateWithoutTB_routine_exerciseInput>
    connectOrCreate?: TB_routinesCreateOrConnectWithoutTB_routine_exerciseInput
    connect?: TB_routinesWhereUniqueInput
  }

  export type TB_exercisesCreateNestedOneWithoutTB_routine_exerciseInput = {
    create?: XOR<TB_exercisesCreateWithoutTB_routine_exerciseInput, TB_exercisesUncheckedCreateWithoutTB_routine_exerciseInput>
    connectOrCreate?: TB_exercisesCreateOrConnectWithoutTB_routine_exerciseInput
    connect?: TB_exercisesWhereUniqueInput
  }

  export type TB_routinesUpdateOneRequiredWithoutTB_routine_exerciseNestedInput = {
    create?: XOR<TB_routinesCreateWithoutTB_routine_exerciseInput, TB_routinesUncheckedCreateWithoutTB_routine_exerciseInput>
    connectOrCreate?: TB_routinesCreateOrConnectWithoutTB_routine_exerciseInput
    upsert?: TB_routinesUpsertWithoutTB_routine_exerciseInput
    connect?: TB_routinesWhereUniqueInput
    update?: XOR<XOR<TB_routinesUpdateToOneWithWhereWithoutTB_routine_exerciseInput, TB_routinesUpdateWithoutTB_routine_exerciseInput>, TB_routinesUncheckedUpdateWithoutTB_routine_exerciseInput>
  }

  export type TB_exercisesUpdateOneRequiredWithoutTB_routine_exerciseNestedInput = {
    create?: XOR<TB_exercisesCreateWithoutTB_routine_exerciseInput, TB_exercisesUncheckedCreateWithoutTB_routine_exerciseInput>
    connectOrCreate?: TB_exercisesCreateOrConnectWithoutTB_routine_exerciseInput
    upsert?: TB_exercisesUpsertWithoutTB_routine_exerciseInput
    connect?: TB_exercisesWhereUniqueInput
    update?: XOR<XOR<TB_exercisesUpdateToOneWithWhereWithoutTB_routine_exerciseInput, TB_exercisesUpdateWithoutTB_routine_exerciseInput>, TB_exercisesUncheckedUpdateWithoutTB_routine_exerciseInput>
  }

  export type TB_client_membershipCreateNestedOneWithoutTB_reservationsInput = {
    create?: XOR<TB_client_membershipCreateWithoutTB_reservationsInput, TB_client_membershipUncheckedCreateWithoutTB_reservationsInput>
    connectOrCreate?: TB_client_membershipCreateOrConnectWithoutTB_reservationsInput
    connect?: TB_client_membershipWhereUniqueInput
  }

  export type TB_routinesCreateNestedOneWithoutTB_reservationsInput = {
    create?: XOR<TB_routinesCreateWithoutTB_reservationsInput, TB_routinesUncheckedCreateWithoutTB_reservationsInput>
    connectOrCreate?: TB_routinesCreateOrConnectWithoutTB_reservationsInput
    connect?: TB_routinesWhereUniqueInput
  }

  export type EnumreservationStatusFieldUpdateOperationsInput = {
    set?: $Enums.reservationStatus
  }

  export type TB_client_membershipUpdateOneRequiredWithoutTB_reservationsNestedInput = {
    create?: XOR<TB_client_membershipCreateWithoutTB_reservationsInput, TB_client_membershipUncheckedCreateWithoutTB_reservationsInput>
    connectOrCreate?: TB_client_membershipCreateOrConnectWithoutTB_reservationsInput
    upsert?: TB_client_membershipUpsertWithoutTB_reservationsInput
    connect?: TB_client_membershipWhereUniqueInput
    update?: XOR<XOR<TB_client_membershipUpdateToOneWithWhereWithoutTB_reservationsInput, TB_client_membershipUpdateWithoutTB_reservationsInput>, TB_client_membershipUncheckedUpdateWithoutTB_reservationsInput>
  }

  export type TB_routinesUpdateOneRequiredWithoutTB_reservationsNestedInput = {
    create?: XOR<TB_routinesCreateWithoutTB_reservationsInput, TB_routinesUncheckedCreateWithoutTB_reservationsInput>
    connectOrCreate?: TB_routinesCreateOrConnectWithoutTB_reservationsInput
    upsert?: TB_routinesUpsertWithoutTB_reservationsInput
    connect?: TB_routinesWhereUniqueInput
    update?: XOR<XOR<TB_routinesUpdateToOneWithWhereWithoutTB_reservationsInput, TB_routinesUpdateWithoutTB_reservationsInput>, TB_routinesUncheckedUpdateWithoutTB_reservationsInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedEnumfrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.frequency | EnumfrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.frequency[] | ListEnumfrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.frequency[] | ListEnumfrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumfrequencyFilter<$PrismaModel> | $Enums.frequency
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumfrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.frequency | EnumfrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.frequency[] | ListEnumfrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.frequency[] | ListEnumfrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumfrequencyWithAggregatesFilter<$PrismaModel> | $Enums.frequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumfrequencyFilter<$PrismaModel>
    _max?: NestedEnumfrequencyFilter<$PrismaModel>
  }

  export type NestedEnumreservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.reservationStatus | EnumreservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.reservationStatus[] | ListEnumreservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.reservationStatus[] | ListEnumreservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumreservationStatusFilter<$PrismaModel> | $Enums.reservationStatus
  }

  export type NestedEnumreservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.reservationStatus | EnumreservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.reservationStatus[] | ListEnumreservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.reservationStatus[] | ListEnumreservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumreservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.reservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumreservationStatusFilter<$PrismaModel>
    _max?: NestedEnumreservationStatusFilter<$PrismaModel>
  }

  export type TB_user_roleCreateWithoutTB_usersInput = {
    TB_role: TB_roleCreateNestedOneWithoutTB_user_roleInput
    TB_employees?: TB_employeesCreateNestedManyWithoutTB_user_roleInput
    TB_client_membership?: TB_client_membershipCreateNestedManyWithoutTB_user_roleInput
  }

  export type TB_user_roleUncheckedCreateWithoutTB_usersInput = {
    id_user_role?: number
    id_role: number
    TB_employees?: TB_employeesUncheckedCreateNestedManyWithoutTB_user_roleInput
    TB_client_membership?: TB_client_membershipUncheckedCreateNestedManyWithoutTB_user_roleInput
  }

  export type TB_user_roleCreateOrConnectWithoutTB_usersInput = {
    where: TB_user_roleWhereUniqueInput
    create: XOR<TB_user_roleCreateWithoutTB_usersInput, TB_user_roleUncheckedCreateWithoutTB_usersInput>
  }

  export type TB_user_roleCreateManyTB_usersInputEnvelope = {
    data: TB_user_roleCreateManyTB_usersInput | TB_user_roleCreateManyTB_usersInput[]
    skipDuplicates?: boolean
  }

  export type TB_restrictionCreateWithoutTB_usersInput = {
    description: string
  }

  export type TB_restrictionUncheckedCreateWithoutTB_usersInput = {
    id_restriction?: number
    description: string
  }

  export type TB_restrictionCreateOrConnectWithoutTB_usersInput = {
    where: TB_restrictionWhereUniqueInput
    create: XOR<TB_restrictionCreateWithoutTB_usersInput, TB_restrictionUncheckedCreateWithoutTB_usersInput>
  }

  export type TB_restrictionCreateManyTB_usersInputEnvelope = {
    data: TB_restrictionCreateManyTB_usersInput | TB_restrictionCreateManyTB_usersInput[]
    skipDuplicates?: boolean
  }

  export type TB_user_roleUpsertWithWhereUniqueWithoutTB_usersInput = {
    where: TB_user_roleWhereUniqueInput
    update: XOR<TB_user_roleUpdateWithoutTB_usersInput, TB_user_roleUncheckedUpdateWithoutTB_usersInput>
    create: XOR<TB_user_roleCreateWithoutTB_usersInput, TB_user_roleUncheckedCreateWithoutTB_usersInput>
  }

  export type TB_user_roleUpdateWithWhereUniqueWithoutTB_usersInput = {
    where: TB_user_roleWhereUniqueInput
    data: XOR<TB_user_roleUpdateWithoutTB_usersInput, TB_user_roleUncheckedUpdateWithoutTB_usersInput>
  }

  export type TB_user_roleUpdateManyWithWhereWithoutTB_usersInput = {
    where: TB_user_roleScalarWhereInput
    data: XOR<TB_user_roleUpdateManyMutationInput, TB_user_roleUncheckedUpdateManyWithoutTB_usersInput>
  }

  export type TB_user_roleScalarWhereInput = {
    AND?: TB_user_roleScalarWhereInput | TB_user_roleScalarWhereInput[]
    OR?: TB_user_roleScalarWhereInput[]
    NOT?: TB_user_roleScalarWhereInput | TB_user_roleScalarWhereInput[]
    id_user_role?: IntFilter<"TB_user_role"> | number
    id_user?: IntFilter<"TB_user_role"> | number
    id_role?: IntFilter<"TB_user_role"> | number
  }

  export type TB_restrictionUpsertWithWhereUniqueWithoutTB_usersInput = {
    where: TB_restrictionWhereUniqueInput
    update: XOR<TB_restrictionUpdateWithoutTB_usersInput, TB_restrictionUncheckedUpdateWithoutTB_usersInput>
    create: XOR<TB_restrictionCreateWithoutTB_usersInput, TB_restrictionUncheckedCreateWithoutTB_usersInput>
  }

  export type TB_restrictionUpdateWithWhereUniqueWithoutTB_usersInput = {
    where: TB_restrictionWhereUniqueInput
    data: XOR<TB_restrictionUpdateWithoutTB_usersInput, TB_restrictionUncheckedUpdateWithoutTB_usersInput>
  }

  export type TB_restrictionUpdateManyWithWhereWithoutTB_usersInput = {
    where: TB_restrictionScalarWhereInput
    data: XOR<TB_restrictionUpdateManyMutationInput, TB_restrictionUncheckedUpdateManyWithoutTB_usersInput>
  }

  export type TB_restrictionScalarWhereInput = {
    AND?: TB_restrictionScalarWhereInput | TB_restrictionScalarWhereInput[]
    OR?: TB_restrictionScalarWhereInput[]
    NOT?: TB_restrictionScalarWhereInput | TB_restrictionScalarWhereInput[]
    id_restriction?: IntFilter<"TB_restriction"> | number
    id_user?: IntFilter<"TB_restriction"> | number
    description?: StringFilter<"TB_restriction"> | string
  }

  export type TB_user_roleCreateWithoutTB_roleInput = {
    TB_users: TB_usersCreateNestedOneWithoutTB_user_roleInput
    TB_employees?: TB_employeesCreateNestedManyWithoutTB_user_roleInput
    TB_client_membership?: TB_client_membershipCreateNestedManyWithoutTB_user_roleInput
  }

  export type TB_user_roleUncheckedCreateWithoutTB_roleInput = {
    id_user_role?: number
    id_user: number
    TB_employees?: TB_employeesUncheckedCreateNestedManyWithoutTB_user_roleInput
    TB_client_membership?: TB_client_membershipUncheckedCreateNestedManyWithoutTB_user_roleInput
  }

  export type TB_user_roleCreateOrConnectWithoutTB_roleInput = {
    where: TB_user_roleWhereUniqueInput
    create: XOR<TB_user_roleCreateWithoutTB_roleInput, TB_user_roleUncheckedCreateWithoutTB_roleInput>
  }

  export type TB_user_roleCreateManyTB_roleInputEnvelope = {
    data: TB_user_roleCreateManyTB_roleInput | TB_user_roleCreateManyTB_roleInput[]
    skipDuplicates?: boolean
  }

  export type TB_user_roleUpsertWithWhereUniqueWithoutTB_roleInput = {
    where: TB_user_roleWhereUniqueInput
    update: XOR<TB_user_roleUpdateWithoutTB_roleInput, TB_user_roleUncheckedUpdateWithoutTB_roleInput>
    create: XOR<TB_user_roleCreateWithoutTB_roleInput, TB_user_roleUncheckedCreateWithoutTB_roleInput>
  }

  export type TB_user_roleUpdateWithWhereUniqueWithoutTB_roleInput = {
    where: TB_user_roleWhereUniqueInput
    data: XOR<TB_user_roleUpdateWithoutTB_roleInput, TB_user_roleUncheckedUpdateWithoutTB_roleInput>
  }

  export type TB_user_roleUpdateManyWithWhereWithoutTB_roleInput = {
    where: TB_user_roleScalarWhereInput
    data: XOR<TB_user_roleUpdateManyMutationInput, TB_user_roleUncheckedUpdateManyWithoutTB_roleInput>
  }

  export type TB_usersCreateWithoutTB_user_roleInput = {
    name: string
    lastname: string
    email: string
    password: string
    phone_number: string
    birthday: Date | string
    TB_restriction?: TB_restrictionCreateNestedManyWithoutTB_usersInput
  }

  export type TB_usersUncheckedCreateWithoutTB_user_roleInput = {
    id_user?: number
    name: string
    lastname: string
    email: string
    password: string
    phone_number: string
    birthday: Date | string
    TB_restriction?: TB_restrictionUncheckedCreateNestedManyWithoutTB_usersInput
  }

  export type TB_usersCreateOrConnectWithoutTB_user_roleInput = {
    where: TB_usersWhereUniqueInput
    create: XOR<TB_usersCreateWithoutTB_user_roleInput, TB_usersUncheckedCreateWithoutTB_user_roleInput>
  }

  export type TB_roleCreateWithoutTB_user_roleInput = {
    name: string
    description: string
  }

  export type TB_roleUncheckedCreateWithoutTB_user_roleInput = {
    id_role?: number
    name: string
    description: string
  }

  export type TB_roleCreateOrConnectWithoutTB_user_roleInput = {
    where: TB_roleWhereUniqueInput
    create: XOR<TB_roleCreateWithoutTB_user_roleInput, TB_roleUncheckedCreateWithoutTB_user_roleInput>
  }

  export type TB_employeesCreateWithoutTB_user_roleInput = {
    bio: string
    specialization: string
    date_entry: Date | string
  }

  export type TB_employeesUncheckedCreateWithoutTB_user_roleInput = {
    id?: number
    bio: string
    specialization: string
    date_entry: Date | string
  }

  export type TB_employeesCreateOrConnectWithoutTB_user_roleInput = {
    where: TB_employeesWhereUniqueInput
    create: XOR<TB_employeesCreateWithoutTB_user_roleInput, TB_employeesUncheckedCreateWithoutTB_user_roleInput>
  }

  export type TB_employeesCreateManyTB_user_roleInputEnvelope = {
    data: TB_employeesCreateManyTB_user_roleInput | TB_employeesCreateManyTB_user_roleInput[]
    skipDuplicates?: boolean
  }

  export type TB_client_membershipCreateWithoutTB_user_roleInput = {
    start_date: Date | string
    end_date: Date | string
    TB_memberships: TB_membershipsCreateNestedOneWithoutTB_client_membershipInput
    TB_reservations?: TB_reservationsCreateNestedManyWithoutTB_client_membershipInput
  }

  export type TB_client_membershipUncheckedCreateWithoutTB_user_roleInput = {
    id?: number
    id_membership: number
    start_date: Date | string
    end_date: Date | string
    TB_reservations?: TB_reservationsUncheckedCreateNestedManyWithoutTB_client_membershipInput
  }

  export type TB_client_membershipCreateOrConnectWithoutTB_user_roleInput = {
    where: TB_client_membershipWhereUniqueInput
    create: XOR<TB_client_membershipCreateWithoutTB_user_roleInput, TB_client_membershipUncheckedCreateWithoutTB_user_roleInput>
  }

  export type TB_client_membershipCreateManyTB_user_roleInputEnvelope = {
    data: TB_client_membershipCreateManyTB_user_roleInput | TB_client_membershipCreateManyTB_user_roleInput[]
    skipDuplicates?: boolean
  }

  export type TB_usersUpsertWithoutTB_user_roleInput = {
    update: XOR<TB_usersUpdateWithoutTB_user_roleInput, TB_usersUncheckedUpdateWithoutTB_user_roleInput>
    create: XOR<TB_usersCreateWithoutTB_user_roleInput, TB_usersUncheckedCreateWithoutTB_user_roleInput>
    where?: TB_usersWhereInput
  }

  export type TB_usersUpdateToOneWithWhereWithoutTB_user_roleInput = {
    where?: TB_usersWhereInput
    data: XOR<TB_usersUpdateWithoutTB_user_roleInput, TB_usersUncheckedUpdateWithoutTB_user_roleInput>
  }

  export type TB_usersUpdateWithoutTB_user_roleInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    TB_restriction?: TB_restrictionUpdateManyWithoutTB_usersNestedInput
  }

  export type TB_usersUncheckedUpdateWithoutTB_user_roleInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    TB_restriction?: TB_restrictionUncheckedUpdateManyWithoutTB_usersNestedInput
  }

  export type TB_roleUpsertWithoutTB_user_roleInput = {
    update: XOR<TB_roleUpdateWithoutTB_user_roleInput, TB_roleUncheckedUpdateWithoutTB_user_roleInput>
    create: XOR<TB_roleCreateWithoutTB_user_roleInput, TB_roleUncheckedCreateWithoutTB_user_roleInput>
    where?: TB_roleWhereInput
  }

  export type TB_roleUpdateToOneWithWhereWithoutTB_user_roleInput = {
    where?: TB_roleWhereInput
    data: XOR<TB_roleUpdateWithoutTB_user_roleInput, TB_roleUncheckedUpdateWithoutTB_user_roleInput>
  }

  export type TB_roleUpdateWithoutTB_user_roleInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TB_roleUncheckedUpdateWithoutTB_user_roleInput = {
    id_role?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TB_employeesUpsertWithWhereUniqueWithoutTB_user_roleInput = {
    where: TB_employeesWhereUniqueInput
    update: XOR<TB_employeesUpdateWithoutTB_user_roleInput, TB_employeesUncheckedUpdateWithoutTB_user_roleInput>
    create: XOR<TB_employeesCreateWithoutTB_user_roleInput, TB_employeesUncheckedCreateWithoutTB_user_roleInput>
  }

  export type TB_employeesUpdateWithWhereUniqueWithoutTB_user_roleInput = {
    where: TB_employeesWhereUniqueInput
    data: XOR<TB_employeesUpdateWithoutTB_user_roleInput, TB_employeesUncheckedUpdateWithoutTB_user_roleInput>
  }

  export type TB_employeesUpdateManyWithWhereWithoutTB_user_roleInput = {
    where: TB_employeesScalarWhereInput
    data: XOR<TB_employeesUpdateManyMutationInput, TB_employeesUncheckedUpdateManyWithoutTB_user_roleInput>
  }

  export type TB_employeesScalarWhereInput = {
    AND?: TB_employeesScalarWhereInput | TB_employeesScalarWhereInput[]
    OR?: TB_employeesScalarWhereInput[]
    NOT?: TB_employeesScalarWhereInput | TB_employeesScalarWhereInput[]
    id?: IntFilter<"TB_employees"> | number
    id_user_role?: IntFilter<"TB_employees"> | number
    bio?: StringFilter<"TB_employees"> | string
    specialization?: StringFilter<"TB_employees"> | string
    date_entry?: DateTimeFilter<"TB_employees"> | Date | string
  }

  export type TB_client_membershipUpsertWithWhereUniqueWithoutTB_user_roleInput = {
    where: TB_client_membershipWhereUniqueInput
    update: XOR<TB_client_membershipUpdateWithoutTB_user_roleInput, TB_client_membershipUncheckedUpdateWithoutTB_user_roleInput>
    create: XOR<TB_client_membershipCreateWithoutTB_user_roleInput, TB_client_membershipUncheckedCreateWithoutTB_user_roleInput>
  }

  export type TB_client_membershipUpdateWithWhereUniqueWithoutTB_user_roleInput = {
    where: TB_client_membershipWhereUniqueInput
    data: XOR<TB_client_membershipUpdateWithoutTB_user_roleInput, TB_client_membershipUncheckedUpdateWithoutTB_user_roleInput>
  }

  export type TB_client_membershipUpdateManyWithWhereWithoutTB_user_roleInput = {
    where: TB_client_membershipScalarWhereInput
    data: XOR<TB_client_membershipUpdateManyMutationInput, TB_client_membershipUncheckedUpdateManyWithoutTB_user_roleInput>
  }

  export type TB_client_membershipScalarWhereInput = {
    AND?: TB_client_membershipScalarWhereInput | TB_client_membershipScalarWhereInput[]
    OR?: TB_client_membershipScalarWhereInput[]
    NOT?: TB_client_membershipScalarWhereInput | TB_client_membershipScalarWhereInput[]
    id?: IntFilter<"TB_client_membership"> | number
    id_user_role?: IntFilter<"TB_client_membership"> | number
    id_membership?: IntFilter<"TB_client_membership"> | number
    start_date?: DateTimeFilter<"TB_client_membership"> | Date | string
    end_date?: DateTimeFilter<"TB_client_membership"> | Date | string
  }

  export type TB_usersCreateWithoutTB_restrictionInput = {
    name: string
    lastname: string
    email: string
    password: string
    phone_number: string
    birthday: Date | string
    TB_user_role?: TB_user_roleCreateNestedManyWithoutTB_usersInput
  }

  export type TB_usersUncheckedCreateWithoutTB_restrictionInput = {
    id_user?: number
    name: string
    lastname: string
    email: string
    password: string
    phone_number: string
    birthday: Date | string
    TB_user_role?: TB_user_roleUncheckedCreateNestedManyWithoutTB_usersInput
  }

  export type TB_usersCreateOrConnectWithoutTB_restrictionInput = {
    where: TB_usersWhereUniqueInput
    create: XOR<TB_usersCreateWithoutTB_restrictionInput, TB_usersUncheckedCreateWithoutTB_restrictionInput>
  }

  export type TB_usersUpsertWithoutTB_restrictionInput = {
    update: XOR<TB_usersUpdateWithoutTB_restrictionInput, TB_usersUncheckedUpdateWithoutTB_restrictionInput>
    create: XOR<TB_usersCreateWithoutTB_restrictionInput, TB_usersUncheckedCreateWithoutTB_restrictionInput>
    where?: TB_usersWhereInput
  }

  export type TB_usersUpdateToOneWithWhereWithoutTB_restrictionInput = {
    where?: TB_usersWhereInput
    data: XOR<TB_usersUpdateWithoutTB_restrictionInput, TB_usersUncheckedUpdateWithoutTB_restrictionInput>
  }

  export type TB_usersUpdateWithoutTB_restrictionInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    TB_user_role?: TB_user_roleUpdateManyWithoutTB_usersNestedInput
  }

  export type TB_usersUncheckedUpdateWithoutTB_restrictionInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    TB_user_role?: TB_user_roleUncheckedUpdateManyWithoutTB_usersNestedInput
  }

  export type TB_user_roleCreateWithoutTB_employeesInput = {
    TB_users: TB_usersCreateNestedOneWithoutTB_user_roleInput
    TB_role: TB_roleCreateNestedOneWithoutTB_user_roleInput
    TB_client_membership?: TB_client_membershipCreateNestedManyWithoutTB_user_roleInput
  }

  export type TB_user_roleUncheckedCreateWithoutTB_employeesInput = {
    id_user_role?: number
    id_user: number
    id_role: number
    TB_client_membership?: TB_client_membershipUncheckedCreateNestedManyWithoutTB_user_roleInput
  }

  export type TB_user_roleCreateOrConnectWithoutTB_employeesInput = {
    where: TB_user_roleWhereUniqueInput
    create: XOR<TB_user_roleCreateWithoutTB_employeesInput, TB_user_roleUncheckedCreateWithoutTB_employeesInput>
  }

  export type TB_user_roleUpsertWithoutTB_employeesInput = {
    update: XOR<TB_user_roleUpdateWithoutTB_employeesInput, TB_user_roleUncheckedUpdateWithoutTB_employeesInput>
    create: XOR<TB_user_roleCreateWithoutTB_employeesInput, TB_user_roleUncheckedCreateWithoutTB_employeesInput>
    where?: TB_user_roleWhereInput
  }

  export type TB_user_roleUpdateToOneWithWhereWithoutTB_employeesInput = {
    where?: TB_user_roleWhereInput
    data: XOR<TB_user_roleUpdateWithoutTB_employeesInput, TB_user_roleUncheckedUpdateWithoutTB_employeesInput>
  }

  export type TB_user_roleUpdateWithoutTB_employeesInput = {
    TB_users?: TB_usersUpdateOneRequiredWithoutTB_user_roleNestedInput
    TB_role?: TB_roleUpdateOneRequiredWithoutTB_user_roleNestedInput
    TB_client_membership?: TB_client_membershipUpdateManyWithoutTB_user_roleNestedInput
  }

  export type TB_user_roleUncheckedUpdateWithoutTB_employeesInput = {
    id_user_role?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    id_role?: IntFieldUpdateOperationsInput | number
    TB_client_membership?: TB_client_membershipUncheckedUpdateManyWithoutTB_user_roleNestedInput
  }

  export type TB_client_membershipCreateWithoutTB_membershipsInput = {
    start_date: Date | string
    end_date: Date | string
    TB_user_role: TB_user_roleCreateNestedOneWithoutTB_client_membershipInput
    TB_reservations?: TB_reservationsCreateNestedManyWithoutTB_client_membershipInput
  }

  export type TB_client_membershipUncheckedCreateWithoutTB_membershipsInput = {
    id?: number
    id_user_role: number
    start_date: Date | string
    end_date: Date | string
    TB_reservations?: TB_reservationsUncheckedCreateNestedManyWithoutTB_client_membershipInput
  }

  export type TB_client_membershipCreateOrConnectWithoutTB_membershipsInput = {
    where: TB_client_membershipWhereUniqueInput
    create: XOR<TB_client_membershipCreateWithoutTB_membershipsInput, TB_client_membershipUncheckedCreateWithoutTB_membershipsInput>
  }

  export type TB_client_membershipCreateManyTB_membershipsInputEnvelope = {
    data: TB_client_membershipCreateManyTB_membershipsInput | TB_client_membershipCreateManyTB_membershipsInput[]
    skipDuplicates?: boolean
  }

  export type TB_client_membershipUpsertWithWhereUniqueWithoutTB_membershipsInput = {
    where: TB_client_membershipWhereUniqueInput
    update: XOR<TB_client_membershipUpdateWithoutTB_membershipsInput, TB_client_membershipUncheckedUpdateWithoutTB_membershipsInput>
    create: XOR<TB_client_membershipCreateWithoutTB_membershipsInput, TB_client_membershipUncheckedCreateWithoutTB_membershipsInput>
  }

  export type TB_client_membershipUpdateWithWhereUniqueWithoutTB_membershipsInput = {
    where: TB_client_membershipWhereUniqueInput
    data: XOR<TB_client_membershipUpdateWithoutTB_membershipsInput, TB_client_membershipUncheckedUpdateWithoutTB_membershipsInput>
  }

  export type TB_client_membershipUpdateManyWithWhereWithoutTB_membershipsInput = {
    where: TB_client_membershipScalarWhereInput
    data: XOR<TB_client_membershipUpdateManyMutationInput, TB_client_membershipUncheckedUpdateManyWithoutTB_membershipsInput>
  }

  export type TB_user_roleCreateWithoutTB_client_membershipInput = {
    TB_users: TB_usersCreateNestedOneWithoutTB_user_roleInput
    TB_role: TB_roleCreateNestedOneWithoutTB_user_roleInput
    TB_employees?: TB_employeesCreateNestedManyWithoutTB_user_roleInput
  }

  export type TB_user_roleUncheckedCreateWithoutTB_client_membershipInput = {
    id_user_role?: number
    id_user: number
    id_role: number
    TB_employees?: TB_employeesUncheckedCreateNestedManyWithoutTB_user_roleInput
  }

  export type TB_user_roleCreateOrConnectWithoutTB_client_membershipInput = {
    where: TB_user_roleWhereUniqueInput
    create: XOR<TB_user_roleCreateWithoutTB_client_membershipInput, TB_user_roleUncheckedCreateWithoutTB_client_membershipInput>
  }

  export type TB_membershipsCreateWithoutTB_client_membershipInput = {
    name: string
    description: string
    price: number
    paymentFrequency: $Enums.frequency
  }

  export type TB_membershipsUncheckedCreateWithoutTB_client_membershipInput = {
    id?: number
    name: string
    description: string
    price: number
    paymentFrequency: $Enums.frequency
  }

  export type TB_membershipsCreateOrConnectWithoutTB_client_membershipInput = {
    where: TB_membershipsWhereUniqueInput
    create: XOR<TB_membershipsCreateWithoutTB_client_membershipInput, TB_membershipsUncheckedCreateWithoutTB_client_membershipInput>
  }

  export type TB_reservationsCreateWithoutTB_client_membershipInput = {
    start_time: Date | string
    status: $Enums.reservationStatus
    TB_routines: TB_routinesCreateNestedOneWithoutTB_reservationsInput
  }

  export type TB_reservationsUncheckedCreateWithoutTB_client_membershipInput = {
    id?: number
    id_routine: number
    start_time: Date | string
    status: $Enums.reservationStatus
  }

  export type TB_reservationsCreateOrConnectWithoutTB_client_membershipInput = {
    where: TB_reservationsWhereUniqueInput
    create: XOR<TB_reservationsCreateWithoutTB_client_membershipInput, TB_reservationsUncheckedCreateWithoutTB_client_membershipInput>
  }

  export type TB_reservationsCreateManyTB_client_membershipInputEnvelope = {
    data: TB_reservationsCreateManyTB_client_membershipInput | TB_reservationsCreateManyTB_client_membershipInput[]
    skipDuplicates?: boolean
  }

  export type TB_user_roleUpsertWithoutTB_client_membershipInput = {
    update: XOR<TB_user_roleUpdateWithoutTB_client_membershipInput, TB_user_roleUncheckedUpdateWithoutTB_client_membershipInput>
    create: XOR<TB_user_roleCreateWithoutTB_client_membershipInput, TB_user_roleUncheckedCreateWithoutTB_client_membershipInput>
    where?: TB_user_roleWhereInput
  }

  export type TB_user_roleUpdateToOneWithWhereWithoutTB_client_membershipInput = {
    where?: TB_user_roleWhereInput
    data: XOR<TB_user_roleUpdateWithoutTB_client_membershipInput, TB_user_roleUncheckedUpdateWithoutTB_client_membershipInput>
  }

  export type TB_user_roleUpdateWithoutTB_client_membershipInput = {
    TB_users?: TB_usersUpdateOneRequiredWithoutTB_user_roleNestedInput
    TB_role?: TB_roleUpdateOneRequiredWithoutTB_user_roleNestedInput
    TB_employees?: TB_employeesUpdateManyWithoutTB_user_roleNestedInput
  }

  export type TB_user_roleUncheckedUpdateWithoutTB_client_membershipInput = {
    id_user_role?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    id_role?: IntFieldUpdateOperationsInput | number
    TB_employees?: TB_employeesUncheckedUpdateManyWithoutTB_user_roleNestedInput
  }

  export type TB_membershipsUpsertWithoutTB_client_membershipInput = {
    update: XOR<TB_membershipsUpdateWithoutTB_client_membershipInput, TB_membershipsUncheckedUpdateWithoutTB_client_membershipInput>
    create: XOR<TB_membershipsCreateWithoutTB_client_membershipInput, TB_membershipsUncheckedCreateWithoutTB_client_membershipInput>
    where?: TB_membershipsWhereInput
  }

  export type TB_membershipsUpdateToOneWithWhereWithoutTB_client_membershipInput = {
    where?: TB_membershipsWhereInput
    data: XOR<TB_membershipsUpdateWithoutTB_client_membershipInput, TB_membershipsUncheckedUpdateWithoutTB_client_membershipInput>
  }

  export type TB_membershipsUpdateWithoutTB_client_membershipInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    paymentFrequency?: EnumfrequencyFieldUpdateOperationsInput | $Enums.frequency
  }

  export type TB_membershipsUncheckedUpdateWithoutTB_client_membershipInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    paymentFrequency?: EnumfrequencyFieldUpdateOperationsInput | $Enums.frequency
  }

  export type TB_reservationsUpsertWithWhereUniqueWithoutTB_client_membershipInput = {
    where: TB_reservationsWhereUniqueInput
    update: XOR<TB_reservationsUpdateWithoutTB_client_membershipInput, TB_reservationsUncheckedUpdateWithoutTB_client_membershipInput>
    create: XOR<TB_reservationsCreateWithoutTB_client_membershipInput, TB_reservationsUncheckedCreateWithoutTB_client_membershipInput>
  }

  export type TB_reservationsUpdateWithWhereUniqueWithoutTB_client_membershipInput = {
    where: TB_reservationsWhereUniqueInput
    data: XOR<TB_reservationsUpdateWithoutTB_client_membershipInput, TB_reservationsUncheckedUpdateWithoutTB_client_membershipInput>
  }

  export type TB_reservationsUpdateManyWithWhereWithoutTB_client_membershipInput = {
    where: TB_reservationsScalarWhereInput
    data: XOR<TB_reservationsUpdateManyMutationInput, TB_reservationsUncheckedUpdateManyWithoutTB_client_membershipInput>
  }

  export type TB_reservationsScalarWhereInput = {
    AND?: TB_reservationsScalarWhereInput | TB_reservationsScalarWhereInput[]
    OR?: TB_reservationsScalarWhereInput[]
    NOT?: TB_reservationsScalarWhereInput | TB_reservationsScalarWhereInput[]
    id?: IntFilter<"TB_reservations"> | number
    id_client_membership?: IntFilter<"TB_reservations"> | number
    id_routine?: IntFilter<"TB_reservations"> | number
    start_time?: DateTimeFilter<"TB_reservations"> | Date | string
    status?: EnumreservationStatusFilter<"TB_reservations"> | $Enums.reservationStatus
  }

  export type TB_routine_exerciseCreateWithoutTB_routinesInput = {
    TB_exercises: TB_exercisesCreateNestedOneWithoutTB_routine_exerciseInput
  }

  export type TB_routine_exerciseUncheckedCreateWithoutTB_routinesInput = {
    id?: number
    id_exercise: number
  }

  export type TB_routine_exerciseCreateOrConnectWithoutTB_routinesInput = {
    where: TB_routine_exerciseWhereUniqueInput
    create: XOR<TB_routine_exerciseCreateWithoutTB_routinesInput, TB_routine_exerciseUncheckedCreateWithoutTB_routinesInput>
  }

  export type TB_routine_exerciseCreateManyTB_routinesInputEnvelope = {
    data: TB_routine_exerciseCreateManyTB_routinesInput | TB_routine_exerciseCreateManyTB_routinesInput[]
    skipDuplicates?: boolean
  }

  export type TB_reservationsCreateWithoutTB_routinesInput = {
    start_time: Date | string
    status: $Enums.reservationStatus
    TB_client_membership: TB_client_membershipCreateNestedOneWithoutTB_reservationsInput
  }

  export type TB_reservationsUncheckedCreateWithoutTB_routinesInput = {
    id?: number
    id_client_membership: number
    start_time: Date | string
    status: $Enums.reservationStatus
  }

  export type TB_reservationsCreateOrConnectWithoutTB_routinesInput = {
    where: TB_reservationsWhereUniqueInput
    create: XOR<TB_reservationsCreateWithoutTB_routinesInput, TB_reservationsUncheckedCreateWithoutTB_routinesInput>
  }

  export type TB_reservationsCreateManyTB_routinesInputEnvelope = {
    data: TB_reservationsCreateManyTB_routinesInput | TB_reservationsCreateManyTB_routinesInput[]
    skipDuplicates?: boolean
  }

  export type TB_routine_exerciseUpsertWithWhereUniqueWithoutTB_routinesInput = {
    where: TB_routine_exerciseWhereUniqueInput
    update: XOR<TB_routine_exerciseUpdateWithoutTB_routinesInput, TB_routine_exerciseUncheckedUpdateWithoutTB_routinesInput>
    create: XOR<TB_routine_exerciseCreateWithoutTB_routinesInput, TB_routine_exerciseUncheckedCreateWithoutTB_routinesInput>
  }

  export type TB_routine_exerciseUpdateWithWhereUniqueWithoutTB_routinesInput = {
    where: TB_routine_exerciseWhereUniqueInput
    data: XOR<TB_routine_exerciseUpdateWithoutTB_routinesInput, TB_routine_exerciseUncheckedUpdateWithoutTB_routinesInput>
  }

  export type TB_routine_exerciseUpdateManyWithWhereWithoutTB_routinesInput = {
    where: TB_routine_exerciseScalarWhereInput
    data: XOR<TB_routine_exerciseUpdateManyMutationInput, TB_routine_exerciseUncheckedUpdateManyWithoutTB_routinesInput>
  }

  export type TB_routine_exerciseScalarWhereInput = {
    AND?: TB_routine_exerciseScalarWhereInput | TB_routine_exerciseScalarWhereInput[]
    OR?: TB_routine_exerciseScalarWhereInput[]
    NOT?: TB_routine_exerciseScalarWhereInput | TB_routine_exerciseScalarWhereInput[]
    id?: IntFilter<"TB_routine_exercise"> | number
    id_routine?: IntFilter<"TB_routine_exercise"> | number
    id_exercise?: IntFilter<"TB_routine_exercise"> | number
  }

  export type TB_reservationsUpsertWithWhereUniqueWithoutTB_routinesInput = {
    where: TB_reservationsWhereUniqueInput
    update: XOR<TB_reservationsUpdateWithoutTB_routinesInput, TB_reservationsUncheckedUpdateWithoutTB_routinesInput>
    create: XOR<TB_reservationsCreateWithoutTB_routinesInput, TB_reservationsUncheckedCreateWithoutTB_routinesInput>
  }

  export type TB_reservationsUpdateWithWhereUniqueWithoutTB_routinesInput = {
    where: TB_reservationsWhereUniqueInput
    data: XOR<TB_reservationsUpdateWithoutTB_routinesInput, TB_reservationsUncheckedUpdateWithoutTB_routinesInput>
  }

  export type TB_reservationsUpdateManyWithWhereWithoutTB_routinesInput = {
    where: TB_reservationsScalarWhereInput
    data: XOR<TB_reservationsUpdateManyMutationInput, TB_reservationsUncheckedUpdateManyWithoutTB_routinesInput>
  }

  export type TB_routine_exerciseCreateWithoutTB_exercisesInput = {
    TB_routines: TB_routinesCreateNestedOneWithoutTB_routine_exerciseInput
  }

  export type TB_routine_exerciseUncheckedCreateWithoutTB_exercisesInput = {
    id?: number
    id_routine: number
  }

  export type TB_routine_exerciseCreateOrConnectWithoutTB_exercisesInput = {
    where: TB_routine_exerciseWhereUniqueInput
    create: XOR<TB_routine_exerciseCreateWithoutTB_exercisesInput, TB_routine_exerciseUncheckedCreateWithoutTB_exercisesInput>
  }

  export type TB_routine_exerciseCreateManyTB_exercisesInputEnvelope = {
    data: TB_routine_exerciseCreateManyTB_exercisesInput | TB_routine_exerciseCreateManyTB_exercisesInput[]
    skipDuplicates?: boolean
  }

  export type TB_routine_exerciseUpsertWithWhereUniqueWithoutTB_exercisesInput = {
    where: TB_routine_exerciseWhereUniqueInput
    update: XOR<TB_routine_exerciseUpdateWithoutTB_exercisesInput, TB_routine_exerciseUncheckedUpdateWithoutTB_exercisesInput>
    create: XOR<TB_routine_exerciseCreateWithoutTB_exercisesInput, TB_routine_exerciseUncheckedCreateWithoutTB_exercisesInput>
  }

  export type TB_routine_exerciseUpdateWithWhereUniqueWithoutTB_exercisesInput = {
    where: TB_routine_exerciseWhereUniqueInput
    data: XOR<TB_routine_exerciseUpdateWithoutTB_exercisesInput, TB_routine_exerciseUncheckedUpdateWithoutTB_exercisesInput>
  }

  export type TB_routine_exerciseUpdateManyWithWhereWithoutTB_exercisesInput = {
    where: TB_routine_exerciseScalarWhereInput
    data: XOR<TB_routine_exerciseUpdateManyMutationInput, TB_routine_exerciseUncheckedUpdateManyWithoutTB_exercisesInput>
  }

  export type TB_routinesCreateWithoutTB_routine_exerciseInput = {
    name: string
    description: string
    estimatedDuration: number
    capacity?: number
    TB_reservations?: TB_reservationsCreateNestedManyWithoutTB_routinesInput
  }

  export type TB_routinesUncheckedCreateWithoutTB_routine_exerciseInput = {
    id?: number
    name: string
    description: string
    estimatedDuration: number
    capacity?: number
    TB_reservations?: TB_reservationsUncheckedCreateNestedManyWithoutTB_routinesInput
  }

  export type TB_routinesCreateOrConnectWithoutTB_routine_exerciseInput = {
    where: TB_routinesWhereUniqueInput
    create: XOR<TB_routinesCreateWithoutTB_routine_exerciseInput, TB_routinesUncheckedCreateWithoutTB_routine_exerciseInput>
  }

  export type TB_exercisesCreateWithoutTB_routine_exerciseInput = {
    name: string
    description: string
    muscle_group: string
  }

  export type TB_exercisesUncheckedCreateWithoutTB_routine_exerciseInput = {
    id?: number
    name: string
    description: string
    muscle_group: string
  }

  export type TB_exercisesCreateOrConnectWithoutTB_routine_exerciseInput = {
    where: TB_exercisesWhereUniqueInput
    create: XOR<TB_exercisesCreateWithoutTB_routine_exerciseInput, TB_exercisesUncheckedCreateWithoutTB_routine_exerciseInput>
  }

  export type TB_routinesUpsertWithoutTB_routine_exerciseInput = {
    update: XOR<TB_routinesUpdateWithoutTB_routine_exerciseInput, TB_routinesUncheckedUpdateWithoutTB_routine_exerciseInput>
    create: XOR<TB_routinesCreateWithoutTB_routine_exerciseInput, TB_routinesUncheckedCreateWithoutTB_routine_exerciseInput>
    where?: TB_routinesWhereInput
  }

  export type TB_routinesUpdateToOneWithWhereWithoutTB_routine_exerciseInput = {
    where?: TB_routinesWhereInput
    data: XOR<TB_routinesUpdateWithoutTB_routine_exerciseInput, TB_routinesUncheckedUpdateWithoutTB_routine_exerciseInput>
  }

  export type TB_routinesUpdateWithoutTB_routine_exerciseInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    TB_reservations?: TB_reservationsUpdateManyWithoutTB_routinesNestedInput
  }

  export type TB_routinesUncheckedUpdateWithoutTB_routine_exerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    TB_reservations?: TB_reservationsUncheckedUpdateManyWithoutTB_routinesNestedInput
  }

  export type TB_exercisesUpsertWithoutTB_routine_exerciseInput = {
    update: XOR<TB_exercisesUpdateWithoutTB_routine_exerciseInput, TB_exercisesUncheckedUpdateWithoutTB_routine_exerciseInput>
    create: XOR<TB_exercisesCreateWithoutTB_routine_exerciseInput, TB_exercisesUncheckedCreateWithoutTB_routine_exerciseInput>
    where?: TB_exercisesWhereInput
  }

  export type TB_exercisesUpdateToOneWithWhereWithoutTB_routine_exerciseInput = {
    where?: TB_exercisesWhereInput
    data: XOR<TB_exercisesUpdateWithoutTB_routine_exerciseInput, TB_exercisesUncheckedUpdateWithoutTB_routine_exerciseInput>
  }

  export type TB_exercisesUpdateWithoutTB_routine_exerciseInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    muscle_group?: StringFieldUpdateOperationsInput | string
  }

  export type TB_exercisesUncheckedUpdateWithoutTB_routine_exerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    muscle_group?: StringFieldUpdateOperationsInput | string
  }

  export type TB_client_membershipCreateWithoutTB_reservationsInput = {
    start_date: Date | string
    end_date: Date | string
    TB_user_role: TB_user_roleCreateNestedOneWithoutTB_client_membershipInput
    TB_memberships: TB_membershipsCreateNestedOneWithoutTB_client_membershipInput
  }

  export type TB_client_membershipUncheckedCreateWithoutTB_reservationsInput = {
    id?: number
    id_user_role: number
    id_membership: number
    start_date: Date | string
    end_date: Date | string
  }

  export type TB_client_membershipCreateOrConnectWithoutTB_reservationsInput = {
    where: TB_client_membershipWhereUniqueInput
    create: XOR<TB_client_membershipCreateWithoutTB_reservationsInput, TB_client_membershipUncheckedCreateWithoutTB_reservationsInput>
  }

  export type TB_routinesCreateWithoutTB_reservationsInput = {
    name: string
    description: string
    estimatedDuration: number
    capacity?: number
    TB_routine_exercise?: TB_routine_exerciseCreateNestedManyWithoutTB_routinesInput
  }

  export type TB_routinesUncheckedCreateWithoutTB_reservationsInput = {
    id?: number
    name: string
    description: string
    estimatedDuration: number
    capacity?: number
    TB_routine_exercise?: TB_routine_exerciseUncheckedCreateNestedManyWithoutTB_routinesInput
  }

  export type TB_routinesCreateOrConnectWithoutTB_reservationsInput = {
    where: TB_routinesWhereUniqueInput
    create: XOR<TB_routinesCreateWithoutTB_reservationsInput, TB_routinesUncheckedCreateWithoutTB_reservationsInput>
  }

  export type TB_client_membershipUpsertWithoutTB_reservationsInput = {
    update: XOR<TB_client_membershipUpdateWithoutTB_reservationsInput, TB_client_membershipUncheckedUpdateWithoutTB_reservationsInput>
    create: XOR<TB_client_membershipCreateWithoutTB_reservationsInput, TB_client_membershipUncheckedCreateWithoutTB_reservationsInput>
    where?: TB_client_membershipWhereInput
  }

  export type TB_client_membershipUpdateToOneWithWhereWithoutTB_reservationsInput = {
    where?: TB_client_membershipWhereInput
    data: XOR<TB_client_membershipUpdateWithoutTB_reservationsInput, TB_client_membershipUncheckedUpdateWithoutTB_reservationsInput>
  }

  export type TB_client_membershipUpdateWithoutTB_reservationsInput = {
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    TB_user_role?: TB_user_roleUpdateOneRequiredWithoutTB_client_membershipNestedInput
    TB_memberships?: TB_membershipsUpdateOneRequiredWithoutTB_client_membershipNestedInput
  }

  export type TB_client_membershipUncheckedUpdateWithoutTB_reservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user_role?: IntFieldUpdateOperationsInput | number
    id_membership?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TB_routinesUpsertWithoutTB_reservationsInput = {
    update: XOR<TB_routinesUpdateWithoutTB_reservationsInput, TB_routinesUncheckedUpdateWithoutTB_reservationsInput>
    create: XOR<TB_routinesCreateWithoutTB_reservationsInput, TB_routinesUncheckedCreateWithoutTB_reservationsInput>
    where?: TB_routinesWhereInput
  }

  export type TB_routinesUpdateToOneWithWhereWithoutTB_reservationsInput = {
    where?: TB_routinesWhereInput
    data: XOR<TB_routinesUpdateWithoutTB_reservationsInput, TB_routinesUncheckedUpdateWithoutTB_reservationsInput>
  }

  export type TB_routinesUpdateWithoutTB_reservationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    TB_routine_exercise?: TB_routine_exerciseUpdateManyWithoutTB_routinesNestedInput
  }

  export type TB_routinesUncheckedUpdateWithoutTB_reservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    TB_routine_exercise?: TB_routine_exerciseUncheckedUpdateManyWithoutTB_routinesNestedInput
  }

  export type TB_user_roleCreateManyTB_usersInput = {
    id_user_role?: number
    id_role: number
  }

  export type TB_restrictionCreateManyTB_usersInput = {
    id_restriction?: number
    description: string
  }

  export type TB_user_roleUpdateWithoutTB_usersInput = {
    TB_role?: TB_roleUpdateOneRequiredWithoutTB_user_roleNestedInput
    TB_employees?: TB_employeesUpdateManyWithoutTB_user_roleNestedInput
    TB_client_membership?: TB_client_membershipUpdateManyWithoutTB_user_roleNestedInput
  }

  export type TB_user_roleUncheckedUpdateWithoutTB_usersInput = {
    id_user_role?: IntFieldUpdateOperationsInput | number
    id_role?: IntFieldUpdateOperationsInput | number
    TB_employees?: TB_employeesUncheckedUpdateManyWithoutTB_user_roleNestedInput
    TB_client_membership?: TB_client_membershipUncheckedUpdateManyWithoutTB_user_roleNestedInput
  }

  export type TB_user_roleUncheckedUpdateManyWithoutTB_usersInput = {
    id_user_role?: IntFieldUpdateOperationsInput | number
    id_role?: IntFieldUpdateOperationsInput | number
  }

  export type TB_restrictionUpdateWithoutTB_usersInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TB_restrictionUncheckedUpdateWithoutTB_usersInput = {
    id_restriction?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TB_restrictionUncheckedUpdateManyWithoutTB_usersInput = {
    id_restriction?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TB_user_roleCreateManyTB_roleInput = {
    id_user_role?: number
    id_user: number
  }

  export type TB_user_roleUpdateWithoutTB_roleInput = {
    TB_users?: TB_usersUpdateOneRequiredWithoutTB_user_roleNestedInput
    TB_employees?: TB_employeesUpdateManyWithoutTB_user_roleNestedInput
    TB_client_membership?: TB_client_membershipUpdateManyWithoutTB_user_roleNestedInput
  }

  export type TB_user_roleUncheckedUpdateWithoutTB_roleInput = {
    id_user_role?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    TB_employees?: TB_employeesUncheckedUpdateManyWithoutTB_user_roleNestedInput
    TB_client_membership?: TB_client_membershipUncheckedUpdateManyWithoutTB_user_roleNestedInput
  }

  export type TB_user_roleUncheckedUpdateManyWithoutTB_roleInput = {
    id_user_role?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type TB_employeesCreateManyTB_user_roleInput = {
    id?: number
    bio: string
    specialization: string
    date_entry: Date | string
  }

  export type TB_client_membershipCreateManyTB_user_roleInput = {
    id?: number
    id_membership: number
    start_date: Date | string
    end_date: Date | string
  }

  export type TB_employeesUpdateWithoutTB_user_roleInput = {
    bio?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    date_entry?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TB_employeesUncheckedUpdateWithoutTB_user_roleInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    date_entry?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TB_employeesUncheckedUpdateManyWithoutTB_user_roleInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    date_entry?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TB_client_membershipUpdateWithoutTB_user_roleInput = {
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    TB_memberships?: TB_membershipsUpdateOneRequiredWithoutTB_client_membershipNestedInput
    TB_reservations?: TB_reservationsUpdateManyWithoutTB_client_membershipNestedInput
  }

  export type TB_client_membershipUncheckedUpdateWithoutTB_user_roleInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_membership?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    TB_reservations?: TB_reservationsUncheckedUpdateManyWithoutTB_client_membershipNestedInput
  }

  export type TB_client_membershipUncheckedUpdateManyWithoutTB_user_roleInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_membership?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TB_client_membershipCreateManyTB_membershipsInput = {
    id?: number
    id_user_role: number
    start_date: Date | string
    end_date: Date | string
  }

  export type TB_client_membershipUpdateWithoutTB_membershipsInput = {
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    TB_user_role?: TB_user_roleUpdateOneRequiredWithoutTB_client_membershipNestedInput
    TB_reservations?: TB_reservationsUpdateManyWithoutTB_client_membershipNestedInput
  }

  export type TB_client_membershipUncheckedUpdateWithoutTB_membershipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user_role?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    TB_reservations?: TB_reservationsUncheckedUpdateManyWithoutTB_client_membershipNestedInput
  }

  export type TB_client_membershipUncheckedUpdateManyWithoutTB_membershipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user_role?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TB_reservationsCreateManyTB_client_membershipInput = {
    id?: number
    id_routine: number
    start_time: Date | string
    status: $Enums.reservationStatus
  }

  export type TB_reservationsUpdateWithoutTB_client_membershipInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumreservationStatusFieldUpdateOperationsInput | $Enums.reservationStatus
    TB_routines?: TB_routinesUpdateOneRequiredWithoutTB_reservationsNestedInput
  }

  export type TB_reservationsUncheckedUpdateWithoutTB_client_membershipInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_routine?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumreservationStatusFieldUpdateOperationsInput | $Enums.reservationStatus
  }

  export type TB_reservationsUncheckedUpdateManyWithoutTB_client_membershipInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_routine?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumreservationStatusFieldUpdateOperationsInput | $Enums.reservationStatus
  }

  export type TB_routine_exerciseCreateManyTB_routinesInput = {
    id?: number
    id_exercise: number
  }

  export type TB_reservationsCreateManyTB_routinesInput = {
    id?: number
    id_client_membership: number
    start_time: Date | string
    status: $Enums.reservationStatus
  }

  export type TB_routine_exerciseUpdateWithoutTB_routinesInput = {
    TB_exercises?: TB_exercisesUpdateOneRequiredWithoutTB_routine_exerciseNestedInput
  }

  export type TB_routine_exerciseUncheckedUpdateWithoutTB_routinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_exercise?: IntFieldUpdateOperationsInput | number
  }

  export type TB_routine_exerciseUncheckedUpdateManyWithoutTB_routinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_exercise?: IntFieldUpdateOperationsInput | number
  }

  export type TB_reservationsUpdateWithoutTB_routinesInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumreservationStatusFieldUpdateOperationsInput | $Enums.reservationStatus
    TB_client_membership?: TB_client_membershipUpdateOneRequiredWithoutTB_reservationsNestedInput
  }

  export type TB_reservationsUncheckedUpdateWithoutTB_routinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_client_membership?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumreservationStatusFieldUpdateOperationsInput | $Enums.reservationStatus
  }

  export type TB_reservationsUncheckedUpdateManyWithoutTB_routinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_client_membership?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumreservationStatusFieldUpdateOperationsInput | $Enums.reservationStatus
  }

  export type TB_routine_exerciseCreateManyTB_exercisesInput = {
    id?: number
    id_routine: number
  }

  export type TB_routine_exerciseUpdateWithoutTB_exercisesInput = {
    TB_routines?: TB_routinesUpdateOneRequiredWithoutTB_routine_exerciseNestedInput
  }

  export type TB_routine_exerciseUncheckedUpdateWithoutTB_exercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_routine?: IntFieldUpdateOperationsInput | number
  }

  export type TB_routine_exerciseUncheckedUpdateManyWithoutTB_exercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_routine?: IntFieldUpdateOperationsInput | number
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
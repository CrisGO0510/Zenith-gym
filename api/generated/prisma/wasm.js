
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.7.0
 * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
 */
Prisma.prismaVersion = {
  client: "6.7.0",
  engine: "3cff47a7f5d65c3ea74883f1d736e41d68ce91ed"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TB_usersScalarFieldEnum = {
  id_user: 'id_user',
  name: 'name',
  lastname: 'lastname',
  email: 'email',
  password: 'password',
  phone_number: 'phone_number',
  birthday: 'birthday'
};

exports.Prisma.TB_roleScalarFieldEnum = {
  id_role: 'id_role',
  name: 'name',
  description: 'description'
};

exports.Prisma.TB_user_roleScalarFieldEnum = {
  id_user_role: 'id_user_role',
  id_user: 'id_user',
  id_role: 'id_role'
};

exports.Prisma.TB_restrictionScalarFieldEnum = {
  id_restriction: 'id_restriction',
  id_user: 'id_user',
  description: 'description'
};

exports.Prisma.TB_employeesScalarFieldEnum = {
  id: 'id',
  id_user_role: 'id_user_role',
  bio: 'bio',
  specialization: 'specialization',
  date_entry: 'date_entry'
};

exports.Prisma.TB_membershipsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  price: 'price',
  paymentFrequency: 'paymentFrequency'
};

exports.Prisma.TB_client_membershipScalarFieldEnum = {
  id: 'id',
  id_user_role: 'id_user_role',
  id_membership: 'id_membership',
  start_date: 'start_date',
  end_date: 'end_date'
};

exports.Prisma.TB_routinesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  estimatedDuration: 'estimatedDuration',
  capacity: 'capacity'
};

exports.Prisma.TB_exercisesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  muscle_group: 'muscle_group'
};

exports.Prisma.TB_routine_exerciseScalarFieldEnum = {
  id: 'id',
  id_routine: 'id_routine',
  id_exercise: 'id_exercise'
};

exports.Prisma.TB_reservationsScalarFieldEnum = {
  id: 'id',
  id_client_membership: 'id_client_membership',
  id_routine: 'id_routine',
  start_time: 'start_time',
  status: 'status'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.frequency = exports.$Enums.frequency = {
  diario: 'diario',
  semanal: 'semanal',
  quincenal: 'quincenal',
  mensual: 'mensual',
  semestral: 'semestral',
  anual: 'anual'
};

exports.reservationStatus = exports.$Enums.reservationStatus = {
  pendiente: 'pendiente',
  completada: 'completada',
  cancelada: 'cancelada',
  ausente: 'ausente'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

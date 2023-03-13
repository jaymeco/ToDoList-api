export const errors = {
  AUTH_CREDENTIALS: 'auth:invalid.credentials',
  TOKEN_NOT_FOUND: 'auth:token.notFound',
  INVALID_TOKEN: 'auth:invalid.token',
  EXPIRED_TOKEN: 'auth:expired.token',
  INTERNAL_ERROR: 'server:unexpected.fail',
}


export const validationErrors = {
  type: 'invalid.type',
  notEmpty: 'cannot.be.empty',
  required: 'required.field',
  date: 'invalid.date',
  email: 'invalid.email',
  minLength: 'lessThen.min.length',
};

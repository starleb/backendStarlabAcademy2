import responseHelper from '../responseHelper/responseHelper.js';
const validate = (schema, req, res) => {
  const result = schema.validate(req, {
    abortEarly: false,
    allowUnknown: false,
  });
  if (result.error) {
    return responseHelper.sendErrorResponse(res, result.error.message);
  } else {
    return result;
  }
};

export default validate;

export enum ErrorCodes {
  BAD_REQUEST = 'PENTAGON-400',
  UNAUTHORIZED = 'PENTAGON-401',
  FORBIDDEN = 'PENTAGON-403',
  NOT_FOUND = 'PENTAGON-404',
  METHOD_NOT_ALLOWED = 'PENTAGON-405',
  INTERNAL_SERVER_ERROR = 'PENTAGON-500',
  NOT_IMPLEMENTED = 'PENTAGON-501',
  BAD_GATEWAY = 'PENTAGON-502',
  SERVICE_UNAVAILABLE = 'PENTAGON-503',
  GATEWAY_TIMEOUT = 'PENTAGON-504',
  NETWORK_CONNECT_TIMEOUT_ERROR = 'PENTAGON-599',
}

export const ErrorMessages = {
  [ErrorCodes.BAD_REQUEST]: 'Bad request!',
  [ErrorCodes.UNAUTHORIZED]: 'Unauthorized',
  [ErrorCodes.FORBIDDEN]: 'Forbidden',
  [ErrorCodes.NOT_FOUND]: 'Resource not found',
  [ErrorCodes.METHOD_NOT_ALLOWED]: 'Method not allowed',
  [ErrorCodes.INTERNAL_SERVER_ERROR]: 'Internal server error',
  [ErrorCodes.NOT_IMPLEMENTED]: 'Not implemented',
  [ErrorCodes.BAD_GATEWAY]: 'Bad gateway',
  [ErrorCodes.SERVICE_UNAVAILABLE]: 'Service unavailable',
  [ErrorCodes.GATEWAY_TIMEOUT]: 'Gateway timeout',
  [ErrorCodes.NETWORK_CONNECT_TIMEOUT_ERROR]: 'Network connect timeout error',
};

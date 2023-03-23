/**Information Responses */
export const CONTINUE = '100';
export const SWITCH_PROTOCOL = '101';
export const PROCESSING = '102';
export const EARLY_HINTS = '103';

/**Successful Responses */
export const success = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202
}


/**Redirect Responses */
export const redirect = {
    MULTIPLE_CHOICE: 300,
    MOVED_PERMANENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    TEMPORARY_REDIRECT: 307,
    PERMANENT_REDIRECT: 308
}

/**Client Error Responses */
export const clientError = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    REQUEST_TIMEOUT: 408,
    IM_A_TEAPOT: 418,
    TOO_MANY_REQUESTS: 429
}


/**Server Error Responses */
export const INTERNAL_SERVER_ERROR = '500';
export const NOT_IMPLEMETED = '501';
export const BAD_GATEWAY = '502';
export const SERVICE_UNAVAILABLE = '503';
export const GATEWAY_TIMEOUT = '504';
export const HTTP_VERSION_NOT_SUPPORTED = '505';
export const VARIANT_ALSO_NEGOTIATES = '506';
export const INSUFFICIENT_STORAGE = '507';
export const LOOP_DETECTED = '508';
export const NOT_EXTENDED = '510';
export const NETWORK_AUTHENTICATION_REQUIRED = '511';

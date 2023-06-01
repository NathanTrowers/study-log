/**Information Responses */
export const CONTINUE = '100';
export const SWITCH_PROTOCOL = '101';
export const PROCESSING = '102';
export const EARLY_HINTS = '103';

/**Successful Responses */
export const success = {
    OK:         200,
    CREATED:    201,
    ACCEPTED:   202
}


/**Redirect Responses */
export const redirect = {
    MULTIPLE_CHOICE:    300,
    MOVED_PERMANENTLY:  301,
    FOUND:              302,
    SEE_OTHER:          303,
    NOT_MODIFIED:       304,
    TEMPORARY_REDIRECT: 307,
    PERMANENT_REDIRECT: 308
}

/**Client Error Responses */
export const clientError = {
    BAD_REQUEST:        400,
    UNAUTHORIZED:       401,
    FORBIDDEN:          403,
    NOT_FOUND:          404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE:     406,
    REQUEST_TIMEOUT:    408,
    IM_A_TEAPOT:        418,
    TOO_MANY_REQUESTS:  429
}


/**Server Error Responses */
export const serverError = {
    INTERNAL_SERVER_ERROR:  500,
    NOT_IMPLEMETED:         501,
    BAD_GATEWAY:            502,
    GATEWAY_TIMEOUT:        504,
}

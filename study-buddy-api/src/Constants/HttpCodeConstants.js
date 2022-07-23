/**Information Responses */
export const CONTINUE = '100';
export const SWITCH_PROTOCOL = '101';
export const PROCESSING = '102';
export const EARLY_HINTS = '103';

/**Successful Responses */
export const SUCCESS = {
    OK: '200',
    CREATED: '201',
    ACCEPTED: '202'
}


/**Redirection Responses */
export const MULTIPLE_CHOICE = '300';
export const MOVED_PERMANENTLY = '301';
export const FOUND = '302';
export const SEE_OTHER = '303';
export const NOT_MODIFIED = '304';
export const TEMPORARY_REDIRECT = '307';
export const PERMANENT_REDIRECT = '308';

/**Client Error Responses */
export const BAD_REQUEST = '400';
export const UNAUTHORIZED = '401';
export const FORBIDDEN = '403';
export const NOT_FOUND = '404';
export const METHOD_NOT_ALLOWED = '405';
export const NOT_ACCEPTABLE = '406';
export const PROXY_AUTHENTICATION_REQUIRED = '407';
export const REQUEST_TIMEOUT = '408';
export const CONFLICT = '409';
export const GONE = '410';
export const LENGTH_REQUIRED = '411';
export const PRECONDITION_FAILED = '412';
export const PAYLOAD_TOO_LARGE = '413';
export const URI_TOO_LONG = '414';
export const UNSUPPORTED_MEDIA_TYPE = '415';
export const RANGE_NOT_SATISFIABLE = '416';
export const EXPECTATION_FAILED = '417';
export const IM_A_TEAPOT = '418';
export const MISDIRECTED_REQUEST = '421';
export const UNPROCESSABLE_ENTITY = '422';
export const LOCKED = '423';
export const FAILED_DEPENDENCY = '423';
export const UPGRADE_REQUIRED = '426';
export const PREC0NDITION_REQUIRED = '428';
export const TOO_MANY_REQUESTS = '429';
export const REQUEST_HEADER_FIELDS_TOO_LARGE = '431';
export const UNAVAILABLE_FOR_LEGAL_REASONS = '431';

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

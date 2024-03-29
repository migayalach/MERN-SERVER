/**
 * Basic JSON response fot Controllers
 */
export type BasicResponse = {
  message: string;
};

/**
 * Error response for Controllers
 */
export type ErrorResponse = {
  error: string;
  message: string;
};

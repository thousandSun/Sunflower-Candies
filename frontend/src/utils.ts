import { ApiError } from "./types/ApiError";

export const getError = (error: ApiError) => {
    return error.response && error.response.data.message 
        ? error.response.data.message
        : error.message
}

export const isApiError = (error: Error | ApiError): error is ApiError => {
    return (
      error &&
      typeof error === 'object' &&
      'message' in error &&
      'response' in error &&
      'data' in error.response &&
      'message' in error.response.data
    );
  }
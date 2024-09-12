// src/utils/response.util.ts

export type ResponseFormat<T> = {
    statusCode: number;
    message: string;
    body: T;
  };
  
  export function createResponse<T>(statusCode: number, message: string, body: T): ResponseFormat<T> {
    return {
      statusCode,
      message,
      body,
    };
  }
  
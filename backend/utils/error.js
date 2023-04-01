//Used for error handling in the website
export const createError =  (status, message) => {
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
}
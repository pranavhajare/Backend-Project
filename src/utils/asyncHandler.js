// using try-Catch
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export {asyncHandler}

// using promise
// const asyncHandler = (requestHandler) => {
//   return (req, res, next) => {
//     Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
//   };
// };

// export { asyncHandler };

// const asyncHandler = (requestHandler) => (req, res, next) =>
//   Promise.resolve(requestHandler(req, res, next))
//     .catch((err) => {
//       next(err);
//     })
//     .catch((unhandledRejectionErr) => {
//       // Handle unhandled rejection here
//       console.error('Unhandled Rejection Error:', unhandledRejectionErr);
//     });

// export { asyncHandler };


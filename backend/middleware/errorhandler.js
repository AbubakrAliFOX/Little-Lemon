const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode? res.statusCode : 500;

    res.status(statusCode);

    req.json({
        message: err.message,
        stack: err.stack
    })
}

export default errorHandler;
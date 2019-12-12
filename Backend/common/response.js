class Response{
    // Returns Success to user 
    static Success(res, message, data) {
        res.statusCode = 200;
        const response = {
            "code" : (data || typeof(message) === "object") ? undefined : 200,
            "Message" : (data && typeof(message) === "object") ? undefined : ((message) ? (typeof(message) === "object") ? undefined : message : "Success"),
            "data" : (typeof(message) === "object") ? message : data
        }
        return res.send(response);
    };

    // Returns Bad Request to user 
    static BadRequest(res, message) {
        res.statusCode = 400;
        const response = {
            "code" : 400,
            "errorMessage" : (!message)?"Bad Request":message
        }
        return res.send(response);
    };

    // Returns Not found to user 
    static NotFound(res, message) {
        res.statusCode = 404
        const response = {
            "code" : 404,
            "errorMessage" : message
        }
        return res.send(response);
    };

    // Returns Access Denied to user 
    static AccessDenied(res, message) {
        res.statusCode = 401
        const response = {
            "code" : 401,
            "errorMessage" : message
        }
        return res.send(response);
    };

    // Returns Internal server error to user 
    static InternalServerError(res, errorMessage, message) {
        res.statusCode = 500
        const response = {
            "code" : 500,
            "errorMessage" : errorMessage,
            "message" : message
        }
        return res.send(response);
    };
}

module.exports = Response;

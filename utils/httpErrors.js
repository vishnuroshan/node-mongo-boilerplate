module.exports = {
    OK: {statusCode: 200, message: 'OK'},
    BAD_REQUEST: { statusCode: 400, message: 'BAD_REQUEST' },
    UNAUTHORIZED: { statusCode: 402, message: 'UNAUTHORIZED' },
    INTERNAL_SERVER_ERROR: { statusCode: 500, message: 'INTERNAL_SERVER_ERROR' },
    CREATED:{statusCode: 201, message: 'CREATED'},
    Accepted:{statusCode: 202, message: 'ACCEPTED'},
    RESET_CONTENT:{statusCode: 205 , message: 'CONTENT_RESET'}
};
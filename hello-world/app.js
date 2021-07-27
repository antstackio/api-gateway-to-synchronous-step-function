
let response;
exports.lambdaHandler = async (event, context) => {
    try {
        response = { foo : 2 }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};

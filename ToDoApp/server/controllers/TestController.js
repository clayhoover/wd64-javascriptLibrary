// Controller with one GET request that responds with a message that says "Hello from the test controller"

const { Router, response } = require('express');

const testControllerRouter = Router();

testControllerRouter.get("/", () => {
    let message = "Hello from the test controller!";
    response.send(message);
});

module.exports = testControllerRouter;
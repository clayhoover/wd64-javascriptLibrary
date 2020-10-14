// const { request, response } = require("express");

const Express = require("express");

const expressApplicationControllers = require("./controllers/index")

const expressApplicationObject = new Express();

expressApplicationObject.use('/test', ApplicationControllers.test);

expressApplicationObject.get('/', (request, response) => {
    console.log('[server]: Root GET request recieved');
    console.log('TYPE:', request.method);
    console.log('URL:', request.url);
    console.log("[server}: Resoponse being dispatched -> ");
    response.send("Root Route Hit, hello from the todo server");
});

//! Challenge: Recieve a POST request at the route "/challenge"
// Takes 2 values inside of the body:
// Name -> A string for a name
// Age -> A number for the age
// Respond with this message:
// If the user is 18 and older, the message will be:
// "<name>, you are an adult!"
// Otherwise the message will be :
// "<name>, you will not be an adult soon!"

/*
expressApplicationObject.use(Express.json())

expressApplicationObject.post('/challenge', (request, response) => {
    let name = request.body.name;
    let age = request.body.name;

    console.log(name, age)
    response.send(`${name}, you ${age >= 18 ? 'are an adult!' : 'will be an adult soon!'}`)
});
*/

expressApplicationObject.use(Express.json());

expressApplicationObject.post("/challenge", (request, response) => {
    let data = request.body;
    let message = 
    data.age >= 18 
        ? `${data.name}, you are an adult!` 
        : `${data.name}, you will be an adult eventually`;

    response.send(message);
});


expressApplicationObject.listen(9001, () => {
    console.log("[server]: App is listening on port 9001");
});
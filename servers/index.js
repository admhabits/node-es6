import Configuration from './config';

const App = Configuration.dynamicServer.setApp();
const Api = Configuration.dynamicRouter.setApi();

Api.get('/', (req, res) => {
    res.send({ message: "Hello World!" });
});

App.use('/api', Api);
App.listen(3000, () => console.log( `Development Packages is Running!`));
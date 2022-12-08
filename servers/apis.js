import Configuration from "./config";

export const Api = Configuration.dynamicRouter.setApi();

Api.get('/', (req, res) => {
    res.send({ message: "Hello World!" });
});
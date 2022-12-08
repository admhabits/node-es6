import express from "express";

export default class Configuration {
    
    static dynamicServer = [];
    static dynamicRouter = [];

    static setServerFunc = (method = "setApp") => {
        this.dynamicServer[method] = () => express();
    }

    static setRouterFunc = (method = "setApi") => {
        this.dynamicRouter[method] = () => express.Router();
    }
}
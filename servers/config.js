import express from "express";

export default class Configuration {
    constructor({ type }){
        this.type = type;
    }

    static dynamicServer = [];
    static dynamicRouter = [];

    static setServerFunc = (method = "setApp") => {
        this.dynamicServer[method] = () => express();
    }

    static setRouterFunc = (method = "setApi") => {
        this.dynamicRouter[method] = () => express.Router();
    }
}

Configuration.setServerFunc();
Configuration.setRouterFunc();
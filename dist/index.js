"use strict";var _config=_interopRequireDefault(require("./config"));var _http=_interopRequireDefault(require("http"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const App=_config.default.dynamicServer.setApp();const Api=_config.default.dynamicRouter.setApi();const Server=_http.default.createServer(App);Api.get("/",(req,res)=>{res.send({message:"Hello World!"})});App.use("/api",Api);Server.listen(3000,()=>console.log(`Development Packages is Running!`));
import Configuration from './config';
import http from 'http';
import { Api } from './apis';

Configuration.setServerFunc();
Configuration.setRouterFunc();

const App = Configuration.dynamicServer.setApp();

App.use('/api/v1', Api);

const Server = http.createServer(App);

Server.listen(3000, () => console.log( `Development Packages is Running!`));
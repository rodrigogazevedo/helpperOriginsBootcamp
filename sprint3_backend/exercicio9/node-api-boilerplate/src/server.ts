// Library
import { App, Logger } from './library';

// Config
import { dbConfig } from './config/database';
import { swaggerConfig } from './config/swagger';

// Endpoints
import { UserController, ClientController } from './modules/users/v1';

const app: App = new App({
    port: Number(process.env.PORT || 8080),
    controllers: [UserController, ClientController],
    middlewares: [Logger.middleware],
    logger: new Logger(),
    swaggerOptions: process.env.NODE_ENV === 'development' ? swaggerConfig : undefined,
    dbConfig
});

app.start();

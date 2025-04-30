require('../load-env.cjs');
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfig } from './core/swagger/swagger.config';
import { EnvService } from './core/env/service/env.service';

const EnvVars = new EnvService().getVars();
const logger = new Logger('main');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix(EnvVars.API_PREFIX);
  SwaggerConfig.setupSwagger(app);

  await app
    .listen(EnvVars.API_PORT, () => {
      logger.log(`Server running in port ${EnvVars.API_PORT}`);
    })
    .catch((error) => {
      logger.error(`Server error with message ${error}`);
    });
}
bootstrap();

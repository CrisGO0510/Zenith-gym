import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfig {
  public static setupSwagger(app: INestApplication): void {
    const config = new DocumentBuilder()
      .setTitle('Zenith Gym API')
      .setDescription('API documentation for Zenith Gym')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);
  }
}

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // 开启白名单
      whitelist: true,
      // 非白名单属性开始返回error
      forbidNonWhitelisted: true,
      // 转换 管道将输入数据转换为所需的数据输出
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();

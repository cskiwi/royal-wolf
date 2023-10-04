import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environment } from '../environments/environment';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

const productionModules = environment.production
  ? [
      ServeStaticModule.forRoot({
        rootPath: join(__dirname, '..', 'client'),
        exclude: ['/api*'],
      }),
    ]
  : [];

@Module({
  imports: [...productionModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

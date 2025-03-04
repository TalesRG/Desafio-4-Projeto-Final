import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProprietarioModule } from './module/ProprietarioModule';
import { ProprietarioEntity } from './entity/ProprietarioEntity';

@Module({
  imports: [
    ProprietarioModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'detran',
      entities: [ProprietarioEntity],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

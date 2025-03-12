import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalEntity } from '../entity/LocalEntity';
import { LocalController } from '../controller/LocalController';
import { LocalService } from '../service/LocalService';

@Module({
  imports: [TypeOrmModule.forFeature([LocalEntity])],
  controllers: [LocalController],
  providers: [LocalService],
})
export class LocalModule {}

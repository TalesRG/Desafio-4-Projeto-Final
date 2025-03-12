import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgenteEntity } from '../entity/AgenteEntity';
import { AgenteDeTransitoController } from '../controller/AgenteDeTransitoController';
import { AgenteDeTransitoService } from '../service/AgenteDeTransitoService';

@Module({
  imports: [TypeOrmModule.forFeature([AgenteEntity])],
  controllers: [AgenteDeTransitoController],
  providers: [AgenteDeTransitoService],
})
export class AgenteDeTransitoModule {}

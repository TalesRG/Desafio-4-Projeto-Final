import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VeiculoEntity } from '../entity/VeiculoEntity';
import { VeiculoController } from '../controller/VeiculoController';
import { VeiculoService } from '../service/VeiculoService';

@Module({
  imports: [TypeOrmModule.forFeature([VeiculoEntity])],
  controllers: [VeiculoController],
  providers: [VeiculoService],
})
export class VeiculoModule {}

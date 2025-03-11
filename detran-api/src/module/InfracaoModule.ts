import { TypeOrmModule } from '@nestjs/typeorm';
import { InfracaoEntity } from '../entity/InfracaoEntity';
import { InfracaoController } from '../controller/InfracaoController';
import { InfracaoService } from '../service/InfracaoService';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([InfracaoEntity])],
  controllers: [InfracaoController],
  providers: [InfracaoService],
})
export class InfracaoModule {}

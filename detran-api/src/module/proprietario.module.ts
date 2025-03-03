import { Module } from '@nestjs/common';
import { ProprietarioController } from '../controller/ProprietarioController';
import { ProprietarioService } from '../service/proprietario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProprietarioEntity } from '../entity/ProprietarioEntity';

@Module({
  imports: [TypeOrmModule.forFeature([ProprietarioEntity])],
  controllers: [ProprietarioController],
  providers: [ProprietarioService],
})
export class ProprietarioModule {}

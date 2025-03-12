import { Controller, Get } from '@nestjs/common';
import { LocalService } from '../service/LocalService';

@Controller('local')
export class LocalController {
  constructor(private readonly localService: LocalService) {}

  @Get('all')
  async listarTodosLocais(): Promise<any> {
    return this.localService.listarLocais();
  }
}

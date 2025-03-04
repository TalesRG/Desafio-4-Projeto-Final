import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../service/AuthService';
import { AuthDto } from '../dto/AuthDto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  async login(@Body() authDto: AuthDto): Promise<any> {
    return await this.authService.login(authDto);
  }
}

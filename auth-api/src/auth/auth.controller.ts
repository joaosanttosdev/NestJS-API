import { Sign } from 'crypto';
import { Body, Controller, Post } from '@nestjs/common';
import type { SignInDTO, SignUpDTO } from './dtos/auth.js';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: SignUpDTO) {
    await this.AuthService.signup(body);

    return body;
  }

  @Post('signin')
  async signin(@Body() body: SignInDTO) {
    console.log({ body });

    return body;
  }
}

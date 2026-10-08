import { Body, Controller, Post } from '@nestjs/common';
import type { SignInDTO, SignUpDTO } from './dtos/auth.js';

@Controller('auth')
export class AuthController {
  @Post('signup')
  async signup(@Body() body: SignUpDTO) {
    console.log({ Body });

    return body;
  }

  @Post('signin')
  async signin(@Body() body: SignInDTO) {
    console.log({ body });

    return body;
  }
}

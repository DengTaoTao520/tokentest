import { Controller, Request, Post, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    // return this.authService.login(req.user);
    // console.log(req.ip, req.host, req.method);
    // console.log(req.user);
    return req.user;
  }
}

import { HttpException, HttpStatus } from '@nestjs/common';

export class EmailNotFoundException extends HttpException {
  constructor(email: string) {
    super(
      {
        statusCode: HttpStatus.NOT_FOUND,
        message: `O email ${email} não está cadastrado.`,
        error: 'EmailNotFound',
      },
      HttpStatus.NOT_FOUND,
    );
  }
}

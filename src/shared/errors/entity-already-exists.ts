import { HttpException, HttpStatus } from '@nestjs/common';

export class EntityAlreadyExistsException extends HttpException {
  constructor(entity: string) {
    super(`${entity} already exists`, HttpStatus.BAD_REQUEST);
  }
}

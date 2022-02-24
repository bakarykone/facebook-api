import { DefaultValuePipe, Query } from '@nestjs/common'

export const Cursor = <T>(defaultValue: T, ...pipes) =>
  Query('cursor', new DefaultValuePipe(defaultValue), ...pipes);

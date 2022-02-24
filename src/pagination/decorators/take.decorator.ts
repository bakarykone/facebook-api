import { DefaultValuePipe, ParseIntPipe, Query } from '@nestjs/common';

export const Take = (defaultValue: number = 1) =>
    Query('take', new DefaultValuePipe(defaultValue), ParseIntPipe);

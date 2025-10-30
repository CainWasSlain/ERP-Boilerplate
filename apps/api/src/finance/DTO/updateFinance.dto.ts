import { PartialType } from '@nestjs/mapped-types';
import { CreateFinanceDto } from './createFianance.dto';

export class UpdateFinanceDto extends PartialType(CreateFinanceDto) {}

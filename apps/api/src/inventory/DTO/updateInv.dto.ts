import { PartialType } from '@nestjs/mapped-types';
import { CreateInvDto } from './createInv.dto';

export class UpdateInvDto extends PartialType(CreateInvDto) {}

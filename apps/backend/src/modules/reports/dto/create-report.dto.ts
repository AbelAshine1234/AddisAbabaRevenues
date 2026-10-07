import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsBoolean, IsOptional, IsArray } from 'class-validator';

export class CreateReportDto {
  @ApiProperty({
    description: 'Category of violation',
    example: 'Employee Misconduct',
  })
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiProperty({
    description: 'Detailed description of the incident',
    example: 'Officer demanded cash fee for clearance voucher issuance',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiPropertyOptional({
    description: 'Sub-city location',
    default: 'Bole Sub-City, Addis Ababa, Ethiopia',
  })
  @IsString()
  @IsOptional()
  subcity?: string;

  @ApiPropertyOptional({
    description: 'Whether to submit anonymously',
    default: true,
  })
  @IsBoolean()
  @IsOptional()
  isAnonymous?: boolean;

  @ApiPropertyOptional({
    description: 'Attachment URLs or filenames',
    type: [String],
  })
  @IsArray()
  @IsOptional()
  attachments?: string[];
}

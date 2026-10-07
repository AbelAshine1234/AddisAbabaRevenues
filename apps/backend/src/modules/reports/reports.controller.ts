import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dto/create-report.dto';

@ApiTags('Reports')
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('stats')
  @ApiOperation({ summary: 'Get AARB Bureau Impact Statistics' })
  getStats() {
    return this.reportsService.getStats();
  }

  @Get()
  @ApiOperation({ summary: 'Get recent public reports' })
  findAll(@Query('category') category?: string) {
    return this.reportsService.findAll(category);
  }

  @Get('track/:ref')
  @ApiOperation({ summary: 'Track status of a report by case reference number' })
  track(@Param('ref') ref: string) {
    return this.reportsService.findByReference(ref);
  }

  @Post()
  @ApiOperation({ summary: 'Submit a confidential incident or misconduct report' })
  create(@Body() dto: CreateReportDto) {
    return this.reportsService.create(dto);
  }
}

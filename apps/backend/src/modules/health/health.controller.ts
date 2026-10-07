import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  @Get()
  @ApiOperation({ summary: 'API Health check' })
  check() {
    return {
      status: 'ok',
      service: 'Addis Ababa City Administration Revenues Bureau API',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
    };
  }
}

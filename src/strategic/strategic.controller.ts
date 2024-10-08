import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { StrategicService } from './strategic.service';
import { CreateStrategicDto } from './dto/create-strategic.dto';
import { UpdateStrategicDto } from './dto/update-strategic.dto';

@Controller('strategic')
export class StrategicController {
  constructor(private readonly strategicService: StrategicService) {}

  @Post()
  create(@Body() createStrategicDto: CreateStrategicDto) {
    return this.strategicService.create(createStrategicDto);
  }
  @Get()
  async findAll(@Query() query: { name?: string; is_active?: string }) {
    const filters = {
      name: query.name || undefined,
      is_active: query.is_active === 'true' ? true : (query.is_active === 'false' ? false : undefined)
    };

    return this.strategicService.findAll(filters);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.strategicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStrategicDto: UpdateStrategicDto) {
    return this.strategicService.update(+id, updateStrategicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.strategicService.remove(+id);
  }
}

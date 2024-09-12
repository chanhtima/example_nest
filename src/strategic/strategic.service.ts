import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Strategic } from './entities/strategic.entity';
import { CreateStrategicDto } from './dto/create-strategic.dto';
import { UpdateStrategicDto } from './dto/update-strategic.dto';
import { createResponse } from 'src/utils/response.util';

@Injectable()
export class StrategicService {
  constructor(
    @InjectRepository(Strategic)
    private readonly strategicRepository: Repository<Strategic>,
  ) {}

  async create(createStrategicDto: CreateStrategicDto) {
    const strategic = this.strategicRepository.create(createStrategicDto);
    const result = await this.strategicRepository.save(strategic);
    return createResponse(200, 'successfully', result);
  }

  async findAll(filter: { name?: string; is_active?: boolean }) {
    const query = this.strategicRepository.createQueryBuilder('strategic');
    if (filter.name) {
      query.andWhere('strategic.name LIKE :name', { name: `%${filter.name}%` });
    }
    if (filter.is_active !== undefined) {
      query.andWhere('strategic.is_active = :is_active', {
        is_active: filter.is_active,
      });
    }
    query.andWhere('strategic.delete_flag = :delete_flag', {
      delete_flag: false,
    });
    query.orderBy('strategic.name', 'ASC');
    const result = await query.getMany();
    return createResponse(200, 'successfully', result);
  }

  async findOne(id: number) {
    const result = await this.strategicRepository.findOne({
      where: {
        social_plan_id: id,
        delete_flag: false,
      },
    });
    if (result) {
      return createResponse(200, 'Successful', result);
    } else {
      return createResponse(404, 'Not Found', null);
    }
  }

  async update(id: number, updateStrategicDto: UpdateStrategicDto) {
    await this.strategicRepository.update(id, updateStrategicDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const item = await this.strategicRepository.findOne({
      where: {
        social_plan_id: id,
        delete_flag: false,
      },
    });
  
    if (item) {
      await this.strategicRepository.update(id, { delete_flag: true });
      return createResponse(200, 'Successfully marked as deleted', { delete_flag: true });
    } else {
      return createResponse(404, 'Not Found or Already Deleted', null);
    }
  }
  
  
  
}

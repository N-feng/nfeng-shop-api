import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entity/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) public projectRepository: Repository<Project>,
  ) {}

  async findAll() {
    return await this.projectRepository.find();
    // .populate('proCategoryId', 'id name')
    // .populate('proSubCategoryId', 'id name')
    // .populate('proBrandId', 'id name')
    // .populate('proVariantTypeId', 'id type')
    // .populate('proVariantId', 'id name');
  }

  async findOneById(id) {
    const u = await this.projectRepository.findOne(id);
    if (!u) {
      throw new BadRequestException({
        code: 400,
        msg: 'Product not found.',
      });
    }
    return u;
  }

  async addOne(project) {
    const { title } = project;
    const u = await this.projectRepository.findOne({ where: { title } });

    if (u) {
      throw new BadRequestException({ code: 400, msg: '项目已存在~' });
    }
    return await this.projectRepository.save(project);
  }

  async updateOne(project: Partial<Project>) {
    return await this.projectRepository.update(project._id, project);
  }

  async deleteOne(id: string) {
    return await this.projectRepository.delete(id);
  }
}

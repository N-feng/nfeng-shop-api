import { BadRequestException, Injectable } from '@nestjs/common';
import { Project } from './entity/project.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
  ) {}

  async findAll() {
    return await this.projectModel.find();
    // .populate('proCategoryId', 'id name')
    // .populate('proSubCategoryId', 'id name')
    // .populate('proBrandId', 'id name')
    // .populate('proVariantTypeId', 'id type')
    // .populate('proVariantId', 'id name');
  }

  async findOneById(id) {
    const u = await this.projectModel.findOne(id);
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
    const u = await this.projectModel.findOne({ where: { title } });

    if (u) {
      throw new BadRequestException({ code: 400, msg: '项目已存在~' });
    }
    return await this.projectModel.create(project);
  }

  async updateOne(project: Partial<Project>) {
    return await this.projectModel.findByIdAndUpdate(project._id, project);
  }

  async deleteOne(id: string) {
    return await this.projectModel.findByIdAndDelete(id);
  }
}

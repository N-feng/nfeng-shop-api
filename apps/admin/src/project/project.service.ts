import { Project } from '@app/db/schemas/project.schema';
import { BadRequestException, Injectable } from '@nestjs/common';
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

  async findOne(id) {
    const u = await this.projectModel.findById(id);
    if (!u) {
      throw new BadRequestException({
        code: 400,
        msg: 'Product not found.',
      });
    }
    return u;
  }

  async create(project) {
    const { title } = project;
    const u = await this.projectModel.findOne({ where: { title } });

    if (u) {
      throw new BadRequestException({ code: 400, msg: '项目已存在~' });
    }
    return await this.projectModel.create(project);
  }

  async update(id, project) {
    return await this.projectModel.findByIdAndUpdate({ _id: id }, project);
  }

  async delete(id) {
    return await this.projectModel.findByIdAndDelete(id);
  }

  getModel() {
    return this.projectModel;
  }
}

import { Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('findAll')
  @ApiOperation({ summary: '项目列表' })
  async findAll() {
    const result = await this.projectService.findAll();
    return { code: 200, data: { list: result } };
  }
}

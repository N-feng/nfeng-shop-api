import { Module } from '@nestjs/common';
import { Project } from './entity/project.entity';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectSchema } from './entity/project.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Project.name,
        schema: ProjectSchema,
        collection: 'Project',
      },
    ])
  ],
  controllers: [ProjectController],
  providers: [ProjectService, ProjectResolver],
})
export class ProjectModule {}

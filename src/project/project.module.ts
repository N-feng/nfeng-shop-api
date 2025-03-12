import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entity/project.entity';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectSchema } from 'src/db/schemas/project.schema';

@Module({
  imports: [
    // TypeOrmModule.forFeature([Project]),
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

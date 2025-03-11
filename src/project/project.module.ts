import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entity/project.entity';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectController],
  providers: [ProjectService, ProjectResolver],
})
export class ProjectModule {}

import { CommonModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ProjectController } from './project/project.controller';
import { ProjectService } from './project/project.service';

@Module({
  imports: [CommonModule],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class AdminModule {}

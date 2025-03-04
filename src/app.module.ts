import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { ProjectController } from './project/project.controller';
import { ProjectService } from './project/project.service';

@Module({
  imports: [CommonModule],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class AppModule {}

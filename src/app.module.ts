import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { ProjectController } from './project/project.controller';
import { ProjectService } from './project/project.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    CommonModule,
    ProjectModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: './schema.gql', //代码先行(既先写实体定义)
    }),
  ]
})
export class AppModule {}

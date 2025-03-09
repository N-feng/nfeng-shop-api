import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { ProjectController } from './project/project.controller';
import { ProjectService } from './project/project.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    CommonModule,
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   autoSchemaFile: './schema.gql', //代码先行(既先写实体定义)
    // }),
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { ProjectController } from './project/project.controller';
import { ProjectService } from './project/project.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProjectModule } from './project/project.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    // CommonModule,
    // TypeOrmModule.forRootAsync({
    //   useFactory: async () => ({
    //     type: 'mongodb',
    //     // host: process.env.DB_HOST,
    //     // port: 27017,
    //     // username: process.env.DB_USERNAME,
    //     // password: process.env.DB_PASSWORD,
    //     // database: process.env.DB_DATABASE, // 数据库名
    //     // url: process.env.MONGO_URI,
    //     entities: [join(__dirname, '**/entity/*.{ts,js}')], // 需要自动实体映射的文件路径匹配
    //     useNewUrlParser: true, // 使用新版mongo连接Url解析格式
    //     synchronize: true, // 自动同步数据库生成entity
    //   })
    // }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: process.env.MONGO_URI,
        // useUnifiedTopology: true,
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql', //代码先行(既先写实体定义)
    }),
    ProjectModule,
  ]
})
export class AppModule {}

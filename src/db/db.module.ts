import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from './schemas/project.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

const models = MongooseModule.forFeature([
  {
    name: Project.name,
    schema: ProjectSchema,
    collection: 'Project',
  },
]);

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'mongodb',
        // host: process.env.DB_HOST,
        // port: 27017,
        // username: process.env.DB_USERNAME,
        // password: process.env.DB_PASSWORD,
        // database: process.env.DB_DATABASE, // 数据库名
        url: process.env.MONGO_URI,
        entities: [join(__dirname, '**/entity/*.{ts,js}')], // 需要自动实体映射的文件路径匹配
        useNewUrlParser: true, // 使用新版mongo连接Url解析格式
        synchronize: true, // 自动同步数据库生成entity
      })
    }),
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: process.env.MONGO_URI,
        // useUnifiedTopology: true,
      }),
    }),
    models,
  ],
  providers: [],
  exports: [models],
})
export class DbModule {}

import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from './schemas/project.schema';

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
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: process.env.MONGO_URI,
        useUnifiedTopology: true,
      }),
    }),
    models,
  ],
  providers: [],
  exports: [models],
})
export class DbModule {}

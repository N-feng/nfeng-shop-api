import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Project extends Document {
  @Prop({
    type: String,
    required: [true, 'Title is required'], // Adding custom error message
    trim: true,
  })
  title: string;

  @Prop({
    type: String,
    trim: true,
  })
  description: string;

  @Prop({
    type: String,
    trim: true,
  })
  liveSiteUrl: string;

  @Prop({
    type: String,
    trim: true,
  })
  githubUrl: string;

  @Prop({
    type: String,
    trim: true,
  })
  category: string;

  // @Prop({
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Category',
  //   required: true,
  // })
  // proCategoryId: Category;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);

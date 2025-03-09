
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ObjectIdColumn, ObjectId } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  readonly _id: ObjectId;

  @ObjectIdColumn()
  userId: ObjectId;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  liveSiteUrl: boolean;

  @Column()
  githubUrl: boolean;

  @Column()
  category: boolean;

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date


  @ObjectIdColumn()
  profileId: ObjectId;
}

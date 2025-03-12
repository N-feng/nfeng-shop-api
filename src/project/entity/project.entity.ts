
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ObjectIdColumn, ObjectId } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  readonly _id: string;

  @ObjectIdColumn()
  userId: ObjectId;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  liveSiteUrl: string;

  @Column()
  githubUrl: string;

  @Column()
  category: string;

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date


  @ObjectIdColumn()
  profileId: ObjectId;
}

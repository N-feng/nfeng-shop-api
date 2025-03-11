import { Field, ObjectType, ID, InputType } from "@nestjs/graphql";

@ObjectType()
export class ProjectTypeGraphql {
  @Field(() => ID)
  readonly _id: any
  readonly userId: any
  readonly title: string
  readonly description?: string
  readonly liveSiteUrl?: string
  readonly githubUrl?: string
  readonly category?: string
  readonly profileId: any
}

// @InputType()
// export class ProjectInsertTypeGraphql {
//   readonly userId: any
//   readonly title: string
//   readonly description?: string
//   readonly liveSiteUrl?: string
//   readonly githubUrl?: string
//   readonly category?: string
//   readonly profileId: any
// }
 
@InputType()
export class ProjectInputTypeGraphql {
  @Field(() => ID)
  readonly _id: any
  readonly userId: any
  readonly title: string
  readonly description?: string
  readonly liveSiteUrl?: string
  readonly githubUrl?: string
  readonly category?: string
  readonly profileId: any
}


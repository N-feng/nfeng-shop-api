import { Field, ObjectType, ID } from "@nestjs/graphql";

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

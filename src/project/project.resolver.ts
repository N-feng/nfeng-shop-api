import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { ProjectInputTypeGraphql, ProjectTypeGraphql } from './entity/project.type-graphql';

// 包装Promise返回,使得async/await可以更方便写成同步语法的形式
function awaitWrap<T, U = any>(promise: Promise<T>): Promise<[U | null, T | null]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, null]>(err => [err, null])
}

@Resolver('project')
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}
 
   //查询所有商品
   @Query(() => [ProjectTypeGraphql])
   async getAllGoods() {
     return this.projectService.findAll();
   }
 
   //查询单个商品
   @Query(() => ProjectTypeGraphql)
   async getGoods(@Args('id') id: string) {
     return this.projectService.findOneById(id);
   }
 
   //新增一个商品
  //  @Mutation(() => ProjectTypeGraphql)
  //  async addOneGoods(@Args('project') project: ProjectInsertTypeGraphql) {
  //    return this.projectService.addOne({ ...project });
  //  }
 
   // 更新一个商品信息
   @Mutation(() => ProjectTypeGraphql)
   async updateGoods(@Args('project') project: ProjectInputTypeGraphql) {
     const [err] = await awaitWrap(this.projectService.updateOne(project));
     if (err) {
       return project;
     }
     return this.projectService.findOneById(project._id);
   }
 
   // 删除一个商品信息
   @Mutation(() => Boolean)
   async deleteOneGoods(@Args('id') id: string) {
     const [err] = await awaitWrap(this.projectService.deleteOne(id));
     if (err) {
       return false;
     }
     return true;
   }

}

import { Field, ObjectType, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

@ObjectType()
class Ping {
  @Field()
  ping: 'pong';
}

@Resolver(Ping)
@Service()
export class PingResolver {
  @Query(() => Ping)
  async ping() {
    return { ping: 'pong' };
  }
}

import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import { Service } from 'typedi';

import { createPerson, getAllPeople } from '../queries/people.queries';
import { RequestContext } from '../types/RequestContext';

@ObjectType()
class Person {
  @Field()
  id: number;

  @Field()
  name: string;
}

@Resolver(Person)
@Service()
export class PeopleResolver {
  @Query(() => [Person])
  async people(@Ctx() { db }: RequestContext): Promise<Person[]> {
    const people = await getAllPeople.run(undefined, db);

    return people;
  }

  @Mutation(() => Person)
  async createPerson(
    @Ctx() { db }: RequestContext,
    @Arg('name') name: string,
  ): Promise<Person> {
    const [person] = await createPerson.run({ people: [{ name }] }, db);
    if (!person) throw new Error('Create failed');

    return person;
  }
}

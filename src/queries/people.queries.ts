/** Types generated for queries found in "src/queries/people.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetAllPeople' parameters type */
export type IGetAllPeopleParams = void;

/** 'GetAllPeople' return type */
export interface IGetAllPeopleResult {
  id: number;
  name: string;
}

/** 'GetAllPeople' query type */
export interface IGetAllPeopleQuery {
  params: IGetAllPeopleParams;
  result: IGetAllPeopleResult;
}

const getAllPeopleIR: any = {"usedParamSet":{},"params":[],"statement":"select\n  id,\n  name\nfrom people"};

/**
 * Query generated from SQL:
 * ```
 * select
 *   id,
 *   name
 * from people
 * ```
 */
export const getAllPeople = new PreparedQuery<IGetAllPeopleParams,IGetAllPeopleResult>(getAllPeopleIR);


/** 'CreatePerson' parameters type */
export interface ICreatePersonParams {
  people: readonly ({
    name: string | null | void
  })[];
}

/** 'CreatePerson' return type */
export interface ICreatePersonResult {
  id: number;
  name: string;
}

/** 'CreatePerson' query type */
export interface ICreatePersonQuery {
  params: ICreatePersonParams;
  result: ICreatePersonResult;
}

const createPersonIR: any = {"usedParamSet":{"people":true},"params":[{"name":"people","required":false,"transform":{"type":"pick_array_spread","keys":[{"name":"name","required":false}]},"locs":[{"a":33,"b":39}]}],"statement":"insert into people (name) values :people returning *"};

/**
 * Query generated from SQL:
 * ```
 * insert into people (name) values :people returning *
 * ```
 */
export const createPerson = new PreparedQuery<ICreatePersonParams,ICreatePersonResult>(createPersonIR);



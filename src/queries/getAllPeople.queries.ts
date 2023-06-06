/** Types generated for queries found in "src/queries/getAllPeople.sql" */
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



import { Client } from 'pg';

export interface RequestContext {
  db: Client;
}

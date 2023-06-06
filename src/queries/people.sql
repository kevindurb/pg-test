/* @name getAllPeople */
select
  id,
  name
from people;

/*
  @name createPerson
  @param people -> ((name)...)
*/
insert into people (name) values :people returning *;

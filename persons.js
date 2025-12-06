const fragments = persons.map(p => `${p.name} from ${p.city} born in ${new Date().getFullYear() - p.age}`);

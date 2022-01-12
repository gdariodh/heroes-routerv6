import { heroes } from "../data/heroes";

const getHeroByName = (name = "") => {
  name = name.toLowerCase();

//   return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));

return heroes;
};

export default getHeroByName;

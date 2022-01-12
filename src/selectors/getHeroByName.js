import { heroes } from "../data/heroes";

const getHeroByName = (name = "") => {

console.log('fn called');  

  name = name.toLowerCase();

  if(name === ''){
    return []
  }

  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));

};

export default getHeroByName;

import getHeroesByPublisher from "../../selectors/getHeroesByPublisher";
import HeroCard from "./HeroCard";

// colocar valor de prop por defecto, en tal caso que no se envie nada
const HeroList = ({ publisher = "Marvel" }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <>
      <hr />

      <div className="row rows-cols-1  rows-cols-3 g-3 mt-5 wrap">
        {heroes.map((hero) => (
          <>
            <HeroCard 
            key={hero.id} 
            // pasar todas las propiedades del object hero, mediante
            // destructuracion
            {...hero} />
          </>
        ))}
      </div>
    </>
  );
};

export default HeroList;

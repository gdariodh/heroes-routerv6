import { useMemo } from "react";
import getHeroesByPublisher from "../../selectors/getHeroesByPublisher";
import HeroCard from "./HeroCard";

// colocar valor de prop por defecto, en tal caso que no se envie nada
const HeroList = ({ publisher = "Marvel" }) => {
  // si publisher es diferente ejecuta getHeroesByPublisher
  const heroes = useMemo(() => getHeroesByPublisher(publisher), publisher);

  // si es el mismo publisher no ejecutes de nuevo la fn

  return (
    <>
      <hr />

      <div className="row rows-cols-1  rows-cols-3 g-3 mt-5 wrap">
        {heroes.map((hero, i) => (
          <>
            <HeroCard
              key={`${hero.id}-${i}`}
              // pasar todas las propiedades del object hero, mediante
              // destructuracion
              {...hero}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default HeroList;

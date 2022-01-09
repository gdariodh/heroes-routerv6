// leer parametros por url
import { Navigate, useParams } from "react-router-dom";
import getHeroById from "../../selectors/getHeroById";

const Hero = () => {
  // hero/:heroId
  const { heroId } = useParams();

  const hero = getHeroById(heroId);

  // si no hay heroe, retornamos un component de Redireccion
  if (!hero) {
    return <Navigate to="/" />;
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  return (
    <>
      <h1>{superhero}</h1>
    </>
  );
};

export default Hero;

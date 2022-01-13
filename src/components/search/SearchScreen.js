import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string"
import { useForm } from "../../hooks/useForm";
import getHeroByName from "../../selectors/getHeroByName";
import HeroCard from "../hero/HeroCard";
import { useMemo } from "react";

const SearchScreen = () => {


  const navigate = useNavigate();
  const location = useLocation();

  // acceder a la query de la url /search?q=batman 
  const query = queryString.parse(location.search)

  // extraer q 
  const {q = ''} = query;
  // console.log(q);

  const [values, handleInputChange] = useForm({
    searchText: q,
  });

  // solo invocar la fn cuando el query sea diferente, es para que no se dispare cada vez que se escriba en el input search
  const heroFileted = useMemo(() => getHeroByName(q), [q]) 

  const handleSearch = (e) => {
    e.preventDefault();

    // console.log(values);

    // mandar el query con la busqueda del form

    // /search?q=batman 
    navigate(`?q=${values.searchText}`)
  };

  return (
    <>
      <h2>Busquedas</h2>

      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>

          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={values.searchText}
              onChange={handleInputChange}
            />

            <button type="submit" className="btn btn-outline-primary mt-3">
              search...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>

          <hr />

          {
            q === '' ? (
              <>
                <div className="alert alert-info">Buscar un heroe</div>
              </>
            ) : (heroFileted.length === 0) && (
              <>
                <div className="alert alert-danger">No hay resultados de: {q}</div>
              </>
            )
          }

          {heroFileted.map((hero) => (
            <>
              <HeroCard key={hero.id} {...hero} />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchScreen;

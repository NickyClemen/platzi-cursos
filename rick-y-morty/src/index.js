import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import logo from "./images/logo.png";

function CharacterCard(props) {
  const { character } = props;

  return (
    <div
      className="CharacterCard"
      style={{ backgroundImage: `url(${character.image})` }}
    >
      <div className="CharacterCard__name-container text-truncate">
        {character.name}
      </div>
    </div>
  );
}

class App extends React.Component {
  state = {
    loading: true,
    error: null,
    data: {
      info: {},
      results: []
    },
    nextPage: 1
  }; /* Almacena los datos en el estado del componente. Siempre que hay una petición, no hay un solo estado de datos; hay dos:
          a) Loading: Indicador que se está buscando los datos.
          b) Error: Manera de presentar un error en el proceso.*/

  componentDidMount() {
    this.fetchCharacters();
    // Inicializa una llamada a una API.
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });
    // Estado inicial de la petición.

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
        // Petición para pasar de página.
      );
      /* fetch(url API) sirve para hacer una petición get a una API. 
      Lo que retorna es más específica: No son datos, es una repuesta.*/
      const data = await response.json();
      /* A esa respuesta, se le puede extrer los datos con .json(). También es un proceso asíncrono. */

      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results)
        },
        nextPage: this.state.nextPage + 1
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  /* La llamada a una API, es un proceso asíncrono. */

  render() {
    if (this.state.error) {
      return "Error!";
    }

    return (
      <div className="container">
        <div className="App">
          <img className="Logo" src={logo} alt="Rick y Morty" />

          <ul className="row">
            {this.state.data.results.map(character => (
              <li className="col-6 col-md-3" key={character.id}>
                <CharacterCard character={character} />
              </li>
            ))}
          </ul>

          {this.state.loading && <p className="text-center">Loading...</p>}
          {/* Si el componente está cargando, entonces se quiere enseñar algo. */}

          {!this.state.loading && this.state.data.info.next && (
            <button onClick={() => this.fetchCharacters()}>Load More</button>
          )} {/* Botón para cargar más personajes. */}

        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

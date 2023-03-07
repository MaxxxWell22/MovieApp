import { Header } from "./Components/Elements/Header/Header";
import { Main } from "./Components/Elements/Main/Main";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Tops } from './Routes/Tops/Tops';
import { useState, useEffect } from 'react';
import { FilmPage } from './Routes/Tops/FilmPage/FilmPage';
import { Provider } from "react-redux";
import { store } from "./Components/redux";
import { FavoritePage } from './Components/Elements/Header/Favorite/FavoritePage';
import { FilmPageTwo } from './Routes/Tops/FilmPage/FilmPageTwo'

function App() {

  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let [infoFilm, setInfoFilm] = useState('435');
  let [fetchedDataInfo, updateFetchedDataInfo] = useState([]);
  let [fetchedDataSimilar, upateDataSimilar] = useState([]);
  let { films } = fetchedData;
  let dataInfoFilm = fetchedDataInfo;
  let { items, total } = fetchedDataSimilar;

  const API_KEY = '5e17a70d-e53d-4f9d-a749-a49f189076bf';
  let API_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${pageNumber}`;
  let API_INFO = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${infoFilm}`;
  let API_SIMILAR = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${infoFilm}/similars`;

  useEffect(() => {
    (async function () {
      let data = await fetch(API_URL, {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": API_KEY
        },
      })
        .then((res) => res.json());
      updateFetchedData(data)
    })();
  }, [API_URL]);

  useEffect(() => {
    (async function () {
      let dataInfo = await fetch(API_INFO, {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": API_KEY
        },
      })
        .then((res) => res.json());
      updateFetchedDataInfo(dataInfo)
    })();
  }, [API_INFO]);

  useEffect(() => {
    (async function () {
      let dataSimilar = await fetch(API_SIMILAR, {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": API_KEY
        },
      })
        .then((res) => res.json());
      upateDataSimilar(dataSimilar)
    })();
  }, [API_SIMILAR]);

  return (
    <Provider store={store}>
      <Router>
        <div style={{ height: '100%', width: '100%' }} className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/tops"
              element={
                <Tops
                  setInfoFilm={setInfoFilm}
                  pageNumber={pageNumber}
                  setPageNumber={setPageNumber}
                  films={films}
                />
              } />
            <Route path="/order" element={<FavoritePage setInfoFilm={setInfoFilm} films={films} />} />
            <Route path="/tops/:nameRu" element={<FilmPage setInfoFilm={setInfoFilm} dataInfoFilm={dataInfoFilm} items={items} />} />
            <Route path="/similar/:nameRu" element={<FilmPageTwo setInfoFilm={setInfoFilm} dataInfoFilm={dataInfoFilm} items={items} />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

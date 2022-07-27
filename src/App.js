import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Menu from "./components/Menu.js";
import Home from "./pages/Home.js";
import AddLocation from "./pages/AddLocation.js";
import NoPage from "./pages/NoPage.js";
import { useEffect, useReducer} from "react";


function App() {

  let firstLoad = true;
  let listExist = checkIfListAlreadyExist();

  const [citysList, setCitysList] = useReducer(tasksReducer, listExist);

  function tasksReducer(citysList, action) {

    switch (action.type) {
      case 'added': {
        return [...citysList, action.city];
      }
      case 'deleted': {
        return citysList.filter(t => t.cityName !== action.city.cityName);
      }
      case 'replace': {
        return action.city;
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }

  function handleAddCity(city) {
    setCitysList({
      type: 'added',
      city: city
    });
  }

  function handleDeleteCity(city) {
    setCitysList({
      type: 'deleted',
      city: city
    });
  }

  useEffect(() => {
    localStorage.setItem("citys", JSON.stringify(citysList));
  }, [citysList]); // <--- note the dependency array

  function checkIfListAlreadyExist() {
    if (firstLoad) {
      firstLoad = false;
      const tempList = JSON.parse(localStorage.getItem("citys"));

      if (tempList)
        return tempList;
      else
        return [];
    }
    
  }

  return (
    < BrowserRouter >
      {/* <setCitysList/> */}
      <Routes Routes >
        <Route path="/" element={<Menu />} >
          <Route index element={<Home citysList={citysList}/>} />
          <Route path="AddLocation" element={<AddLocation handleAddCity={handleAddCity} handleDeleteCity={handleDeleteCity} citysList={citysList} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes >
    </BrowserRouter >
  );
}

export default App;

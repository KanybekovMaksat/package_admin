//import hooks
import { useState, useEffect } from 'react';


//import lib
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios';


//import styles and helpers
import './App.css';
import { MyContext, MyContextType } from './helpers/MyContext';


//import pages
import Home from './pages/Home';
import Tariff from './pages/Tariff';




function App() {
  //state for fetch all tariffs
  const [data, setData] = useState<MyContextType["data"]>([]);

  //state for fetch all category
  const [category, setCategory] = useState<MyContextType["category"]>([]);

  //state for sorted tariffs
  const [sort, setSort] = useState<MyContextType["sort"]>([]);

  //state for sorted tariffs by category id
  const [type, setType] = useState<MyContextType["type"]>(0);

  
  //async function for fetch data(tariffs, category)
  async function fetchData(): Promise<void> {
    const [dataResponse, categoriesResponse] = await Promise.all([
      axios.get<MyContextType["data"]>('http://localhost:4000/card'),
      axios.get<MyContextType["sort"]>('http://localhost:4000/categories')
    ])
    setData(dataResponse.data)
    setCategory(categoriesResponse.data)
    setSort(dataResponse.data)
  }


  //function for sorted tariffs
  const sortedTariff = () => {
    if (type === 0) {
      setSort(data);
      return
    }
    const filtered = data.filter((item) => item.category.includes(type))
    setSort(filtered)
  }


  //effect for sorted tariffs
  useEffect(() => {
    sortedTariff()
  }, [type, data]);


  //effect for fetch data 
  useEffect(() => {
    fetchData()
  }, [])


  return (
    <MyContext.Provider value={{ data, category, sort, type, setData, setCategory, setSort, setType, fetchData }}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-tariff' element={<Tariff />} />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;

import {useCallback, useState} from 'react';
import axios from 'axios';
import NewsList from './components/NewList';
import Categories from './components/Categories';

const App = ()=>{

  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category=>setCategory(category), []); //함수를 렌더링마다 새로 만드는 것이 아닌, 처음 렌더링 될 때만 만듦.
  return(
    <>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/>
    </>
  )

}

export default App;
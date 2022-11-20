import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllItemsSelector } from './reducers/items/items.selectors';
import { getAllItems } from './reducers/items/items.slice';

function App() {
  const items = useSelector(getAllItemsSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllItems);
  }, []);
  console.log(items.length);
  return (
    <div className="flex">
      {items.length}
    </div>
  );
}

export default App;

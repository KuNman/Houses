import React, {useEffect, useState} from 'react';
import {Houses} from '../../api/main';

function List() {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await Houses.list();
      setHouses(result.houses);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {houses.map((house, index) => {
        return <li key={index}>
          <div>
            {house.owner}
          </div>
        </li>;
      })}
    </ul>
  );
}
export default List;

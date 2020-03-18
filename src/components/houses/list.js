import React, {useEffect, useState} from 'react';
import {Houses} from '../../api/main';
import {useHistory} from 'react-router-dom';
import {DETAILS} from '../../routes/open';

function List() {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const handleClick = (id) => {
    history.push(DETAILS+id, {id: id});
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await Houses.list();
      setHouses(result.houses);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {loading && <div>Loading...</div>}
      {houses.map((house, index) => {
        return <li key={index}>
          <div onClick={() => handleClick(house._id)}>
            {house._id}
          </div>
        </li>;
      })}
    </ul>
  );
}
export default List;

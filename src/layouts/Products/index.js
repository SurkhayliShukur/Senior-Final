import React, { useState, useEffect } from 'react';
import { Basket, Table } from '../../components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Products = () => {

  const [newData, setNewData] = useState([]);
  const [data, setData] = useState([]);

  const [options, setOptions] = useState([]);
  const tableHeads = options.filter(option => option.value).map(option => option.name);
  const [filteredData, setFilteredData] = useState([...newData])

  const [ basket, setBasket ] = useState([])
  const [ isShow, setIsShow ] = useState(false)

  const getData = async () => {
    const url = "https://fakestoreapi.com/products";
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const updatedData = data.map((item) => {
        const { rating, ...withoutRating } = item;
        const { rate, count } = item.rating;
        const { id, title, description, category, image, price } = withoutRating;

        return {
          id,
          title,
          description,
          category,
          image,
          rate,
          count,
          price
        };
      });
      setNewData(updatedData);

      const keys = Object.keys(updatedData[0]);
      const initialOptions = [
        { name: "All", value: true },
        ...keys.map(key => ({ name: key, value: true }))
      ];
      setOptions(initialOptions);
    }
  }, [data]);

  useEffect(() => {
    setFilteredData(newData.map(item => Object.fromEntries(Object.entries(item).filter(([key]) => tableHeads.includes(key)))));
  }, [options]);

  // Filter checkboxes

  const handleCheckbox = (index, newValue) => {
    setOptions(prevOptions => {
      const updatedOptions = [...prevOptions];
      updatedOptions[index].value = newValue;

      if (index === 0) {
        updatedOptions.forEach(option => {
          option.value = newValue;
        });
      } else if (newValue) {
        updatedOptions[0].value = updatedOptions.slice(1).every(option => option.value);
      } else {
        updatedOptions[0].value = false;
      }
      return updatedOptions;
    });
  };

  return (
    <div>
      <div className='float-start my-3 h2'>
        <span>Products</span>
      </div>
      {filteredData.length > 0 && (
        <Table
          type="Products"
          data={filteredData}
          options={options}
          setOptions={setOptions}
          handleCheckbox={handleCheckbox}
          basket={basket}
          setBasket={setBasket}
          setIsShow={setIsShow}
        />
      )}
      <ToastContainer autoClose={500} />
      <Basket basket={basket} isShow={isShow}/>
    </div>
  );
};

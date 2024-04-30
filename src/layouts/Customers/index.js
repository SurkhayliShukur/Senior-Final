import React, { useEffect, useState, useContext } from 'react';
import { Customers as data } from '../../assets/data';
import { Table } from '../../components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../../Context/Theme';


export const Customers = () => {
  const { fontColor } = useContext(ThemeContext)

  const [options, setOptions] = useState([]);
  const tableHeads = options.filter(option => option.value).map(option => option.name);
  // const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([...data])
  // const [filteredData, setFilteredData] = useState([])



  useEffect(() => {
    setFilteredData(data.map(item => Object.fromEntries(Object.entries(item).filter(([key]) => tableHeads.includes(key)))));
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

  useEffect(() => {
    const keys = Object.keys(data[0]);
    const initialOptions = [
      { name: "All", value: true },
      ...keys.map(key => ({ name: key, value: true }))
    ];
    setOptions(initialOptions);
  }, []);

  // Filter inputs

  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    location: "",
    phone: ""
  })

  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  useEffect(() => {
    const searchedData = filteredData.filter((row) => {
      let isMatch = true

      Object.entries(inputValues).forEach(([inputName, inputValue]) => {
        const rowValue = row[inputName]?.replace(/ /g, '').substring(0, inputValue.length).toLowerCase();
        const searchValue = inputValue.toLowerCase();

        if (rowValue !== searchValue) {
          isMatch = false;
        }
      });

      return isMatch;
    });

    setFilteredData(prevData => searchedData.length > 0 ? [...searchedData] : prevData);

    if (searchedData.length === 0) {
      toast.error("Belə bir məlumat mövcud deyil.", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  }, [inputValues])


  return (
    <div>
      <div className='float-start my-3 h2'>
        <span style={{ color: fontColor }}>Customers</span>
      </div>

      <Table
        data={filteredData}
        options={options}
        setOptions={setOptions}
        handleCheckbox={handleCheckbox}
        toggleFilters={toggleFilters}
        showFilters={showFilters}
        inputValues={inputValues}
        setInputValues={setInputValues}
      />
      <ToastContainer autoClose={500} />

    </div>
  );
};
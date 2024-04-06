export const Filters = ({ inputValues, setInputValues }) => {

  const handleFilter = (value, inputName) => {
    setInputValues(prevInputValues => ({
      ...prevInputValues,
      [inputName]: value
    }));
  };

  return (
    <div>
      <div className="d-flex justify-content-between gap-3 my-3 w-100" >
        {Object.keys(inputValues).map(inputName => (
          <input
            key={inputName}
            type="text"
            className="form-control"
            placeholder={`Search by ${inputName}`}
            value={inputValues[inputName]}
            onChange={(e) => handleFilter(e.target.value.replace(/ /g, ""), inputName)}
          />
        ))}
      </div>
    </div>
  );
};

import React, { useState, useEffect, useRef, useContext } from 'react'
import { Pagination, Columns, Filters, CustomModal } from '../../../components';
import { ThemeContext } from '../../../Context/Theme';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

export const Table = ({ type, data, options, setOptions, handleCheckbox,  toggleFilters, showFilters, inputValues, setInputValues }) => {

  const { color, theme, fontColor } = useContext(ThemeContext)

  const navigate = useNavigate()

  const tableHeads = Object.keys(data[0])

  // Pagination properties

  const [dataLength, setDataLength] = useState(data.length)
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const lastPost = page * limit;
  const firstPost = lastPost - limit;

  const [activePosts, setActivePosts] = useState(data.slice(firstPost, lastPost))

  useEffect(() => {
    const totalPages = Math.ceil(data.length / limit);

    if (page > totalPages) {
      setPage(totalPages);
    }

    setDataLength(data.length)
    setActivePosts(data.slice(firstPost, lastPost))
  }, [data, limit, page]);

  // Info Modal

  const [modalShow, setModalShow] = useState(false)
  const [details, setDetails] = useState([])

  const getInfo = (data) => {
    setDetails(data)
    setModalShow(true)
  }

  // const addBasket = (value, product) => {
  //   value
  //     ? setBasket(prevData => [...prevData, product])
  //     : setBasket(prevData => prevData.filter(item => item !== product))
  // }

  // Click outside

  // const buttonRef = useRef();

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (buttonRef.current && !buttonRef.current.contains(event.target)) {
  //       setIsShow(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [setIsShow]);


  return (
    <div>
      <div className='float-end my-3'>
        <Columns options={options} setOptions={setOptions} handleCheckbox={handleCheckbox} />
        {/* {
          type === "Products"
            ? <button
              ref={buttonRef}
              className='btn bi bi-basket3 ms-1 position-relative'
              style={{ fontSize: "20px", color: fontColor }}
              onClick={() => setIsShow(true)} 
            >
              {
                !!basket.length && (
                  <span style={{
                    width: "22px",
                    height: "22px",
                    position: "absolute",
                    top: "-24%",
                    left: "50%",
                    fontSize: "14px",
                    borderRadius: "50%",
                    backgroundColor: color,
                  }}>
                    {basket.length}
                  </span>
                )
              }
            </button>

            : <button className="btn border dropdown-toggle ms-3" onClick={toggleFilters} style={{ color: fontColor }}>
              <i className="bi bi-funnel" /> Show Inputs
            </button>
        } */}
        {
          type === "Products" && (
            <button
              onClick={() => {
                navigate("/add")
              }}
              className="btn btn-primary"
              style={{
                width: "50px",
                height: "40px",
                position: "absolute",
                top: "20%",
                left: "80%",
                fontSize: "14px",
                backgroundColor: color,
              }}>
              <span className='text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
              </span>
            </button>
          )
        }

      </div>
      {showFilters && <Filters inputValues={inputValues} setInputValues={setInputValues} />}
      <table className="table table-sm table-hover">
        <thead>
          <tr style={{ color: fontColor }}>
            {tableHeads.map((heading, index) => (
              <th key={index} className='text-center' scope="col">{heading.toUpperCase()}</th>
            ))}
            <th className='text-center'>INFO</th>
            {/* {
              type === "Products" && <th className='text-center'>ADD</th>
            } */}
          </tr>
        </thead>
        <tbody>
          {
            activePosts.map((customer, objIndex) => (
              <tr key={objIndex} style={{ color: fontColor }}>
                {
                  tableHeads.map((heading, index) => (
                    heading === "image" ? <td key={index} className='text-center'>
                      <img src={customer[heading]} style={{ height: "32px" }} />
                    </td>
                      : heading === "create_at" ? <td key={index} className='text-center'>{moment(customer[heading]).fromNow()}</td>
                        : <td key={index} className='text-center'>{typeof customer[heading] === 'string' ? customer[heading].substring(0, 20) : customer[heading]}</td>
                  ))
                }
                <td className='text-center'>
                  <button className='btn bi bi-info-square cursor-pointer p-0 px-2' onClick={() => getInfo(customer)} style={{ color: fontColor }}></button>
                </td>
                {/* {
                  type === "Products" &&
                  <td className='text-center '>
                    <input
                      type='checkbox'
                      className='form-check-input form-check-input-lg my-2'
                      onChange={(e) => addBasket(e.target.checked, customer)}
                    />
                  </td>
                } */}
              </tr>
            ))
          }
        </tbody>
      </table>
      <Pagination
        page={page}
        limit={limit}
        setPage={setPage}
        setLimit={setLimit}
        dataLength={dataLength}
      />
      <CustomModal
        modalShow={modalShow}
        onHide={() => setModalShow(false)}
        details={details} />
    </div>
  )
}
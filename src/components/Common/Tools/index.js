import React, { useContext } from 'react'
import { Dropdown, ThemeBar } from '../../../components'
import { toolsOptions } from '../../../assets/data'
import { ThemeContext } from '../../../Context/Theme'

export const Tools = () => {

    const { color, theme ,fontColor } = useContext(ThemeContext)

    return (
        <div className='d-flex justify-content-between align-items-center'>
            {
                toolsOptions.map((tool, key) => (
                    <div className='p-2'>
                        <Dropdown title={tool.title}  heading={tool.heading} options={tool.options} key={key}/>
                    </div>
                ))
            }
            <button 
                title='Theme'
                className="btn" 
                type="button" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#offcanvasRight" 
                aria-controls="offcanvasRight"
                style={{
                    fontSize: "24px",
                    border: "none",
                    backgroundColor: theme,
                    color: fontColor
                }}
                >
                    <i className="bi bi-palette" /> 
            </button>
            <ThemeBar />
        </div>
    )
}
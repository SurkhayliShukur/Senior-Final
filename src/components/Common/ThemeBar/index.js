import React, { useContext, useState } from 'react';
import { ThemeBar as Themes } from '../../../assets/data';
import { ThemeContext } from '../../../Context/Theme';

export const ThemeBar = () => {
    const { theme, setTheme, fontColor, color, setColor } = useContext(ThemeContext);
    const [activeButton, setActiveButton] = useState({
        "Choose Mood": "Light",
        "Choose Color": "Blue"
    });

    const handleClick = (e, section, colorOption, name) => {
        if (section === "Choose Mood") {
            setTheme(colorOption);
            setActiveButton({ ...activeButton, "Choose Mood": name });
        } else if (section === "Choose Color") {
            setColor(colorOption);
            setActiveButton({ ...activeButton, "Choose Color": name });
        }
    };

    return (
        <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: "300px", backgroundColor: theme, color: fontColor }}>
            <div className="offcanvas-header">
                <h4 id="offcanvasRightLabel">Theme Settings</h4>
                <button
                    type="button"
                    className="btn"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    style={{ fontSize: "24px" }}
                >
                    <i className="bi bi-x-octagon" />
                </button>
            </div>
            <div className="offcanvas-body">
                <div>
                    {Themes.map((section, index) => (
                        <div key={index} style={{color: fontColor}}>
                            <p>{section.heading}</p>
                            <div className='d-flex flex-column my-3'>
                                {section.colors.map((colorOption, index) => (
                                    <button
                                        key={index}
                                        onClick={(e) => handleClick(e, section.heading, colorOption.color, colorOption.name)}
                                        className="btn my-1"
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            height: "50px",
                                            fontSize: "20px",
                                            color: colorOption.fontColor,
                                            backgroundColor: activeButton[section.heading] === colorOption.name ? color : ""
                                        }}
                                    >
                                        <div style={{ color: colorOption.color }}>
                                            {colorOption.icon}
                                        </div>
                                        <div style={{color: fontColor}}>
                                            {colorOption.name}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

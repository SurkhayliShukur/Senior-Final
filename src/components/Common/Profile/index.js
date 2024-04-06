import React, { useContext } from 'react'
import ProfileImg from '../../../assets/images/profile.jpg'
import { Dropdown } from '../../../components'
import { profileOptions } from '../../../assets/data'
import { ThemeContext } from '../../../Context/Theme'

export const Profile = () => {

    const { color, theme, fontColor } = useContext(ThemeContext)

    const PROFILE_STYLE = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme,
        color: fontColor,
        width: "230px",
        padding: 0,
        margin: 0
    }

    const IMAGE_STYLE = {
        width: "80px",
        border: `3px solid ${color}`,
        borderRadius: "50%",
        padding: "2px",
    }

    const profile = <div className='profile' style={PROFILE_STYLE}>
        <img
            style={ IMAGE_STYLE }
            src={ProfileImg}
            alt='profile-image'
        />
        <h4>İlkin Qafarov</h4>
    </div>

    
    return (
        <Dropdown heading={profile} options={profileOptions} />
    )
}
import React from 'react'

const SidebarOption = ({ text, Icon }) => {
    return (
        <>
            <Icon />
            <h2>
                {text}
            </h2>
        </>
    )
}

export default SidebarOption
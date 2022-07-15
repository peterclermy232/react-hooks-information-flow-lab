import React from 'react'

function Header({isDarkMode, onDarkModeClick}) {
  return (
    <div>
        <button onClick={onDarkModeClick}>
            {is}
        </button>
    </div>
  )
}

export default Header
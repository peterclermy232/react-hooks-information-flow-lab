import React from 'react'

function Header({isDarkMode, onDarkModeClick}) {
  return (
    <div>
        <button onClick={onDarkModeClick}>
            {isDarkMode ? "Dark" : "Light"} mode
        </button>
    </div>
  )
}

export default Header
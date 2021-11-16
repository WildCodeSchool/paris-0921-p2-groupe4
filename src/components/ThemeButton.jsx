import React from 'react';

import './themeButton.css';

function ThemeButton({ handleNewTheme, handleThemeChange, newTheme }) {
  return (
    <div className="ThemeButton">
      <form>
        <input type="text" placeholder="Modify me" onChange={handleNewTheme} value={newTheme}></input>
        <button className="submitThemeButton" onClick={handleThemeChange}>
          {' '}
          OK!{' '}
        </button>
      </form>
    </div>
  );
}

export default ThemeButton;

import React from 'react';

import './themeButton.css';

function ThemeButton({ handleNewTheme, handleThemeChange, newTheme }) {
  return (
    <div className="ThemeButton">
      <form>
        <input className="FormDisplay" type="text" placeholder="Modify me" onChange={handleNewTheme} value={newTheme}></input>
        <button className="submitThemeButton" onClick={handleThemeChange}>
          {' '}
          Send{' '}
        </button>
      </form>
    </div>
  );
}

export default ThemeButton;

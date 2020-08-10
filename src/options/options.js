import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Settings from "../utils/settings";

function Options() {
  const [settings] = useState(new Settings());
  const [settingsValue, setSettingsValue] = useState("");

  useEffect(() => {
    settings
      .getSettings()
      .then((currentSettings) =>
        setSettingsValue(JSON.stringify(currentSettings, null, 2))
      );
  }, []);

  return (
    <>
      <div>
        <h1>Settings</h1>
        <textarea
          autoFocus={true}
          rows={30}
          cols={60}
          value={settingsValue}
          onChange={(event) => setSettingsValue(event.target.value)}
        />
      </div>
      <div>
        <button
          onClick={() => settings.saveSettings(JSON.parse(settingsValue))}
        >
          Save
        </button>
      </div>
    </>
  );
}

const domContainer = document.querySelector("#options-container");
ReactDOM.render(React.createElement(Options), domContainer);

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import browser from "webextension-polyfill";

import Settings from "../utils/settings";

function Panel() {
  const [settings] = useState(new Settings());
  const [settingsValue, setSettingsValue] = useState("");

  return <>"Panel"</>;
}

const domContainer = document.querySelector("#panel-container");
ReactDOM.render(React.createElement(Panel), domContainer);

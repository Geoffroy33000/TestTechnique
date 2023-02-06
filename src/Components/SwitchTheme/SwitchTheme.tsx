import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../Context/context";
import { TypeAppConfig } from "../../Context/model";

import { Button } from "..";

import "./SwitchTheme.scss";

function SwitchTheme() {
  const { state, dispatch } = useContext(AppContext);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    dispatch({ type: TypeAppConfig.SwitchTheme, payload: { theme: theme } });
  }, [theme]);

  console.log(state.appConfig.theme);
  return (
    <div className="SwitchTheme_container">
      <Button className="btn" onClick={() => setTheme("dark")}>
        Switch dark
      </Button>
      <Button className="btn" onClick={() => setTheme("light")}>
        Switch light
      </Button>
    </div>
  );
}

export default SwitchTheme;

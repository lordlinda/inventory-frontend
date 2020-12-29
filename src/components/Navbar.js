import React from "react";
import { NavLink } from "react-router-dom";

import { Menu } from "semantic-ui-react";

function Navbar() {
  return (
    <div style={{ marginTop: "-20px" }}>
      <Menu>
        <Menu.Item name="Home">
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar;

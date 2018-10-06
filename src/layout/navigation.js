import React from "react";

import ListLink from "./listLink";

const Navigation = () => (
    <ul style={{ listStyle: "none", float: "right" }}>
        <ListLink to="/" text="Home" />
    </ul>
);

export default Navigation;

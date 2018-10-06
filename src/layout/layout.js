import React from "react";
import PropTypes from "prop-types";

import Navigation from "./navigation";
import Title from "./title";

const Layout = ({ children }) => (
    <main style={{ margin: "0 auto", maxWidth: 650, padding: "1.25rem 1rem" }}>
        <Title />
        <Navigation />
        {children}
    </main>
);

Layout.propTypes = {
    children: PropTypes.node
};

Layout.defaultProps = {
    children: null
};

export default Layout;

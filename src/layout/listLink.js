import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const ListLink = ({ to, text }) => (
    <li style={{ display: "inline-block", marginRight: "1rem" }}>
        <Link to={to}>{text}</Link>
    </li>
);

ListLink.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default ListLink;

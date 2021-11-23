import React from 'react';
const Hello = ({ hey = "Cool" }) => {
    return (React.createElement("h1", null, hey));
};
export default Hello;

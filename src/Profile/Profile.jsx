import React from "react";
import PropTypes from "prop-types";

function Apro(props) {
    return (
        <div>
            <h1 style={{ textAlign: "center", color: "red" }}>
                Full Name : {props.name}
            </h1>
            <h1 style={{ textAlign: "center", color: "red" }}>
                {" "}
                Bio : {props.bio}
            </h1>
            <h1 style={{ textAlign: "center", color: "red" }}>
                {" "}
                Profession : {props.profession}
            </h1>
            {props.children}
            <button
                style={{
                    display: "block",
                    fontWeight: "bolder",
                    marginLeft: "auto",
                    marginRight: "auto",
                    padding: "10px",
                    color: "red",
                    marginTop: "10px",
                    backgroundColor: "grey",
                }}
                onClick={() => props.handleName(props.name)}
            >
                Click Me
            </button>
        </div>
    );
}
Apro.defaultProps = {
    name: "def",
    bio: "xo",
    profession: "xoxo",
};
Apro.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handlename: PropTypes.func,
};

export default Apro;

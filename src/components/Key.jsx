import styled from "styled-components";

const KeyButton = styled.span`
  background: #f0f0f0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: bold;

  background: ${(props) => {
    if (props.status === "exists") return "#f9c642";
    if (props.status === "matches") return "#4aa564";
    if (props.status === "notFound") return "#333";
    return "white";
  }};

  color: ${(props) => {
    if (props.status === "notFound") return "#fff";
    return "black";
  }};
`;

function Key({ status, children }) {
  return <KeyButton status={status}>{children}</KeyButton>;
}

export default Key;

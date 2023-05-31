import styled from "styled-components";

const CardPicture = styled.img`
  width: ${(props) =>
    props.collection ? "250px" : props.home ? "300px" : "170px"};
    height:${props => props.home ? "200px" : null};
  rotate: ${(props) => (props.collection ? null : props.home ? "-25deg" : "-19deg")};
`;
export default CardPicture;

    // height: 200px;
    // width: 300px;
    // rotate: -25deg;
    // position: absolute;
    // top: 40%;
import styled from "styled-components";

const CardPicture = styled.img`
  width: ${props => props.collection ? "250px":"170px"};
  rotate: ${props => props.collection ? null : "-19deg"};
`;
export default CardPicture
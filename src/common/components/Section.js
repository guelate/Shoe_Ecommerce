import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction:${props => props.direction ? props.direction : ""};
  padding: ${props => props.padding ? props.padding : ""};
  gap: ${props => props.gap ? props.gap : ""};
  align-items: ${props => props.align ? props.align : ""};
  height: 100vh;
`;

export default Section

// const SellAndCollectionSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   padding: 10% 10%;
//   gap: 45px;
//   align-items: center;
// `;
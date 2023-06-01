import styled from "styled-components"

const MainSection = styled.div`
  box-sizing: border-box; 
  display: flex;
  flex-direction:${props => props.direction ? props.direction : ""};
  height:${props => props.height ? props.height : "100vh"};
  margin-top: 100px;
  padding: ${props => props.padding ? props.padding : ""};
  gap:${props => props.gap ? props.gap : ""};
  align-items:${props => props.align ? props.align : ""};
  
`;

export default MainSection

// const MainSection = styled.div`
//   box-sizing: border-box; 
//   display: flex;
//   flex-direction: row;
//   height: 100vh;
//   margin-top: 100px;
//   padding: 10% 20% 20%;
// `;

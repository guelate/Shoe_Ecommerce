import styled from "styled-components"

const MainSection = styled.div`
  box-sizing: border-box; 
  display: flex;
  flex-direction:${props => props.direction ? props.direction : ""};
  height: 100vh;
  margin-top: 100px;
  padding: ${props => props.padding ? props.padding : ""};
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

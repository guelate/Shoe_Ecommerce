import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: ${(props) => (props.carousel ? "250px" : "100%")};
  margin: ${(props) => (props.margin ? props.margin : "margin:0px")};
  padding: ${(props) => (props.home ? "0% 35px 0% 16px;" : "")};
  justify-content: ${(props) =>
    props.carousel ? "space-between" : "space-between"};
  align-items: ${props => props.footer ? "":"center"}; 
  outline: solid;
`;

export default Row;

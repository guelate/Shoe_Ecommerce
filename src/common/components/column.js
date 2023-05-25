import styled from "styled-components";

const Column = styled.div`
    display:flex;
    flex-direction:column;
    width:auto;
    height:${props => props.sneakerCollection ? "80px":""};
    ${props => props.marginTop ? "margin-top:45%":""};
    justify-content:space-between;
    box-sizing:boder-box;

`
export default Column;

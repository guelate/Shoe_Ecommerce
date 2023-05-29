import styled from "styled-components";

const Column = styled.div`
    display:flex;
    flex-direction:column;
    width:auto;
    height:${props => props.sneakerCollection ? "80px":""};
    ${props => props.marginTop ? "margin-top:45%":""};
    justify-content:${props => props.footer ? "":"space-between"};
    box-sizing:boder-box;
    align-items:${props => props.newsletter ? "center":""};
    gap:${props => props.newsletter ? "15px":""};
`
export default Column;

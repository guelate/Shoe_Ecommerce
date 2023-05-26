import styled from "styled-components"

const Row = styled.div`

    display:flex;
    flex-direction:row;
    width:100%;
    margin:${props => props.margin ? props.margin : "margin:0px"};
    box-sizing:border-box;
    padding:${props => props.home ? "0% 35px 0% 16px;":null};
    justify-content:space-between;
    align-items:center;
    // outline:solid;

`

export default Row;
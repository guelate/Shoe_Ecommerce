import styled from "styled-components"

const Row = styled.div`

    display:flex;
    flex-direction:row;
    width:100%;
    margin:${props => props.margin ? props.margin :"margin:0px"};
    box-sizing:border-box;
    padding: 0% 35px 0% 16px;
    justify-content:space-between;
    align-items:center;

`

export default Row;
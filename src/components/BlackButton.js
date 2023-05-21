/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components"


//delete position:absolute for newsletter component
const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    border-radius: 15px;
    outline: solid;
    height: 60px;
    // position: absolute;
    width: auto;
    align-items: center;
    padding:0% 1%;
`

const BlackButton = ({children}) => {
    return(
        <Container>{children}</Container>
    )
}

export default BlackButton
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components"
import { BLACK_COLOR, WHITE_COLOR } from "../../utils/Constants/style"


const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    border-radius: 15px;
    height: 60px;
    width: auto;
    align-items: center;
    padding:${props => props.newsletter ? props.newsletter :"0% 27%"};
    color:${WHITE_COLOR};
    background:${BLACK_COLOR};
`

const BlackButton = ({children,padding}) => {
    return(
        <Container newsletter={padding}>{children}</Container>
    )
}

export default BlackButton
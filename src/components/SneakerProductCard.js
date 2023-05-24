/* eslint-disable no-lone-blocks */

import styled from "styled-components"
import CardLayout from "../common/style/CardLayout";
import { createText } from "../utils/functions/main";
import * as Aicons from "react-icons/ai";
import Row from "../common/components/row";

const Container = styled.div`
  display:flex;
  flex-direction:column;
  position:absolute;
  height:auto;
  width:auto;
  outline:solid;
  padding:10px 20px 30px;
`


const SneakerProductCard = () => {

  return(
    <CardLayout>
      <Container>
        {createText()}
        {createText()}
        <Row>
          {createText()}
          <Aicons.AiOutlineShopping />
        </Row>
      </Container>
    </CardLayout>
  )
}
export default SneakerProductCard


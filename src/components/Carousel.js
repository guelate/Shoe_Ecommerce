/* eslint-disable no-lone-blocks */

import styled from "styled-components"
import * as AiIcons from "react-icons/ai"

const Container = styled.div`
  display:flex;
  flex-direction:row;
  width:auto;
  height:auto;
  align-items:center;
  outline:solid;
  position:absolute;
`

const createPages = (value) => {

  const pages = value;

  return(
    <Container>
      {pages.map((element,index) => (<p key={index}>{element}</p>))}
      <AiIcons.AiOutlineArrowRight />
    </Container>
  )
}

const Carousel = () => {
    return createPages(["1","2","3"])
}
export default Carousel

{/* <div class="sneaker__pages bd-grid">
<div>
  <span class="sneaker__pag">1</span>
  <span class="sneaker__pag">2</span>
  <span class="sneaker__pag">3</span>
  <span class="sneaker__pag">4</span>
  <span class="sneaker__pag">&#8594;</span>
</div>
</div> */}
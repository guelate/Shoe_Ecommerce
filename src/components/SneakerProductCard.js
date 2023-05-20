/* eslint-disable no-lone-blocks */

import styled from "styled-components"
import  hightNike1 from "../assets/img/hightNike1.png"

const Container = styled.div`
  display:flex;
  flex-direction:column;
  position:absolute;
  height:auto;
  width:auto;
  outline:solid;
  padding:10px 20px 30px;
`

const Picture = styled.img`
  width: 170px;
  rotate: -19deg;
`;

const Text = styled.p`
  outline: solid;
`;
const SneakerProductCard = () => {

  return(
    <Container>
      <Picture src={hightNike1}/>
      <Text>Nike jordan</Text>
      <Text>180 euros</Text>
      <Text>Ajoutez au panier</Text>
    </Container>
  )
}
export default SneakerProductCard


{/* <article class="sneaker">
<img
  src="assets/img/hightNike3.png"
  alt=""
  class="sneaker__img"
/>
<span class="sneaker__name">Nike jordan</span>
<span class="sneaker__preci">180 euros</span>
<a href="" class="button-light"
  >Ajoutez au panier<i class='bx bx-shopping-bag'></i></i
></a>
</article> */}
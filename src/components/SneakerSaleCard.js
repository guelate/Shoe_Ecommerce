/* eslint-disable no-lone-blocks */

import styled from "styled-components";
import hightNike1 from "../assets/img/hightNike1.png";

import {
  SneakerSaleCard_NIKE1,
  SneakerSaleCard_PRICE_180,
  SneakerSaleCard_SHOPPING_CART,
  SneakerSaleCard_VENTE,
} from "../utils/Constants/children";

const LayoutCard = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 10px 16px 20px;
  outline: solid;
`;

const Vente = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 25%;
  height: 40px;
  outline: solid;
  align-items: center;
  text-align: center;
  align-content: center;
  rotate: -90deg;
  left: 20px;
  top: 30px;
  padding: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 90%;
  height: 92%;
  outline: solid;
  align-items: center;
  padding-top: 15%;
  box-sizing: border-box;
`;
//export ?
const Picture = styled.img`
  width: 170px;
  rotate: -19deg;
`;

//export ?
const Text = styled.p`
  outline: solid;
`;

const SneakerSaleCard = () => {
  return (
    <LayoutCard>
      <Vente>{SneakerSaleCard_VENTE}</Vente>
      <Container>
        <Picture src={hightNike1} />
        <Text>{SneakerSaleCard_NIKE1}</Text>
        <Text>{SneakerSaleCard_PRICE_180}</Text>
        <Text>{SneakerSaleCard_SHOPPING_CART}</Text>
      </Container>
    </LayoutCard>
  );
};
export default SneakerSaleCard;

{
  /* 
<section class="featured section" id="featured">

<h2 class="section-title">En vedette</h2>

<div class="featured__container bd-grid">

  <article class="sneaker">
    <div class="sneaker__sale">Vente</div>
    <img src="assets/img/hightNike1.png" alt="" class="sneaker__img" />
    <span class="sneaker__name">Nike 1</span>
    <span class="sneaker__preci">180 euros</span>
    <a href="" class="button-light"
      >Ajouter au panier<i class="bx bx-right-arrow-alt"></i
    ></a>
  </article>

  <article class="sneaker">
    <div class="sneaker__sale">Vente</div>
    <img src="assets/img/hightNike2.png" alt="" class="sneaker__img" />
    <span class="sneaker__name">Nike 2</span>
    <span class="sneaker__preci">180 euros</span>
    <a href="" class="button-light"
      >Ajouter au panier<i class="bx bx-right-arrow-alt"></i
    ></a>
  </article>

  <article class="sneaker">
    <div class="sneaker__sale">Vente</div>
    <img src="assets/img/hightNike3.png" alt="" class="sneaker__img" />
    <span class="sneaker__name">Nike 3</span>
    <span class="sneaker__preci">180 euros</span>
    <a href="" class="button-light"
      >Ajouter au panier<i class="bx bx-right-arrow-alt"></i
    ></a>
  </article>

</div>
</section> 

*/
}

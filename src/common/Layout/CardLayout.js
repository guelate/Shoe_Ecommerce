import styled from "styled-components";
import { GREY_COLOR } from "../../utils/Constants/style";

const CardLayout = styled.div`
box-sizing: border-box;
// position:absolute;
  display: flex;
  background: ${GREY_COLOR};
  flex-direction:${props => props.sneakerCollectionCard ? "row;":"column;"};
  position: relative;
  width: ${(props) =>
    props.sneakerSaleCard
      ? "300px"
      : props.sneakerProductCard
      ? "250px"
      : props.sneakerCollectionCard
      ? "450px"
      : null};
  height: ${(props) =>
    props.sneakerSaleCard
      ? "400px"
      : props.sneakerProductCard
      ? "400px"
      : props.sneakerCollectionCard
      ? "300px"
      : null}};
  padding: ${(props) =>
    props.sneakerSaleCard
      ? "10px 16px 20px;"
      : props.sneakerProductCard
      ? "0px 16px 20px;"
      : props.sneakerCollectionCard
      ? "0px 0px 35px 20px;"
      : null}};
  border-radius:25px;
  // outline: solid;

`;
export default CardLayout;

/* haut | droit | bas | gauche */

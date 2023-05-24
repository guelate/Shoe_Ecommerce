import styled from "styled-components";
import { GREY_COLOR } from "../../utils/Constants/style";
const CardLayout = styled.div`
box-sizing: border-box;
  display: flex;
  background: ${GREY_COLOR};
  flex-direction: column;
  position: relative;
  width: ${(props) =>
    props.sneakerSaleCard
      ? "300px"
      : props.sneakerProductCard
      ? "100px"
      : props.sneakerCollectionCard
      ? "100px"
      : null};
  height: ${(props) =>
    props.sneakerSaleCard
      ? "400px"
      : props.sneakerProductCard
      ? ""
      : props.sneakerCollectionCard
      ? ""
      : null}};
  padding: ${(props) =>
    props.sneakerSaleCard
      ? "10px 16px 20px;"
      : props.sneakerProductCard
      ? ""
      : props.sneakerCollectionCard
      ? ""
      : null}};
  border-radius:25px;
  // outline: solid;

`;
export default CardLayout;


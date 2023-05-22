import styled from "styled-components";

const CardLayout = styled.div`
  box-sizing: border-box;
  display: flex;
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
  outline: solid;
`;
export default CardLayout;


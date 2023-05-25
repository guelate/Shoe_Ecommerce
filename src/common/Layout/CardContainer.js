import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction:${props => props.sneakerCollectionCard ? "row":"column;"};
  width:${props => props.sneakerCollectionCard ? "100%":"90%;"};
  height: ${props => props.sneakerCollectionCard ? "auto":"92%;"};
  gap: ${props => props.sneakerCollectionCard ? "0px":"25px;"};
  align-items: ${props => props.sneakerCollectionCard ? "":"center;"};
  padding-top: ${props => props.sneakerCollectionCard ? "0%":"15%;"};
  justify-content:${props => props.sneakerCollectionCard ? "space-between":""};
  box-sizing: border-box;
`;

export default CardContainer
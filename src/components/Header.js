/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";
import { HEADER_E_SNEAKERS } from "../utils/Constants/children";
import { createHeaderTitle } from "../utils/functions/main";

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding-left: 200px;
  padding-right: 250px;
  outline: solid;
  height: 100px;
  width: 100%;
  justify-content: space-between;
`;




//change creatab using by tab or constant because the Header componant it use 
//<Home />
const Header = () => {
  return (
    <Container>
      <a href="#">
        {HEADER_E_SNEAKERS}
      </a>
      {createHeaderTitle(["premier", "deuxieme", "troisieme", "quatrieme"])}
    </Container>
  );
};
export default Header;

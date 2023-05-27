import styled from "styled-components";
import List from "../../common/components/List";
import Row from "../../common/components/row";
const Wrapper = styled.div`
  display:flex;
  flex-direction:row;
  outline:solid;
  padding:0% 20px;
  height:40px;
  align-items:center;
  outline:solid;
`
//createText()
export const createText = (children, type, fontSize, letterSpacing) => {
  const validTypes = ["p", "h1", "h2", "h3", "h4", "h5", "h6"];

  if (!validTypes.includes(type)) {
    return null;
  }

  const Text = styled[type]`
    font-size: ${fontSize};
    letter-spacing: ${letterSpacing};
    margin: 0px;
    padding: 0px;
  `;

  return <Text>{children}</Text>;
};

//createPagination() 
export const createPages = (value) => {
  const pages = value;

  return (
    <Row carousel>
      {pages.map((element, index) => (
        <Wrapper key={index}>{element}</Wrapper>
      ))}
    </Row>
  );
};

//createHeaderTitle()
export const createHeaderTitle = (value) => {
  const tab = value;

  return (
    <List>
      {tab.map((element, index) => (
        <p key={index}>{element}</p>
      ))}
    </List>
  );
};

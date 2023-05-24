import styled from "styled-components";

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

  return <Text>{children}</Text>
  
};

/*
SEE TUTORIAL HOW TO ADD GOOGLE FONTS OR CUSTOM FONT IN REACT !!!
   
  font-size: 15px;
  letter-spacing: 2px;

--h2-font-size: 1.25rem;
letter-spacing: 0.1rem;
font-weight: var(--font-bold);
 --font-bold: 700;

  --body-font: "Poppins", sans-serif;
  --big-font-size: 1.25rem;
  --bigger-font-size: 1.5rem;
  --biggest-font-size: 2rem;
  --h2-font-size: 1.25rem;
  --normal-font-size: 0.938rem;
  --smaller-font-size: 0.938rem;

 body {
  margin: var(--header-height) 0 0 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  color: var(--dark-color);
  line-height: 1.6;
}
*/

import styled from "styled-components";

//createText()
export const createText = (children, type) => {
  const Text =
    type === "p"
      ? styled.p`
          font-size: 1em;
          letter-spacing: 0.1rem;
          font-weight:
          // outline: solid;
        `
      : styled.h3`
          outline: solid;
        `;

  return <Text>{children}</Text>;
};


/*
SEE TUTORIAL HOW TO ADD GOOGLE FONTS OR CUSTOM FONT IN REACT !!!
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

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
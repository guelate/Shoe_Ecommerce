import styled from "styled-components";

//createText()
export const createText = (children, type) => {
  const Text =
    type === "p"
      ? styled.p`
          outline: solid;
        `
      : styled.h3`
          outline: solid;
        `;

  return <Text>{children}</Text>;
};

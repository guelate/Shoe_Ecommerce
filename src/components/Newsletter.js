/* eslint-disable no-lone-blocks */
import styled from "styled-components";
import BlackButton from "./BlackButton";
import CardLayout from "../common/Layout/CardLayout";
import CardContainer from "../common/Layout/CardContainer";
import Column from "../common/components/column";
import Row from "../common/components/row";
import { createText } from "../utils/functions/main";

const Input = styled.div`
  outline:solid;
`
const Newsletter = () => {
  return (
    <CardLayout>
      <CardContainer>
        <Row>
          <Column>
          {createText()}
          {createText()}
          </Column>
          <Input />
          <BlackButton children={"ljwefeikn"}/>
        </Row>
      </CardContainer>
    </CardLayout>
  );
};
export default Newsletter;

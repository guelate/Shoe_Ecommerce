import styled from "styled-components"
import CardLayout from "../common/style/CardLayout"
import { createText } from "../utils/functions/main"
import Row from "../common/components/row"

const DescriptionWrapper = styled.div`
    display:flex;
    flex-direction:column;
    outline:solid;
`


const SneakerCollectionCard = () => {

    //add propertie cardLayout flex:row ?
    return(
        <CardLayout>
            <DescriptionWrapper>
                {createText()}
                {createText()}

                <Row>
                {createText()}
                {/* arrow */}
                </Row>
            </DescriptionWrapper>
            {/* img here  */}
        </CardLayout>
        )
}
export default SneakerCollectionCard
//reprendre les anciens composant et modifier le style, surbrillance ? 
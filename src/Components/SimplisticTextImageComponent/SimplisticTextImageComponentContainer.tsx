
import { FC, memo } from "react";
import SimplisticTextImageComponent from "./SimplisticTextImageComponent";
interface SimplisticTextImageComponentContainerProps {

}

const SimplisticTextImageComponentContainer: React.FC<SimplisticTextImageComponentContainerProps> = props => {

    const {

    } = props;

    return (
        <>
              <SimplisticTextImageComponent/>
        </>
    );

}

export default memo(SimplisticTextImageComponentContainer);

import { FC, memo } from "react";
import FooterComponent from "./FooterComponent";
interface FooterComponentContainerProps {

}

const FooterComponentContainer: React.FC<FooterComponentContainerProps> = props => {

    const {

    } = props;

    return (
        <>
              <FooterComponent/>
        </>
    );

}

export default memo(FooterComponentContainer);
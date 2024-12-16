
import { FC, memo } from "react";
import FooterComponent from "./FooterComponent";
import { FooterComponentData } from "../../DataSource/HomePageData/FooterComponentData";
interface FooterComponentContainerProps {

}

const FooterComponentContainer: React.FC<FooterComponentContainerProps> = props => {

    const {

    } = props;

    const data = FooterComponentData;

    return (
        <>
              <FooterComponent data={data}/>
        </>
    );

}

export default memo(FooterComponentContainer);
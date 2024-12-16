
import { FC, memo } from "react";
import BasicTextBasedComponent from "./BasicTextBasedComponent";
import { Img } from "react-image";
interface BasicTextBasedComponentContainerProps {

}

const BasicTextBasedComponentContainer: React.FC<BasicTextBasedComponentContainerProps> = props => {

    const {

    } = props;

    const imageUrl = process.env.REACT_APP_CLIENT_HOME_SCREEN_TEXT_BASED_COMPONENT_01;
    const imageUrlTwo = process.env.REACT_APP_CLIENT_HOME_SCREEN_TEXT_BASED_COMPONENT_02;

    const MyImageOne = () => (
        <Img
            src={[imageUrl + "", imageUrl + ""]}
            alt="Responsive"
            style={{height: 430, borderRadius: 8, padding: 8}}
        />
    );

    const MyImageTwo = () => (
        <Img
            src={[imageUrlTwo + "", imageUrlTwo + ""]}
            alt="Responsive"
            style={{height: 60, width: 60, borderRadius: "50%",}}
        />
    );

    return (
        <>
            <BasicTextBasedComponent
                ResponsiveImageOne={MyImageOne}
                ResponsiveImageTwo={MyImageTwo}
            />
        </>
    );

}

export default memo(BasicTextBasedComponentContainer);
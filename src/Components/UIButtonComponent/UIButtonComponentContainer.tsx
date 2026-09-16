
import { FC, memo } from "react";
import UIButtonComponent from "./UIButtonComponent";
interface UIButtonComponentContainerProps {

}

const UIButtonComponentContainer: React.FC<UIButtonComponentContainerProps> = props => {

    const {

    } = props;

    return (
        <>
              <UIButtonComponent/>
        </>
    );

}

export default memo(UIButtonComponentContainer);
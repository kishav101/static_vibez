import { FC, memo } from "react";
import UIButtonComponentStyles from "./UIButtonComponentContainerStyles";
interface UIButtonComponentProps {

}

const UIButtonComponent: React.FC<UIButtonComponentProps> = props => {

    const {

    } = props;

    const { classes } = UIButtonComponentStyles();

    return (
        <>
            <div>
                
            </div>
        </>
    );

}

export default memo(UIButtonComponent);
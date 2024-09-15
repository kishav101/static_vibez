import { FC, memo } from "react";
import ReasonComponent from "./ReasonComponent";

interface ReasonComponentContainerProps {

}

const ReasonComponentContainer: FC<ReasonComponentContainerProps> = props =>{

    const{

    } = props;

    return(
        <>
        <ReasonComponent/>
        </>
    );
}

export default memo(ReasonComponentContainer);
import { FC, memo } from "react";
import QuoteButtonComponent from "./QuoteButtonComponent";

interface QuoteButtonComponentContainerProps {

}

const QuoteButtonComponentContainer: FC<QuoteButtonComponentContainerProps> = props =>{

    const{

    } = props;

    return(
        <>
         <QuoteButtonComponent />
        </>
    );
}

export default memo(QuoteButtonComponentContainer);
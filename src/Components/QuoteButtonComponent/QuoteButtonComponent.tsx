import { FC, memo } from "react";
import QuoteButtonComponentStyles from "./QuoteButtonComponentStyles";
import { FaArrowCircleRight, FaArrowDown, FaArrowRight, FaSearch } from "react-icons/fa";

interface QuoteButtonComponentProps {

}

const QuoteButtonComponent: FC<QuoteButtonComponentProps> = props =>{

    const{

    } = props;

    const { classes } = QuoteButtonComponentStyles();
 
    return(
        <>
        <div className={classes.root}>
            <div>
                 <FaArrowDown size={35} className={classes.downArrowIconContainer}  />
            </div>
            <div>
                <button type="submit" className={classes.inputBtn}>
                    Get Quote Today 
                 <FaArrowCircleRight size={25} className={classes.innBtnIcon}  />
                </button>
            </div>
        </div>
        </>
    );
}

export default memo(QuoteButtonComponent);
import { FC, memo } from "react";
import FooterComponentStyles from "./FooterComponentContainerStyles";
import { FaAccessibleIcon, FaArrowRight, FaBattleNet, FaHandsHelping, FaInternetExplorer, FaLaptopCode, FaMobile, FaMobileAlt, FaPhone } from "react-icons/fa";
interface FooterComponentProps {

}

const FooterComponent: React.FC<FooterComponentProps> = props => {

    const {

    } = props;

    const { classes } = FooterComponentStyles();

    return (
        <>
            <div className={classes.root}>
                <div className={classes.firstRowBackGround}>
                    <p className={classes.firstRowText}>DDevelopment Data (Pty) Ltd</p>
                    <div className={classes.headerSecondRow}>
                        <div className={classes.headerSecondRowColumn}>
                            <div className={classes.headerSecondRowIcon}>
                                <FaInternetExplorer size={26} color="white" />
                                <span className={classes.headerSecondRowFont}>  Websites</span>
                            </div>
                        </div>
                        <div>
                            <div className={classes.headerSecondRowColumn}>
                                <div className={classes.headerSecondRowIcon}>
                                    <FaHandsHelping size={26} color="white" />
                                    <span className={classes.headerSecondRowFont}>  Need Help </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={classes.headerSecondRowColumn}>
                                <div className={classes.headerSecondRowIcon}>
                                    <FaBattleNet  size={26} color="white" />
                                    <span className={classes.headerSecondRowFont}>  Check our Services</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={classes.headerSecondRowColumn}>
                                <div className={classes.headerSecondRowIcon}>
                                    <FaMobileAlt  size={26} color="white" />
                                    <span className={classes.headerSecondRowFont}>Contact Us ?</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.SecondRowBackGround}>

                </div>
                <div>

                </div>
            </div>

        </>
    );

}

export default memo(FooterComponent);
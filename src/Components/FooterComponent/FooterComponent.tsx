import { FC, memo } from "react";
import FooterComponentStyles from "./FooterComponentContainerStyles";
import { FaAccessibleIcon, FaArrowRight, FaBattleNet, FaHandsHelping, FaInternetExplorer, FaLaptopCode, FaMobile, FaMobileAlt, FaPhone } from "react-icons/fa";
import { IconType } from "react-icons";
interface FooterComponentProps {
    data: any
}

const FooterComponent: React.FC<FooterComponentProps> = props => {

    const {
        data
    } = props;

    const { classes } = FooterComponentStyles();

    const SecondRowColumns = () => {
        return data.columnData.map((item: any, idx: number) => {
            return (
                <>
                    <div className={classes.secondRowCol}>
                        <text className={classes.secondRowTextHeader}>{item.Title}</text>
                        <ul className={classes.secondRowcolumnList}>
                            {item.listItems.map((li: any, idx: number) => (
                                <>
                                    <li className={classes.secondRowcolumnListItem}>
                                        {li}
                                    </li>

                                </>
                            ))}
                            {
                                item.Icon !== null &&
                                item.Icon.map((Icon: IconType, idx: number) => (
                                    <li key={idx} color="white" className={classes.secondRowColumnListIcon}>
                                        <Icon />
                                    </li>
                                ))

                            }

                        </ul>
                    </div>
                </>
            )
        })
    }

    return (
        <>
            <div className={classes.root}>
                <div className={classes.firstRowBackGround}>
                    <p className={classes.firstRowText}>{data.Header.title}</p>
                    <div className={classes.headerSecondRow}>
                        <div className={classes.headerSecondRowColumn}>
                            <div className={classes.headerSecondRowIcon}>
                                <div className={classes.headerRowCenterTexIcon}>
                                    <FaInternetExplorer size={26} color="white" />
                                    <span className={classes.headerSecondRowFont}> {data?.Header?.descritionOneText}</span>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className={classes.headerSecondRowColumn}>
                                <div className={classes.headerSecondRowIcon}>
                                    <div className={classes.headerRowCenterTexIcon}>
                                        <FaHandsHelping size={26} color="white" />
                                        <span className={classes.headerSecondRowFont}>{data.Header?.descritionTwoText}</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={classes.headerSecondRowColumn}>
                                <div className={classes.headerSecondRowIcon}>
                                    <div className={classes.headerRowCenterTexIcon}>
                                        <FaBattleNet size={26} color="white" />
                                        <span className={classes.headerSecondRowFont}>{" " + data.Header?.descritionThreeText}</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={classes.headerSecondRowColumn}>
                                <div className={classes.headerSecondRowIcon}>
                                    <div className={classes.headerRowCenterTexIcon}>
                                        <FaMobileAlt size={26} color="white" />
                                        <span className={classes.headerSecondRowFont}>{data.Header?.descritionFourText}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.SecondRowBackGround}>
                    <SecondRowColumns />
                </div>
                <div className={classes.ThirdRowBackGround} >
                    <text className={classes.thirdRowLftText}>B-BBEE LEVEL 1 CONTRIBUTOR: 135% PROCUREMENT RECOGNITION
                    </text>
                </div>
            </div>

        </>
    );

}

export default memo(FooterComponent);
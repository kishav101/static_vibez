import { FC, memo } from "react";
import BasicTextBasedComponentStyles from "./BasicTextBasedComponentContainerStyles";
import { Icon, Rating } from "@mui/material";
import { FaCheckCircle } from "react-icons/fa";
interface BasicTextBasedComponentProps {
    ResponsiveImageOne: () => JSX.Element;
    ResponsiveImageTwo: () => JSX.Element;
}

const BasicTextBasedComponent: React.FC<BasicTextBasedComponentProps> = props => {

    const {
        ResponsiveImageOne,
        ResponsiveImageTwo
    } = props;

    const { classes } = BasicTextBasedComponentStyles();

    const CheckBoxRowSubFunction = () => {

    }

    return (
        <>
            <div className={classes.root}>
                <div className={classes.leftBox}>
                    <div className={classes.leftBoxInnerBox} />
                    <div>
                        <div className={classes.leftinnerBoxContainer}>
                            <text className={classes.leftBoxInnerBoxTittle}>Fantastic Service!</text>
                            <p className={classes.leftBoxInnerBoxText}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s.

                            </p>
                            <br></br>
                            <div className={classes.leftBoxCheckBoxRow}>
                                <div className={classes.leftBoxCheckBox}>
                                    <FaCheckCircle color={process.env.REACT_APP_CLIENT_SECONDARY_COLOUR} size={22} />
                                </div>
                                <div className={classes.leftBoxCheckBoxText}>
                                    Fast reliable service, you can trust.
                                </div>
                            </div>
                            <div className={classes.leftBoxCheckBoxRow}>
                                <div className={classes.leftBoxCheckBox}>
                                    <FaCheckCircle color={process.env.REACT_APP_CLIENT_SECONDARY_COLOUR} size={22} />
                                </div>
                                <div className={classes.leftBoxCheckBoxText}>
                                    Fast reliable service, you can trust.
                                </div>
                            </div>
                            <div className={classes.leftBoxCheckBoxRow}>
                                <div className={classes.leftBoxCheckBox}>
                                    <FaCheckCircle color={process.env.REACT_APP_CLIENT_SECONDARY_COLOUR} size={22} />
                                </div>
                                <div className={classes.leftBoxCheckBoxText}>
                                    Fast reliable service, you can trust.
                                </div>
                            </div>
                            <div className={classes.leftInnerBoxlastRowContainer}>
                                <div className={classes.leftInnerBoxlastRow_Left}>
                                    <Rating
                                        name="simple-controlled"
                                        value={4}
                                        readOnly={true}
                                        size="large"
                                    />
                                </div>
                                <div className={classes.leftInnerBoxlastRow_Right}>
                                    <div>
                                        <ResponsiveImageTwo />
                                    </div>
                                    <div>
                                        <text className={classes.rightBoxTextTitle}>Immaculate Service Delivery</text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>

                </div>
                <div className={classes.rightBox}>
                    <div className={classes.rightImageFlashBoxAlpha}>
                        <p className={classes.rightImageFlashBoxAlphaText}>Customer Satisfaction</p>
                    </div>
                    <div className={classes.rightBoxImageContainer}>
                        <ResponsiveImageOne />
                        <div className={classes.rightBoxImageOneOverlay} />
                        <div className={classes.rightImageOneOverText}>
                            <p>
                                <b>DDevelopment Data, </b>
                                "we deliver only the best service to our clients in a profficient and cheap way. Finding a reliable and productive solutions is our aim".
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default memo(BasicTextBasedComponent);
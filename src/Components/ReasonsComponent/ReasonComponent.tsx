import { FC, memo } from "react";
import ReasonComponentStyles from "./ReasonComponentStyles";
import { FaArrowRight } from "react-icons/fa";

interface ReasonComponentProps {

}

const ReasonComponent: FC<ReasonComponentProps> = props => {

    const {

    } = props;

    const { classes } = ReasonComponentStyles({
        backgroundColorOne: "#21ed28",
        color1: "#d6ffe1",
        color2: "#8bfc91",
        backgroundColorTwo: "#c187e6",
        color3: "#e2bcf7",
        color4: "#c187e6",
        backgroundColorThree: "#6dc0de",
        color5: "#93dffa",
        color6: "#6dc0de"
    });

    const RenderCircle = (props: any) => (
        <>
            <div className={classes.circleOne}>
                <div className={classes.circleTwo}>
                    <div className={classes.circleThree}>
                        <p className={classes.font}>{props.text}</p>
                    </div>
                </div>
            </div>
        </>
    )

    return (
        <>
            <div className={classes.root}>
                <h4 className={classes.reasonFont}>Reasons to use our services today_</h4>
                <div className={classes.reasonContainer}>
                    <div>
                    </div>
                    <div className={classes.column}>
                        <div className={classes.columnContent}>
                            <div>
                                <RenderCircle text="1" color1="#d6ffe1" color2="#8bfc91" backgroundColorOne="#21ed28" backgroundColorTwo="" />
                            </div>

                        </div>
                        <div className={classes.textContextBox}>
                            <p className={classes.fontContext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                            <FaArrowRight size={24} color="white" />
                        </div>

                    </div>
                    <div className={classes.column}>
                        <div className={classes.columnContent}>
                            <div className={classes.circleOneColTwo}>
                                <div className={classes.circleTwoColTwo}>
                                    <div className={classes.circleThreeColTwo}>
                                        <p className={classes.fontColTwo}>2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.textContextBox}>
                            <p className={classes.fontContext}>Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book.
                            </p>
                            <FaArrowRight size={24} color="white" />
                        </div>

                    </div>
                    <div className={classes.column}>
                        <div className={classes.columnContent}>
                            <div className={classes.circleOneColThree}>
                                <div className={classes.circleTwoColThree}>
                                    <div className={classes.circleThreeColThree}>
                                        <p className={classes.fontColColThree}>3</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={classes.textContextBox}>
                            <p className={classes.fontContext}>Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of
                                type and scrambled it to make a type specimen book.
                            </p>
                            <FaArrowRight size={20} color="white" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(ReasonComponent);
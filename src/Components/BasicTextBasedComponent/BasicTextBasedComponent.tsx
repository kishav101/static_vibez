import { FC, memo } from "react";
import BasicTextBasedComponentStyles from "./BasicTextBasedComponentContainerStyles";
import { Rating } from "@mui/material";
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
                                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                            <br></br>
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
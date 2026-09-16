import { FC, memo } from "react";
import SimplisticTextImageComponentStyles from "./SimplisticTextImageComponentContainerStyles";
interface SimplisticTextImageComponentProps {

}

const SimplisticTextImageComponent: React.FC<SimplisticTextImageComponentProps> = props => {

    const {

    } = props;

    const { classes } = SimplisticTextImageComponentStyles();

    return (
        <>
            <div className={classes.root}>
                <div className={classes.leftBoxContainer}>
                    <div>
                        <p className={classes.leftBoxHeaderText}>
                            Make you cloud beatiful storage beatiful.
                        </p>
                    </div>
                    <div>
                        <p className={classes.leftBoxSubText}>
                            Intelligently organise, share and collaborate on files and folder with your whole team. 
                        </p>
                    </div>
                    <div className={classes.leftBoxThirdRowButtonsContainer}>
                        <div>
                                
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
    );

}

export default memo(SimplisticTextImageComponent);
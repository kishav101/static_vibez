import { darken, lighten } from "@mui/material";
import { tss } from "tss-react";


const BasicTextBasedComponentStyles = tss.withParams<{}>().create(({ }) => ({
    root: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '2%',
        display: 'flex',
        alignItems: 'center',
        boxShadow: `0px 1px 4px rgb(167, 163, 163)`,
        marginLeft: 14,
        marginRight: 14
    },
    leftBox: {
        display: 'flex',
        flex: 1,
        border: '1px solid',
        borderColor: lighten(`${process.env.REACT_APP_CLIENT_SECONDARY_COLOUR}`, 0.2),
        boxShadow: `0px 1px 4px ${process.env.REACT_APP_CLIENT_SECONDARY_COLOUR}`,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        height: "20%"
    },
    leftBoxInnerBox: {
        padding: "1%",
        width: '1%',
        backgroundColor: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,

    },
    leftinnerBoxContainer: {
        padding: "3%"
    },
    leftBoxInnerBoxTittle: {
        fontSize: '26px',
        fontWeight: 'bold',
    },
    leftBoxInnerBoxText: {
        fontSize: '18px',
    },
    leftInnerBoxlastRowContainer: {
        flexDirection: 'row',
        flexWrap: "wrap",
        display: "flex",
        width: '100%',
    },
    leftInnerBoxlastRow_Right: {
        flex: 1,
        textAlign: 'right',

    },
    leftInnerBoxlastRow_Left: {
        flex: 1,
        textAlign: 'left'
    },
    // leftInnerBoxlastRow_Icon: {
    //     borderRadius: '50%',
    //     backgroundColor: "#000",
    //     padding: "5%",
    //     height: 25,
    //     width: 25,
    //     justifySelf: 'right',
    // },
    rightBox: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,

    },
    rightBoxImageContainer: {
        boxShadow: `0px 1px 4px #c9c9c9`,
        borderRadius: 8,
        position: "relative",
        width: 450,
        height: 450,

    },
    rightBoxTextTitle: {
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    rightBoxImageOneOverlay: {
        position: "absolute",
        left: 9,
        bottom: 13,
        width: "95%",
        height: "30%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    rightImageOneContainer: {
        position: "relative",
        width: 450,
        height: 450,
    },
    rightImageOneOverText: {
        position: "absolute",
        bottom: 15,
        left: 10,
        color: "white",
        fontSize: 18,
        padding: 10,
        fontFamily: 'tahoma'
    }

}));

export default BasicTextBasedComponentStyles;

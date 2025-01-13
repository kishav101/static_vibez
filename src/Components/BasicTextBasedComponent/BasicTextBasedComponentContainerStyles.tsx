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
        marginRight: 14,
    },
    leftBox: {
        display: 'flex',
        flex: 1,
        borderBottomWidth: "2px",
        borderBottomStyle: "solid",
        borderBottomColor: lighten(
            process.env.REACT_APP_CLIENT_SECONDARY_COLOUR || "#000",
            0.7
        ),

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
        fontSize: '24px',
        fontWeight: 'bold',
        color: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
        fontFamily: 'tahoma'
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
    leftBoxCheckBoxRow: {
        flexDirection: "row",
        display: 'flex',
        alignItems: 'cernter',
        justifyContent: 'center'
    },
    leftBoxCheckBox: {
        paddingRight: 15,
        marginBottom: 10
    },
    leftBoxCheckBoxText: {
        flex: 1
    },
    rightBox: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        marginLeft: 0,
        transform: "translateX(90px)"

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
    },
    rightImageFlashBoxAlpha: {
        zIndex: 999,
        backgroundColor: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
        height: 45,
        width: 200,
        borderRadius: 15,
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        position: "absolute",
        borderColor: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        marginRight: 400,
        marginTop: 30

    },
    rightImageFlashBoxAlphaText: {
        color: "#FFF",
        fontFamily: 'tahoma'
    }

}));

export default BasicTextBasedComponentStyles;

import { darken, lighten } from "@mui/material";
import { tss } from "tss-react";


const FooterComponentStyles = tss.withParams<{}>().create(({ }) => ({
    root: {
        padding: 10
    },
    firstRowBackGround: {
        backgroundColor: lighten(`${process.env.REACT_APP_CLIENT_SECONDARY_COLOUR}`, 0.2),
        padding: 15
    },
    firstRowText: {
        fontFamily: 'sans-serif',
        fontSize: 22,
        color: "#FFF",
        fontWeight: "bold",
        marginLeft: "1%"
    },
    headerSecondRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        display: "flex",
        maxWidth: 678
    },
    headerSecondRowColumn: {
        flexDirection: 'row',
        alignContent: "center",
        display: 'flex'
    },
    headerSecondRowFont: {
        color: "#FFF",
        fontSize: 20,
        fontFamily: "sans-serif",
    },
    headerSecondRowIcon: {
        marginTop: 10
    },
    headerRowCenterTexIcon: {
        display: "flex",
        alignItems: 'center',
    },
    SecondRowBackGround: {
        backgroundColor: lighten(`${process.env.REACT_APP_CLIENT_SECONDARY_COLOUR}`, 0.0),
        padding: 20,
        flexDirection: "row",
        display: "flex"
    },
    secondRowCol: {
        flex: 1,
    },
    secondRowTextHeader: {
        color: 'white',
        fontFamily: "sans-serif",
        fontWeight: "bold"
    },
    secondRowcolumnList: {
        listStyleType: "none",
        padding: 0,
    },
    secondRowcolumnListItem: {
        color: "white",
        fontFamily: "sans-serif",
        paddingBottom: 10,
        cursor: "pointer",
        ":Hover": {
            transform: "translateY(-3px)",
            transition: "transform 0.8s ease"
        },
    },
    secondRowColumnListIcon: {
        display: "inline",
        color: "#FFF",
        fontSize: 26,
        padding: "4%",
        marginLeft: -14,
        cursor: "pointer",
        ":Hover": {
            transform: "translateY(-3px)",
            transition: "transform 0.3s ease"
        },
    },
    ThirdRowBackGround: {
        backgroundColor: darken(`${process.env.REACT_APP_CLIENT_SECONDARY_COLOUR}`, 0.2),
        padding: 20,
        flexDirection: "row",
        display: "flex"
    },
    thirdRowLftText: {
        color: "#FFF",
        fontSize: 10,
        fontFamily: "sans-serif"
    }
}));

export default FooterComponentStyles;

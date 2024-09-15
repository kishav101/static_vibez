import { lighten } from "@mui/material";
import { tss } from "tss-react";


const FooterComponentStyles = tss.withParams<{}>().create(({ }) => ({
    root: {
      padding: 10
    },
    firstRowBackGround: {
        backgroundColor: lighten(`${process.env.REACT_APP_CLIENT_SECONDARY_COLOUR}`, 0.2),
        padding: 15
    },
    firstRowText:{
        fontFamily: 'sans-serif',
        fontSize: 22,
        color: "#FFF",
        fontWeight: "bold",
        marginLeft: "1%"
    },
    headerSecondRow: {
        flexDirection: 'row',
        justifyContent:'space-around',
        display: "flex",
        maxWidth: 678
    },
    headerSecondRowColumn: {
         flexDirection: 'row',
         alignContent: "center",
         display: 'flex'
    },
    headerSecondRowFont:{
        color: "#FFF",
        fontSize: 20,
        fontFamily: "sans-serif",
    },
    headerSecondRowIcon: {
        marginTop: 10
    },
    SecondRowBackGround: {
        backgroundColor: lighten(`${process.env.REACT_APP_CLIENT_SECONDARY_COLOUR}`, 0.0),
        padding: 20
    },

}));

export default FooterComponentStyles;

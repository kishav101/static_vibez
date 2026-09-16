import { tss } from "tss-react";


const SimplisticTextImageComponentStyles = tss.withParams<{}>().create(({ }) => ({
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
    leftBoxContainer: {
        flex: 1,
        display: "flex",
        flexDirection: 'column'
    },
    leftBoxHeaderText: {
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       fontFamily: 'tahoma',
       fontWeight: 600,
       fontSize: 22
    },
    leftBoxSubText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'tahoma',
        fontWeight: 100,
        fontSize: 14
     },
     leftBoxThirdRowButtonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
       
     },
    RightBoxContainer: {
        flex: 1,
          display: "flex"
    }

}));

export default SimplisticTextImageComponentStyles;

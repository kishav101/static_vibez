import { keyframes, tss } from "tss-react";


const LandingServicesStyles = tss.create(({  }) => ({
    root: {
       display: 'flex',
       flexDirection: 'row',
       width: '100%',
       flexWrap: 'wrap',
       backgroundColor: "#f0ebeb",
     
    },
    containerLeft: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: "10%",
        paddingBottom: "10%",
        paddingLeft: "5%",
        paddingRight: "5%"
    },
    containerRight: {
        flex: 1,
    },
    textRowOne: {
      
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Tahoma',
        color: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
    }
  
}));

export default LandingServicesStyles;
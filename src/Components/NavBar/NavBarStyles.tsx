import { tss } from "tss-react";

const NavBarStyles = tss.create(({ }) => ({
    root: {
    },
    nav: {
        listStyleType: 'none',
        width: "100%",
        height: "100",
        backgroundColor: "#FFF",
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
    navContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    listContainer: {
        display: "flex"
    },
    navbarLogo: {
        width: 60,
        height:60,
        alignItems: 'center',
        display: 'flex',
        marginLeft: 10,
        padding: 10,
    },
    navbarItem: {
        justifyContent: 'space-between',
        listStyle: 'none',
        textDecoration: 'none',
        "&:Hover": {
            color: process.env.REACT_APP_CLIENT_PRIMARY_COLOUR
            
        }
    },
    navbarlink: {
        padding: 10,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
        fontSize: 16,
        fontFamily: 'Tahoma',
        fontWeight: 'bold',
        transition: '0.3s ease',
        color: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
        "&:Hover": {
            color: "#FFF",
            fontSize: 18,
            backgroundColor: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR
        }
    }
}));

export default NavBarStyles;
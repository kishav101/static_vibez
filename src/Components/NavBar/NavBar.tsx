import NavBarStyles from "./NavBarStyles";


interface NavBarProps{

}

const NavBar: React.FC<NavBarProps> = props => {

    const {

    } = props;

    const{ classes } = NavBarStyles();

    return(<>
        <div className={classes.root}>
        <nav className={classes.nav} >
        <div className={classes.navContainer} >
            <div>
             <img className={classes.navbarLogo} src={process.env.REACT_APP_CLIENT_IMAGE_ICON}/>
            </div>
         <div>
         <ul className={classes.listContainer}>
                <li className={classes.navbarItem}><a className={classes.navbarlink} href="#">Home</a></li>
                <li className={classes.navbarItem}><a  className={classes.navbarlink} href="#">About</a></li>
                <li className={classes.navbarItem}><a className={classes.navbarlink} href="#">Services</a></li>
                <li className={classes.navbarItem}><a className={classes.navbarlink} href="#">Contact</a></li>
            </ul>
         </div>
          
        </div>
    </nav>
        </div>
    </>
    )
}

export default NavBar;
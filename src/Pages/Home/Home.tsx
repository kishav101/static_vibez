import { BasicTextBasedComponentContainer } from "../../Components/BasicTextBasedComponent";
import { HomeScreenSecondRowComponentContaine } from "../../Components/HomeScreenSecondRowComponent";
import { LandingImageComponentContainer } from "../../Components/LandingImageComponent";
import { LandingServicesComponentContainer } from "../../Components/LandingServicesComponent";
import { ReasonComponentContainer } from "../../Components/ReasonsComponent";



interface HomeProps{

}

const Home: React.FC<HomeProps> = props => {
    const {

    } = props;

    return(
        <>
        <div>
            <LandingImageComponentContainer/>
            <LandingServicesComponentContainer />
            <HomeScreenSecondRowComponentContaine />
            <ReasonComponentContainer/>
            <BasicTextBasedComponentContainer/>
        </div>
          
        </>
    )
}

export default Home;
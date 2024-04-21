import { LandingImageComponentContainer } from "../../Components/LandingImageComponent";
import { LandingServicesComponentContainer } from "../../Components/LandingServicesComponent";



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
        </div>
          
        </>
    )
}

export default Home;
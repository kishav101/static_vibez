import { isBrowser, isMobile } from 'react-device-detect';
import { ScreenSizeEnum } from '../Enums/DeviceEnum';

const screenLayout = () => {
    if(isMobile===true) {
        return ScreenSizeEnum.MOBILE;
    } else if(isBrowser){
        return ScreenSizeEnum.DESKTOP
    }
    else {
        return ScreenSizeEnum.MOBILE;
    }
}

export default screenLayout;
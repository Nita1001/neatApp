import crown from '../assets/icons/crown-colored.png'
import rocket from '../assets/icons/rocket-front-gradient.png'
import fire from '../assets/icons/fire-front-gradient.png'
import star from '../assets/icons/star-front-gradient.png'
import target from '../assets/icons/target-front-gradient.png'
import calendar from '../assets/icons/calender-front-gradient.png'

const useHexIcons = () => {
    const isIcon = true;

    const generateIcon = (badge) => {
        switch (badge) {
            case 'crown':
                return crown;
            case 'rocket':
                return rocket;
            case 'fire':
                return fire;
            case 'star':
                return star;
            case 'target':
                return target;
            case 'calendar':
                return calendar;
            default:
                return;
        }
    }

    return {
        generateIcon,
        isIcon,
    }
}

export default useHexIcons
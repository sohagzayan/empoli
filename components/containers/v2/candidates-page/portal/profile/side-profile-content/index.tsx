import ChangePassword from "../change-password";
import Notification from "../notification";
import ProfileInformation from "../profile-information";
import EditProfile from "../edit-profile";

interface SideProfileContentType {
    activeInsightsTab: number;
    setActiveInsightsTab: React.Dispatch<React.SetStateAction<number>>;
}

const SideProfileContent = ({ activeInsightsTab, setActiveInsightsTab }: SideProfileContentType) => {

    const getActiveTabContent = (activeProfileTab: number) => {
        switch (activeProfileTab) {
            case 1:
                return <EditProfile />;
            case 2:
                return <ProfileInformation />;
            case 3:
                return <ChangePassword />;
            case 4:
                return <Notification />;
            default:
                return null;
        }
    };

    return (
        <div>
            <div>
                {getActiveTabContent(activeInsightsTab)}
            </div>
        </div>
    );
}

export default SideProfileContent;

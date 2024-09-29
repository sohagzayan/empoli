import Notification from "./Notification";
import EditProfile from "./EditProfile";
import Notes from "./Notes";
import SkillTest from "./SkillTest";
import AddResume from "./AddResume";

interface SideProfileContentType {
    activeInsightsTab: number;
    setActiveInsightsTab: React.Dispatch<React.SetStateAction<number>>;
}

const ProfileContent = ({ activeInsightsTab, setActiveInsightsTab }: SideProfileContentType) => {

    const getActiveTabContent = (activeProfileTab: number) => {
        switch (activeProfileTab) {
            case 1:
                return <EditProfile />;
            case 2:
                return <Notes />;
            case 3:
                return <SkillTest />;
            case 4:
                return <AddResume />;
            case 5:
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

export default ProfileContent;

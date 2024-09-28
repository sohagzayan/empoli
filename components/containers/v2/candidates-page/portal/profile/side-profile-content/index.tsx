import ChangePassword from "../change-password";
import Notification from "../notification";
import EditProfile from "../edit-profile";
import Notes from "../notes";
import SkillTest from "../skill-test";
import AddResume from "../add-resume";

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

export default SideProfileContent;

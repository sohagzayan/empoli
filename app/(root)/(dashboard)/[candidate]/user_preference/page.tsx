
import Preference from "@/components/containers/dashboard/user_preference/Preference"
import UserPreferenceMain from "@/components/containers/dashboard/user_preference/UserPreferenceMain"
import { useSession } from "next-auth/react"
import { cookies } from 'next/headers'





const UserPreference = async () => {


    return (
        <div>
            <UserPreferenceMain />
        </div>
    )
}

export default UserPreference


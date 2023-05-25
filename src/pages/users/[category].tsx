import { useRouter } from "next/router"
import Dashboard from "./dashboard"
import AllUsers from "./allusers"
import AllDoctors from './alldoctors'
import AllSupporters from './allsupporters'
import Booking from "./booking"
import UpdatePatient from "./newpatient"
const Category = () => {
    const router = useRouter()
    const {category} = router.query
    return (
        <div>
            {
            !category ? <Dashboard/> : 
            category === 'allUsers' ? <AllUsers/> : 
            category === 'allDoctors' ? <AllDoctors/> : category === 'allSupporters' ? <AllSupporters/> : 
            category === 'Booking' ? <Booking/> : 
            category === 'Newpatient' ? <UpdatePatient/> : '' }
        </div>
    )
}
export default Category
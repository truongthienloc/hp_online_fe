import AdminLayOut from "~/components/Layouts/AdminLayout"
import Content from "./content"

import { NextPageWithLayout } from "~/types"
const Users:NextPageWithLayout = () => {
    return(
        <div className="h-[100%] w-[100%] p-[80px]">
            <Content/>
        </div>
    )
}
Users.getLayout = (page:React.ReactElement) => {
    return (
        <AdminLayOut>
            {page}
        </AdminLayOut>
    )
}
export default Users
import UserTable from "./UserTable"

const AllSupporters = () => {
    return (
        <div className="p-[80px]">
            <div className="mb-4">
                <h2 className="font-bold text-lg">Quản lí hỗ trợ viên</h2>
            </div>
            <div>
                <UserTable />
            </div>
        </div>
    )
}
export default AllSupporters
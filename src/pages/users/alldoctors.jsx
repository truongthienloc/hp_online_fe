import UserTable from "./UserTable"

const AllDoctors = () => {
    return (
        <div className="p-[80px]">
            <div className="mb-4">
                <h2 className="font-bold text-lg">Quản lí bác sĩ</h2>
            </div>
            <div>
                <UserTable/>
            </div>
        </div>
    )
}
export default AllDoctors
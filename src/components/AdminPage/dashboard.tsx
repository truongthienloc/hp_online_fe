import CardItem from '../../pages/users/carditem';
const Dashboard = () => {
    return (
        <div className="flex items-center justify-center">
            <CardItem heading="All Users" total={123} borderColor="yellow" />
            <CardItem heading="All Doctors" total={123} borderColor="green" />
            <CardItem heading="All Supporters" total={123} borderColor="red" />
        </div>
    );
};

export default Dashboard;

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NewPatientTable from './newpatienttable';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
type UserType = {
    userID: number;
    updateAt: string;
    appointmentID: number;
    name: string;
    phone: string;
    email: string;
    status: 'accepted' | 'canceled'
};
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const UpdatePatient = () => {
    const [value, setValue] = React.useState(0);

    const [dataPending, setDataPending] = useState<UserType[]>([]);
    const [dataApprove, setDataApprove] = useState<UserType[]>([]);
    const [dataCancel, setDataCancel] = useState<UserType[]>([]);
    useEffect(() => {
        const getPendingData = async () => {
            try {
                await axios
                .get('https://onlinehpbe.onrender.com/get-pending-users')
                .then((response) => {
                    if(response.data){
                        setDataPending(response.data)
                    }
                });
            } 
            catch(err) {
                console.log(err)
            }
        };
        const getApproveData = async () => {
            try {
                await axios
                .get('https://onlinehpbe.onrender.com/get-approve-users')
                .then((response) => {
                    if(response.data){
                        setDataApprove(response.data)
                    }
                });
            } 
            catch(err) {
                console.log(err)
            }
        }
        const getCancelData = async () => {
            try {
                await axios
                .get('https://onlinehpbe.onrender.com/get-cancel-users')
                .then((response) => {
                    if(response.data){
                        setDataCancel(response.data)
                    }
                });
            } 
            catch(err) {
                console.log(err)
            }
        }
        getPendingData();
        getApproveData()
        getCancelData()
    }, []);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <div className="p-[80px]">
            <div className="mb-4 font-bold">
                <h1>Cập nhật bệnh nhân mới</h1>
            </div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                    >
                        <Tab label="Xác nhận bệnh nhân" {...a11yProps(1)} />
                        <Tab label="Bệnh nhân đã được xác nhận" {...a11yProps(2)} />
                        <Tab label="Bệnh nhân đã bị từ chối" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <NewPatientTable data={dataPending} tabIndex={0} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <NewPatientTable data={dataApprove} tabIndex={1} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <NewPatientTable data={dataCancel} tabIndex={2} />
                </TabPanel>
            </Box>
        </div>
    );
};
export default UpdatePatient;

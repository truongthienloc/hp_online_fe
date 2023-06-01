import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from 'antd';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {useState, useEffect} from 'react'
import Axios from '~/utils/Axios';
import { CookieValueTypes, getCookie } from 'cookies-next';
interface DataType {
    userID:number,
    start:string,
    end:string,
    date:string,
    type:string,
    link:string,
    name:string|null,
    phone:string|null,
    address:string
}

const columns: ColumnsType<DataType> = [
    {
        title: 'ID',
        key: 'key',
        dataIndex: 'userID',
    },
    {
        title: 'Time',
        key: 'time',
        dataIndex: 'date',
    },
    {
        title: 'Start',
        key: 'time',
        dataIndex: 'start',
    },
    {
        title: 'End',
        key: 'time',
        dataIndex: 'end',
    },
    {
        title: 'Type',
        key: 'type',
        dataIndex: 'type',
    },
    {
        title: 'Link or Address',
        key: 'link',
        dataIndex: 'link',
        render: (text) => <a href = {text}>{text}</a>
    },

    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Button type="default">Accept</Button>
                <Button danger type="default">
                    Reject
                </Button>
            </Space>
        ),
    },
];

export default function BasicDatePicker() {
    const [data,setData] = useState<DataType[]>([])
    const [employeeID,setEmployeeID] = useState<any>()
    const [date, setDate] = React.useState<string>('');
    useEffect(() => {
        const id:any = getCookie('employeeID')
        setEmployeeID(id)
        
    }, [])

    useEffect(() => {
        const getData = async () => {
            
            const res = await Axios.get(`/get-approve-appointment?employeeID=${employeeID}`)
            setData(res.data)
        }
        getData()
    },[employeeID, date])

    let dateSelected: string = '';

    const handleDateChange = (data: any) => {
        dateSelected = `${data.$D}-${
            data.$M + 1 < 10 ? `0${data.$M + 1}` : data.$M
        }-2023`;
    };
    const handleSearchClick = async () => {
        setDate(dateSelected);
    };
    const newData = data.filter((data) => data.date === date)
    return (
        <div className="p-[80px]">
            <div>
                <h2 className="text-[#7e79d8] font-bold text-lg">
                    Danh sách các cuộc hẹn
                </h2>
            </div>
            <div>
                <p className="text-black">Thời gian: </p>
                <div className="flex items-center">
                    <LocalizationProvider  dateAdapter={AdapterDayjs}>
                        <DatePicker
                            onChange={(value: any) => handleDateChange(value)}
                        />
                    </LocalizationProvider>
                    <Button
                        onClick={handleSearchClick}
                        className="ml-4"
                        size="large"
                        type="default"
                    >
                        Search
                    </Button>
                </div>
            </div>
            <div className="mt-8">
                <Table columns={columns} dataSource={newData} />
            </div>
        </div>
    );
}

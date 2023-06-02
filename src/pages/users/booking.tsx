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
        title: 'Link',
        key: 'link',
        dataIndex: 'link',
        render: (text) => {
            if(text != 'NULL'){
                return <a href = {text}>{text}</a>
            } else {
                <p></p>
            }
        }
    },
    {
        title: 'Address',
        key: 'link',
        dataIndex: 'address',
        render: (text) => <p>{text}</p>
    },
];

export default function BasicDatePicker() {
    const [data,setData] = useState<DataType[]>([])
    const [employeeID,setEmployeeID] = useState<any>()
    const [date, setDate] = React.useState<string>('');
    const [viewAll,setViewAll] = useState<boolean>(false)
    const [dateSelected,setDateSelected] = useState<string>('')
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


    const handleDateChange = (data: any) => {
        const dateSelected = `${data.$D}-${
            data.$M + 1 < 10 ? `0${data.$M + 1}` : data.$M
        }-2023`;
        setDateSelected(dateSelected)
    };
    const handleSearchClick = async () => {
        setViewAll(false)
        setDate(dateSelected);
    };
    
    const comparator = (a:DataType,b:DataType) => {
        if(a.date === b.date && a.start < b.start) {
            return -1
        } else if(a.date === b.date && a.start === b.start && a.end < b.end){
            return -1
        } else if(a.date < b.date) {
            return -1
        } else return 1
    }
    let newData:DataType[] = data.filter((data) => data.date === date)
    newData = newData.sort(comparator)
    const handleViewAll = async () => {
        const res = await Axios.get(`/get-approve-appointment?employeeID=${employeeID}`)
        res.data = res.data.sort(comparator)
        setData(res.data)
        setViewAll(true)
    }
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
                    <Button
                        onClick={handleViewAll}
                        className="ml-4"
                        size="large"
                        type="default"
                    >
                        Xem tất cả
                    </Button>
                </div>
            </div>
            <div className="mt-8">
                <Table columns={columns} dataSource={viewAll ? data : newData} />
            </div>
        </div>
    );
}

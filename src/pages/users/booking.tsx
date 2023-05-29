import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from 'antd';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: string;
    name: string;
    age: number;
    gender: string;
    time: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'ID',
        key: 'key',
        dataIndex: 'key',
    },
    {
        title: 'Time',
        key: 'time',
        dataIndex: 'time',
    },

    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
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

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        gender: 'Male',
        time: '25/05/2023',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        gender: 'Male',
        time: '25/05/2023',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        gender: 'Male',
        time: '25/05/2023',
    },
];
export default function BasicDatePicker() {
    let dateSelected: string = '';
    const [date, setDate] = React.useState<string>('');

    const handleDateChange = (data: any) => {
        dateSelected = `${data.$D}/${
            data.$M + 1 < 10 ? `0${data.$M + 1}` : data.$M
        }/2023`;
    };
    const handleSearchClick = () => {
        setDate(dateSelected);
    };
    let newData = data.filter((data) => data.time === date);
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
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
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

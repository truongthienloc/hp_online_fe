import { Table, Row, Col, Tooltip, User, Text, Button } from '@nextui-org/react';
import { StyledBadge } from '../../components/AdminPage/StyledBadge';
import { IconButton } from '../../components/AdminPage/IconButton';
import { DeleteIcon } from '../../components/AdminPage/DeleteIcon';

import NewPatientInfor from './newpatientmodal';
import { NextPage } from 'next';
import { NextPageWithLayout } from '~/types';
import Axios from '~/utils/Axios';
import { ToastContainer, toast } from 'react-toastify';
type UserType = {
    userID: number;
    updateAt: string;
    appointmentID: number;
    name: string;
    phone: string;
    email: string;
    status: "accepted" | "canceled"
};

interface iProps {
    tabIndex: number;
    data: UserType[];
}

const handleApprove = async (appointmentID:number) => {
    console.log(appointmentID)
    try {
        const res = await toast.promise(
                Axios({
                    method: 'post',
                    url: '/approve-users',
                    data: {
                        appointmentID : appointmentID
                    },
                }),
                {
                    pending: 'Đang xác nhận',
                    success: 'Xác nhận thành công',
                    error: 'Xác nhận thất bại',
                },
                {
                    autoClose: 3000,
                    pauseOnHover: false,
                },
            );
        console.log(res.data)
        }
    catch(err) {
        console.log(err)
    }
}
const handleCancel = async (appointmentID:number) => {
    console.log(appointmentID)
    try {
        const res = await toast.promise(
                Axios({ 
                    method: 'post',
                    url: '/cancel-users',
                    data: {
                        appointmentID : appointmentID
                    },
                }),
                {
                    pending: 'Đang xác nhận',
                    success: 'Xác nhận thành công',
                    error: 'Xác nhận thất bại',
                },
                {
                    autoClose: 3000,
                    pauseOnHover: false,
                },
            );
        console.log(res.data)
        }
    catch(err) {
        console.log(err)
    }
}

const NewPatientTable: NextPageWithLayout<iProps> = (props) => {
    const { data } = props;
    const columns = [
        { name: 'USERID', uid: 'userID' },
        { name: 'NAME', uid: 'name' },
        { name: 'PHONE', uid: 'phone' },
        { name: 'EMAIL', uid: 'email' },
        { name: 'STATUS', uid: 'status'},
        { name: 'ACTIONS', uid: 'actions' },
    ];
    const renderCell = (user: UserType, columnKey: any) => {
        const cellValue = user[columnKey as keyof typeof user];
        if(props.tabIndex === 1) {
            user['status'] = 'accepted'
        } else if(props.tabIndex === 2){
            user['status'] = 'canceled'
        }
        console.log(columnKey);
        switch (columnKey) {
            case 'id':
                return (
                    <Col>
                        <Row>
                            <Text b size={14} css={{ tt: 'capitalize' }}>
                                {cellValue}
                            </Text>
                        </Row>
                    </Col>
                );

            case 'name':
                return (
                    <User squared src="123" name={cellValue} css={{ p: 0 }}></User>
                );
            case 'status':
                return <StyledBadge type={props.tabIndex === 1 ? 'active' : 'paused'}>{cellValue}</StyledBadge>;

            case 'actions':
                return (
                    <Row justify="center" align="center">
                        {props.tabIndex == 0 ? (
                            <Col css = {{d:'flex',}} className='justify-center'>
                                <Tooltip 
                                content = 'Xem thông tin bệnh nhân'
                                color='default'            
                                >
                                    <NewPatientInfor/>
                                </Tooltip>
                            </Col>
                        ): ' '}
                        <Col css={{ d: 'flex' }}>
                            <IconButton>
                                {props.tabIndex == 0 ? (
                                        <Button onClick={() => handleApprove(user.appointmentID)} className='mx-4' color="success" auto>
                                            Xác nhận
                                        </Button>
                                ) : props.tabIndex === 1 ? (
                                    <NewPatientInfor />
                                ) : (
                                    <Button size='sm' color="default">Cancel</Button>
                                )}
                            </IconButton>
                        </Col>
                    
                    </Row>
                );
            default:
                return cellValue;
        }
    };
    return (
        <div>
            <ToastContainer/>
            <Table
            aria-label="Example table with custom cells"
            css={{
                height: 'auto',
                minWidth: '100%',
            }}
            selectionMode="none"
        >
            <Table.Header columns={columns}>
                {(column) => (
                    <Table.Column
                        key={column.uid}
                        hideHeader={column.uid === 'actions'}
                        align={column.uid === 'actions' ? 'center' : 'start'}
                    >
                        {column.name}
                    </Table.Column>
                )}
            </Table.Header>
            <Table.Body items={data}>
                {(item: UserType) => (
                    <Table.Row
                        key = {Math.random()}
                    >
                        {(columnKey: any) => {
                            return (
                                <Table.Cell>
                                    {renderCell(item, columnKey)}
                                </Table.Cell>
                            );
                        }}
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
        </div>
    );
};
export default NewPatientTable;

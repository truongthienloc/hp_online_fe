import { Table, Row, Col, Tooltip, User, Text, Button } from '@nextui-org/react';
import { StyledBadge } from '../../components/AdminPage/StyledBadge';
import { IconButton } from '../../components/AdminPage/IconButton';
import { DeleteIcon } from '../../components/AdminPage/DeleteIcon';
import {useState} from 'react'
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
    status: "accepted" | "canceled" | "pending"
};

interface iProps {
    tabIndex: number;
    data: UserType[];
}


        
const NewPatientTable: NextPageWithLayout<iProps> = (props) => {

            const handleApprove = async (appointmentID:number) => {
    
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
                    success: 'Từ chối thành công',
                    error: 'Từ chối thất bại',
                },
                {
                    autoClose: 3000,
                    pauseOnHover: false,
                },
                );

            }
            catch(err) {
                console.log(err)
            }
        }
            const { data } = props;
            const columns = [
                { name: 'USERID', uid: 'userID' },
                { name: 'APPOINTMENTID', uid: 'appointmentID'},
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
        } else if(props.tabIndex === 0) {
            user['status'] = 'pending'
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
            case 'appointmentId':
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
                return <StyledBadge type={props.tabIndex === 0  ? 'vacation' : props.tabIndex === 1 ? 'active' : 'paused'}>{cellValue}</StyledBadge>;

            case 'actions':
                return (
                    <Row justify="center" align="center">
                        <Col css={{ d: 'flex' }}>
                            <IconButton>
                                {props.tabIndex == 0 ? (
                                        <Button onClick={() => handleApprove(user.appointmentID)} className='mx-4' color="success" auto>
                                            Xác nhận
                                        </Button>
                                ) : props.tabIndex === 1 ? (
                                    <NewPatientInfor />
                                ) : (
                                    ''
                                )}
                            </IconButton>
                            <IconButton>
                                {props.tabIndex == 0 && <Button  onClick={() => handleCancel(user.appointmentID)} color='error'>Từ chối</Button>}
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

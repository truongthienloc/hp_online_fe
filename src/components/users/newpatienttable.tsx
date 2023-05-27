import { Table, Row, Col, Tooltip, User, Text, Button } from '@nextui-org/react';
import { StyledBadge } from './StyledBadge';
import { IconButton } from './IconButton';
import { DeleteIcon } from './DeleteIcon';

import NewPatientInfor from './newpatientmodal';
import { NextPage } from 'next';
import { NextPageWithLayout } from '~/types';
type UserType = {
    userID: number;
    updateAt: string;
    appointmentID: number;
    name: string;
    phone: string;
    email: string;
};

interface iProps {
    tabIndex: number;
    data: UserType[];
}

const NewPatientTable: NextPageWithLayout<iProps> = (props) => {
    const { data } = props;
    const columns = [
        { name: 'USERID', uid: 'userID' },
        { name: 'NAME', uid: 'name' },
        { name: 'PHONE', uid: 'phone' },
        { name: 'EMAIL', uid: 'email' },
        { name: 'ACTIONS', uid: 'actions' },
    ];
    const renderCell = (user: UserType, columnKey: any) => {
        const cellValue = user[columnKey as keyof typeof user];
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
                return <StyledBadge type="active">{cellValue}</StyledBadge>;

            case 'actions':
                return (
                    <Row justify="center" align="center">
                        <Col css={{ d: 'flex' }}>
                            <IconButton>
                                {props.tabIndex == 0 ? (
                                    <Button color="success" auto>
                                        Xác nhận
                                    </Button>
                                ) : props.tabIndex === 1 ? (
                                    <NewPatientInfor />
                                ) : (
                                    <Button color="default">Cancel</Button>
                                )}
                            </IconButton>
                        </Col>
                        <Col css={{ d: 'flex' }}>
                            <Tooltip
                                content="Delete user"
                                color="error"
                                onClick={() =>
                                    console.log('Delete user', user?.userID)
                                }
                            >
                                <IconButton>
                                    <DeleteIcon size={20} fill="#FF0080" />
                                </IconButton>
                            </Tooltip>
                        </Col>
                    </Row>
                );
            default:
                return cellValue;
        }
    };
    return (
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
                    <Table.Row>
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
    );
};
export default NewPatientTable;

import { Table, Row, Col, Tooltip, User, Text, Button } from "@nextui-org/react";
import { StyledBadge } from "./StyledBadge";
import { IconButton } from "./IconButton";
import { DeleteIcon } from "./DeleteIcon";

import NewPatientInfor from "./newpatientmodal";
import { NextPage } from "next";
type UserType = {
  id: string | number,
  name?: string,
  email?: string,
  role?: string,
  team?: string,
  status: "active" | "paused" | "vacation",
  age?: string,
  avatar?: string,
  phone: string
};

interface iProps {
    tabIndex:number
}

const NewPatientTable:NextPage<iProps> = (props) => {
  const columns = [
    { name: "ID", uid: "id"},
    { name: "NAME", uid: "name" },
    { name: 'PHONE', uid: 'phone'},
    { name: 'EMAIL', uid: 'email'},
    { name: "ACTIONS", uid: "actions" },
  ];
  const users: UserType[] = [
    {
      id: 1,
      name: "Tony Reichert",
      role: "CEO",
      team: "Management",
      status: "active",
      age: "29",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      email: "tony.reichert@example.com",
      phone: '0865562334',
    },
    {
      id: 2,
      name: "Zoey Lang",
      role: "Technical Lead",
      team: "Development",
      status: "paused",
      age: "25",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      email: "zoey.lang@example.com",
      phone: '123456789',
    },
  ];
  const renderCell = (user: UserType, columnKey:any ) => {
    const cellValue = user[columnKey as keyof typeof user]
    switch (columnKey) {
      case "id": 
      return (
        <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
          </Col>
      )

      case "name":
        return (
          <User squared src={user?.avatar} name={cellValue} css={{ p: 0 }}>
          </User>
        );
      case "status":
        return <StyledBadge type={user?.status}>{cellValue}</StyledBadge>;

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <IconButton>
                {props.tabIndex == 0 ? <Button  color="primary" auto>
                    Thêm
                </Button> : props.tabIndex === 1 ? <Button shadow color='success' auto>Xác nhận</Button> : <NewPatientInfor/> }
            </IconButton>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() => console.log("Delete user", user?.id)}
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
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="none"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
            key={column.uid}
            hideHeader={column.uid === "actions"}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={users}>
        {(item: UserType) => (
          <Table.Row>
            {(columnKey:any) => {
              return (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )
            }}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}
export default NewPatientTable
import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { StyledBadge } from "./StyledBadge";
import { IconButton } from "./IconButton";
import { DeleteIcon } from "./DeleteIcon";
import ModalInfor from "./modal";
import { NextPageWithLayout } from "~/types";
type UserType = {
  id: string | number,
  name?: string,
  email?: string,
  roleId?: number,
  team?: string,
  status: "active" | "paused" | "vacation",
  age?: string,
  avatar?: string,
  specialist: string
  address:string
};

interface iProps{
  data:UserType[]
}

const UserTable:NextPageWithLayout<iProps> = (props) => {
  const {data} = props
  const columns = [
    { name: "ID", uid: "id"},
    { name: "NAME", uid: "name" },
    { name: "ROLE", uid: "role" },
    { name: "STATUS", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
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
          <User squared src='https://img.freepik.com/premium-vector/doctor-icon-avatar-white_136162-58.jpg?w=2000' name={cellValue} css={{ p: 0 }}>
            {user?.email}
          </User>
        );
      case "role":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {user.roleId === 2 ? 'Doctor' : 'Supporter'}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                {user.specialist}
              </Text>
            </Row>
          </Col>
        );
      case "status":
        return <StyledBadge type='active'>Active</StyledBadge>;

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Xem thông tin"
                color="default"
                onClick={() => console.log(123)}
              >
                <IconButton>
                  <ModalInfor name = {user.name} address = {user.address} specialist = {user.specialist}/>
                </IconButton>
              </Tooltip>
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
      <Table.Body items={data}>
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
export default UserTable
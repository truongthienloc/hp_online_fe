import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NewPatientTable from './newpatienttable';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className='p-[80px]'>
    <div className='mb-4 font-bold'><h1>Cập nhật bệnh nhân mới</h1></div>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Thêm bệnh nhân mới" {...a11yProps(0)} />
          <Tab label="Xác nhận bệnh nhân" {...a11yProps(1)} />
          <Tab label="Bệnh nhân đã được xác nhận" {...a11yProps(2)} />
          <Tab label="Bệnh nhân đã bị từ chối" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <NewPatientTable tabIndex={0}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NewPatientTable tabIndex={1}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <NewPatientTable tabIndex={2}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <NewPatientTable tabIndex={3}/>
      </TabPanel>
    </Box>
    </div>
  );
}
export default UpdatePatient
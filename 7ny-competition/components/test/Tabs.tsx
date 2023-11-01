import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const AntTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: 'rgba(22,24,35,.6)',
  },
});

const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    marginRight: theme.spacing(1),
    color: 'rgba(0, 0, 0, 0.85)',
    '&:hover': {
      fontWeight: 700,
      opacity: 1,
    },
    '&.Mui-selected': {
      color: 'black',
      fontWeight: 700,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }),
);


interface StyledTabProps {
  label: string;
}


export default function MyTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  interface TabPanelProps {
  children: React.ReactNode;
  value: number;
  index: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

  return (
      <Box sx={{width: '100%' , bgcolor: '#fff' }}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="作品" />
          <AntTab label="点赞" />
          <AntTab label="收藏" />
        </AntTabs>
       <TabPanel value={value} index={0}>
         作品的内容
       </TabPanel>
       <TabPanel value={value} index={1}>
         收藏的内容
       </TabPanel>
       <TabPanel value={value} index={2}>
         喜欢的内容
       </TabPanel>
      </Box>
  );
}
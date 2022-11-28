import { User } from "../typings";
import UserCard from "./UserCard";
import { COLORS } from "../constants/colors";
import Tabs from "@mui/material/Tabs";
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';

interface ProfilesProps {
    users: User[];
    tabIndex: string;
    onChange: (event: React.SyntheticEvent, newValue: string) => void;
}

interface StyledTabsProps {
    children?: React.ReactNode;
    value: string;
    onChange: (event: React.SyntheticEvent, newValue: string) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
<Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
/>
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        width: '100%',
        backgroundColor: `${COLORS.pb_white}`,
        color: `${COLORS.pb_white}`
    },
});

interface StyledTabProps {
    label: string;
    value: string;
}
  
  const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
  ))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: `${COLORS.pb_white}`,
    width: '50%',
    maxWidth: '50%',
    '&.Mui-selected': {
        color: `${COLORS.pb_white}`,
        width: '50%',
        maxWidth: '50%'
    },
    '&.Mui-focusVisible': {
        // backgroundColor: 'rgba(100, 95, 228, 0.32)',
        width: '50%',
        maxWidth: '50%'
    },
}));

export function Profiles({ users, tabIndex, onChange } : ProfilesProps) {
    return (
        <div className={`mt-4 w-full h-full bg-[${COLORS.bg_grey}]`}>
            <StyledTabs
                value={tabIndex}
                onChange={onChange}
            >
                <StyledTab label="Followers" value={'0'}/>
                <StyledTab label="Following" value={'1'}/>
            </StyledTabs>
            {users && users.length ? users.map(user => {
                return (
                    <div className="mt-4" key={`${user.id}_${user.name}`}>
                        <UserCard user={user}/>
                    </div>
                )
            }) : ''}
        </div>
    )
}
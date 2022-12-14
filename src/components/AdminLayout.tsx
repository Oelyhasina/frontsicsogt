import { UserMenu, MenuItemLink, AppBar, Layout } from 'react-admin';
import { ProfileProvider } from "../pages/ProfileEdit";
import SettingsIcon   from '@mui/icons-material/Settings';

const MyUserMenu = (props: any) => {
  // Forcing MenuItemLink to any because of some weird type mismatch, not sure what's going on
  const ItemLink = MenuItemLink as any;
  return (
    <UserMenu {...props}>
      <ItemLink
        to="/profile"
        primaryText="My Profile"
        leftIcon={<SettingsIcon />}
      />
    </UserMenu>
  );
};

const MyAppBar = (props: any) => (
  <AppBar {...props} userMenu={<MyUserMenu />} />
);

const MyLayout = (props: any) => (
  <ProfileProvider>
    <Layout {...props} appBar={MyAppBar} />
  </ProfileProvider>
);

export default MyLayout;

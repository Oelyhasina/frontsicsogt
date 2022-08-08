import UserIcon from '@mui/icons-material/People';
import { UsersApiFp } from '../../generated';

import { UserList } from './userlist';
import { UserCreate } from './usercreate';
import { UserEdit } from './useredit';

const users = {
    list: UserList,
    edit: UserEdit,
    create: UserCreate,
    icon: UserIcon,
};

export default users;

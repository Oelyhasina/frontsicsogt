import CategorieIcon from '@mui/icons-material/Collections';
import { CategorieCreate } from './categoriecreate';
import { CategorieList } from './categorielist'
import { CategorieEdit } from './categorieedit';

 const categories = {
    list: CategorieList,
    create: CategorieCreate,
    edit: CategorieEdit,
    icon: CategorieIcon,
};

export default categories;
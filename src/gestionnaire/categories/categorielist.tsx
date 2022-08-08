import {
    Create,
    Datagrid,
    Edit,
    EditButton,
    List,
    SimpleForm,
    TextField,
    TextInput,
    NumberInput,
    SelectInput,
    ReferenceInput,
    ReferenceField,
    NumberField,
    FilterButton,
    FilterForm,
    CreateButton,
    Pagination,
    Filter,
  } from 'react-admin';
//import { Stack } from '@mui/material';
//import { ListActions } from './listActions';


export const CategorieList = (props: any) => (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="secteur" />
        <TextField source="intitule" />
        <EditButton />
      </Datagrid>
    </List>
);
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


export const CopyList = (props: any) => (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="periodeId" reference="periode">
          <TextField source="periode" />
        </ReferenceField>
        <TextField source="secteur" />
        <EditButton />
      </Datagrid>
    </List>
);
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
    BooleanField,
  } from 'react-admin';
//import { Stack } from '@mui/material';
//import { ListActions } from './listActions';


export const PeriodeList = (props: any) => (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField label="Exercice" source="exerciceId" reference="exercice">
          <TextField source="codage_exercice" />
        </ReferenceField>
        <TextField source="version" />
        <TextField source="periode" />
        <BooleanField source="is_published"/>
        <TextField source="description" />
        <EditButton />
      </Datagrid>
    </List>
);
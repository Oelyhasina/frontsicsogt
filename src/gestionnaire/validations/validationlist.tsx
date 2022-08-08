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
    ChipField, ReferenceManyField, SingleFieldList, BooleanField,
  } from 'react-admin';
//import { Stack } from '@mui/material';
//import { ListActions } from './listActions';

const ValidationFilter = [
    <ReferenceInput label="Exercice" source="exerciceId" reference="exercice">
          <SelectInput optionText="codage_exercice" />
    </ReferenceInput>
]

export const ValidationList = (props: any) => (
    <List {...props} filters={ValidationFilter}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="exerciceId" reference="exercice">
          <TextField source="codage_exercice" />
        </ReferenceField>
        <ReferenceField source="fonctionId" reference="fonction" >
          <TextField source="permission" />
        </ReferenceField>
        <BooleanField source="is_valide" />
        <EditButton />
      </Datagrid>
    </List>
);
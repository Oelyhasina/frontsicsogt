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
    NumberField,
    BooleanInput,
  } from 'react-admin';

export const ValidationEdit = (props: any) => (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput source="is_valide" />
      </SimpleForm>
    </Edit>
);
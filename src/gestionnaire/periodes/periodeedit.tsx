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
  } from 'react-admin';
  

export const PeriodeEdit = (props: any) => (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="exerciceId" reference="exercice">
          <SelectInput optionText="codage_exercice" label="Exercice" fullWidth/>
        </ReferenceInput>
        <TextInput source="version" />
        <TextInput source="description" />
      </SimpleForm>
    </Edit>
);
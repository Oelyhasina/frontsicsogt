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
  

export const PeriodeCreate = (props: any) => (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="exerciceId" reference="exercice">
          <SelectInput optionText="codage_exercice" label="Exercice" fullWidth/>
        </ReferenceInput>
        <TextInput source="version" />
        <BooleanInput source="is_published" />
        <TextInput source="description" />
      </SimpleForm>
    </Create>
);
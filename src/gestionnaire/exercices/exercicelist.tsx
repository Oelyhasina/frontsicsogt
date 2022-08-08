import {
    Create,
    Datagrid,
    Edit,
    EditButton,
    List,
    SimpleForm,
    NumberField,
    NumberInput,
    TextField,
    TextInput,
    SelectInput,
    ReferenceInput,
    DateInput
  } from 'react-admin';


export const ExerciceList = (props: any) => (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="codage_exercice" />
        <TextField source="type" />
        <TextField source="annee" />
        <TextField source="mois" />
        <EditButton />
      </Datagrid>
    </List>
);
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

const choix_type : any = [
    { id: 1, name: 'REAL' },
    { id: 2, name: 'LFI' },
    { id: 3, name: 'LFR' },
    { id: 4, name: 'LFI-FMI' },
    { id: 5, name: 'LFR-FMI' },
]
const choix_mois : any = [
  { id: 1, name: 'M1' },
  { id: 2, name: 'M2' },
  { id: 3, name: 'T1' },
  { id: 2, name: 'M4' },
  { id: 2, name: 'M5' },
  { id: 2, name: 'T2' },
  { id: 2, name: 'M7' },
  { id: 2, name: 'M8' },
  { id: 2, name: 'T3' },
  { id: 2, name: 'M10' },
  { id: 2, name: 'M11' },
  { id: 2, name: 'T4' },
] 

  

export const ExerciceCreate = (props: any) => (
    <Create {...props}>
      <SimpleForm>
        <SelectInput source="type" choices={choix_type} optionValue='name'/>
        <TextInput source="annee" />
        <SelectInput source="mois" choices={choix_mois} optionValue='name'/>
      </SimpleForm>
    </Create>
);

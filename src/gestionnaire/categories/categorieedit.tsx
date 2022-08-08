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
  

export const CategorieEdit = (props: any) => (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput source="secteur" choices={[
          { id: 1, name: 'Secteur Public' },
          { id: 2, name: 'Secteur Reel' },
          { id: 3, name: 'Secteur Monetaire' },
          { id: 4, name: 'Secteur Exterieur' },
        ]} optionValue="name" />
        <TextInput source="intitule" />
      </SimpleForm>
    </Edit>
);
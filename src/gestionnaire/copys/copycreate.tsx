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


export const CopyCreate = (props: any) => (
    <Create {...props}>
      <SimpleForm>
        <SelectInput source="secteur" choices={[
          { id: 1, name: 'Secteur Public' },
          { id: 2, name: 'Secteur Reel' },
          { id: 3, name: 'Secteur Monetaire' },
          { id: 4, name: 'Secteur Exterieur' },
        ]} optionValue="name" />
        <ReferenceInput source="periodeId" reference="periode">
          <SelectInput optionText="periode" label="Periode" fullWidth/>
        </ReferenceInput>
      </SimpleForm>
    </Create>
);

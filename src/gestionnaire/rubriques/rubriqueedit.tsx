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
  
export const RubriqueEdit = (props: any) => (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="codage" />
        <TextInput source="libelle" />
        <TextInput source="abrev" />
        <SelectInput source="signe" choices={[
          { id: 1, name: 'Positif' },
          { id: 2, name: 'Negatif' },
        ]} optionValue="name" />
        <SelectInput source="secteur" choices={[
          { id: 1, name: 'Secteur Public' },
          { id: 2, name: 'Secteur Reel' },
          { id: 3, name: 'Secteur Monetaire' },
          { id: 4, name: 'Secteur Exterieur' },
        ]} optionValue="name" />
        <ReferenceInput source="fonctionId" reference="fonction" >
            <SelectInput optionText="permission"/>
        </ReferenceInput>
        <ReferenceInput source="categorieId" reference="categorie" >
            <SelectInput optionText="intitule"/>
        </ReferenceInput>
      </SimpleForm>
    </Edit>
);
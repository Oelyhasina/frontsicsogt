import {
    Create,
    Datagrid,
    Edit,
    EditButton,
    List,
    SimpleForm,
    TextField,
    NumberInput,
    TextInput,
    SelectInput,
    ReferenceInput,
    NumberField,
    Filter,
    ReferenceField,
    SearchInput,
    useTranslate, 
    ReferenceArrayInput, 
    SelectArrayInput,
    SimpleShowLayout,
    RichTextField,
    ShowButton,
  } from 'react-admin';

  import { Box } from '@mui/material';

  const TraitementFilter = [
      <SelectInput source="secteur" choices={[
      { id: 1, name: 'Secteur Public' },
      { id: 2, name: 'Secteur Reel' },
      { id: 3, name: 'Secteur Monetaire' },
      { id: 4, name: 'Secteur Exterieur' },
    ]} optionValue="name" alwaysOn/>,
      <ReferenceInput label="Periode" source="periodeId" reference="periode" alwaysOn>
        <SelectInput optionText="periode" fullWidth/>
      </ReferenceInput>,
      <ReferenceInput label="Categorie" source="categorieId" reference="categorie" alwaysOn>
        <SelectInput optionText="intitule" fullWidth/>
      </ReferenceInput>
  ]

export const TraitementList = (props : any) => (
    <List {...props} filters = {TraitementFilter}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="rubriqueId" reference="rubrique">
          <TextField source="libelle" />
        </ReferenceField>
        <NumberField source="montant" />
        <EditButton />
      </Datagrid>    
    </List>
);
  
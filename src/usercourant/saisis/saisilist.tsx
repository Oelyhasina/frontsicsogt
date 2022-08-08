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

  const SaisiFilter = [
    <ReferenceArrayInput source="exerciceId" reference="exercice" alwaysOn>
      <SelectArrayInput optionText="codage_exercice" />
    </ReferenceArrayInput>,
    <ReferenceInput label="Rubrique" source="rubriqueId" reference="rubrique" alwaysOn>
      <SelectInput optionText="intitule" />
    </ReferenceInput>
  ]

  const PostShow = () => (
    <SimpleShowLayout>
        <TextField source="unite"/>
        <TextField source="valeur"/>
        <TextField source="projet"/>
        <RichTextField source="description" />
    </SimpleShowLayout>
);


const PostListActionToolbar = ({ children, ...props } : any) => (
  <Box sx={{ alignItems: 'center', display: 'flex' }}>{children}</Box>
);

export const SaisiList = (props : any) => (
    <List {...props} filters = {SaisiFilter}>
      <Datagrid>
        {/* <TextField source="id" /> */}
        <ReferenceField label="Exercice" source="exerciceId" reference="exercice">
          <TextField source="codage_exercice" />
        </ReferenceField>
        <ReferenceField source="rubriqueId" reference="rubrique">
          <TextField source="libelle" />
        </ReferenceField>
        <NumberField source="montant" />
          <PostListActionToolbar>
            <EditButton />
            <ShowButton />
          </PostListActionToolbar>
      </Datagrid>
      
    </List>
);
  
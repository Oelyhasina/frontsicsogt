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
    ReferenceField,
    NumberField,
    FilterButton,
    FilterForm,
    CreateButton,
    Pagination,
    Filter,
  } from 'react-admin';
  
const RubriqueFilter = [
      <ReferenceInput label="Fonction" source="fonctionId" reference="fonction">
          <SelectInput optionText="permission" />
      </ReferenceInput>
]

export const RubriqueList = (props: any) => (
    <List {...props} filters={RubriqueFilter}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="codage" />
        <TextField source="libelle" />
        <TextField source="abrev" />
        <TextField source="signe" />
        <TextField source="secteur" />
        <ReferenceField source="categorieId" reference="categorie">
          <TextField source="intitule" />
        </ReferenceField>
        <ReferenceField source="fonctionId" reference="fonction">
          <TextField source="permission" />
        </ReferenceField>
        <EditButton />
      </Datagrid>
    </List>
);
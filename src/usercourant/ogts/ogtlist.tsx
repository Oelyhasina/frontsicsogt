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
  ReferenceArrayInput,
  ChipField,
  SelectArrayInput
} from 'react-admin';

const OgtFilter = [
      <ReferenceArrayInput source="periodeId" reference="periode" alwaysOn>
        <SelectArrayInput optionText="periode" />
      </ReferenceArrayInput>,
      <ReferenceInput label="Categorie" source="categorieId" reference="categorie" alwaysOn>
          <SelectInput optionText="intitule" />
      </ReferenceInput>
]

export const OgtList = (props: any) => (
  <List {...props} filters={OgtFilter}>
    <Datagrid>
      <TextField source="id"/>
      <ReferenceField source="rubriqueId" reference="rubrique">
        <TextField source="libelle" />
      </ReferenceField>
      <ReferenceField label="Codage" source="rubriqueId" reference="rubrique">
        <TextField source="codage" />
      </ReferenceField>
      <NumberField source="montant" />
      <ReferenceField label="Periode" source="periodeId" reference="periode">
        <TextField source="periode" />
      </ReferenceField>
    </Datagrid>
  </List>
);

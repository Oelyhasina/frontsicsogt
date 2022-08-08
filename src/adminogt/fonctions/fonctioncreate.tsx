import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin';

export const FonctionCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="permission" />
    </SimpleForm>
  </Create>
);

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
  
  
  export const FonctionEdit = (props: any) => (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="permission" />
      </SimpleForm>
    </Edit>
  );
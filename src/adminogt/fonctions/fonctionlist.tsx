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
  
  export const FonctionList = (props: any) => (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="permission" />
        <EditButton />
      </Datagrid>
    </List>
  );
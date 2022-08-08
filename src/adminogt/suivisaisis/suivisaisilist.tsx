import {
    BooleanField,
    BooleanInput,
    Datagrid,
    Edit,
    EditButton,
    EmailField,
    List,
    Create,
    SimpleForm,
    TextField,
    TextInput,
    SelectInput,
    ReferenceInput,
    PasswordInput,
    ReferenceField,
    Filter,
    DateField,
  } from 'react-admin';

  export const SuiviSaisiList = (props: any) => (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="saisiId" />
        <DateField source="created" showTime />
        <DateField source="updated" showTime />
        <ReferenceField source="userId" reference="register">
          <EmailField source="email" />
        </ReferenceField>
      </Datagrid>
    </List>
  );
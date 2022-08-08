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
    NumberField,
    TextInput,
    SelectInput,
    ReferenceInput,
    PasswordInput,
    ReferenceField,
    Filter,
    DateField,
  } from 'react-admin';

  export const TokenList = (props: any) => (
    <List {...props}>
      <Datagrid>
        <NumberField source="id" />
        <DateField source="created_at" showTime />
        <ReferenceField source="user_id" reference="register">
          <EmailField source="email" />
        </ReferenceField>
      </Datagrid>
    </List>
  );
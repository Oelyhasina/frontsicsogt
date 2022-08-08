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
    useRecordContext,
  } from 'react-admin';
  //import { ListActions } from '../../gestionnaire/rubrique/listActions';
  import { CreateToolbar } from '../../components/CreateToolbar';
  
  
  
  const UserFilter = [
        <ReferenceInput label="Permission" source="fonctionId" reference="fonction" alwaysOn>
            <SelectInput optionText="permission" />
        </ReferenceInput>
  ]
  
  
  export const UserList = (props: any) => (
    <List {...props} filters={UserFilter}>
      <Datagrid>
        <TextField source="id" />
        <EmailField source="email" />
        <BooleanField source="is_active" />
        <BooleanField source="is_superuser" />
        <BooleanField source="is_verified" />
        <BooleanField source="is_gestionnaire" />
        <TextField source="fonctionId" />
        <ReferenceField label = "Permission" source="fonctionId" reference="fonction">
          <TextField source="permission"/>
        </ReferenceField>
        <EditButton />
      </Datagrid>
    </List>
  );
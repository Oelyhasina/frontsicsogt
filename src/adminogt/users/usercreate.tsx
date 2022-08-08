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
  
  
  
  
  export const UserCreate = (props: any) => (
    <Create {...props} >
      <SimpleForm >
        <TextInput label="Email Address" source="email" type="email" />
        <PasswordInput source="password" />
        <BooleanInput source="is_active" />
        <BooleanInput source="is_superuser" />
        <BooleanInput source="is_verified" />
        <BooleanInput source="is_gestionnaire" />
        <ReferenceInput source="fonctionId" reference="fonction" >
          <SelectInput optionText="permission" defaultValue={""} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
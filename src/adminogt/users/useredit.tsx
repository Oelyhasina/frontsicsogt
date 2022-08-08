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
  
  
  
  
  
  export const UserEdit = (props: any) => (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="email" />
        <BooleanInput source="is_active" />
        <BooleanInput source="is_superuser" />
        <BooleanInput source="is_verified" />
        <BooleanInput source="is_gestionnaire" />
        <ReferenceInput source="fonctionId" reference="fonction" >
          <SelectInput optionText="permission"  defaultValue={""}/>
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
  
  
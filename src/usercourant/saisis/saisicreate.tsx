import { CreateToolbar } from "../../components/CreateToolbar"
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
    NumberField,
    ArrayInput,
    SimpleFormIterator,
    ReferenceField,
    TabbedForm,
    FormTab,
    FileInput,
    ImageField,
    useDataProvider,
    useCreateController,
    ResourceContextProvider,
    useResourceContext,
    Form,
    ReferenceManyField,
    DateField, 
  } from 'react-admin';

import { RichTextInput, RichTextInputToolbar } from 'ra-input-rich-text';



export const SaisiCreate = (props : any) => (
    <Create {...props}> 
        <TabbedForm toolbar={<CreateToolbar/>}>
            <FormTab label="Saisie" >
        
                <ReferenceInput source="exerciceId" reference="exercice">
                    <SelectInput optionText="codage_exercice" label="Exercice" fullWidth/>
                </ReferenceInput>
                <ReferenceInput source="rubriqueId" reference="rubrique" >
                    <SelectInput optionText="libelle" fullWidth />
                </ReferenceInput>
                <TextInput source="montant" fullWidth />
            </FormTab>
            <FormTab label="Details">  
                <TextInput source="unite" defaultValue={""} fullWidth resettable />
                <TextInput source="valeur" defaultValue={0} fullWidth resettable/>
                <TextInput source="projet" defaultValue={""} fullWidth resettable/>
            </FormTab>
            <FormTab label="Description">    
                <RichTextInput source="description"  toolbar={<RichTextInputToolbar size="large" />} defaultValue={"<p></p>"} label="" fullWidth/>
            </FormTab>
        </TabbedForm>
    </Create>
);
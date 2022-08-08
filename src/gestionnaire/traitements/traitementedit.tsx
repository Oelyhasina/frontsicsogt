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
  } from 'react-admin';

// export const SaisiEdit = (props: any) => (
//     <Edit {...props}>
//       <SimpleForm>
//         <ReferenceInput source="rubriqueId" reference="rubrique" >
//           <SelectInput optionText="libelle"  />
//         </ReferenceInput>
//         <TextInput source="montant" />
//         <ReferenceInput source="periodeId" reference="periode" >
//           <SelectInput optionText="codage_periode"/>
//         </ReferenceInput>
//       </SimpleForm>
//     </Edit>
// );

import { RichTextInput, RichTextInputToolbar } from 'ra-input-rich-text';



export const SaisiEdit = (props : any) => (
    <Edit {...props}> 
        <TabbedForm>
            
            <FormTab label="Saisie" >
              <ReferenceInput source="exerciceId" reference="exercice">
                <SelectInput optionText="codage_exercice" label="Exercice" fullWidth/>
              </ReferenceInput>
              <ReferenceField label="Rubrique" source="rubriqueId" reference="rubrique">
                <TextField source="libelle" />
              </ReferenceField>
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
    </Edit>
);
import * as React from "react";
import { 
    Show, SimpleShowLayout, TextField, DateField, RichTextField, TabbedShowLayout, Tab,
    TopToolbar, EditButton, 
} from 'react-admin';



export const SaisiShow = (props : any) => (
    <Show {...props}>
       <TabbedShowLayout>
           <Tab label="Details">
            <TextField source="unite"/>
            <TextField source="valeur"/>
            <TextField source="projet"/>
           </Tab>
           <Tab label="Commentaires">
            <RichTextField source="description" />
           </Tab>
       </TabbedShowLayout>
    </Show>
);
import { clear } from 'console';
import { Toolbar, SaveButton, useRedirect, useNotify } from 'react-admin';
import { useFormContext } from 'react-hook-form';
import saisis from '../usercourant/saisis';

export const CreateToolbar = (props:any) => {
    const { reset } = useFormContext();
    const redirect = useRedirect();
    const notify = useNotify();
    return (
        <Toolbar {...props}>
            <SaveButton 
                type="button"
                label="Save and add"
                variant="text"
                mutationOptions={{
                    onSuccess: () => {
                        notify('Element created');
                        reset();
                        redirect('/saisi/create')
                        window.scrollTo(0, 0);
                    }}
                }
            />    
        </Toolbar>
    );
};
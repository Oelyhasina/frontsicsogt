import {
  createContext,
  useState,
  useCallback,
  useMemo,
  useContext,
} from 'react';
import {
  TextInput,
  SimpleForm,
  required,
  useNotify,
  SaveContextProvider,
  useGetIdentity,
  useSaveContext,
  usePermissions,
  useRedirect,
  Toolbar,
  SaveButton,
} from 'react-admin';
import { userApi } from "../providers/env";

const ProfileContext = createContext({
  profileVersion: 0,
  refreshProfile: () => {},
});

export const ProfileProvider = ({ children }: { children: any }) => {
  const [profileVersion, setProfileVersion] = useState(0);
  const context = useMemo(
    () => ({
      profileVersion,
      refreshProfile: () => {
        setProfileVersion((currentVersion) => currentVersion + 1);
      },
    }),
    [profileVersion]
  );

  return (
    <ProfileContext.Provider value={context}>
      {children}
    </ProfileContext.Provider>
  );
};

const useProfile = () => useContext(ProfileContext);

const CustomToolbar = (props: any) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

const ProfileEdit = ({ ...props }) => {
  const notify : any = useNotify();
  const { loaded : permissionsLoaded, permissions } :any = usePermissions();
  const redirect = useRedirect();
  if (permissionsLoaded && !permissions?.email) {
    redirect("/login");
  }
  const [saving, setSaving] : any = useState(false);
  const { refreshProfile, profileVersion } = useProfile();
  const { loaded, identity } : any = useGetIdentity();

  const handleSave : any = useCallback(
    (values : any) => {
      setSaving(true);
      userApi
        .usersPatchCurrentUser({ userUpdate: values })
        .then(() => {
          setSaving(false);
          notify("Your profile has been updated", "info");
          refreshProfile();
          return redirect("/");
        })
        .catch((e) => {
          setSaving(false);
          notify(
            e.response?.data?.detail || "Unknown error, please try again later",
            "error"
          );
        });
    },
    [notify, refreshProfile]
  );
 
  const saveContext = useSaveContext({ save: handleSave, saving });
   
  if (!loaded) {
    return null;
  }

  return (
    <SaveContextProvider value={{saveContext}} key={profileVersion}>
      <SimpleForm
        //save={handleSave}
        onSubmit={handleSave}
        record={identity ? identity : {}}
        toolbar={<CustomToolbar />}
      >
        <TextInput source="id" disabled />
        <TextInput source="email" disabled />
        <TextInput source="password" validate={required()} />
      </SimpleForm>
    </SaveContextProvider>
  );
};

export default ProfileEdit;
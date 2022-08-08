import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Admin, Resource, CustomRoutes, memoryStore  } from 'react-admin';
import { Route } from 'react-router';
import { MyLayout } from "./layout/Layout";
import Menu from './layout/Menu';
import { NotFound } from "./components/NotFound"
import { Dashboard } from "./pages/Dashboard";
import Login from "./layout/Login";
import ProfileEdit from "./pages/ProfileEdit";
import Settings from './pages/Settings';
import authProvider from "./providers/authProvider";
import { lightTheme } from './layout/themes';
import { dataProvider } from './providers/dataProvider'
import users from './adminogt/users';
import fonctions from './adminogt/fonctions';
import categories from './gestionnaire/categories';
import periodes from './gestionnaire/periodes';
import rubriques from './gestionnaire/rubriques';
import exercices from './gestionnaire/exercices';
import copys from './gestionnaire/copys';
import traitements from './gestionnaire/traitements';
import saisis from './usercourant/saisis';
import validations from './gestionnaire/validations';
import suivisaisis from './adminogt/suivisaisis';
import suivivalidations from './adminogt/suivivalidations';
import tokens from './adminogt/tokens';
import ogts from './usercourant/ogts';
 



const history = createBrowserHistory();
const App = () => {
  return (
    <BrowserRouter>
      <Admin
        title="SICSOGT"
        //basename="/sicsogt"
        history={history}
        menu={Menu}
        authProvider={authProvider}
        dataProvider={dataProvider}
        dashboard={Dashboard}
        loginPage={Login}
        layout={MyLayout}
        disableTelemetry
        catchAll={NotFound}
        theme={lightTheme}
        store={memoryStore()}
        requireAuth
      >
        <CustomRoutes noLayout>
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<ProfileEdit />} />
        </CustomRoutes>
        <Resource
          name="fonction"
          {...fonctions}
        />,
        <Resource
          name="register"
          {...users}
        />,
        <Resource
          name="categorie"
          {...categories}
        />,
        <Resource
          name="periode"
          {...periodes}
        />,
        <Resource
          name="rubrique"
          {...rubriques}
        />,
        <Resource
          name="exercice"
          {...exercices}
        />,
        <Resource
          name="copy"
          {...copys}
        />,
        <Resource
          name="traitement"
          {...traitements}
        />,
        <Resource
          name="saisi"
          options={{ label: 'Saisie' }}
          {...saisis}
        />,
        <Resource
          name="ogt"
          {...ogts}
        />,
        <Resource
          name="validation"
          {...validations}
        />,
        <Resource
          name="suivisaisi"
          {...suivisaisis}
        />,
        <Resource
          name="suivivalidation"
          {...suivivalidations}
        />,
        <Resource
          name="token"
          {...tokens}
        />,
      </Admin>
    </BrowserRouter>
  );
};

export default App;

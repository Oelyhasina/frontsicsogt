import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';


import {
    useTranslate,
    DashboardMenuItem,
    MenuItemLink,
    MenuProps,
    useSidebarState,
} from 'react-admin';

import users from '../adminogt/users';
import fonctions from '../adminogt/fonctions';
import categories from '../gestionnaire/categories'
import periodes from '../gestionnaire/periodes'
import rubriques from '../gestionnaire/rubriques'
import exercices from '../gestionnaire/exercices';
import copys from '../gestionnaire/copys';
import traitements from '../gestionnaire/traitements'
import publications from '../gestionnaire/publications';
import saisis from '../usercourant/saisis'
import validations from '../gestionnaire/validations';
import suivisaisis from '../adminogt/suivisaisis';
import suivivalidations from '../adminogt/suivivalidations';
import tokens from '../adminogt/tokens';

import ogts from '../usercourant/ogts';
import indicateurs from '../usercourant/indicateurs';
import monetaires from '../usercourant/monetaires';
import reels from '../usercourant/reels';
import exterieurs from '../usercourant/exterieurs';
import SubMenu from './SubMenu';

type MenuName = 'menuGestionnaire' | 'menuAdmin' | 'menuUtilisateur';

const Menu = ({ dense = false }: MenuProps) => {
    const [state, setState] = useState({
        menuGestionnaire: true,
        menuAdmin: true,
        menuUtilisateur: true,
    });
    const translate = useTranslate();
    const [open] = useSidebarState();

    const handleToggle = (menu: MenuName) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <Box
            sx={{
                width: open ? 200 : 50,
                marginTop: 1,
                marginBottom: 1,
                transition: theme =>
                    theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
            }}
        >
            <DashboardMenuItem />
            <SubMenu
                handleToggle={() => handleToggle('menuAdmin')}
                isOpen={state.menuAdmin}
                //name="pos.menu.admin"
                name="Administrateur"
                icon={<users.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to="/register"
                    state={{ _scrollToTop: true }}
                    //primaryText={translate(`resource.user.name`, {
                    primaryText={translate(`User`, {
                        smart_count: 2,
                    })}
                    leftIcon={<users.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/fonction"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Fonction`, {
                        smart_count: 2,
                    })}
                    leftIcon={<fonctions.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/suivisaisi"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`SuiviSaisie`, {
                        smart_count: 2,
                    })}
                    leftIcon={<suivisaisis.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/suivivalidation"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`SuiviValidation`, {
                        smart_count: 2,
                    })}
                    leftIcon={<suivivalidations.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/token"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Gestion JWT`, {
                        smart_count: 2,
                    })}
                    leftIcon={<tokens.icon />}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuGestionnaire')}
                isOpen={state.menuGestionnaire}
                name="Gestionnaire"
                icon={<rubriques.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to="/categorie"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Categorie`, {
                        smart_count: 2,
                    })}
                    leftIcon={<categories.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/rubrique"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Rubrique`, {
                        smart_count: 2,
                    })}
                    leftIcon={<rubriques.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/exercice"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Exercice`, {
                        smart_count: 2,
                    })}
                    leftIcon={<exercices.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/periode"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Periode`, {
                        smart_count: 2,
                    })}
                    leftIcon={<periodes.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/validation"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Validation`, {
                        smart_count: 2,
                    })}
                    leftIcon={<validations.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/copy"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Copy`, {
                        smart_count: 2,
                    })}
                    leftIcon={<copys.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/traitement"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Traitement`, {
                        smart_count: 2,
                    })}
                    leftIcon={<traitements.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/publication"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Publication`, {
                        smart_count: 2,
                    })}
                    leftIcon={<publications.icon />}
                    dense={dense}
                />
            </SubMenu> 
            <SubMenu
                handleToggle={() => handleToggle('menuUtilisateur')}
                isOpen={state.menuUtilisateur}
                name="Utilisateur"
                icon={<users.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to="/saisi"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Saisie`, {
                        smart_count: 2,
                    })}
                    leftIcon={<saisis.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/ogt"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`OGT`, {
                        smart_count: 2,
                    })}
                    leftIcon={<ogts.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/indicateur"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Indicateurs`, {
                        smart_count: 2,
                    })}
                    leftIcon={<indicateurs.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/reel"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Secteur Reel`, {
                        smart_count: 2,
                    })}
                    leftIcon={<reels.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/monetaire"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`Monnaie`, {
                        smart_count: 2,
                    })}
                    leftIcon={<monetaires.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/exterieur"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`BOP`, {
                        smart_count: 2,
                    })}
                    leftIcon={<exterieurs.icon />}
                    dense={dense}
                />
                {/* <MenuItemLink
                    to="/segments"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.segments.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<LabelIcon />}
                    dense={dense}
                /> */}
            </SubMenu>
            {/* <MenuItemLink
                to="/reviews"
                state={{ _scrollToTop: true }}
                primaryText={translate(`resources.reviews.name`, {
                    smart_count: 2,
                })}
                leftIcon={<reviews.icon />}
                dense={dense}
            /> */}
        </Box>
    );
};

export default Menu;
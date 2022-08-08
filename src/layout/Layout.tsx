import * as React from 'react';
import { Layout, LayoutProps } from 'react-admin';
import AppBar from './AppBar';
import Menu from './Menu';


import { ReactQueryDevtools } from 'react-query/devtools';

export const MyLayout = (props: LayoutProps) => (
    <>
        <Layout {...props} appBar={AppBar} menu={Menu}/>
        <ReactQueryDevtools initialIsOpen={false} />
    </>
);



// import { Layout } from 'react-admin';
// import { ReactQueryDevtools } from 'react-query/devtools';

// export const MyLayout = (props: any) => (
//     <>
//         <Layout {...props} />
//         <ReactQueryDevtools initialIsOpen={false} />
//     </>
// );
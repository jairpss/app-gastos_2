import React from 'react'
import {Header, Title} from '../elements/Header'
import {Helmet} from 'react-helmet';
import BtnBack from '../elements/BtnBack'

const ExpensesList = () => {
    return ( 
        <>
            <Helmet>
                <title>Expenses List</title>
            </Helmet>

            <Header>
                <BtnBack />
                <Title>Expenses List</Title>
            </Header>
        </>
     );
}
 
export default ExpensesList;
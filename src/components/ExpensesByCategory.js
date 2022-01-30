import React from 'react'
import {Header, Title} from '../elements/Header'
import {Helmet} from 'react-helmet';
import BtnBack from '../elements/BtnBack'

const ExpensesByCategory = () => {
    return ( 
        <>
            <Helmet>
                <title>Expenses by Category</title>
            </Helmet>

            <Header>
                <BtnBack />
                <Title>Expenses by Category</Title>
            </Header>
        </>
     );
}
 
export default ExpensesByCategory;
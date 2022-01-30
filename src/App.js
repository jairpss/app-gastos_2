import React from 'react';
import {Helmet} from 'react-helmet';
import {Header, Title, ButtonsContainer, HeaderContainer} from './elements/Header'
import ButtonHeader from './elements/ButtonHeader'

const App = () => {
  return (
      <>
        <Helmet>
            <title>Add Expense</title>
        </Helmet>

        <Header>
          <HeaderContainer>
            <Title>Add Expense</Title>
            <ButtonsContainer>
              <ButtonHeader to='/expenses-category'>Categories</ButtonHeader>
              <ButtonHeader to='/expenses-list'>Expenses list</ButtonHeader>
              <ButtonHeader to='/'>X</ButtonHeader>
            </ButtonsContainer>
          </HeaderContainer>
        </Header>
      </>
  );
}

export default App;

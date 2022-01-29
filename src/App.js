import React from 'react';
import {Helmet} from 'react-helmet';
import {Header, Title, ButtonsContainer, HeaderContainer} from './elements/Header'
import Button from './elements/Button'

function App() {
  return (
      <>
        <Helmet>
            <title>Add Expense</title>
        </Helmet>

        <Header>
          <HeaderContainer>
            <Title>Add Expense</Title>
            <ButtonsContainer>
              <Button to='/expenses-category'>Categories</Button>
              <Button to='/expenses-list'>Expenses list</Button>
              <Button> X </Button>
            </ButtonsContainer>
          </HeaderContainer>
        </Header>
      </>
  );
}

export default App;

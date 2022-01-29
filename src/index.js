import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import App from './App'
import WebFont from 'webfontloader'
import Container from './elements/Container'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/Login'
import ExpensesList from './components/ExpensesList'
import ExpensesByCategory from './components/ExpensesByCategory'
import EditExpense from './components/EditExpense'
import UserRegister from './components/UserRegister'
import {Helmet} from "react-helmet"
import favicon from './images/monedas.png'
import Background from './elements/Background'

//Fonts
WebFont.load({
  google: {
    families: ['Rubik:400,500,600,700', 'sans-erif']
  }
});

const Index = () => {
  return ( 
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
      </Helmet>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/user-registration" element={<UserRegister />} />
            <Route path="/expenses-category" element={<ExpensesByCategory />} />
            <Route path="/expenses-list" element={<ExpensesList />} />
            <Route path="/edit-expense/:id" element={<EditExpense />} />
            <Route path="/" element={<App />} />
          </Routes>
        </Container>
      </BrowserRouter>

      <Background />
    </>
   );
}
 

ReactDOM.render(<Index />, document.getElementById('root'));
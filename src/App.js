import React from 'react';
import Layout from './Layout'
import { Route, Switch } from 'react-router-dom';
import Quiz from './containers/Quiz/Quiz'
import QuizList from './containers/QuizList/QuizList'  
import Auth from './containers/Auth/Auth'
import QuizCreacte from './containers/QuizCreacte/QuizCreacte'

class App extends React.Component {
   render() {
     return (
     <Layout>
        <Switch>
           <Route path='/auth' component ={Auth}/>
           <Route path='/quiz-creator ' component ={QuizCreacte}/>
           <Route path='/quiz/:id' component ={Quiz}/>
           <Route path='/' component ={QuizCreacte}/>

        </Switch>
     </Layout>
  );
}}
//QuizList  QuizCreacte
export default App

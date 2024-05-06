
import './App.css';
import React, {Component} from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';



export default class App extends Component {
  state = {
    progress: 0
  }
  constructor(){
    super();
    this.state={
      progress:0,
      mode:'light'
    }
  }
  apiKey=process.env.REACT_APP_NEWS_API;
  NEWS_API;
  // apiKey="420fa6ee869648e0ab56ea50d6333222";
  setProgress=(progress)=>{
    this.setState({
      progress: progress
    })}
    toggleMode=()=>{
      if(this.state.mode==='light'){
        this.setState({
          mode:'dark',
         })
         document.body.style.backgroundColor='black'
      }
      else{
        this.setState({
          mode:'light'
        })
        document.body.style.backgroundColor='white'
      }
    }
 render(){ 
  return (
    <div>
    <Router>
    <LoadingBar height={3}
        color='#f11946'
        progress={this.state.progress}
      />
       <NavBar mode={this.state.mode} toggleMode={this.toggleMode}/>
       <Routes>
        <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  mode={this.state.mode}  pageSize={8} key="general" country="in" category="general" />}></Route>
        <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  mode={this.state.mode} pageSize={8} key="business" country="in" category="business" />}></Route>
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  mode={this.state.mode} pageSize={8} key="entertainment" country="in" category="entertainment" />}></Route>
        <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  mode={this.state.mode} pageSize={8} key="health"country="in" category="health" />}></Route>
        <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   mode={this.state.mode} pageSize={8} key="sports" country="in" category="sports" />}></Route>
        <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  mode={this.state.mode}  pageSize={8} key="science" country="in" category="science" />}></Route>
        <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  mode={this.state.mode} pageSize={8} key="technology" country="in" category="technology"/>}></Route>

       </Routes>
    </Router>
    </div>
  );
  }
}

// export default App;

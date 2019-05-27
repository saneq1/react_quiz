 import React, {Component} from 'react'
 import classes from './Layout.module.css'
 import MenuToggle from './components/novigation/MenuToggle/MenuToggle'
 import Drawer from './components/novigation/Drawer/Drawer'


 class Layout extends Component{
   state={
     menu:false
   }
  toggleMenuHandler=() => {
    this.setState({menu: !this.state.menu})
  }

  menuClosseHandler = () => {
    this.setState({
      menu:false
    })
  }

   render(){
     return (
       <div className={classes.Layout}>
          
          <Drawer isOpen={this.state.menu}
          onClose={this.menuClosseHandler}
          />
          
         <MenuToggle
          onToggle={this.toggleMenuHandler}
            isOpen={this.state.menu}
        />
         <main>
          {this.props.children}
 
         </main>
       </div>
     )
   }
 }

 export default Layout
import React from 'react';

class MyComponent extends React.Component {

    state = {
            name: 'dassst',
            channel: 'hoi dan IT'
    }
    
    handleClickButton = () =>{
        alert('click me')
    }
    
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    
    render() {

        
  
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);

        let name = 'minh';

        return(
            <>
            <div className='first'> 
            youtube channel : {this.state.channel}
            </div>
            <div className='second'>
            <input value={this.state.name} type='text' 
            onChange={(event) => this.handleOnChangeName(event)} 
            />
            My name is {this.state.name} !!! 
            </div>
            <div className='third'>
                <button onClick={() => this.handleClickButton() } >click me</button>
            </div>
            </>
        )
    }
} 

export default MyComponent;
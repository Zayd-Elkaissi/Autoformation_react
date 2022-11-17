
// axios.get('http://127.0.0.1:8000/api/task').then((response) => console.log(response));

// function Hello() {
//     return( 
//         <div>
//             <h1>Hello World!</h1>
//         </div>
//     );
//   }



  class Task extends React.Component {
    state={
      data:[]
      
  }

componentDidMount(){
axios.get("http://127.0.0.1:8000/api/task")
.then(res=>{          
 this.setState({
  data:res.data
 })
})

}


    render() {
     return (
       
       <div>
        {/* <p>ggggg</p> */}
        { this.state.data.map(task => <li>{task.name}</li> )}
        </div>
        );
      }
    }
    
    




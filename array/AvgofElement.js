let marks = [95, 55, 68, 82, 91, 45];

let sum = 0;

for(index=0; index<marks.length; index++){
    sum += marks[index];
    console.log(marks[index]);    
};

console.log(`Add of the all numbers ${sum}`);

console.log("average of marks:- ",sum/marks.length+1);




// useEffect(()=>{
//     const fetchData = async()=>{
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+{id}); 
//         const data = await response.json();
//         setname(data);
//     }
//     fetchData();
// },[dependency]);



// ////////////////////////class component /////////////

// class myClasss extends React.Component{
//     componentDidMount(){
//         fetch("https://www.google.com")
//         .then(response => response.json())
//         .then(data => this.setState({data}))
//     };

//     componentDidUpdate(prevProps){
//         if(prevProps.id !== this.props.id){
//             //update logics
//         }
//     }
//     componentDidUnmount(){
//         clearInterval(this.interval)
//     };

//     render(){
//         return(
//             <div>
//                 <h1>hello</h1>
//             </div>
//         )
//     }
// };



// class helloWord extends React.Component{

//     render(){
//         return(
//             <div>
//                 <h1>hello</h1>
//             </div>
//         )
//     }
// }
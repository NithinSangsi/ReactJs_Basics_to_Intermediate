import PropTypes from 'prop-types'
// function List(){
    // const fruits =["apple","banana","orange","coconut","pineapple"];   
    //if in the order of fruits if we include the fruit word which start with capital letter then that will be given more priority then the others which start with small letter
    // fruits.sort();    // it sorts in the lexicographic manner -alphabetical order
    // const listitems =fruits.map(fruit =><li>{fruit}</li>)
    // return(<ul>{listitems}</ul>)
    // return(<ol>{listitems}</ol>)
    // return(fruits);
                        //array of strings to array of objects(enclose the elements of the array in{})
    // const fruits =[{id:1,name:"apple",calories:95},
    //     {id:2,name:"banana",calories:100},
    //     {id:3,name:"orange",calories:45},
    //     {id:4,name:"coconut",calories:159},
    //     {id:5,name:"pineapple",calories:37}]; 
    // fruits.sort((a,b)=>a.name.localeCompare(b.name)); //normal order
    // fruits.sort((a,b)=>b.name.localeCompare(a.name)); //Reverse alphabetical order
    // fruits.sort((a,b)=>a.calories-b.calories);  //Numerical order
    // fruits.sort((a,b)=>b.calories-a.calories);  //Reverse Numerical order
    // const lowCalFruits =fruits.filter(fruit=>fruit.calories <100);
    // const listitems =lowCalFruits.map(lowCalFruit =><li key={lowCalFruit.id}>             
    //     {lowCalFruit.name}: &nbsp;
    //     <b>{lowCalFruit.calories}</b></li>);
    // const highCalFruits =fruits.filter(fruit=>fruit.calories > 100);
    // const listitems1 =highCalFruits.map(highCalFruit =><li key={highCalFruit.id}>             
    //     {highCalFruit.name}: &nbsp;
    //     <b>{highCalFruit.calories}</b></li>);
    //  const listitems =fruits.map(fruit =><li key={fruit.id}>             
    //                                              {fruit.name}: &nbsp;
    //                                              <b>{fruit.calories}</b></li>);
        
    // return(<ol>{listitems}</ol>);
    // return(<ol>{listitems1}</ol>);


    function List(props){

        const itemlist =props.items;
        const category =props.category;

        const listitems =itemlist.map(item =><li key={item.id}>             
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>);

        return(<>
        <h3 className="lis-cat">{category}</h3>
        <ol className="lis-ite">{listitems}</ol>
        </>);
}
// List.propTypes={
//     category:PropTypes.string,
//     items: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
//                                           name:PropTypes.string,
//                                             calories:PropTypes.number})),
// }
// List.defaultProps ={
//     category:"Category",
//     items:[],
// }
// } 

export default List
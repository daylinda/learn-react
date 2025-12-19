import PropTypes from "prop-types";
function List(props){
    // const  fruits = [{id: 1, name:'Apple', calories: 95}, 
    //                  {id: 2, name:'Banana', calories: 105},
    //                     {id: 3, name:'Cherry', calories: 50}, 
    //                   {id: 4, name:'Date', calories: 277}];

    // // fruits.sort((a,b)=> a.name.localeCompare(b.name));
    // fruits.sort((a,b)=> a.calories - b.calories);


    //     const lowCalorieFruits = fruits.filter((fruit)=> fruit.calories < 100);

    //     const listItems = lowCalorieFruits.map((fruit)=><li key={fruit.id}>{fruit.name} - <b>{fruit.calories}</b> calories</li>); 


    // // const listItems = fruits.map((fruit)=><li key={fruit.id}>{fruit.name} - <b>{fruit.calories}</b> calories</li>);
    //  return(<ol>{listItems}</ol>);
    const category = props.categories;
    const items = props.items;
    const listItems = items.map((item)=><li key={item.id}>{item.name} - <b>{item.calories}</b> calories</li>);

        return(<>
        <h2 className="list-category">{category}</h2>
        <ol className="list-value">{listItems}</ol>
        </>
        );
    
}

List.propTypes = {
    categories: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired
    })).isRequired
};

List.defaultProps = {
    categories: "Unknown Category",
    items: []
};

export default List;
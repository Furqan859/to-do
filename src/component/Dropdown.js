import React from 'react';
import './Dropdown.css';

const Dropdown = (props) => {
    const { array, setArray ,getdata} = props;


    const deleteButton = (index) => {

        const List = [...array];
        List.splice(index, 1);
        setArray(List);
        console.warn(List)
    }
    const editButton = (index) => {
        
        const Edit = [...array];
        Edit.find(index)
           return index===editButton(index);
        
    }

    


    return (<div className="Dropdown">
        <div className="secound-outpot" >
            <span className="add-data-list" >
                {array.map((a, index) => <ul><li key={index}>{a} {index}

                    <div className="button-div">
                        <button onClick={() => editButton(index)} >Edit</button>
                        <button onClick={() => deleteButton(index)} >Delete</button>
                        <input type="text" getdata={getdata}/>
                        <button>save</button></div></li></ul>
                )}
            </span>
        </div>

    </div>);
};

export default Dropdown;




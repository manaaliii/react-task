import React, { useState } from 'react';


const SearchElement:React.FC = () => {
    // defining object type
    type objectElement = {
        id: number,
        firstName: string,
        lastName: string
    }
    const elements:objectElement[] = [{'id':1, firstName:'Sarah', lastName: 'Taylor'},
        {'id':2, firstName:'Jack', lastName: 'Root'},
        {'id':3, firstName:'Disha', lastName: 'Satani'},
        {'id':4, firstName:'Riya', lastName: 'Solanki'},
        {'id':5, firstName:'Siya', lastName: 'Solanki' }];

    // index state if user wants to fetch data with index
    const [index, setIndex] = useState<undefined>(undefined);
    // name state if user wants to fetch data with first name
    const [name, setName] = useState<string>('');
    // display result
    const [result, setResult] = useState<objectElement[]>([]);

    // function to update index
    const handleIndexChange = (event:any):void => {
        setIndex(prevIndex=>{
            console.log(event.target.value)
            return event.target.value;
        });

    }

    // function to update name
    const handleNameChange = (event:any):void => {
        setName(prevName=>event.target.value);
    }

    const handleSubmit = () => {

        // checking if both of the inputs are empty
        if(index == undefined && name.length === 0){
            alert('Ensure you provide either a numeric value or text input.')
            return null;
        }

        // string to number conversion to use index in filter method
        let findIndex:number = parseInt(index as any);
        let answer:objectElement[] = [];

        // finding element with matching first name
        if(name.length > 0){
            answer = elements.filter(element=>element.firstName === name)
            console.log(answer)
        }

        // finding element with matching index of the array
        if(findIndex >=0 && findIndex < elements.length){
            if(answer){
                // checking If item is already in the answer array else we will append it to findElements
                const findElements = elements.filter(( element, index)=> index === findIndex
                    && !answer.map(item => item.firstName).includes(element.firstName))

                if(findElements.length){
                    answer = [...answer, ...findElements]
                }

            }
            else
                answer = elements.filter(( element, index)=> index === findIndex)

        }

        if(answer.length === 0){
            alert("No Element is found")
            return null;
        }
        // console.log(answer)
        setResult(answer)

    }

    return(
        <div>
            <h2>Find Element</h2>
            <input type="number" placeholder="Insert Index" onChange={(event) =>handleIndexChange(event)}/>
            <input type="text" placeholder="Insert FirstName" onChange={(event) => handleNameChange(event)}/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <p>{result?.length ? (
                result.map((element)=>{
                    return(
                        <div key={element.id}>
                            <h4 style={{fontWeight:400}}>First Name : {element.firstName}</h4>
                            <h4 style={{fontWeight:400}}>Last Name : {element.lastName}</h4>
                        </div>
                    )
                })
            ) : <span>nothing to display</span>}</p>
            <hr />
        </div>
    )
}


export default SearchElement;
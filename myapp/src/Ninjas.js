import React from 'react';

const  Ninjas= ({ninjas}) =>{
    const ninjaList= ninjas.map(ninja =>{
        return (
            <div className="ninja" key={ninja.id}>
                <div>Name:{ninja.name}</div>
                <div>Age:{ninja.age}</div>
                <div>belt:{ninja.belt}</div>
            </div>
           )
       })
        return(
           <div className="ninjaList">
               {ninjaList}
           </div> 
        )
    
}
export default Ninjas
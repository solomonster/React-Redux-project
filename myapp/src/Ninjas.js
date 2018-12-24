import React from 'react';

const  Ninjas= ({ninjas}) =>{
    const ninjaList= ninjas.map(ninja =>{
        if(ninja.age > 34){
        return (
            <div className="ninja" key={ninja.id}>
                <div>Name:{ninja.name}</div>
                <div>Age:{ninja.age}</div>
                <div>belt:{ninja.belt}</div>
            </div>
           )}

           else {return null;}
       })
        return(
           <div className="ninjaList">
               {ninjaList}
           </div> 
        )
          
}
export default Ninjas
import React from 'react';
import  './Ninjas.css';

const  Ninjas= ({ninjas,deleteNinja}) =>{
    const ninjaList= ninjas.map(ninja =>{
        if(ninja.age > 34){
        return (
            <div className="ninja" key={ninja.id}>
                <div>Name:{ninja.name}</div>
                <div>Age:{ninja.age}</div>
                <div>belt:{ninja.belt}</div>
                <button onClick={()=>{deleteNinja(ninja.id)}}>Delete ninja</button>
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
export default Ninjas;
import React,{useState,useEffect} from 'react';
//sirve para manejar los estados de las variables

//useState
const Example =() =>{
    const estadoInicial ={
        nombre: "",
        apellido: ""
    
    }
    const [cuenta,setCuenta] = useState(0);   
    const [usuario,setUsuario]= useState(estadoInicial);
    const[showText,setShowText]= useState(false);
    const setNombre =(evento) =>{
        setUsuario({
            ...usuario,
            nombre: evento.target.value
        })
    }

    const setApellido=(evento)=>{
        setUsuario({
            ...usuario,
            apellido: evento.target.value
        })
    }
   
    useEffect(()=>{
        if (cuenta ===10){
            setShowText(true);
        }
        /*else{
            setShowText(false);
        }*/
        console.log(showText);
    },[cuenta])

    return(
        <div>
            <button onClick={()=>setCuenta(cuenta + 1)}>UP</button>
            <p>Usted presiono el boton {cuenta} veces</p>

            <input onChange ={setNombre} name ="nombre" type ="text">

            </input>
            <p>nombre es : {usuario.nombre}</p>
            <input onChange ={setApellido} name  = "apellido" type ="text">
  
            </input>
            <p>nombre es : {usuario.apellido}</p>

            {
                showText ? <p> HOLA A TODOS </p> : null
            }
   
        </div>
    );
}
export default Example;
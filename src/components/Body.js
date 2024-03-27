import React, { useCallback, useRef, useState} from 'react'
import './Body.css'


const Body = () => {

    const passwordRef = useRef("")
   

    const [preview , setPreview] = useState("")

    // function for uppercase 

    function UpperCase (){
        passwordRef.current.value=passwordRef.current.value.toUpperCase()
        
    }

    // function for lowercase 
    function lowercase(){
        passwordRef.current.value=passwordRef.current.value.toLowerCase()
    }

    // function for clear all text 

    function cleartext(){
        passwordRef.current.value="";
    }

    // copypass sec 

    const copytext = useCallback(()=>{
        let pass = passwordRef.current.value;
        // passwordRef.current.value?.select()
        window.navigator.clipboard.writeText(pass)
    },[])

    // remove extra space 

    function removeExtraSpace(){
        let newText = preview.split(/[ ]+/);
        setPreview(newText.join(" "))
        passwordRef.current.value=passwordRef.current.value.split(/[ ]+/).join(" ")
    }

  return (
    <div className='body'>
            <div className="text_area">
                <textarea style={{outline:'none'}} name="" id="" cols="170" rows="09" ref={passwordRef} onChange={() => setPreview(passwordRef.current.value)} ></textarea>
                
            </div>
            <div className="collection_Of_btns">
                <button onClick={()=>{
                    UpperCase()
                    setPreview(passwordRef.current.value.toUpperCase())
                }}>CONVERT UPPERCASE</button>
                <button onClick={()=>{
                    lowercase()
                    setPreview(passwordRef.current.value.toLowerCase())

                }}>convert lowercase</button>
                <button onClick={()=>{
                    cleartext()
                    setPreview("")

                }}>Clera Text</button>
                <button onClick={copytext}>Copy to clipBord</button>
                <button onClick={removeExtraSpace}>Remove Extra Space</button>
            </div>

            <div className="summary">
                <div>
                <h1>Summery Of Your Text</h1>
                <p>Nummber of words:{preview.split(" ").length}</p>
                <p>Number of charecters : {preview.length}</p>
                <p>Reading Time: {0.008*preview.split(" ").length}</p>
                
                </div>
            </div>
            <div>
            <textarea cols="130" rows="06" value={preview} readOnly>{}</textarea>
                 
            </div>
      
    </div>
  )
}

export default Body

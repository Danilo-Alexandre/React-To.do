import "./LoginContainer.css"
import emailIcon from "../../Images/email.png"
import userIcon from "../../Images/user.png"
import padlockIcon from "../../Images/padlock.png"
import show from "../../Images/icon.png"
import hide from "../../Images/icon-eye.png"
import {useState} from "react"

function LoginContainer(){

    const [visibility, setVisibility] = useState(false)
    const inputType = visibility ? "text" : "password"
    const imageEye = visibility ? show : hide


function handleVisibility(){
    setVisibility(visibility => !visibility)
}

function formHandler(event){
    event.preventDefault()
}




    return(
        <>
            <section className="container-login">
                <img className="img-user" src={userIcon} alt="icon-login"></img>
                <form onSubmit={formHandler} className="form-login">

                    <div className="input-email">
                    <img className="img-email" src={emailIcon} alt="icon-email"></img>
                    <input type="email" name="email" placeholder="Digite seu email"/>
                    </div>

                    <div className="input-password">
                    <img className="img-password" src={padlockIcon} alt="icon-password"></img>
                    <input type={inputType} name="password" placeholder="Digite seu Password"/>
                    <img onClick={handleVisibility} className="img-password" src={imageEye} alt="icon-password"></img>
                    
                    </div>

                    <button>Login</button>

                </form>
            </section> 
        </>
    )
}


export default LoginContainer
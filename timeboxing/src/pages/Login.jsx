import  {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../css/login.css'

function Login(){
    // Usuario
    const [user, setUser] = useState('David');
    // Contraseña
    const [pass, setPass] = useState('Maldonado');
    // Navegación
    const navigate = useNavigate();

    //Función que controla el evento de inicio de sesión
    const handleLogin = (e) => {
        e.preventDefault();
        if (user.trim().length > 2){
            if(pass.trim().length > 2){
                if (user == 'David' && pass == 'Maldonado'){
                    localStorage.setItem('trainer_current', user)
                    alert('Bienvenido' + user );
                    navigate('/Dashboard');
                }else {
                    alert('Usuario o contraseña incorrecta... Vuelve a intentarlo');
                }
            }else{
                alert('Tu contraseña debe tener al menos 3 dígitos');
            }
            
        }else{
            alert('Tu nombre debe contener al menos 3 letras');
        }
    }
    //retorna la estructura HTML del Login
    return (
    <div className="login-page">
        <div className="login-card">
            <div className="login-image">
                <img src="/src/img/foto_login.png" alt="Login illustration" />
            </div>

            <div className="login-form">
                <h2>Sign In</h2>
                <p className="subtitle">Unlock your world.</p>

                <form onSubmit={handleLogin}>
                    <label>Email</label>
                    <input
                    type="text"
                    value={user}
                    onChange={(e)=> setUser(e.target.value)}
                    placeholder="Enter your email"
                    required
                    />

                    <label>Password</label>
                    <input
                    type="password"
                    value={pass}
                    onChange={(e)=> setPass(e.target.value)}
                    placeholder="Enter your password"
                    required
                    />

                    <button type="submit" className="btn-primary">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}
export default Login
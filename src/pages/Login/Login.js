import styles from './Login.module.css';
import {useState} from "react";

function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    function handlelogin (event) {
        setLogin(event.target.value);
    }
    function handlepassword (event) {
        setPassword(event.target.value);
    }

    return (
        <div className={`container d-flex ${styles.containerCenter}`}>
            <div className="col-6">
                <img className={styles.loginImage} alt="" src='/assets/images/login-img.png'/>
            </div>
            <div className="col-6">
                <div className={styles.contentDiv}>
                    <div className="mb-3 d-flex justify-content-center">
                        <h2 htmlFor="exampleFormControlInput1" className="form-label">Login</h2>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Tên đăng nhập</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                               onChange={event => setLogin(event.target.value)}
                               value={login}
                              />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput2" className="form-label">Mật khẩu</label>
                        <input type="password" className="form-control" id="exampleFormControlInput2"
                               onChange={event => setPassword(event.target.value)}
                               value={password}
                               />
                    </div>
                    <div className="mb-3 mt-3">
                        <button type="button" className="btn btn-primary" style={{width:"100%"}}>Đăng nhập</button>
                    </div>

                </div>
            </div>
        </div>
    )
        ;
};
export default Login;
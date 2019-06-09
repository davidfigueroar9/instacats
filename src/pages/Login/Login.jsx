import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  onLogin = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = this.state;
      const data = {
        email,
        password,
      };
      const res = await axios.post('https://rest-user.herokuapp.com/login', data);
      console.log(res.data.token); // eslint-disable-line
    } catch (err) {
      console.log(err.response.data.err.message); // eslint-disable-line
    }
  }

  onHandleChange = (e) => {
    switch (e.target.id) {
      case 'email':
        this.setState({
          email: e.target.value,
        });
        break;
      case 'password':
        this.setState({
          password: e.target.value,
        });
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <div className="login">
        <div className="content">
          <div className="icon">
            Instacats
          </div>
          <div className="login-google" />
          <div className="separator">
            <div className="line" />
            <div className="line-o">o</div>
            <div className="line" />
          </div>
          <div className="content-form">
            <form className="form" onSubmit={this.onLogin} action="">
              <div className="input-content">
                <input id="email" type="text" className="input" onChange={this.onHandleChange} placeholder="Nombre de usuario" required />
              </div>
              <div className="input-content">
                <input id="password" type="password" className="input" onChange={this.onHandleChange} placeholder="Contraseña" required />
              </div>
              <div className="check-content">
                <label htmlFor="saveInfo">
                  <input id="saveInfo" type="checkbox" />
                  Guardar la información de inicio de sesión
                </label>
              </div>
              <div className="btn-content">
                <button className="button" type="submit">Iniciar Sesión</button>
              </div>
            </form>
            <div className="password">
              <Link to="/login">¿Olvidaste tu contraseña?</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

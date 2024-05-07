import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            mensagem: ''
        };
    }
    
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const { email, senha } = this.state;
        // Aqui você pode implementar a lógica de login no front-end
        console.log('Dados do formulário:', { email, senha });
        // Limpar campos após tentativa de login (opcional)
        this.setState({
            email: '',
            senha: '',
            mensagem: 'E-mail ou senha incorretos.'
        });
    }
    
    render() {
        const { email, senha, mensagem } = this.state;
        return (
            <div className="login-container">
                <h2 className="login-title">LOGIN</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-container">
                        <label>Email:</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={email} 
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className="input-container">
                        <label>Senha:</label>
                        <input 
                            type="password" 
                            name="senha" 
                            value={senha} 
                            onChange={this.handleChange} 
                        />
                    </div>
                    <button className="login-button" type="submit">Acessar</button>
                    <div className="login-message">{mensagem}</div>
                </form>
            </div>
        );
    }
}

export default Login;
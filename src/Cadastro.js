import React, { Component } from 'react';

class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            nome: '',
            sobrenome: '',
            dataNascimento: ''
        };
    }
    
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const { email, senha, nome, sobrenome, dataNascimento } = this.state;
        
        console.log('Dados do formulário:', { email, senha, nome, sobrenome, dataNascimento });
       
        this.setState({
            email: '',
            senha: '',
            nome: '',
            sobrenome: '',
            dataNascimento: ''
        });
        alert('Usuário cadastrado com sucesso!');
    }
    
    render() {
        const { email, senha, nome, sobrenome, dataNascimento } = this.state;
        return (
            <div>
                <h2>Cadastro</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={email} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input type="password" name="senha" value={senha} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Nome:</label>
                        <input type="text" name="nome" value={nome} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Sobrenome:</label>
                        <input type="text" name="sobrenome" value={sobrenome} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Data de Nascimento:</label>
                        <input type="date" name="dataNascimento" value={dataNascimento} onChange={this.handleChange} />
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        );
    }
}

export default Cadastro;
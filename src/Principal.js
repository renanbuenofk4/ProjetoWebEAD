import React from 'react';

function Principal() {
    // Aqui você pode adicionar lógica para recuperar os dados do usuário após o login
    const usuario = {
        nome: 'Fulano de Tal',
        sobrenome: 'da Silva',
        dataNascimento: '01/01/1990'
    };

    return (
        <div className="principal-container">
            <h2 className="principal-title">DADOS DO USUÁRIO</h2>
            <div className="info-container">
                <label>Nome:</label>
                <span>{usuario.nome}</span>
            </div>
            <div className="info-container">
                <label>Sobrenome:</label>
                <span>{usuario.sobrenome}</span>
            </div>
            <div className="info-container">
                <label>Data de Nascimento:</label>
                <span>{usuario.dataNascimento}</span>
            </div>
        </div>
    );
}

export default Principal;
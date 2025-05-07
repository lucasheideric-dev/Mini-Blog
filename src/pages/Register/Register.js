import styles from "./Register.module.css";

import { useState, useEffect } from "react";

const Register = () => {
  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form>
        <label>
          <span>Nome e Sobrenome:</span>
          <input type="text" name="displayName" required placeholder="Nome" />
        </label>
        <label>
          <span>E-mail:</span>
          <input type="email" name="email" required placeholder="E-mail" />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name="Password" required placeholder="Senha" />
        </label>
        <label>
          <span>Confirmar Senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirmar Senha"
          />
        </label>

        <button className="btn">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;

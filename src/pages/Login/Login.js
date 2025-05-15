import styles from "./Login.module.css";

import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
      console.log(authError);
    }
  }, [authError]);

  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça o login para poder utilizar o sistema.</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="Password"
            required
            placeholder="Digite uma Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {!loading && <button className="btn">Entrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguardando...
          </button>
        )}
        {error && (
          <p style={{ marginTop: "15px" }} className="error">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;

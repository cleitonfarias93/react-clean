import React from 'react'
import Styles from './login-styles.scss'
import { LoginHeader, Footer, Spinner } from '@/presentation/components'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <form className={Styles.form}>
        <h2>Login</h2>
        <LoginHeader />
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="Digite seu email" />
          <span className={Styles.status}>🔴</span>
        </div>
        <div className={Styles.inputWrap}>
          <input
            type="password"
            name="password"
            placeholder="Digite seu senha"
          />
          <span className={Styles.status}>🔴</span>
        </div>
        <button className={Styles.submit} type="submit">Entrar</button>
        <span className={Styles.link}>Criar conta</span>
        <div className={Styles.errorWrap}>
          <Spinner />
          <span className={Styles.error}>Error</span>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Login

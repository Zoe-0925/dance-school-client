import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginThunk, signUpThunk } from '../../Actions/user.actions'
import history from '../../history'

export const useAuth = () => {
  const dispatch = useDispatch()
  const [page, setPage] = useState('login')

  const login = async value => {
    const account = await dispatch(loginThunk(value))
    if (account && account.role) {
      history.push('/' + account.role)
    }
  }

  const signUp = async value => {
    console.log("value", value)
    const account = await dispatch(signUpThunk(value))
    if (account && account.role) {
      await dispatch(loginThunk(account))
      history.push('/' + account.role)
    }
  }

  return { page, setPage, login, signUp }
}

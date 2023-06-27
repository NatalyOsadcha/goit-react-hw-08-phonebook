import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="name" className={css.input} required/>
      </label>
      <label className={css.label}>
        Email
        <input
          type="email"
          name="email"
          className={css.input}
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
          title="Mail must have @ and at least 2 characters after the dot"
          required
        />
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          name="password"
          className={css.input}
          pattern="[0-9a-zA-Z!@#$%^&*]{7,}"
          title="Login must contain at least 7 characters"
          required
        />
      </label>
      <button type="submit" className={css.button}>
        Register
      </button>
    </form>
  );
};

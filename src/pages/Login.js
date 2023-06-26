import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import BG from '../img/bg.jpeg';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    backgroundImage: `url(${BG})`,
    backgroundRepeat: 'no-repeat',
    opacity: 0.6,
  }
}

export default function Login() {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}
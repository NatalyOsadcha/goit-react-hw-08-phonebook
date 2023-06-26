import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import BG from '../img/bg.jpeg';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    backgroundImage: `url(${BG})`,
    backgroundRepeat: 'no-repeat',
    opacity: 0.6,
  }
}

export default function Register() {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
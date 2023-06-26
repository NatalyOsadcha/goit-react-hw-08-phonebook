import BG from '../img/bg.jpeg'
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    backgroundImage: `url(${BG})`,
    backgroundRepeat: 'no-repeat',
    opacity: 0.6,
  },
  title: {
    paddingTop: 60,
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 48,
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
       This is your inspiration <b>Phonebook</b>
      </h1>
    </div>
  );
}
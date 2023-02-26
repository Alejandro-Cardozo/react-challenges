import Header from '../components/Header';

const NotFound = ({ text }) => {
  return (
    <>
      <Header />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>This {text || 'page'} doesn't exist!</h1>
      </div>
    </>
  );
};

export default NotFound;

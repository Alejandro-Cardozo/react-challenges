// Components
import Header from './Header';

// Styles
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <main className={classes.container}>
      <Header OnSelectCity={props.OnSelectCity} />
      <div className={classes.content}>{props.children}</div>
    </main>
  );
};

export default Layout;

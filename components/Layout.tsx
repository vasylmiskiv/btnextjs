import Meta from "./Meta";
import Nav from "./Nav";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Meta />
      <div className="container mx-auto">
        <Nav />
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;

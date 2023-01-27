import Button from "./Button";
import Card from "./Card";
import style from "./ModuleMessage.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.process} />;
};

const ModaleOverlay  = (props) => {
  const defaultClick = (event) => {
    event.stopPropagation();
  };
  return (
    <>
      <Card cssClass={style.modal}>
        <div onClick={defaultClick}>
          <header className={style.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={style.content}>
            <p>{props.message}</p>
          </div>
          <footer className={style.actions}>
            <Button process={props.process}>Close</Button>
          </footer>
        </div>
      </Card>
    </>
  );
};

const ModuleMessage = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop process={props.process} />,
        document.getElementById("backdrop-root")
      )}
        {ReactDOM.createPortal(
        <ModaleOverlay title={props.title} message={props.message} process={props.process} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ModuleMessage;

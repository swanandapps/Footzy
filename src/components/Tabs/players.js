import Tab from "@material-ui/core/Tab";

function Players({ setValue }) {
  function setIndex() {
    setValue(1);
  }

  return <Tab onClick={setIndex} label="Top Players" />;
}

export default Players;

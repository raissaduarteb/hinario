import { useMatch } from "react-router-dom";
import Compartilhar from "../ui/Compartilhar";

const Menu = ({ hino }) => {
  const match = useMatch("/hino/:id");
  const id = match?.params?.id;

  return <div>{id && <Compartilhar hino={hino} />}</div>;
};

export default Menu;

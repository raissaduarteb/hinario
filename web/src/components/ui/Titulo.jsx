import { useQuery } from "@tanstack/react-query";
import { useMatch } from "react-router-dom";
import LogoLaranja from "../../../imgs/LogoLaranja.svg";
import { fetchHinoPorIdentificador } from "../../utils/api/hinos";
import Menu from "../hymn/Menu";

const Titulo = () => {
  const match = useMatch("/hino/:id");

  const id = match?.params?.id;

  const { data: hino } = useQuery({
    queryKey: ["hino", id],
    queryFn: () => fetchHinoPorIdentificador(id),
    enabled: !!id,
  });

  return (
    <div className="containersuperior">
      <div className="containertitulo">
        <img src={LogoLaranja} alt="logolaranja" style={{ width: "15px" }} />
        <h1 className="titulo">Hinário</h1>
      </div>
      <Menu hino={hino} />
    </div>
  );
};

export default Titulo;

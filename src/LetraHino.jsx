import { useFontSize } from "./FontSizeContext";

const LetraHino = ({ letra }) => {
  const { fontSize } = useFontSize();

  return (
    <div className="hino">
      <span
        className="hino-estrofe"
        style={{ fontSize: `${fontSize}px` }}
        dangerouslySetInnerHTML={{ __html: letra.replace(/\n/g, "<br>") }}
      />
    </div>
  );
};

export default LetraHino;

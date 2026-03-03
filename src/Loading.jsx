import ClipLoader from "react-spinners/ClipLoader";

function Loading() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
    >
      <ClipLoader color="rgba(233, 78, 26, 1)" size={50} />
    </div>
  );
}

export default Loading;

import ClipLoader from "react-spinners/ClipLoader";

function Loading() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
      <ClipLoader color="#4f46e5" size={50} />
    </div>
  );
}

export default Loading;

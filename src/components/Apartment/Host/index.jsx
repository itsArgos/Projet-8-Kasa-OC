import "./host.scss";

export const Host = ({ name, picture }) => {
  return (
    <div className="host_content">
      <p>{name}</p>
      <div className="circle">
        <img src={picture} alt="Photo de l'hôte" />
      </div>
    </div>
  );
};

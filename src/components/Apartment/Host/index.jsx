import "./host.scss";

export const Host = ({ hostInfo }) => {
  if (!hostInfo || !hostInfo.host) {
    return <div>Données manquantes</div>;
  }

  const { name: hostName, picture: hostPicture } = hostInfo.host;

  return (
    <div className="host_content">
      <p>{hostName}</p>
      <div className="circle">
        <img src={hostPicture} alt="Photo de l'hôte" />
      </div>
    </div>
  );
};

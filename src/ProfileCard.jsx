import "./ProfileCard.css";

function ProfileCard({name, image, description}){
    return(
        <div className="profile-card">
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <p>{description}</p>
        </div>
    );
}

export default ProfileCard;
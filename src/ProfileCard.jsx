import "./ProfileCard.css";

function ProfileCard({name, image, description}){
    return(
        <div className="profile-card">
            <h2>{name}</h2>
            image={`${import.meta.env.BASE_URL}profilepic.jpg`}
            <p>{description}</p>
        </div>
    );
}

export default ProfileCard;
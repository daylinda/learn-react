import profilePic from './assets/Avatar_Davina.png';

function ProfilePicture() {

    const profilePicUrl = profilePic;
    const altText = "Profile Picture";
    const handleOnClick = (e) => {
        alert("This is my profile picture!");
        e.target.style.border = "5px solid hsla(225, 11%, 7%, 1.00)";
        e.target.style.borderRadius = "10px";
    }
    return (
        <div>
            <img height={200} padding={10} src={profilePicUrl} alt={altText} onClick={(e)=>handleOnClick(e)} />
        </div>
    );
}

export default ProfilePicture;
import ProfileCard from "./ProfileCard";

function App(){
  return( 
    <>
      <ProfileCard  
        name="Priya Vandana"
        image={`${import.meta.env.BASE_URL}profilepic.jpg`}
        description="MCA student learning Full Stack Development"

      />
    </>
  );
}

export default App;
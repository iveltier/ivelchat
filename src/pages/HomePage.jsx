import Home from "../components/home/home.jsx";
function HomePage({ isMonospace, currentUserPicture }) {
	return (
		<Home isMonospace={isMonospace} currentUserPicture={currentUserPicture} />
	);
}
export default HomePage;

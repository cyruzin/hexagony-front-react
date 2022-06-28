import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../auth/authentication";
import "./styles.scss";
export const Header = () => {
	const navigate = useNavigate();
	function handleLogout() {
		logout();
		navigate("/login");
	}
	return (
		<div className="container-header">
			<div className="content-header">
				<img src="../../assets/image/logo_hexagony.png" alt="Hexagony" />
				<div className="content-menu">
					<nav>
						<ul>
							<li>
								<Link to="/album">Album</Link>
							</li>
							<li>
								<Link to="/users">Users</Link>
							</li>
						</ul>
					</nav>
					<button onClick={handleLogout}>Logout</button>
				</div>
			</div>
		</div>
	);
};
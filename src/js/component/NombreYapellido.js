/* eslint-disable no-console */
import React, { useState } from "react";

const NombreYapellido = () => {
	const [name, setName] = useState("Your Name");
	const [lastName, setLastname] = useState("Your Last Name");
	const [country, setCountry] = useState("Your Country");
	const [city, setCity] = useState("Your City");
	const [role, setRole] = useState("Your Role");
	const [showImage, setShowImage] = useState("");
	const [twitter, setTwitter] = useState("https://twitter.com/alesanchezr");
	const [github, setGithub] = useState("https://github.com/alesanchezr");
	const [linkedin, setLinkedin] = useState(
		"https://linkedin.com/alesanchezr"
	);
	const [instagram, setInstagram] = useState(
		"https://instagram.com/alesanchezr"
	);
	const [position, setPosition] = useState("position-right");

	const handleChangePosition = event => {
		const position1 = event.target.value;
		setPosition(position1);
	};

	const handleChangeInstagram = event => {
		const instagram1 = event.target.value;
		setInstagram(instagram1);
	};

	const handleChangeGitHub = event => {
		const github1 = event.target.value;
		setGithub(github1);
	};

	const handleChangeLinkedin = event => {
		const linkedin1 = event.target.value;
		setLinkedin(linkedin1);
	};

	const handleChangeTwitter = event => {
		const twitter1 = event.target.value;
		setTwitter(twitter1);
	};

	const handleChangeImage = event => {
		const showImageAux = event.target.value;
		setShowImage(showImageAux === "true");
	};

	const handleChange = event => {
		setCountry(event.target.value);
	};

	const handleChangerole = event => {
		setRole(event.target.value);
	};
	const handleChange1 = event => {
		setCity(event.target.value);
	};
	const controlador = event => {
		const value = event.target.value;
		setName(value);
	};

	const controlador1 = event => {
		const value1 = event.target.value;
		setLastname(value1);
	};

	return (
		<>
			<div className="container-fluid">
				<ul className="filters">
					<li>
						<label>Include Cover</label>
						<select
							className="picker"
							value={showImage}
							onChange={handleChangeImage}>
							<option value="" disabled>
								Include Cover
							</option>
							<option value={true}>true</option>
							<option value={false}>false</option>
						</select>
					</li>
					<li>
						<label>Name</label>
						<input
							className="picker "
							maxLength="20"
							onChange={controlador}
							name="Your Name"
							value={name}
						/>
					</li>
					<li>
						<label>Last Name</label>
						<input
							className="picker "
							maxLength="20"
							onChange={controlador1}
							name="Your Last Name"
							value={lastName}
						/>
					</li>
					<li>
						<label>S.M. Position</label>
						<select
							className="picker"
							value={position}
							onChange={handleChangePosition}>
							<option value="position-left">Left</option>
							<option value="position-right">Right</option>
						</select>
					</li>
					<li>
						<label>Twitter</label>
						<input
							className="picker"
							type="text"
							value={twitter}
							onChange={handleChangeTwitter}
						/>
					</li>
					<li>
						<label>Github</label>
						<input
							className="picker"
							type="text"
							value={github}
							onChange={handleChangeGitHub}
						/>
					</li>
					<li>
						<label>LinkedIn</label>
						<input
							className="picker"
							type="text"
							value={linkedin}
							onChange={handleChangeLinkedin}
						/>
					</li>
					<li>
						<label>Instagram</label>
						<input
							className="picker"
							type="text"
							value={instagram}
							onChange={handleChangeInstagram}
						/>
					</li>
					<li>
						<label>Role</label>
						<select
							className="picker "
							value={role}
							onChange={handleChangerole}>
							<option value="">null</option>
							<option value="Web Developer">Web Developer</option>
							<option value="Floor Planner">Floor Planner</option>
							<option value="Technical Writter">
								Technical Writter
							</option>
						</select>
					</li>

					<li>
						<label>City</label>
						<select
							className="picker "
							value={city}
							onChange={handleChange1}>
							<option value="">null</option>
							<option value="Miami">Miami</option>
							<option value="Munich">Munich</option>
							<option value="Caracas">Caracas</option>
							<option value="Toronto">Toronto</option>
						</select>
					</li>
					<li>
						<label>Country</label>
						<select
							className="picker "
							value={country}
							onChange={handleChange}>
							<option value="">null</option>
							<option value="USA">USA</option>
							<option value="Germany">Germany</option>
							<option value="Canada">Canada</option>
							<option value="Venezuela">Venezuela</option>
						</select>
					</li>
				</ul>
			</div>

			<div className="widget">
				<div className="caja">
					{showImage && (
						<img
							src={
								"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo_rS1Ck82s8KYip4ZujhhRma4KMOlevesmA&usqp=CAU"
							}
						/>
					)}
					<img
						className="photo"
						src={"https://randomuser.me/api/portraits/women/42.jpg"}
					/>
				</div>

				<h1>
					{name} {lastName}
				</h1>
				<h2>{role}</h2>
				<h3>
					{city}, {country}
				</h3>
				<ul className={`${position}`}>
					<li>
						<a href={twitter}>
							<i className="fa fa-twitter"></i>
						</a>
					</li>
					<li>
						<a href={github}>
							<i className="fa fa-github"></i>
						</a>
					</li>
					<li>
						<a href={linkedin}>
							<i className="fa fa-linkedin"></i>
						</a>
					</li>
					<li>
						<a href={instagram}>
							<i className="fa fa-instagram"></i>
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default NombreYapellido;

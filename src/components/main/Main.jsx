import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";
const Main = () => {
	const {
		onSent,
		recentPrompt,
		showResults,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);

	

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            onSent();
        }
    };
    const handleCardClick = (promptText) => {
			setInput(promptText);
		};
	return (
		<div className="main">
			<div className="nav">
				<p>OvaTes AI</p>
			</div>
			<div className="main-container">
				{!showResults ? (
					<>
						<div className="greet">
							<p>
								<span>OvaTes Says Hi! </span>
							</p>
							<p>How Can I Help You Today?</p>
						</div>
						<div className="cards">
							<div
								className="card"
								onClick={() =>
									handleCardClick("What are some effective ways to practice safer sex?")
								}
							>
								<p>What are some effective ways to practice safer sex? </p>
								<img src={assets.compass_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick(
										"What steps can individuals take to prevent unintended pregnancies?"
									)
								}
							>
								<p>What steps can individuals take to prevent unintended pregnancies? </p>
								<img src={assets.message_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick("How can I manage menstrual cramps effectively?")
								}
							>
								<p>How can I manage menstrual cramps effectively?</p>
								<img src={assets.bulb_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() => {
									handleCardClick(
										"what steps can I take to ensure my gynecological health remains optimal as I go through different stages of life? "
									);
								}}
							>
								<p>Cwhat steps can I take to ensure my gynecological health remains optimal as I go through different stages of life?</p>
								<img src={assets.code_icon} alt="" />
							</div>
						</div>
					</>
				) : (
					<div className="result">
						<div className="result-title">
							<img src={assets.user} alt="" />
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
							<img src={assets.gemini_icon} alt="" />
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
									<hr />
								</div>
							) : (
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
						</div>
					</div>
				)}

				<div className="main-bottom">
					<div className="search-box">
						<input
							onChange={(e) => {
								setInput(e.target.value);
							}}
							onKeyPress={handleKeyPress} // Add event listener

							value={input}
							type="text"
							placeholder="Enter Your Question Here."
						/>
						<div>
						
							<img
								src={assets.send_icon}
								alt=""
								onClick={() => {
									onSent();
								}}
							/>
						</div>
					</div>
					<div className="bottom-info">
						<p>
							
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;

import React from "react";
import "./Chessboard.css";

const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"];

function Chessboard() {
	let board = [];
  
	for (let j = verticalAxis.length - 1; j >= 0; j--) {
		for (let i = 0; i < horizontalAxis.length; i++) {
			const color = (i + j) % 2 !== 0 ? "white" : "black";
			board.push(
				<span className={`tile ${color}-tile`}>
					{horizontalAxis[i]}
					{verticalAxis[j]}{" "}
				</span>
			);
		}
	}

	return <div id="chessboard">{board}</div>;
}

export default Chessboard;

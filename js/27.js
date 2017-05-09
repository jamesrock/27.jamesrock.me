(function() {

	var
	outcomes = [],
	body = document.body,
	createCard = function(outcome, id) {

		var
		node = document.createElement("div");

		node.classList.add("card");
		node.setAttribute("data-id", id);
		node.setAttribute("data-outcome", outcome);

		return node;

	},
	createCardRow = function() {

		var
		node = document.createElement("div");

		node.classList.add("row");

		return node;

	},
	calc = function() {

		var
		first = (outcomes[0]),
		second = (outcomes[1]),
		third = (outcomes[2]),
		pos = (first + second + third);

		alert(pos);

	},
	cards = createCardRow(),
	firstRow = createCardRow(),
	secondRow = createCardRow(),
	thirdRow = createCardRow(),

	firstRowCard1 = createCard(0, 3),
	firstRowCard2 = createCard(0, 2),
	firstRowCard3 = createCard(0, 1),

	secondRowCard1 = createCard(1, 6),
	secondRowCard2 = createCard(1, 3),
	secondRowCard3 = createCard(1, 0),

	thirdRowCard1 = createCard(2, 18),
	thirdRowCard2 = createCard(2, 9),
	thirdRowCard3 = createCard(2, 0);

	firstRow.appendChild(firstRowCard1);
	firstRow.appendChild(firstRowCard2);
	firstRow.appendChild(firstRowCard3);

	secondRow.appendChild(secondRowCard1);
	secondRow.appendChild(secondRowCard2);
	secondRow.appendChild(secondRowCard3);

	thirdRow.appendChild(thirdRowCard1);
	thirdRow.appendChild(thirdRowCard2);
	thirdRow.appendChild(thirdRowCard3);

	cards.addEventListener("click", function(e) {

		outcomes[Number(e.target.dataset.outcome)] = Number(e.target.dataset.id);

		e.target.classList.add("selected");

		if(outcomes.length===3) {

			setTimeout(function() {

				calc();

			}, 100);

		};

		e.preventDefault();

	});

	cards.appendChild(firstRow);
	cards.appendChild(secondRow);
	cards.appendChild(thirdRow);

	body.appendChild(cards);

})();

import "./scss/style.scss";
import { SingleRepo } from "./interfaces/index";
import { getDetails, getFilteredRepos, displayTable } from "./utils/index";
import { getUserRepos } from "./api/index";

const repos: NodeListOf<Element> = document.querySelectorAll("repos");
const container: Element = document.querySelector("#container")!;

const parseTagToDiv = async (repos: NodeListOf<Element>): Promise<void> => {
	repos.forEach((repo) => {
		const { username, date } = getDetails(repo);
		getUserRepos(username).then(({ data: userRepos }) => {
			const filteredRepos: SingleRepo[] = getFilteredRepos(userRepos, date);

			container.innerHTML += displayTable(filteredRepos, username);
		});
	});
};

if (repos) {
	parseTagToDiv(repos);
}

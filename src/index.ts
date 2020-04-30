import { getDetails, getFilteredRepos } from "./utils/index";
import { SingleRepo } from "./types/index";
import { getUserRepos } from "./api/index";

const repos: NodeListOf<Element> = document.querySelectorAll("repos");

const parseTagToDiv = async (repos: NodeListOf<Element>): Promise<void> => {
	for (const repo of Array.from(repos)) {
		const { username, date } = getDetails(repo);
		const { data: userRepos } = await getUserRepos(username);
		const filteredRepos: SingleRepo[] = getFilteredRepos(userRepos, date);
	}
};

if (repos) {
	parseTagToDiv(repos);
}

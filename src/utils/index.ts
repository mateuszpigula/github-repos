import { SingleRepo } from "../types/index";

/**
 * Function for getting userName from repos node
 * @param {Element} node - A node param
 * @return {string}
 */
const getUserName = (node: Element): string => {
	return node.getAttribute("data-user") || "";
};

/**
 * Function for getting minimal last update date from repos node
 * @param {Element} node - A node param
 * @return {string}
 */
const getUpdateDate = (node: Element): string => {
	return node.getAttribute("data-update") || "";
};

/**
 * Function for getting details of single repos tag
 * @param {Element} node - A node param
 * @return {{username: string, date: string}}
 */
export const getDetails = (node: Element): { username: string; date: string } => {
	return {
		username: getUserName(node),
		date: getUpdateDate(node),
	};
};

export const getFilteredRepos = (repos: SingleRepo[], updatedAt: string): SingleRepo[] => {
	const updateAtDate = new Date(updatedAt);
	const filteredRepos = repos.filter((repo) => {
		const repoUpdatedAtDate = new Date(repo.updated_at);

		return repoUpdatedAtDate.getTime() > updateAtDate.getTime();
	});

	return filteredRepos;
};

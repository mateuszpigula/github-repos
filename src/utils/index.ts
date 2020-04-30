import { SingleRepo } from "../interfaces/index";

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

/**
 * Function for filtering repos array to have repos with update date after required one
 * @param {SingleRepo[]} repos - The array of repos in SingleRepo type
 * @param {string} updatedAt - Date as string as minimal date for repo to be updated
 * @return {SingleRepo[]}
 */
export const getFilteredRepos = (repos: SingleRepo[], updatedAt: string): SingleRepo[] => {
	const updateAtDate = new Date(updatedAt);
	const filteredRepos = repos.filter((repo) => {
		const repoUpdatedAtDate = new Date(repo.updated_at);

		return repoUpdatedAtDate.getTime() > updateAtDate.getTime();
	});

	return filteredRepos;
};

/**
 * Function for formatting date to exact format
 * @param {string} dateString - A date string to be formatted
 * @return {Date}
 */
const formatDate = (dateString: string): string =>
	new Date(dateString).toLocaleString("pl-PL", { day: "2-digit", month: "2-digit", year: "numeric" });

/**
 * Function for parsing repos array and returning div with repos' data
 * @param {SingleRepo[]} repos - The array of repos in SingleRepo type
 * @param {string} username - The username to be displayed above table
 * @return {HTMLElement}
 */
export const displayTable = (repos: SingleRepo[], username: string): string => {
	return `<div class="table__wrapper">
		<h2 class="username">${username}</h2>
		<table class="table">
			<thead>
				<tr class="row row--head">
					<th>Name</th>
					<th class="description_cell">Description</th>
					<th>Last update at</th>
					<th>Link</th>
				</tr>
			</thead>
			<tbody>	
				${repos
					.map(
						({ name, description, updated_at, html_url }) =>
							`<tr class="row row--body">
								<td>${name}</td>
								<td class="description_cell">${description || "-"}</td>
								<td>${formatDate(updated_at)}</td>
								<td><a href="${html_url}" class="button">Go to github</a></td>
							</tr>`
					)
					.join("")}
			</tbody>
		</table>
	</div>`;
};

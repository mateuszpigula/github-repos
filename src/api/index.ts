import axios, { AxiosResponse } from "axios";

const api = axios.create({
	baseURL: "https://api.github.com/",
	headers: {
		...(process.env.GITHUB_TOKEN && { Authorization: `token ${process.env.GITHUB_TOKEN}` }),
	},
});

export const getUserRepos = (user: string): Promise<AxiosResponse> => {
	return api.get(`users/${user}/repos`);
};

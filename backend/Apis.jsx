export async function GhProfile() {
  let response = await fetch("https://api.github.com/users/codacad");
  let data = await response.json();
  return data
}
export async function GhRepos() {
  let response = await fetch("https://api.github.com/users/Codacad/repos");
  let data = await response.json();
  return data
}
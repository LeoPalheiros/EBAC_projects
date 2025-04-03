document.addEventListener('DOMContentLoaded', function () {
    const nomeElement = document.querySelector('#nome');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    const url = 'https://api.github.com/users/LeoPalheiros';

    fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .then(function (json) {
            nomeElement.innerText = json.name || "Nome não disponível";
            usernameElement.innerText = `@${json.login}`;
            avatarElement.src = json.avatar_url;
            followingElement.innerText = json.following;
            followersElement.innerText = json.followers;
            reposElement.innerText = json.public_repos;
            linkElement.href = json.html_url;
        })
        .catch(function (error) {
            console.error("Erro ao buscar dados:", error);
        });
});

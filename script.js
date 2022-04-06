
const LinksSocialMedia = {
    github:"Mar0la",
    instagram:'marins1234',
    facebook:"matheus.marins.374",
    twitter:"Marola85813145",
}


function changeSocialMediaLinks() {
    for(let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/marins1234/${LinksSocialMedia[social]} `
    }
}

changeSocialMediaLinks()


function getGitHubProfiledInfos() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        UserName.textContent = data.name
        UserBio.textContent = data.bio
        UserLink.href = data.html_url
        UserPhoto.src = data.avatar_url
        UserLogin.textContent = data.login
    })
}

getGitHubProfiledInfos()
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['.com', '.org', '.us'];

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let l = 0; l < domain.length; l++) {
                let print_domain = pronoun[i] + adj[j] + noun[k] + domain[l];
                console.log(print_domain);
            }
        }
    }
}
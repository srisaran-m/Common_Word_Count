
let text = "javascript is easy and javascript is powerful";

        let words = text.toLowerCase().split(" ");

        let count = {};

        for (let word of words) {
            if (count[word]) {
                count[word]++;
            } else {
                count[word] = 1;
            }
        }

        let sortedwords = Object.entries(count)
            .sort((a, b) => b[1] - a[1]);

        console.log("Top 3 most common words:");

        for (let i = 0; i < 3; i++) {
            console.log(
                sortedwords[i][0] + " : " + sortedwords[i][1]
            );
        }
    

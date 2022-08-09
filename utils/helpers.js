module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
            date
        ).getFullYear()}`;
    },
    format_plural: (word, amount) => {
        if (amount !== 1) {
            return `${word}s`;
        }

        return word;
    },
    // get_url: () => {
        
    //     // if (url === 'dashboard') {
    //     //     return true;
    //     // }
    //     // return url
    //     //     .replace('http://', '')
    //     //     .replace('https://', '')
    //     //     .replace('www.', '')
    //     //     .split('/')[0]
    //     //     .split('?')[0];
    // },
}
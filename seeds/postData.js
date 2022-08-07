const { Post } = require('../models');

const postData = [
    {
        title: "Why is My Excel CONCATENATE Not Working? Here’s How to Fix It",
        post_url: 'https://www.technewstoday.com/excel-concatenate-not-working/',
        user_id: 1
    },
    {
        title: "How to Fix Cable Outlet Not Working? 8 Proven Ways to Fix It",
        post_url: 'https://www.technewstoday.com/cable-outlet-not-working/',
        user_id: 3
    },
    {
        title: "Outlook Rules Not working? Try these 11 Fixes",
        post_url: 'https://www.technewstoday.com/outlook-rules-not-working/',
        user_id: 2
    },
    {
        title: "How to Install DLCs for Your Games on Steam",
        post_url: 'https://www.technewstoday.com/how-to-install-dlc-on-steam/',
        user_id: 1
    },
    {
        title: "Windows + Shift + S Not Working – Why & How to Fix It?",
        post_url: 'https://www.technewstoday.com/windows-shift-s-not-working/',
        user_id: 3
    },
    {
        title: "Best Survival Games on Switch You Should Not Miss",
        post_url: 'https://www.technewstoday.com/survival-game-on-switch/',
        user_id: 1
    },

]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
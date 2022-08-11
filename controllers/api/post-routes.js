//require express.js router
const router = require('express').Router();
//import sequelize connection to database
const sequelize = require('../../config/connection');
//import models
const { Post, User, Vote, Comment } = require('../../models');
//import authorization function
const withAuth = require('../../utils/auth');


//GET api/posts
router.get('/', (req, res) => {
    //access post model and run findAll() method
    Post.findAll({
        attributes: ['id', 'post_content', 'title', 'created_at', [
            sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count'
        ]],
        order: [sequelize.fn('RAND')],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//GET api/posts/1
router.get('/:id', (req, res) => {
    //access post model and run findOne() method
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'post_content', 'title', 'created_at', [
            sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count'
        ]],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


//POST api/posts
router.post('/', withAuth, (req, res) => {
    //access post model and run create() method
    Post.create({
        title: req.body.title,
        post_content: req.body.post_content,
        user_id: req.session.user_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//PUT api/posts/upvote
router.put('/upvote', withAuth, (req, res) => {
    // make sure the session exists first
    if (req.session) {
        // pass session id along with all destructured properties on req.body
        Post.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
            .then(updatedVoteData => res.json(updatedVoteData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    }
});

//PUT api/posts/1
router.put('/:id', withAuth, (req, res) => {
    //access post model and run update() method
    Post.update(
        {
            title: req.body.title
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//DELETE api/posts/1
router.delete('/:id',(req, res) => {
    console.log('id', req.params.id);
    //access post model and run update() method
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


//export routes
module.exports = router;
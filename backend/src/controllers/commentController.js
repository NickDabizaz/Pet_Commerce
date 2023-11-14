
const db = require('../models');

const createComment = async (req, res) => {
    try {
        const { comment_text, user_id, post_id } = req.body;

        // Check if post exists
        const post = await db.Post.findOne({ where: { post_id } });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Get the last comment id and increment it by 1
        const lastComment = await db.Comment.findOne({
            order: [['comment_id', 'DESC']],
            paranoid: false // Include deleted rows
        });
        const comment_id = lastComment ? lastComment.comment_id + 1 : 1;

        // Create the comment
        const comment = await db.Comment.create({
            comment_id,
            comment_text,
            comment_time : new Date(),
            user_id,
            post_id,
        });

        return res.status(201).json(comment);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};


const getCommentsByPostId = async (req, res) => {
        try {
            const { postId } = req.params;
    
            // Check if post exists
            const post = await db.Post.findOne({ where: { post_id: postId } });
            if (!post) {
                return res.status(404).json({ message: 'Post not found' });
            }
    
            // Get the comments for the post
            const comments = await db.Comment.findAll({
                where: { post_id: postId },
                include: [{ model: db.User, attributes: ['name'] }],
                order: [['comment_time', 'ASC']]
            });
    
            // Check if there are any comments
            if (comments.length === 0) {
                return res.status(404).json({ message: 'No comments found for this post' });
            }
    
            // Map through the comments to format the output
            const formattedComments = comments.map(comment => ({
                comment_id: comment.comment_id,
                comment_text: comment.comment_text,
                comment_time: comment.comment_time,
                post_id: comment.post_id,
                user: comment.User.name
            }));
    
            return res.status(200).json(formattedComments);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error' });
        }
    };

  const deleteComment = async (req, res) => {
    try {
      const { commentId } = req.params;
  
      // Check if comment exists
      const comment = await db.Comment.findOne({ where: { comment_id: commentId } });
      if (!comment) {
        return res.status(404).json({ message: `Comment with id ${commentId} not found` });
      }
  
      // Delete the comment
      await comment.destroy();
  
      return res.status(200).json({ message: `Comment with id ${commentId} has been deleted successfully` });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'An error occurred while trying to delete the comment' });
    }
  };

module.exports = {
  createComment,
  getCommentsByPostId,
  deleteComment,
};

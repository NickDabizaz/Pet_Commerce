import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Form,
  Button,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";

const DetailPost = () => {
  const { post_id } = useParams();
  const [post, setPost] = useState(null);
  const [cookies] = useCookies(["user_id"]);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/post/${post_id}`)
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => console.log(error));
  }, [post_id]);

  const onSubmit = (data) => {
    const commentData = {
      comment_text: data.comment,
      user_id: cookies.user_id,
      post_id: post_id,
    };
    axios
      .post("http://localhost:3000/comments", commentData)
      .then((response) => {
        console.log(response.data);
        reset();
        navigate(0)
      })
      .catch((error) => console.log(error));
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.content}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Header>Comments</Card.Header>
            <ListGroup variant="flush">
              {post.Comments.map((comment) => (
                <ListGroup.Item key={comment.comment_id}>
                  <p>{comment.comment_text}</p>
                  <p>By {comment.User.name}</p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="comment">
              <Form.Label>Leave a comment</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your comment"
                {...register("comment")}
              />
            </Form.Group>
            <Button variant="outline-primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailPost;

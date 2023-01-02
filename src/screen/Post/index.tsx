
import { Div, Title, Body, DivPost, Button, Container, Name, City, Company, Comentarios, Teste } from './styles';
import axios from "axios";
import React, { useEffect } from 'react';

const BaseUrl = "https://jsonplaceholder.typicode.com/";


interface post {
  userId: Int16Array,
  id: Int16Array,
  title: String,
  body: String,
}

interface comments {
    postId: Int16Array,
    id: Int16Array,
    name: String,
    email: String,
    body: String,
}

interface user {
    id: Int16Array,
    name: String,
    username: String,
    email: String,
    address: {
      street: String,
      suite: String,
      city: String,
      zipcode: String,
      geo: {
        lat: String,
        lng: String
      }
    },
    phone: String,
    website: String,
    company: {
      name: String,
      catchPhrase: String,
      bs: String
    }
}

export function Post(){

  const [post, setPost] = React.useState<post[]>();
  const [comments, setComments] = React.useState<comments[]>();
  const [user, setUser] = React.useState<user[]>();
  const [logica, setLogica] = React.useState(0);

  async function api(){
    axios.get(`${BaseUrl}posts`).then((response) => {
      setPost(response.data);
    });

    axios.get(`${BaseUrl}users`).then((response) => {
      setUser(response.data);
    });

    setLogica(1);
  }

  async function CarregaComent(id: any){
      axios.get(`${BaseUrl}posts/${id}/comments`).then((response) => {
        setComments(response.data);
       });
      console.log(comments);
      if(!comments){
      
      }
  }

  function Clear(){
    setComments(comments);
    console.log("Depois", comments);
  }


    return (
        <Container>
          {logica === 0 ? <Teste ><Button onClick={api}>Carregar</Button></Teste> : ""}
          {post?.map(((item) => {
            const result = user?.find((user) => {return user.id === item.userId});
            return <Div>
                  <Name>{result?.name}</Name>
                  <Company>{result?.company.name}</Company>
                  <City>{result?.address.city}</City>
                  <Title>{item.title}</Title>
                  <DivPost>
                      <Body>{item.body}</Body>
                  </DivPost>
                  {comments != null ?  comments?.[0].postId === item.id ? '' : <Button onClick={() => CarregaComent(item.id)}>Comentarios</Button> : <Button onClick={() => CarregaComent(item.id)}>Comentarios</Button>}
                  {comments != null ?  comments?.[0].postId === item.id ? comments.map((item) => {return <><Comentarios>{item.body}</Comentarios></>}) : '' : ''}
                  <hr></hr>
                </Div>
          }))}  
        </Container>
      )
}
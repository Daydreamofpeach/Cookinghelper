import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useEffect } from "react"
import { useHistory } from "react-router-dom"

export default function Article() {
  const {id} = useParams()
  const url = 'http://localhost:3000/articles/' + id
  const { data: Article, isPending, error } = useFetch(url)
  const history = useHistory()

  useEffect(() => {
    if (error) {
      history.push('/')
      setTimeout(() => {
        alert(error)
      }, 2000)
    }
  }, [error , history])
  

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {Article && (
        <div> <h1>{Article.title}</h1>
       <h4>Written by {Article.author}</h4> 
      <ul><li>{Article.ingredient}</li>
      <li>{Article.ingredients}</li>
      <li>{Article.ingredients1}</li>
      <li>{Article.ingredients2}</li>
      <li>{Article.ingredients3}</li></ul>
          <p>{Article.method}</p>
          <p>{Article.cookingTime}</p>
          <p>{Article.difficulty}</p>
          <p>{Article.serves}</p>
          
          
      </div>
  )
}
    </div>
  )
}
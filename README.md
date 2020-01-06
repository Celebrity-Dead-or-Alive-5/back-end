API Docs

# '/celeb'

## GET '/celeb'

returns a JSON object structured:
`{
    id,
    name,
    image,
<<<<<<< HEAD
    isDead,
}```
=======
    doa
}`
>>>>>>> 1b0f50c6c2a3de66b2cb386c2fe8a487da554e4d

# '/auth'

## POST '/auth/login'

expects in body 
`{username: string,
    password: string
}`

returns a JWT and a JSON object with
`{
    id,
    username,
    score
}`



## POST '/auth/register'

expects in body 
`{username: string,
    password: string
}`

returns a JWT and a JSON object with
`{
    id,
    username,
    score
}`


# '/auth/user'






//// notes for me
celeb table:
id
name
photo
doa


user table:
id
username
name
password
score

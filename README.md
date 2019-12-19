API Docs

# '/celeb'

## GET '/celeb'

returns a JSON object structured:
`{
    id,
    name,
    image,
    do
}`

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

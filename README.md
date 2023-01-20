<h1>Blogs API</h1>

<p>
  Blogs API is a CRUD API. It is built using Node.js, Express.js and MySQL with Sequelize ORM. MSC architecture (Models, Services, 
  Controllers) was applied in this project.
  
  The project was developed in a docker environment.

  The user is able to: 
  - Create, read, update and delete posts;
  - Create and read categories;
  - Create, read, delete and login users

</p>

<h2> Built With </h2>

<div>
 <p> - NodeJS <p/>
 <p>- Express <p/>
 <p> - MySQL <p/>
 <p> - Docker <p/> 
 <p> - JWT <p/>
 <p> - Conventional commits (extension) <p/>
<div />

<h2>Endpoints</h2>

<h3> Login: </h3>
<hr />

<h3> - POST  </h3>
 
<strong> /login </strong>

<p> Log in </p>

<strong> Parameters:</strong> 
</br>

- body
<img src="./images/loginBody.png"/>

<strong> Response: </strong>

<p> Status: 200 </p>
<img src="./images/createUserReturn.png"/>

<p> Status: 400 </p>
<p>- Some required fields are missing</p>
<p>- Invalid fields</p>

<br />
<br />

<h3> User: </h3>
<hr />

<h3> - POST  </h3>
 
<strong> /user </strong>

<p> Create user </p>

<strong> Parameters:</strong> 
</br>

- body
<img src="./images/createUserBody.png"/>

<strong> Response: </strong>

<p> Status: 201 </p>
<img src="./images/createUserReturn.png"/>

<p> Status: 400 </p>
<p>- DisplayName length must be at least 8 characters long</p>
<p>- Email must be a valid email</p>
<p>- Password length must be at least 6 characters long</p>

<p> Status: 409 </p>
<p> - User already registered</p>

<br />

<h3> - GET  </h3>
 
<strong> /user </strong>

<p> Get all users </p>

<strong> Parameters:</strong> 
</br>

- headers
<p> authorization: "eyJhbGciOiJIUz...." (token) </p> 

<strong> Response: </strong>

<p> Status: 200 </p>
<img src="./images/getUserReturn.png"/>

<p> Status: 401 </p>
<p>- Token not found </p>
<p>- Expired or invalid token </p>

<br />

<strong> /user/:id </strong>

<p> Get user by id </p>

<strong> Parameters:</strong> 
</br>

- headers
<p> authorization: "eyJhbGciOiJIUz...." (token) </p> 

<strong> Response: </strong>

<p> Status: 200 </p>
<img src="./images/getUserByIdReturn.png"/>

<p> Status: 401 </p>
<p>- Token not found </p>
<p>- Expired or invalid token </p>

<p> Status: 404 </p>
<p>- User does not exist </p>

<br />

<h3> - DELETE  </h3>
 
<strong> /user/me </strong>

<p> Delete your user </p>

<strong> Parameters:</strong> 
</br>

- headers
<p> authorization: "eyJhbGciOiJIUz...." (token) </p> 

<strong> Response: </strong>

<p> Status: 204 </p>

<p> Status: 401 </p>
<p>- Token not found </p>
<p>- Expired or invalid token </p>

<br />

<h3> Categories: </h3>
<hr />

<h3> - POST  </h3>
 
<strong> /categories </strong>

<p> Create categories </p>

<strong> Parameters:</strong> 
</br>

- body
<img src="./images/postCategoryBody.png"/>

<strong> Response: </strong>

<p> Status: 201 </p>
<img src="./images/postCategoryReturn.png"/>

<p> Status: 400 </p>
<p>- Name is required </p>

<br />

<h3> - GET  </h3>
 
<strong> /categories </strong>

<p> Get all categories </p>

<strong> Parameters:</strong> 
</br>

- headers
<p> authorization: "eyJhbGciOiJIUz...." (token) </p> 

<strong> Response: </strong>

<p> Status: 200 </p>
<img src="./images/getAllCategoriesReturn.png"/>

<p> Status: 401 </p>
<p>- Token not found </p>
<p>- Expired or invalid token </p>

<br />

<h3> Post: </h3>
<hr />

<h3> - POST  </h3>
 
<strong> /post </strong>

<p> Create post </p>

<strong> Parameters:</strong> 
</br>

- body
<img src="./images/postPostBody.png"/>

<strong> Response: </strong>

<p> Status: 201 </p>
<img src="./images/postPostReturn.png"/>

<p> Status: 400 </p>
<p>- Some required fields are missing</p>
<p>- one or more categoryIds not found </p>

<br />

<h3> - GET  </h3>
 
<strong> /post </strong>

<p> Get all posts </p>

<strong> Parameters:</strong> 
</br>

- headers
<p> authorization: "eyJhbGciOiJIUz...." (token) </p> 

<strong> Response: </strong>

<p> Status: 200 </p>
<img src="./images/getAllPostReturn.png"/>

<p> Status: 401 </p>
<p>- Token not found </p>
<p>- Expired or invalid token </p>

<br />

<strong> /post/:id </strong>

<p> Get post by id </p>

<strong> Parameters:</strong> 
</br>

- headers
<p> authorization: "eyJhbGciOiJIUz...." (token) </p> 

<strong> Response: </strong>

<p> Status: 200 </p>
<img src="./images/getPostById.png"/>

<p> Status: 401 </p>
<p>- Token not found </p>
<p>- Expired or invalid token </p>

<p> Status: 404 </p>
<p>- Post does not exist </p>

<br />

<strong> /post/search?q="term" </strong>

<p> Get post by search term </p>

<strong> Parameters:</strong> 
</br>

- headers
<p> authorization: "eyJhbGciOiJIUz...." (token) </p> 

<strong> Response: </strong>

<p> Status: 200 </p>
<p>- [] (inexistente)</p>
<img src="./images/getAllPostReturn.png"/>

<p> Status: 401 </p>
<p>- Token not found </p>
<p>- Expired or invalid token </p>

<br />

<h3> - UPDATE  </h3>

<strong> /post/:id </strong>
<p> Update a post by id </p>

<strong> Parameters:</strong> 
</br>

- headers
<p> authorization: "eyJhbGciOiJIUz...." (token) </p>

- body
<img src="./images/putBody.png"/>

<strong> Response: </strong>

<p> Status: 200 </p>
<img src="./images/putReturn.png"/>

<p> Status: 400 </p>
<p>- Some required fields are missing</p>

<p> Status: 401 </p>
<p>- Token not found </p>
<p>- Expired or invalid token </p>
<p> - Unauthorized user </p>

<br />

<h3> - DELETE  </h3>
 
<strong> /post/:id </strong>

<p> Delete post by id </p>

<strong> Parameters:</strong> 
</br>

- headers
<p> authorization: "eyJhbGciOiJIUz...." (token) </p> 

<strong> Response: </strong>

<p> Status: 204 </p>

<p> Status: 401 </p>
<p>- Token not found </p>
<p>- Expired or invalid token </p>
<p> - Unauthorized user </p>

<p> Status: 404 </p>
<p>- Post does not exist </p>

<br />

<h2>
  How try the application?
</h2>

<p>
  Using docker (version 1.29 > is required): </br></br>
   1. First run in your terminal <code>docker-compose up -d</code> to up containers. </br>
   2. Then use the command <code>docker exec -it blogs_api bash</code> to acess the container terminal. </br>
   3. After it use  <code>npm install</code> to install all dependences. </br>
   4. Run <code>npx sequelize-cli db:create && npx sequelize-cli db:migrate</code> on container terminal to create db and tables.</br>
   5. Run <code>npm run seed</code> on container terminal to populate the db.</br>
   6. Run <code>npm start</code> on container terminal to start the application.</br>
   7. If you don´t have any client extension to do the requestions download <code>Thunder Client</code> extension on VS Code.</br>
   8. Select the method on thunder client.</br>
   9. Do requisitions on thunder client using the URL shape http://localhost:3000/endpoint.
</p>
<p>
  Make sure that all containers are up and the ports 3000, 3006 and 33060 of your computer are available
<p/>


<br />
<br /> 

<p> Any questions or suggestions? Contact me </p>

<a href="https://www.linkedin.com/in/george-santos-dev" rel="nofollow">
  <img
    height="50px"
    width="50px"
    src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/linkedin/linkedin-original.svg"
    alt="LinkedIn"
  />   
</a>


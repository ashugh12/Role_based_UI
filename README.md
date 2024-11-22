# Role-Based UI

This project demonstrates a **Role-Based Access Control (RBAC)** system with user and role management, dynamic permissions, and a simulated backend using JSON Server. 

---

## 🚀 Project Overview

### 1. User Management  
- View, add, edit, or delete users.  
- Assign roles to users.  
- Manage user status (Active/Inactive).  

### 2. Role Management  
- Define and edit roles.  
- Roles include permissions like **Read**, **Write**, **Delete**, or custom attributes.  

### 3. Dynamic Permissions  
- Assign or modify permissions for roles dynamically.  
- Display permissions in an intuitive, easy-to-modify layout.  

### 4. Custom API Simulation  
- Simulated backend using **JSON Server** for CRUD operations on users and roles.  
- Validates frontend functionality with mocked data.

---

## 🛠️ Setup Instructions

### **Prerequisites**
Ensure you have the following installed on your machine:  
- [Node.js](https://nodejs.org/)  
- [npm](https://www.npmjs.com/)  

---

### **Backend Setup**

1. **Create a Node.js server for JSON Server**:  
   - Create a `server.js` file in your project root with the following code:  
     ```javascript
     const jsonServer = require('json-server');
     const server = jsonServer.create();
     const router = jsonServer.router('db.json'); // Path to your db.json file
     const middlewares = jsonServer.defaults();

     server.use(middlewares);
     server.use(router);

     const PORT = process.env.PORT || 5000;
     server.listen(PORT, () => {
       console.log(`JSON Server is running on port ${PORT}`);
     });
     ```

2. **Create the database file (`db.json`)**:  
   - Add this sample content:  
     ```json
     {
       "users": [
         { "id": 1, "name": "Alice", "role": "Admin", "status": "Active" },
         { "id": 2, "name": "Bob", "role": "User", "status": "Inactive" }
       ],
       "roles": [
         { "id": 1, "name": "Admin", "permissions": ["read", "write", "delete"] },
         { "id": 2, "name": "User", "permissions": ["read"] }
       ]
     }
     ```

3. **Install dependencies**:  
   ```bash
   npm install json-server
   ```

4. **Add a start script in `package.json`**:  
   ```json
   "scripts": {
     "start": "node server.js"
   }
   ```

5. **Run the backend server**:  
   ```bash
   npm start
   ```

---

### **Frontend Setup**

1. **Create a React project**:  
   ```bash
   npx create-react-app rbac-ui
   cd rbac-ui
   ```

2. **Install dependencies**:  
   ```bash
   npm install axios react-router-dom @mui/material @emotion/react @emotion/styled
   ```

3. **Create components**:  
   - **User Components**: `UserList.js`, `UserCard.js`, `UserForm.js`  
   - **Role Components**: `RoleList.js`, `RoleCard.js`, `RoleForm.js`  
   - **Navigation**: `NavBar.js`  

4. **Set API endpoints**:  
   Update API calls in your components to use the deployed backend URLs:  
   ```javascript
   const fetchUsers = async () => {
     try {
       const response = await axios.get('https://role-based-ui.onrender.com/users');
       setUsers(response.data);
     } catch (err) {
       console.error('Fetch Users Error:', err);
     }
   };
   ```

---

## 🌐 Deployment

1. **Build the frontend**:  
   ```bash
   npm run build
   ```

2. **Deploy the frontend using Netlify**:  
   - Deploy the **build folder** via drag-and-drop or connect your GitHub repository.  
   - Access the deployed frontend [here](https://cerulean-stroopwafel-e7d9c6.netlify.app/users).

3. **Backend Deployment**:  
   - JSON Server backend is deployed on Render.  
     - Users API: [https://role-based-ui.onrender.com/users](https://role-based-ui.onrender.com/users)  
     - Roles API: [https://role-based-ui.onrender.com/roles](https://role-based-ui.onrender.com/roles)

---

## 🔗 Live Links
- **Frontend**: [https://cerulean-stroopwafel-e7d9c6.netlify.app/](https://cerulean-stroopwafel-e7d9c6.netlify.app/)  
- **Users API**: [https://role-based-ui.onrender.com/users](https://role-based-ui.onrender.com/users)  
- **Roles API**: [https://role-based-ui.onrender.com/roles](https://role-based-ui.onrender.com/roles)  

---

## 🤝 Contribution
Feel free to fork the project, make changes, and submit a pull request. Suggestions and improvements are always welcome!  

---

## 📄 License
This project is open-source and available under the MIT License.

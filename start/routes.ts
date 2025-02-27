/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const UsersController = () => import('#controllers/users_controller')
const TasksController = () => import('#controllers/tasks_controller')

// user endpoints
router.post('/api/users', [UsersController, 'createUser'])
router.get('/api/users', [UsersController, 'getUsers'])
router.get('/api/users/:id', [UsersController, 'getUser'])
router.put('/api/users/:id', [UsersController, 'updateUser'])
router.delete('/api/users/:id', [UsersController, 'deleteUser'])

// task endpoints
router.get('/api/tasks', [TasksController, 'getTasks'])
router.get('/api/tasks/:id', [TasksController, 'getTask'])
router.post('/api/tasks', [TasksController, 'createTask'])
router.put('/api/tasks/:id', [TasksController, 'updateTask'])
router.delete('/api/tasks/:id', [TasksController, 'deleteTask'])

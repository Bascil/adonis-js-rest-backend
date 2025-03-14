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
const RolesController = () => import('#controllers/roles_controller')

const AuthController = () => import('#controllers/auth_controller')

router
  .group(() => {
    // Public routes (no authentication required)
    router.post('/login', [AuthController, 'login'])
    router.post('/register', [AuthController, 'register'])
  })
  .prefix('/api/auth')
router
  .group(() => {
    router.post('/', [UsersController, 'createUser'])
    router.get('/', [UsersController, 'getUsers'])
    router.get('/:id', [UsersController, 'getUser'])
    router.put('/:id', [UsersController, 'updateUser'])
    router.delete('/:id', [UsersController, 'deleteUser'])
  })
  .prefix('/api/users')

router
  .group(() => {
    router.post('/', [TasksController, 'createTask'])
    router.get('/', [TasksController, 'getTasks'])
    router.get('/:id', [TasksController, 'getTask'])
    router.put('/:id', [TasksController, 'updateTask'])
    router.delete('/:id', [TasksController, 'deleteTask'])
  })
  .prefix('/api/tasks')

router
  .group(() => {
    router.get('/', [RolesController, 'getRoles'])
    router.get('/:id', [RolesController, 'getRole'])
  })
  .prefix('/api/roles')

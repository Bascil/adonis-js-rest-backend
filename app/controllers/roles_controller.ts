import type { HttpContext } from '@adonisjs/core/http'
import Role from '#models/role'
import PaginationTrait from '#traits/pagination_trait'

export default class RolesController extends PaginationTrait {
  public async getRoles({ request, response }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)

    const roles = await Role.query().orderBy('id', 'desc').paginate(page, perPage)
    return response.ok(this.transform(roles.serialize()))
  }

  public async getRole({ params, response }: HttpContext) {
    const id = params.id
    const role = await Role.find(id)
    if (!role) {
      return response.notFound({ message: `role with id ${id} not found` })
    }

    return response.ok(role)
  }
}

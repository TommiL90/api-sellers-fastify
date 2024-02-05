import { CreateCategory } from '@/interfaces/category-interfaces'
import { PrismaCategoryRepository } from '@/repositories/prisma/prisma-category-repository'
import { CategoryService } from '@/services/category-service'
import { makeCreateCategory } from '@/services/factories/make-create-category'
import { makeDeleteCategory } from '@/services/factories/make-delete-category'
import { makeListCategory } from '@/services/factories/make-list-categories'
import { makeRetrieveCategory } from '@/services/factories/make-retrieve-category'
import { makeUpdateCategory } from '@/services/factories/make-update-category'
import { Request, Response } from 'express'

export class CategoryController {
  create = async (req: Request, res: Response) => {
    const data: CreateCategory = req.body
    const repository = new PrismaCategoryRepository()
    const categoryService = new CategoryService(repository)
    // const createCategory = makeCreateCategory()

    // const newCategory = await createCategory(data)

    const newCategory = await categoryService.create(data)

    return res.status(201).json(newCategory)
  }

  findById = async (req: Request, res: Response) => {
    const { id } = req.params

    const retrieveCategory = makeRetrieveCategory()

    const products = await retrieveCategory(id)

    return res.status(200).json(products)
  }

  findAll = async (req: Request, res: Response) => {
    const makeListProducts = makeListCategory()

    const categories = await makeListProducts()

    return res.status(200).json(categories)
  }

  update = async (req: Request, res: Response) => {
    const { id } = req.params

    const updateCategory = makeUpdateCategory()

    const updatedCategory = await updateCategory(id, req.body)

    return res.status(200).json(updatedCategory)
  }

  delete = async (req: Request, res: Response) => {
    const { id } = req.params

    const deleteCategory = makeDeleteCategory()

    await deleteCategory(id)

    return res.status(200).send()
  }
}

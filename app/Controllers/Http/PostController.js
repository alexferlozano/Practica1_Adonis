'use strict'

const Post = use('App/Models/Post')
const { validate } = use('Validator')

class PostController {
  async create({ request, response })
  {
    const rules = {
      titulo: 'required',
      descripcion: 'required',
      autor: 'required',
      edad: 'required',
    }
    const validation = await validate(request.all(), rules)

    if (validation.fails()) {

      return response.status(400).json({ message: 'No se puede crear el post'})
    }
    else
    {
      const { titulo, descripcion, autor, edad }= request.all();
      const post= Post.create({
      titulo,
      descripcion,
      autor,
      edad
    });
    return post;
    }

  };
  store()
  {
    return Post.all();
  };
  async edit( {request, params, response })
  {
    const id=params.id
    const post = await Post.find(id);
    if(!post)
    {
      return response.status(404).json({ message: 'No se encontró el post'})
    }
    post.titulo = request.input('titulo', post.titulo)
    post.descripcion = request.input('descripcion', post.descripcion)
    post.autor = request.input('autor', post.autor)
    post.edad = request.input('edad', post.edad)
    await post.save();
    return post;

  };
  async delete({ params, response  })
  {
    const id=params.id;
    const post = await Post.find(id);
    if(!post)
    {
      return response.status(404).json({ message: 'No se encontró el post'})
    }
    await post.delete();
    return response.status(201).json({ message: 'Se elimino el post correctamente'});

  };
  async show({ params })
  {
    const id=params.id;
    const post = await Post.findOrFail(id);
    return post;
  };
}

module.exports = PostController

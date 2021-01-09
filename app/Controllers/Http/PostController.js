'use strict'

const Post = use('App/Models/Post')

class PostController {
  create({ request })
  {
    const { titulo, autor }= request.all();
    const post= Post.create({
      titulo,
      autor
    });
    return post;
  };
  store()
  {
    return Post.all();
  };
  async edit( {request, params })
  {
    const id=params.id
    const post = await Post.findOrFail(id);
    post.titulo = request.input('titulo', post.titulo)
    post.autor = request.input('autor', post.autor)
    await post.save();
    return post;

  };
  async delete({ params })
  {
    const id=params.id;
    const post = await Post.findOrFail(id);
    await post.delete();
    return post;

  };
  async show({ params })
  {
    const id=params.id;
    const post = await Post.findOrFail(id);
    return post;
  };
}

module.exports = PostController

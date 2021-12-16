//  Comment api calls

import http from '../utils/http'
class CommentService {

  fetchComments = async () => {
    try {
      const response = await http.get('comments');
      if (response.status === 200) {
        const { comment } = response.data;
        return comment.slice(0, 20)
      }
    } catch(error) {
      return error
    }
  }

  addComment = async (credentials) => {
    try {
      const response = await http.post('comments', { comment: { ...credentials }})
      if (response.status === 201) {
        const { comment } = response.data;
        return comment
      }
    } catch(error) {
      return error
    }
  }

}

export default CommentService;


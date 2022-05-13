import axios from 'axios';

const url = "https://unhnsa2022.herokuapp.com/api/posts";

/* eslint-disable no-async-promise-executor */

class PostService {
  // get posts
  static getPosts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map((post) => ({
            ...post,
            title:post.title,
            createdAt: new Date(post.createdAt),
            duration:post.duration,
            eventStatus:post.eventStatus
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }
  //Create post
  static insertPost(title,text,duration,location,eventStatus) {
    return axios.post(url, {
      title,text,duration,location,eventStatus,
    });
  }

  //delete post
  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PostService;
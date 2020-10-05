import axios from 'axios';

export  const api = {
  get: () => axios.get('https://api.github.com/users')
      .then(response => {
        const data = response.data
        const result = data.reduce((acc, currentItem, index) => {
          acc[index] = {
            id:currentItem.id,
            login: currentItem.login,
            user_url: currentItem.html_url,
            avatar_url: currentItem.avatar_url
          };
          return acc;
        },[])
        return result
      })
}

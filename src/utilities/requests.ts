const BASE_URL = 'https://avl-frontend-exam.herokuapp.com'

const requests = {
  fetchFollowers: `${BASE_URL}/api/users/all?page=1&pageSize=10`,
  fetchFollowing: `${BASE_URL}/api/users/friends?page=1&pageSize=10`,
  fetchTags: `${BASE_URL}/api/tags`,
}

export default requests;
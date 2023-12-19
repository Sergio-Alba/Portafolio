export const BASE_URL = '/projects.json'

export const API_URL = {
  PROJECTS: {
    url:`${BASE_URL}` ,
    config:{
      method: 'GET',
      headers:{
        'Content-type': 'application/json',
      },
    }
  }
}